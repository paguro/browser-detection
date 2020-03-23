import $ from '../helpers';
import { detectOS } from '../os';
import { LAYOUT_GECKO, detectLayout } from '../layout';

export function detectFirefoxVersion() {
  if ($.hasFeature('ServiceWorkerRegistration.prototype.active')) {
    return 74;
  } else if ($.hasStyle('overscroll-behavior-block')) {
    return 73;
  } else if ($.hasFeature('FormDataEvent')) {
    return 72;
  } else if ($.hasFeature('MathMLElement')) {
    return 71;
  } else if ($.hasFeature('AudioContext.prototype.baseLatency')) {
    return 70;
  } else if ($.hasFeature('Blob.prototype.arrayBuffer')) {
    return 69;
  } else if (
    $.hasFeature('AudioContext.prototype.createMediaStreamTrackSource')
  ) {
    return 68;
  } else if ($.hasFeature('RTCIceCandidate.prototype.usernameFragment')) {
    return 67;
  } else if ($.hasFeature('HTMLSlotElement.prototype.assignedElements')) {
    return 66;
  } else if ($.hasFeature('HTMLMarqueeElement')) {
    return 65;
  } else if ($.hasFeature('Document.prototype.exitFullscreen')) {
    return 64;
  } else if ($.hasFeature('Animation.prototype.effect')) {
    return 63;
  } else if ($.hasFeature('DOMPointReadOnly.prototype.toJSON')) {
    return 62;
  } else if ($.hasFeature('String.prototype.trimStart')) {
    return 61;
  } else if ($.hasFeature('Animation.prototype.updatePlaybackRate')) {
    return 60;
  } else if ($.hasFeature('Animation.prototype.pending')) {
    return 59;
  } else if ($.hasFeature('FontFace.prototype.display')) {
    return 58;
  } else if ($.hasFeature('AbortController')) {
    return 57;
  } else if ($.hasFeature('Document.prototype.onvisibilitychange')) {
    return 56;
  } else if ($.hasFeature('RTCRtpSender.prototype.getStats')) {
    return 55;
  } else if ($.hasFeature('URL.prototype.toJSON')) {
    return 54;
  } else if ($.hasFeature('BaseAudioContext.prototype.state')) {
    return 53;
  } else if ($.hasFeature('ConstantSourceNode')) {
    return 52;
  } else if (
    $.hasFeature('CanvasRenderingContext2D.prototype.imageSmoothingEnabled')
  ) {
    return 51;
  } else if ($.hasFeature('Object.getOwnPropertyDescriptors')) {
    return 50;
  } else if ($.hasFeature('CanvasRenderingContext2D.prototype.filter')) {
    return 49;
  } else if ($.hasFeature('Animation')) {
    return 48;
  } else if ($.hasFeature('IDBKeyRange.prototype.includes')) {
    return 47;
  } else if ($.hasFeature('History.prototype.scrollRestoration')) {
    return 46;
  } else if ($.hasFeature('Element.prototype.getAttributeNames')) {
    return 45;
  } else if ($.hasFeature('URLSearchParams.prototype.entries')) {
    return 44;
  } else if ($.hasFeature('HTMLCanvasElement.prototype.captureStream')) {
    return 43;
  } else if ($.hasFeature('Reflect')) {
    return 42;
  }
}

export function detectFirefox() {
  var browser = 'Firefox';
  var browserVersion;
  var layout = detectLayout();
  var os = detectOS();

  // Allowed layouts
  if ([LAYOUT_GECKO].indexOf(layout) === -1) {
    return;
  }

  if (
    !$.hasFeature('InstallTrigger') &&
    !$.hasFeature('Error.prototype.toSource')
  ) {
    return;
  }

  browserVersion = detectFirefoxVersion();

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
