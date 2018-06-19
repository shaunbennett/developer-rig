window['extension-coordinator'] = {
  ExtensionFrame: function(extension) { },
};

const CONFIG_FRAME_HEIGHT = 700;
const DEFAULT_FRAME_HEIGHT = 300;
const DEFAULT_IFRAME_SANDBOX_ATTRIBUTES = [
  'allow-forms',
  'allow-scripts',
  'allow-same-origin',
];
const ExtensionAnchor = {
  Hidden: 'hidden',
  Panel: 'panel',
  Overlay: 'video_overlay',
  Component: 'component',
};
const ExtensionMode = {
  Config: 'config',
  Dashboard: 'dashboard',
  Viewer: 'viewer',
};
const ExtensionPlatform = {
  Mobile: 'mobile',
  Web: 'web',
};
const ExtensionState = {
  Testing: 'Testing',
  HostedTest: 'Assets Uploaded',
  Approved: 'Approved',
  Released: 'Released',
  ReadyForReview: 'Ready For Review',
  InReview: 'In Review',
  PendingAction: 'Pending Action',
  Uploading: 'Uploading',
};
const ExternalExtensionState = {
  Testing: 'testing',
  HostedTest: 'hosted_test',
  Approved: 'approved',
  Released: 'released',
  ReadyForReview: 'ready_for_review',
  InReview: 'in_review',
  PendingAction: 'pending_action',
  Uploading: 'uploading',
};
const ExtensionStateMap = {
  [ExtensionState.Testing]: ExternalExtensionState.Testing,
  [ExtensionState.HostedTest]: ExternalExtensionState.HostedTest,
  [ExtensionState.Approved]: ExternalExtensionState.Approved,
  [ExtensionState.Released]: ExternalExtensionState.Released,
  [ExtensionState.ReadyForReview]: ExternalExtensionState.ReadyForReview,
  [ExtensionState.InReview]: ExternalExtensionState.InReview,
  [ExtensionState.PendingAction]: ExternalExtensionState.PendingAction,
  [ExtensionState.Uploading]: ExternalExtensionState.Uploading,
};
const SupervisorAction = {
  SupervisorReady: 'supervisor-ready',
  SupervisorInit: 'supervisor-init',
};
const supervisor = {
  supervisorURL: "supervisor.html", // TODO
};

