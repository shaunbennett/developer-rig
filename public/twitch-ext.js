(function(ext) {
  var twitch = window.Twitch = window.Twitch || {};
  twitch.ext = Object.assign(twitch.ext || {}, ext);
})(function() {
  let authCallback, authData;
  let context, contextChangedFields;
  let isVisible, visibilityCallback;
  let positionCallback;
  let listeners = {};
  let webSocket;

  window.addEventListener("message", event => {
    log("on-message", event.origin, event.data && event.data.action);
    if (event.data && event.data.action === "twitch-ext-rig-authorize-response") {
      webSocket = new WebSocket("wss://localhost.rig.twitch.tv:3003");
      webSocket.addEventListener('open', function(event) {
        console.log('web socket open');
      });
      webSocket.addEventListener('message', function(event) {
        console.log('pubsub message:', event.data);
        let message = JSON.parse(event.data);
        if (message.type === 'MESSAGE') {
          const [channelId, clientId, target] = message.data.topic.split('.').pop().split('-');
          // TODO:  validate
          if (channelId && clientId) {
            const targetListeners = listeners[target];
            if (targetListeners) {
              message = JSON.parse(message.data.message);
              targetListeners.forEach(fn => {
                fn(target, message.content_type, message.content[0]);
              });
            }
          }
        }
      });
      authData = event.data.response;
      authCallback(authData);
      window.parent.postMessage({ action: 'on-authorized' }, '*');
    }
  });

  return {
    version: "1.12.1",
    onAuthorized: fn => {
      log('onAuthorized', fn);
      authCallback = fn;
      if (authData) {
        log('received auth data:', authData);
        authCallback(authData);
      } else {
        log('sending twitch-ext-rig-authorize');
        window.parent.parent.parent.postMessage({ action: "twitch-ext-rig-authorize" }, '*');
      }
    },
    onError: fn => {
      log('onError', fn);
      errCallback = fn;
    },
    onContext: fn => {
      log('onContext', fn);
      contextCallback = fn;
      context && contextCallback(context, contextChangedFields);
      setTimeout(() => {
        contextCallback({ "mode": "viewer", "language": "en", "theme": "light", "game": "", "playbackMode": "video" },
          ["mode", "language", "theme", "game", "playbackMode"]);
      });
    },
    onVisibilityChanged: fn => {
      log('onVisibilityChanged', fn);
      visibilityCallback = fn;
      isVisible || visibilityCallback(false, null);
    },
    onPositionChange: fn => {
      log('onPositionChange', fn);
      positionCallback = fn;
    },
    listen: (target, callback) => {
      log('listen', target, callback);
      let targetListeners = listeners[target];
      if (!targetListeners) {
        listeners[target] = [callback];
      } else if (!~targetListeners.indexOf(callback)) {
        targetListeners.push(callback);
      }
    },
    actions: {
      followChannel: channelName => { }, // TODO
      onFollow: callback => { }, // TODO
      requestIdShare: () => { }, // TODO
    },
    purchases: {
      beginPurchase: null, // TODO
      onReloadEntitlements: null, // TODO
      getPrices: null, // TODO
    },
    bits: null, // TODO
    rig: {
      log: (message, ...optionalParams) => {
        window.parent.postMessage({
          action: 'twitch-ext-rig-log',
          messages: [message, ...optionalParams],
        }, '*');
      }
    },
  };

  function log(...args) {
    window.logId = window.logId || parseInt(99999 * Math.random());
    args = args.map(arg => {
      return arg instanceof Function ? "<function>" : JSON.stringify(arg);
    });
    console.log(window.logId, ...args);
  }
}());
