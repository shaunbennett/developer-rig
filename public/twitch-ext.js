(function(ext) {
  var twitch = window.Twitch = window.Twitch || {};
  twitch.ext = Object.assign(twitch.ext || {}, ext);
})(function() {
  let authCallback, authData;
  let context, contextChangedFields;
  let isVisible, visibilityCallback;
  let positionCallback;
  let listeners = {};

  window.addEventListener("message", event => {
    log("on-message", event.origin, event.data && event.data.action);
    if(event.data && event.data.action === "twitch-ext-rig-authorize-response") {
      authData = event.data.response;
      authCallback(authData);
    }
  });

  return {
    version: "1.12.1",
    onAuthorized: fn => {
      log('onAuthorized', fn);
      authCallback = fn;
      if(authData) {
        log('received auth data:', authData);
        authCallback(authData);
      } else {
        log('sending twitch-ext-rig-authorize');
        window.parent.parent.parent.postMessage({ action: "twitch-ext-rig-authorize" }, '*');
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
