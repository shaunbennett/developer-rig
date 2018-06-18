const MAX_HISTORY_SIZE = 500;

window.rig = {};
window.rig.history = [];
window.rig.log = (log, frame) => {
  if (!frame) {
    frame = 'window';
  }

  window.rig.history.push({
    log: log,
    frame: frame
  });
  window.rig.history = window.rig.history.slice(-MAX_HISTORY_SIZE);
  window.rig.update(log, frame);
}

window.addEventListener('message', e => {
  if (e.data.action === 'twitch-ext-rig-log') {
    const frames = document.getElementsByClassName('rig-frame');
    let frame;
    for (let i = 0; i < frames.length; i++) {
      if (frames[i].contentWindow === e.source) {
        frame = frames[i];
        break;
      }
    }
    if (frame) {
      const frameId = frame.title;
      e.data.messages.forEach(message => {
        if (message instanceof Object) {
          message = JSON.stringify(message);
        }
        window.rig.log(message, frameId);
      });
    } else {
      console.log('message received from unknown source');
    }
  } else if(e.data.action === 'twitch-ext-rig-authorize') {
    console.log('got twitch-ext-rig-authorize');
    sendToService('authorize', null, response => {
      console.log("authorize response:", JSON.stringify(response));
      e.source.postMessage({ action: "twitch-ext-rig-authorize-response", response }, e.origin);
    });
  } else if (e.data.action === 'twitch-ext-rig-pubsub') {
    const {target, contentType, message} = e.data;
    sendToService('pubsub', {target, contentType, message}, () => {
      console.log('sent to pubsub');
    });
  }
});
