import $ from '../helpers';
import { detectOS } from '../os';
import { LAYOUT_GECKO, detectLayout } from '../layout';

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

  if ($.hasStyle('overscroll-behavior-block')) {
    browserVersion = 73;
  } else if ($.hasFeature('FormDataEvent')) {
    browserVersion = 72;
  } else if ($.hasFeature('MathMLElement')) {
    browserVersion = 71;
  } else if ($.hasFeature('AudioContext.prototype.baseLatency')) {
    browserVersion = 70;
  } else if ($.hasFeature('Blob.prototype.arrayBuffer')) {
    browserVersion = 69;
  } else if (
    $.hasFeature('AudioContext.prototype.createMediaStreamTrackSource')
  ) {
    browserVersion = 68;
  } else if ($.hasFeature('InputEvent.prototype.data')) {
    browserVersion = 67;
  } else if ($.hasFeature('HTMLSlotElement.prototype.assignedElements')) {
    browserVersion = 66;
  } else if ($.hasFeature('HTMLMarqueeElement')) {
    browserVersion = 65;
  } else if ($.hasFeature('Document.prototype.exitFullscreen')) {
    browserVersion = 64;
  } else if ($.hasFeature('Animation.prototype.effect')) {
    browserVersion = 63;
  } else if ($.hasFeature('DOMPointReadOnly.prototype.toJSON')) {
    browserVersion = 62;
  } else if ($.hasFeature('String.prototype.trimStart')) {
    browserVersion = 61;
  } else if ($.hasFeature('Animation.prototype.updatePlaybackRate')) {
    browserVersion = 60;
  } else if ($.hasFeature('Animation.prototype.pending')) {
    browserVersion = 59;
  } else if ($.hasFeature('FontFace.prototype.display')) {
    browserVersion = 58;
  } else if ($.hasFeature('AbortController')) {
    browserVersion = 57;
  } else if ($.hasFeature('Document.prototype.onvisibilitychange')) {
    browserVersion = 56;
  } else if ($.hasFeature('RTCRtpSender.prototype.getStats')) {
    browserVersion = 55;
  } else if ($.hasFeature('URL.prototype.toJSON')) {
    browserVersion = 54;
  } else if ($.hasFeature('BaseAudioContext.prototype.state')) {
    browserVersion = 53;
  } else if ($.hasFeature('ConstantSourceNode')) {
    browserVersion = 52;
  } else if (
    $.hasFeature('CanvasRenderingContext2D.prototype.imageSmoothingEnabled')
  ) {
    browserVersion = 51;
  } else if ($.hasFeature('Object.getOwnPropertyDescriptors')) {
    browserVersion = 50;
  } else if ($.hasFeature('CanvasRenderingContext2D.prototype.filter')) {
    browserVersion = 49;
  } else if ($.hasFeature('Animation')) {
    browserVersion = 48;
  } else if ($.hasFeature('IDBKeyRange.prototype.includes')) {
    browserVersion = 47;
  } else if ($.hasFeature('History.prototype.scrollRestoration')) {
    browserVersion = 46;
  } else if ($.hasFeature('Element.prototype.getAttributeNames')) {
    browserVersion = 45;
  } else if ($.hasFeature('URLSearchParams.prototype.entries')) {
    browserVersion = 44;
  } else if ($.hasFeature('HTMLCanvasElement.prototype.captureStream')) {
    browserVersion = 43;
  } else if ($.hasFeature('Reflect')) {
    browserVersion = 42;
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
