let extensionFrameAPI, parameters;
window.addEventListener('message', proxyIframeEvent);

function proxyIframeEvent(event) {
  const data = event.data;
  switch (data.action) {
    case 'extension-frame-init':
      const ExtensionFrame = window['extension-coordinator'].ExtensionFrame;
      parameters = event.data.extension;
      console.log('parameters:', JSON.stringify(parameters));
      parameters.parentElement = document.getElementById('extension-frame');
      parameters.dobbin = { trackEvent: () => { } };
      extensionFrameAPI = new ExtensionFrame(parameters);
      break;
    case 'extension-frame-authorize':
      console.log('got extension-frame-authorize');
      event.source.postMessage({
        action: "extension-frame-authorize-response",
        response: {
          channelId: parameters.extension.channelId,
          clientId: parameters.extension.clientId,
          token: parameters.extension.token,
          userId: JSON.parse(atob(parameters.extension.token.split('.')[1])).opaque_user_id,
        },
      }, event.origin);
      break;
    case 'extension-frame-pubsub':
      const { channelId, target, contentType, message } = e.data;
      sendToService(`extensions/message/${channelId}`, { targets: [target], content_type: contentType, message }, () => {
        console.log('sent to pubsub');
      });
      break;
    case 'twitch-ext-rig-log':
      window.parent.postMessage(data, '*');
      break;
    default:
      break;
  }
}

function sendToService(endpoint, data, callback) {
  var url = 'https://localhost.rig.twitch.tv:3000/' + endpoint;
  var request = new XMLHttpRequest();
  request.addEventListener("load", function() {
    console.log(endpoint, "response:", this.responseText);
    var response = JSON.parse(this.responseText);
    callback && callback(response);
  });
  request.addEventListener("error", function() { console.log(endpoint, 'error:', this); });
  request.open(data ? "POST" : "GET", url + ((/\?/).test(url) ? "&" : "?") + (new Date()).getTime());
  if (data) {
    request.setRequestHeader("Accept", "application/json");
    request.setRequestHeader("Content-Type", "application/json");
  }
  request.send(JSON.stringify(data));
}