window['extension-coordinator'].ExtensionFrame = function(params) {
  const extension = Object.assign(params.extension, {
    panelHeight: params.extension.views.panel && params.extension.views.panel.height,
    isMonetized: params.extension.sku && params.extension.vendorCode,
    getViewerUrlForContext: function(platform, mode, anchor) {
      let viewerUrl = '';
      switch (platform) {
        case ExtensionPlatform.Web:
          viewerUrl = this.getViewerUrlForWeb(mode, anchor);
          break;
        case ExtensionPlatform.Mobile:
          viewerUrl = this.getViewerUrlForMobile(mode);
          break;
      }
      return viewerUrl || '';
    },
    getViewerUrlForWeb: function(mode, anchor) {
      const { views } = extension;
      switch (mode) {
        case ExtensionMode.Config:
          return views.config && views.config.viewerUrl;
        case ExtensionMode.Dashboard:
          return views.liveConfig && views.liveConfig.viewerUrl;
        case ExtensionMode.Viewer:
          return this.getViewerUrlForAnchor(anchor);
      }
    },
    getViewerUrlForMobile: function(mode) {
      return extension.views.mobile && extension.views.mobile.viewerUrl;
    },
    getViewerUrlForAnchor: function(anchor) {
      const { views } = extension;
      switch (anchor) {
        case ExtensionAnchor.Component:
          return views.component && views.component.viewerUrl;
        case ExtensionAnchor.Hidden:
          return views.hidden && views.hidden.viewerUrl;
        case ExtensionAnchor.Overlay:
          return views.videoOverlay && views.videoOverlay.viewerUrl;
        case ExtensionAnchor.Panel:
          return views.panel && views.panel.viewerUrl;
      }
    },
  });
  params = Object.assign(params, {
    platform: ExtensionPlatform.Web,
    mode: params.platform === ExtensionPlatform.Mobile ? ExtensionMode.Viewer : params.mode,
  });
  const extensionOptions = {
    anchor: params.anchor,
    language: 'en',
    mode: params.mode,
    state: ExtensionStateMap[extension.state],
    platform: params.platform,
  };
  const iframe = createSupervisorIFrame(params.iframeClassName, params.anchor, extensionOptions);
  setupListeners();
  params.parentElement.appendChild(iframe);

  function createSupervisorIFrame(className, anchor, options) {
    const { mode } = params;
    const iframe = document.createElement('iframe');

    iframe.setAttribute('class', className);
    iframe.setAttribute('sandbox', DEFAULT_IFRAME_SANDBOX_ATTRIBUTES.join(' '));
    iframe.setAttribute('frameBorder', '0');
    iframe.setAttribute('scrolling', 'no');
    iframe.setAttribute('src', supervisor.supervisorURL);

    switch (mode) {
      case ExtensionMode.Viewer:
        applyAnchorAttributes(iframe, anchor);
        applyViewerSandboxAttrs(iframe);
        break;
      case ExtensionMode.Dashboard:
        const panelHeight = extension.panelHeight || DEFAULT_FRAME_HEIGHT;
        iframe.setAttribute('style', `height: ${panelHeight}px;`);
        applyConfigSandboxAttrs(iframe);
        break;
      case ExtensionMode.Config:
        iframe.setAttribute('style', `width: 100%; height: ${CONFIG_FRAME_HEIGHT}px;`);
        applyConfigSandboxAttrs(iframe);
        break;
    }

    iframe.style.display = 'none';
    return iframe;

    function applyAnchorAttributes(iframe, anchor) {
      iframe.setAttribute('style', "height: 300px;");
    }

    function applyViewerSandboxAttrs(iframe) {
      iframe.setAttribute('sandbox', createViewerSandboxAttrs());
    }

    function applyConfigSandboxAttrs(iframe) {
      iframe.setAttribute('sandbox', getConfigWhitelist());

      function getConfigWhitelist() {
        return DEFAULT_IFRAME_SANDBOX_ATTRIBUTES.join(' ');
      }
    }
  }

  function setupListeners() {
    iframe.ownerDocument.defaultView.addEventListener('message', handleMessage);

    function handleMessage(event) {
      console.log(event.origin, event.data);
      const { source, data } = event;
      if (data.action === SupervisorAction.SupervisorReady) {
        initSupervisedExtension();
      } else if (data.action === 'on-authorized') {
        iframe.style.removeProperty('display');
      }

      function initSupervisedExtension() {
        const { anchor, mode } = params;
        const { platform } = extensionOptions;
        const extensionUrl = extension.getViewerUrlForContext(platform, mode, anchor);
        let sandboxWhitelist;
        switch (mode) {
          case ExtensionMode.Viewer:
            sandboxWhitelist = createViewerSandboxAttrs();
            break;
          case ExtensionMode.Dashboard:
            sandboxWhitelist = getConfigWhitelist();
            break;
          case ExtensionMode.Config:
            sandboxWhitelist = getConfigWhitelist();
            break;
        }
        const iframeAttrs = getAnchorAttributes();
        iframeAttrs.sandbox = sandboxWhitelist || DEFAULT_IFRAME_SANDBOX_ATTRIBUTES.join(' ');
        const supervisorOptions = {
          extensionURL: appendQueryParams(extensionUrl, extensionOptions),
          hostOrigin: window.location.origin,
          iframeAttrs,
        };
        sendSupervisorInit(supervisorOptions);

        function appendQueryParams(url, options) {
          let link = document.createElement('a');
          link.href = url;
          const query = link.search.slice(1);
          const originalParams = query.split('&').filter((str) => str.length > 0);
          const urlWithoutQuery = originalParams.length > 0 ? url.slice(0, url.length - query.length - 1) : url;
          const keys = Object.keys(options);
          const params = keys.reduce((fields, key) => {
            const value = options[key];
            if (value) {
              fields.push(`${encodeURIComponent(key)}=${encodeURIComponent(value.toString())}`);
            }

            return fields;
          }, originalParams);
          return params.length > 0 ? `${urlWithoutQuery}?${params.join('&')}` : url;
        }

        function sendSupervisorInit(options) {
          sendMessage({
            action: SupervisorAction.SupervisorInit,
            options,
          });
        }

        function sendMessage(message) {
          iframe && iframe.contentWindow && iframe.contentWindow.postMessage(message, iframe.baseURI);
        }
      }
    }
  }

  function createViewerSandboxAttrs() {
    return DEFAULT_IFRAME_SANDBOX_ATTRIBUTES.join(' ');
  }

  function getAnchorAttributes() {
    const iframeAttrs = {};
    switch (params.anchor) {
      case ExtensionAnchor.Panel:
        if (extensionOptions.platform === ExtensionPlatform.Mobile) {
          iframeAttrs.style = 'height: 100%;';
          break;
        }
        const iframeHeight = getExtensionHeight();
        iframeAttrs.style = `height: ${iframeHeight}px;`;
        break;
      case ExtensionAnchor.Overlay:
      case ExtensionAnchor.Component:
      case ExtensionAnchor.Hidden:
        return getDefaultAnchorAttributes();
    }

    return iframeAttrs;

    function getDefaultAnchorAttributes() {
      const result = {};
      if (params.mode === ExtensionMode.Viewer && extensionOptions.platform !== ExtensionPlatform.Mobile) {
        result.scrolling = 'no';
      }
      return result;
    }

    function getExtensionHeight() {
      const { mode } = params;
      const panelHeight = extension.panelHeight;
      if (mode === ExtensionMode.Config) {
        return CONFIG_FRAME_HEIGHT;
      } else if (panelHeight) {
        return Number(panelHeight);
      }
      return DEFAULT_FRAME_HEIGHT;
    }
  }
};
