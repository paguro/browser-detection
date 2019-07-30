import { detectOS } from '../os';
import { ENGINE_BLINK, ENGINE_WEBKIT, detectEngine } from '../engine';
import { hasFeature } from '../feature';

export function detectChromeMobile() {
  var name = 'Chrome Mobile';
  var engine = detectEngine();
  var os = detectOS();
  var version;

  // Allowed Engines:
  if ([ENGINE_BLINK, ENGINE_WEBKIT].indexOf(engine) === -1) {
    return;
  }

  // TODO: verify if Chrome iOS has the `window.webkit` property while Safari iOS not
  //  Tested on:
  //  - Chrome 75.0.3770.70 (iOS)
  //  - Safari 12.2 (iOS)
  if (!hasFeature('window.webkit')) {
    return;
  }

  // Note: window.chrome is not set on mobile (tested on iOS)

  if (hasFeature('TextEncoder.encodeInto')) {
    version = 74;
  } else if (hasFeature('Document.adoptedStyleSheets')) {
    version = 73;
  } else if (hasFeature('RTCPeerConnection.connectionState')) {
    version = 72;
  } else if (hasFeature('HTMLElement.oncopy')) {
    version = 71;
  } else if (hasFeature('RTCPeerConnection.currentLocalDescription')) {
    version = 70;
  } else if (hasFeature('Element.toggleAttribute')) {
    version = 69;
  } else if (hasFeature('CanvasPattern.setTransform')) {
    version = 68;
  } else if (hasFeature('RTCRtpReceiver.getStats')) {
    version = 67;
  } else if (hasFeature('AbortController')) {
    version = 66;
  } else if (hasFeature('HTMLAnchorElement.relList')) {
    version = 65;
  } else if (hasFeature('Document.alinkColor')) {
    version = 64;
  } else if (hasFeature('MediaStreamTrack.applyConstraints')) {
    version = 63;
  } else if (hasFeature('HTMLDataElement')) {
    version = 62;
  } else if (hasFeature('CSS.supports')) {
    version = 61;
  } else if (hasFeature('DataTransfer')) {
    version = 60;
  } else if (hasFeature('ByteLengthQueuingStrategy')) {
    version = 59;
  } else if (hasFeature('ClipboardEvent')) {
    version = 58;
  } else if (hasFeature('AudioProcessingEvent')) {
    version = 57;
  } else if (hasFeature('DOMMatrixReadOnly.rotate')) {
    version = 56;
  } else if (hasFeature('AnalyserNode')) {
    version = 55;
  } else if (hasFeature('CanvasRenderingContext2D.imageSmoothingQuality')) {
    version = 54;
  } else if (hasFeature('Element.attachShadow')) {
    version = 53;
  } else if (hasFeature('AudioParam.maxValue')) {
    version = 52;
  } else if (hasFeature('CanvasCaptureMediaStreamTrack')) {
    version = 51;
  } else if (hasFeature('DOMTokenList.value')) {
    version = 50;
  } else if (hasFeature('DOMTokenList.supports')) {
    version = 49;
  } else if (hasFeature('FontFaceSet.add')) {
    version = 48;
  } else if (hasFeature('CSSNamespaceRule')) {
    version = 47;
  } else if (hasFeature('CSS.escape')) {
    version = 46;
  } else if (hasFeature('CSSKeyframeRule')) {
    version = 45;
  } else if (hasFeature('Document.scrollingElement')) {
    version = 44;
  } else if (hasFeature('AnimationEvent')) {
    version = 43;
  } else if (hasFeature('Element.id')) {
    version = 42;
  } else if (hasFeature('Document.origin')) {
    version = 41;
  } else if (hasFeature('HTMLButtonElement.reportValidity')) {
    version = 40;
  } else if (hasFeature('HTMLPictureElement')) {
    version = 38;
  } else if (hasFeature('Crypto.subtle')) {
    version = 37;
  } else if (hasFeature('FontFace')) {
    version = 35;
  } else if (hasFeature('Element.matches')) {
    version = 34;
  } else if (hasFeature('Document.hidden')) {
    version = 33;
  } else if (hasFeature('URL')) {
    version = 32;
  } else if (hasFeature('Element.localName')) {
    version = 31;
  } else if (hasFeature('Document.currentScript')) {
    version = 29;
  } else if (hasFeature('CSS')) {
    version = 28;
  } else if (hasFeature('TransitionEvent')) {
    version = 27;
  } else if (hasFeature('HTMLTemplateElement')) {
    version = 26;
  } else if (hasFeature('Document.createTouch')) {
    version = 25;
  } else if (hasFeature('AnalyserNode')) {
    version = 18;
  }

  if (version) {
    return { name: name, engine: engine, version: version, os: os };
  }
}
