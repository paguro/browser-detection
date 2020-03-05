import $ from '../helpers';
import { detectOS } from '../os';
import { LAYOUT_BLINK, LAYOUT_WEBKIT, detectLayout } from '../layout';

export function detectChromeMobile() {
  var browser = 'Chrome Mobile';
  var browserVersion;
  var layout = detectLayout();
  var os = detectOS();

  // Allowed layouts
  if ([LAYOUT_BLINK, LAYOUT_WEBKIT].indexOf(layout) === -1) {
    return;
  }

  // Note: window.chrome is not set on mobile (tested on iOS)
  if ($.hasFeature('chrome')) {
    return;
  }

  // Note: Chrome iOS has the `window.webkit` property while Safari iOS not
  if (!$.hasFeature('webkit')) {
    return;
  }

  if ($.hasFeature('HTMLVideoElement.prototype.getVideoPlaybackQuality')) {
    browserVersion = 80;
  } else if ($.hasFeature('GeolocationCoordinates')) {
    browserVersion = 79;
  } else if ($.hasFeature('CSS.registerProperty')) {
    browserVersion = 78;
  } else if ($.hasFeature('FormDataEvent')) {
    browserVersion = 77;
  } else if ($.hasFeature('Blob.prototype.arrayBuffer')) {
    browserVersion = 76;
  } else if ($.hasFeature('Navigator.prototype.canShare')) {
    browserVersion = 75;
  } else if ($.hasFeature('TextEncoder.prototype.encodeInto')) {
    browserVersion = 74;
  } else if ($.hasFeature('Document.prototype.adoptedStyleSheets')) {
    browserVersion = 73;
  } else if ($.hasFeature('RTCPeerConnection.prototype.connectionState')) {
    browserVersion = 72;
  } else if ($.hasFeature('HTMLElement.prototype.oncopy')) {
    browserVersion = 71;
  } else if (
    $.hasFeature('RTCPeerConnection.prototype.currentLocalDescription')
  ) {
    browserVersion = 70;
  } else if ($.hasFeature('Element.prototype.toggleAttribute')) {
    browserVersion = 69;
  } else if ($.hasFeature('CanvasPattern.prototype.setTransform')) {
    browserVersion = 68;
  } else if ($.hasFeature('RTCRtpReceiver.prototype.getStats')) {
    browserVersion = 67;
  } else if ($.hasFeature('AbortController')) {
    browserVersion = 66;
  } else if ($.hasFeature('HTMLAnchorElement.prototype.relList')) {
    browserVersion = 65;
  } else if ($.hasFeature('Document.prototype.alinkColor')) {
    browserVersion = 64;
  } else if ($.hasFeature('MediaStreamTrack.prototype.applyConstraints')) {
    browserVersion = 63;
  } else if ($.hasFeature('HTMLDataElement')) {
    browserVersion = 62;
  } else if ($.hasFeature('CSS.supports')) {
    browserVersion = 61;
  } else if ($.hasFeature('DataTransfer')) {
    browserVersion = 60;
  } else if ($.hasFeature('ByteLengthQueuingStrategy')) {
    browserVersion = 59;
  } else if ($.hasFeature('ClipboardEvent')) {
    browserVersion = 58;
  } else if ($.hasFeature('AudioProcessingEvent')) {
    browserVersion = 57;
  } else if ($.hasFeature('DOMMatrixReadOnly.prototype.rotate')) {
    browserVersion = 56;
  } else if ($.hasFeature('AnalyserNode')) {
    browserVersion = 55;
  } else if (
    $.hasFeature('CanvasRenderingContext2D.prototype.imageSmoothingQuality')
  ) {
    browserVersion = 54;
  } else if ($.hasFeature('Element.prototype.attachShadow')) {
    browserVersion = 53;
  } else if ($.hasFeature('AudioParam.prototype.maxValue')) {
    browserVersion = 52;
  } else if ($.hasFeature('CanvasCaptureMediaStreamTrack')) {
    browserVersion = 51;
  } else if ($.hasFeature('DOMTokenList.prototype.value')) {
    browserVersion = 50;
  } else if ($.hasFeature('DOMTokenList.prototype.supports')) {
    browserVersion = 49;
  } else if ($.hasFeature('FontFaceSet.prototype.add')) {
    browserVersion = 48;
  } else if ($.hasFeature('CSSNamespaceRule')) {
    browserVersion = 47;
  } else if ($.hasFeature('CSS.escape')) {
    browserVersion = 46;
  } else if ($.hasFeature('CSSKeyframeRule')) {
    browserVersion = 45;
  } else if ($.hasFeature('Document.prototype.scrollingElement')) {
    browserVersion = 44;
  } else if ($.hasFeature('AnimationEvent')) {
    browserVersion = 43;
  } else if ($.hasFeature('Element.prototype.id')) {
    browserVersion = 42;
  } else if ($.hasFeature('Document.prototype.origin')) {
    browserVersion = 41;
  } else if ($.hasFeature('HTMLButtonElement.prototype.reportValidity')) {
    browserVersion = 40;
  } else if ($.hasFeature('HTMLPictureElement')) {
    browserVersion = 38;
  } else if ($.hasFeature('Crypto.prototype.subtle')) {
    browserVersion = 37;
  } else if ($.hasFeature('FontFace')) {
    browserVersion = 35;
  } else if ($.hasFeature('Element.prototype.matches')) {
    browserVersion = 34;
  } else if ($.hasFeature('Document.prototype.hidden')) {
    browserVersion = 33;
  } else if ($.hasFeature('URL')) {
    browserVersion = 32;
  } else if ($.hasFeature('Element.prototype.localName')) {
    browserVersion = 31;
  } else if ($.hasFeature('Document.prototype.currentScript')) {
    browserVersion = 29;
  } else if ($.hasFeature('CSS')) {
    browserVersion = 28;
  } else if ($.hasFeature('TransitionEvent')) {
    browserVersion = 27;
  } else if ($.hasFeature('HTMLTemplateElement')) {
    browserVersion = 26;
  } else if ($.hasFeature('Document.prototype.createTouch')) {
    browserVersion = 25;
  } else if ($.hasFeature('AnalyserNode')) {
    browserVersion = 18;
  }

  if (browserVersion) {
    return {
      browser: browser,
      browserVersion: browserVersion,
      layout: layout,
      layoutVersion: undefined,
      os: os,
      osVersion: undefined
    };
  }
}
