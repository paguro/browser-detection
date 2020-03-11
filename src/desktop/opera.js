import $ from '../helpers';
import { detectOS } from '../os';
import {
  LAYOUT_BLINK,
  LAYOUT_WEBKIT,
  LAYOUT_PRESTO,
  detectLayout
} from '../layout';

// References
// - https://it.wikipedia.org/wiki/Opera_(browser)#Cronologia_delle_versioni
// - Opera version history:
//      - 1-12.18 https://help.opera.com/en/operas-archived-history/
//      - =>15  https://help.opera.com/en/opera-version-history/
// - Legacy features http://www.howtocreate.co.uk/operaStuff/operaObject.html
// - Opera Objects http://www.howtocreate.co.uk/operaStuff/operaObject.html
// Download Opera form here: http://get.opera.com/ftp/pub/opera/desktop/

export function detectOpera() {
  var appVersion = $.getFeature('navigator.appVersion');

  var browser = 'Opera';
  var browserVersion;
  var layout = detectLayout();
  var os = detectOS();

  // Allowed layouts
  if ([LAYOUT_BLINK, LAYOUT_WEBKIT, LAYOUT_PRESTO].indexOf(layout) === -1) {
    return;
  }

  var isLegacyOpera =
    $.hasFeature('opera') &&
    appVersion.match(/Opera.*Presto.*Version\/([\d+.]+)/);

  // Blink or WebKit-based Opera
  var isOpera = appVersion.match(/Opera|OPR\//);

  if (!isLegacyOpera && !isOpera) {
    return;
  }

  if ($.hasFeature('HTMLVideoElement.getVideoPlaybackQuality')) {
    browserVersion = 67;
  } else if ($.hasFeature('HTMLScriptElement.prototype.onanimationend')) {
    browserVersion = 66;
  } else if ($.hasFeature('CSS.registerProperty')) {
    browserVersion = 65;
  } else if ($.hasFeature('FormDataEvent.prototype.formData')) {
    browserVersion = 64;
  } else if ($.hasFeature('IDBTransaction.prototype.commit')) {
    browserVersion = 63;
  } else if ($.hasFeature('Document.prototype.featurePolicy')) {
    browserVersion = 62;
  } else if ($.hasFeature('ShadowRoot.prototype.adoptedStyleSheets')) {
    browserVersion = 60;
  } else if ($.hasFeature('Element.prototype.requestFullscreen')) {
    browserVersion = 58;
  } else if (
    $.hasFeature('webkitRTCPeerConnection.prototype.currentLocalDescription')
  ) {
    browserVersion = 57;
  } else if ($.hasFeature('OffscreenCanvas.prototype.convertToBlob')) {
    browserVersion = 56;
  } else if ($.hasFeature('CustomElementRegistry.prototype.upgrade')) {
    browserVersion = 55;
  } else if ($.hasFeature('InputDeviceInfo.prototype.getCapabilities')) {
    browserVersion = 54;
  } else if ($.hasFeature('AbortController')) {
    browserVersion = 53;
  } else if ($.hasFeature('PerformanceServerTiming.prototype.name')) {
    browserVersion = 52;
  } else if ($.hasFeature('Request.prototype.cache')) {
    browserVersion = 51;
  } else if ($.hasFeature('OverconstrainedError.prototype.constraint')) {
    browserVersion = 50;
  } else if ($.hasFeature('HTMLDataElement')) {
    browserVersion = 49;
  } else if ($.hasFeature('DOMMatrix')) {
    browserVersion = 48;
  } else if ($.hasFeature('MessagePort.prototype.onmessageerror')) {
    browserVersion = 47;
  } else if ($.hasFeature('ImageCapture.prototype.takePhoto')) {
    browserVersion = 46;
  } else if ($.hasFeature('AudioContext.prototype.baseLatency')) {
    browserVersion = 45;
  } else if ($.hasFeature('AudioContext.prototype.getOutputTimestamp')) {
    browserVersion = 44;
  } else if ($.hasFeature('BaseAudioContext.prototype.createConstantSource')) {
    browserVersion = 43;
  } else if ($.hasFeature('MediaKeySession.prototype.onmessage')) {
    browserVersion = 42;
  } else if ($.hasFeature('BroadcastChannel.prototype.close')) {
    browserVersion = 41;
  } else if ($.hasFeature('Element.prototype.attachShadow')) {
    browserVersion = 40;
  } else if ($.hasFeature('AudioListener.prototype.forwardX')) {
    browserVersion = 39;
  } else if ($.hasFeature('Node.prototype.isConnected')) {
    browserVersion = 38;
  } else if ($.hasFeature('DOMTokenList.prototype.value')) {
    browserVersion = 37;
  } else {
    return;
  }

  return {
    browser: browser,
    browserVersion: browserVersion,
    layout: layout,
    layoutVersion: undefined,
    os: os,
    osVersion: undefined
  };
}
