import $ from '../helpers';
import { detectOS } from '../os';
import { LAYOUT_BLINK, detectLayout } from '../layout';

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

  if ($.hasFeature('CompressionStream')) {
    browserVersion = 80;
  } else if ($.hasFeature('GeolocationCoordinates')) {
    browserVersion = 79;
  } else if ($.hasFeature('ReadableStreamDefaultReader')) {
    browserVersion = 78;
  } else if ($.hasFeature('FormDataEvent')) {
    browserVersion = 77;
  } else if ($.hasFeature('Blob.prototype.arrayBuffer')) {
    browserVersion = 76;
  } else if ($.hasFeature('RTCRtpReceiver.prototype.rtcpTransport')) {
    browserVersion = 75;
  } else if ($.hasFeature('TextEncoder.prototype.encodeInto')) {
    browserVersion = 74;
  } else if ($.hasFeature('MediaSession')) {
    browserVersion = 73;
  } else if ($.hasFeature('Intl.ListFormat')) {
    browserVersion = 72;
  } else if ($.hasFeature('ShadowRoot.prototype.fullscreenElement')) {
    browserVersion = 71;
  } else if ($.hasFeature('MediaStreamTrack.prototype.contentHint')) {
    browserVersion = 70;
  } else if (
    $.hasFeature('webkitRTCPeerConnection.prototype.getTransceivers')
  ) {
    browserVersion = 69;
  } else if ($.hasFeature('CustomElementRegistry.prototype.upgrade')) {
    browserVersion = 68;
  } else if ($.hasFeature('DataView.prototype.setBigUint64')) {
    browserVersion = 67;
  } else if ($.hasFeature('AbortController')) {
    browserVersion = 66;
  } else if ($.hasFeature('PerformanceObserver.prototype.takeRecords')) {
    browserVersion = 65;
  } else if ($.hasFeature('Document.prototype.alinkColor')) {
    browserVersion = 64;
  } else if ($.hasFeature('HTMLFrameSetElement.prototype.onbeforeprint')) {
    browserVersion = 63;
  } else if ($.hasFeature('HTMLDataElement')) {
    browserVersion = 62;
  } else if ($.hasFeature('SVGAnimationElement.prototype.getAttributeNames')) {
    browserVersion = 61;
  } else if ($.hasFeature('BroadcastChannel.prototype.onmessageerror')) {
    browserVersion = 60;
  } else if ($.hasFeature('ImageCapture.prototype.getPhotoCapabilities')) {
    browserVersion = 59;
  } else if ($.hasFeature('AudioContext.prototype.baseLatency')) {
    browserVersion = 58;
  } else if ($.hasFeature('AudioContext.prototype.getOutputTimestamp')) {
    browserVersion = 57;
  } else if ($.hasFeature('BaseAudioContext.prototype.createConstantSource')) {
    browserVersion = 56;
  } else if ($.hasFeature('document.body.onauxclick')) {
    browserVersion = 55;
  } else if ($.hasFeature('Attr.prototype.getRootNode')) {
    browserVersion = 54;
  } else if ($.hasFeature('Element.prototype.attachShadow')) {
    browserVersion = 53;
  } else if ($.hasFeature('AudioListener.prototype.forwardX')) {
    browserVersion = 52;
  } else if ($.hasFeature('CanvasCaptureMediaStreamTrack')) {
    browserVersion = 51;
  } else if ($.hasFeature('DOMTokenList.prototype.value')) {
    browserVersion = 50;
  } else if ($.hasFeature('URLSearchParams.prototype.toString')) {
    browserVersion = 49;
  } else if ($.hasFeature('webkitIDBIndex.prototype.getAll')) {
    browserVersion = 48;
  } else if ($.hasFeature('CSSNamespaceRule')) {
    browserVersion = 47;
  } else if ($.hasFeature('Performance.prototype.onresourcetimingbufferfull')) {
    browserVersion = 46;
  } else if (
    $.hasFeature('ServiceWorkerContainer.prototype.getRegistrations')
  ) {
    browserVersion = 45;
  } else if ($.hasFeature('URIError.stackTraceLimit')) {
    browserVersion = 44;
  } else if ($.hasFeature('AnimationEvent')) {
    browserVersion = 43;
  } else if ($.hasFeature('AudioContext.prototype.close')) {
    browserVersion = 42;
  } else if ($.hasFeature('AudioContext.prototype.resume')) {
    browserVersion = 41;
  } else if ($.hasFeature('HTMLButtonElement.prototype.reportValidity')) {
    browserVersion = 40;
  } else {
    return;
  }

  return Object.assign(os, {
    browser: browser,
    browserVersion: browserVersion,
    layout: layout,
    layoutVersion: undefined
  });
}
