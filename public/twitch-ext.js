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
    if (event.data && event.data.action === "extension-frame-authorize-response") {
      webSocket = new WebSocket("wss://localhost.rig.twitch.tv:3003");
      webSocket.addEventListener('open', function(event) {
        console.log('web socket open');
      });
      webSocket.addEventListener('message', function(event) {
        console.log('pubsub message:', event.data);
        let message = JSON.parse(event.data);
        if (message.type === 'MESSAGE') {
          const [channelId, clientId, target] = message.data.topic.split('.').pop().split('-');
          if (authData.channelId === channelId && authData.clientId === clientId) {
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
      authData = Object.assign({}, event.data.response);
      log('received auth data:', authData);
      authCallback(authData);
    }
  });

  return {
    version: "1.12.1",
    onAuthorized: fn => {
      log('onAuthorized', fn);
      authCallback = fn;
      if (authData) {
        log('started with auth data:', authData);
        authCallback(authData);
      } else {
        log('sending extension-frame-authorize');
        window.parent.postMessage({ action: "extension-frame-authorize" }, '*');
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
    send: (target, contentType, message) => {
      log('send', target, contentType, message);
      window.parent.parent.postMessage({ action: "extension-frame-pubsub", channelId: authData.channelId, target, contentType, message }, '*');
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
    unlisten: (target, callback) => {
      let targetListeners = listeners[target];
      if (!targetListeners) {
        return;
      }
      let index = targetListeners.indexOf(callback);
      if (~index) {
        if (targetListeners.length === 1) {
          delete listeners[target];
        } else {
          targetListeners.splice(index, 1);
        }
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
        window.parent.parent.postMessage({
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
