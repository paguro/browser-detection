import $ from '../helpers';
import { detectOS } from '../os';
import { LAYOUT_BLINK, detectLayout } from '../layout';

export function detectChromiumVersion() {
  if ($.hasFeature('CompressionStream')) {
    return 80;
  }

  if ($.hasFeature('GeolocationCoordinates')) {
    return 79;
  }

  if ($.hasFeature('RTCDataChannel.prototype.maxPacketLifeTime')) {
    return 78;
  }

  if ($.hasFeature('FormDataEvent')) {
    return 77;
  }

  if ($.hasFeature('HTMLDocument.prototype.onsecuritypolicyviolation')) {
    return 76;
  }

  if ($.hasFeature('HTMLVideoElement.prototype.playsInline')) {
    return 75;
  }

  if ($.hasFeature('TextEncoder.prototype.encodeInto')) {
    return 74;
  }

  if ($.hasFeature('RTCRtpReceiver.prototype.getParameters')) {
    return 73;
  }

  if ($.hasFeature('Intl.ListFormat')) {
    return 72;
  }

  if ($.hasFeature('ShadowRoot.prototype.fullscreenElement')) {
    return 71;
  }

  if ($.hasFeature('MediaStreamTrack.prototype.contentHint')) {
    return 70;
  }

  if ($.hasFeature('webkitRTCPeerConnection.prototype.getTransceivers')) {
    return 69;
  }

  if ($.hasFeature('CustomElementRegistry.prototype.upgrade')) {
    return 68;
  }

  if ($.hasFeature('DataView.prototype.setBigUint64')) {
    return 67;
  }

  if ($.hasFeature('AbortController')) {
    return 66;
  }

  if ($.hasFeature('PerformanceObserver.prototype.takeRecords')) {
    return 65;
  }

  if ($.hasFeature('Document.prototype.alinkColor')) {
    return 64;
  }

  if ($.hasFeature('HTMLFrameSetElement.prototype.onbeforeprint')) {
    return 63;
  }

  if ($.hasFeature('HTMLDataElement')) {
    return 62;
  }

  if ($.hasFeature('SVGAnimationElement.prototype.getAttributeNames')) {
    return 61;
  }

  if ($.hasFeature('BroadcastChannel.prototype.onmessageerror')) {
    return 60;
  }

  if ($.hasFeature('ImageCapture.prototype.getPhotoCapabilities')) {
    return 59;
  }

  if ($.hasFeature('AudioContext.prototype.baseLatency')) {
    return 58;
  }

  if ($.hasFeature('AudioContext.prototype.getOutputTimestamp')) {
    return 57;
  }

  if ($.hasFeature('BaseAudioContext.prototype.createConstantSource')) {
    return 56;
  }

  if ($.hasFeature('document.body.onauxclick')) {
    return 55;
  }

  if ($.hasFeature('Attr.prototype.getRootNode')) {
    return 54;
  }

  if ($.hasFeature('Element.prototype.attachShadow')) {
    return 53;
  }

  if ($.hasFeature('AudioListener.prototype.forwardX')) {
    return 52;
  }

  if ($.hasFeature('CanvasCaptureMediaStreamTrack')) {
    return 51;
  }

  if ($.hasFeature('DOMTokenList.prototype.value')) {
    return 50;
  }

  if ($.hasFeature('URLSearchParams.prototype.toString')) {
    return 49;
  }

  if ($.hasFeature('webkitIDBIndex.prototype.getAll')) {
    return 48;
  }

  if ($.hasFeature('CSSNamespaceRule')) {
    return 47;
  }

  if ($.hasFeature('Performance.prototype.onresourcetimingbufferfull')) {
    return 46;
  }

  if ($.hasFeature('ServiceWorkerContainer.prototype.getRegistrations')) {
    return 45;
  }

  if ($.hasFeature('URIError.stackTraceLimit')) {
    return 44;
  }

  if ($.hasFeature('AnimationEvent')) {
    return 43;
  }

  if ($.hasFeature('AudioContext.prototype.close')) {
    return 42;
  }

  if ($.hasFeature('AudioContext.prototype.resume')) {
    return 41;
  }

  if ($.hasFeature('HTMLButtonElement.prototype.reportValidity')) {
    return 40;
  }
}

export function detectChromium() {
  var browser = 'Chromium';
  var browserVersion;
  var layout = detectLayout();
  var os = detectOS();

  if ([LAYOUT_BLINK].indexOf(layout) === -1) {
    return;
  }

  // TODO: It's quite ok for now, but maybe we want to improve this check
  if (!$.hasFeature('chrome')) {
    return;
  }

  browserVersion = detectChromiumVersion();

  if (!browserVersion) {
    return;
  }

  return Object.assign(os, {
    browser: browser,
    browserVersion: browserVersion,
    layout: layout,
    layoutVersion: undefined
  });
}
