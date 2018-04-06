const { ExtensionAnchor } = window['extension-coordinator'];

const extensionTypes = {};
extensionTypes[ExtensionAnchor.Overlay] = "Overlay";
extensionTypes[ExtensionAnchor.Panel] = "Panel";

const reverseExtensionTypes = {};
for (const key in extensionTypes) {
  if (extensionTypes.hasOwnProperty(key)) {
    reverseExtensionTypes[extensionTypes[key]] = key;
  }
}

export const ExtensionAnchors = Object.freeze(extensionTypes);
export const ReverseExtensionAnchors = Object.freeze(reverseExtensionTypes);
export const DEFAULT_EXTENSION_TYPE = ExtensionAnchor.Overlay;
