import { detectOS } from '../os';
import { ENGINE_GECKO, detectEngine } from '../engine';
import { hasFeature } from '../feature';

export function detectFirefox() {
  var name = 'Firefox';
  var engine = detectEngine();
  var os = detectOS();
  var version;

  // Allowed Engines:
  if ([ENGINE_GECKO].indexOf(engine) === -1) {
    return;
  }

  if (window.InstallTrigger || Error.prototype.toSource) {
    if (eval.toString().length !== 37) {
      return;
    }

    if (hasFeature('MediaDevices.secure_context_required')) {
      version = 68;
    } else if (hasFeature('InputEvent.data')) {
      version = 67;
    } else if (hasFeature('HTMLSlotElement.assignedElements')) {
      version = 66;
    } else if (hasFeature('Document.hasStorageAccess')) {
      version = 65;
    } else if (hasFeature('Document.exitFullscreen')) {
      version = 64;
    } else if (hasFeature('Animation.effect')) {
      version = 63;
    } else if (hasFeature('DOMPointReadOnly.toJSON')) {
      version = 62;
    } else if (hasFeature('PerformanceResourceTiming.serverTiming')) {
      version = 61;
    } else if (hasFeature('Animation.updatePlaybackRate')) {
      version = 60;
    } else if (hasFeature('Animation.pending')) {
      version = 59;
    } else if (hasFeature('FontFace.display')) {
      version = 58;
    } else if (hasFeature('AbortController')) {
      version = 57;
    } else if (hasFeature('Document.onvisibilitychange')) {
      version = 56;
    } else if (hasFeature('CSS.supports')) {
      version = 55;
    } else if (hasFeature('URL.toJSON')) {
      version = 54;
    } else if (hasFeature('AnalyserNode')) {
      version = 53;
    } else if (hasFeature('ConstantSourceNode')) {
      version = 52;
    } else if (hasFeature('CanvasRenderingContext2D.imageSmoothingEnabled')) {
      version = 51;
    } else if (hasFeature('BaseAudioContext.createIIRFilter')) {
      version = 50;
    } else if (hasFeature('CanvasRenderingContext2D.filter')) {
      version = 49;
    } else if (hasFeature('Animation')) {
      version = 48;
    } else if (hasFeature('IDBKeyRange.includes')) {
      version = 47;
    } else if (hasFeature('History.scrollRestoration')) {
      version = 46;
    } else if (hasFeature('Element.getAttributeNames')) {
      version = 45;
    } else if (hasFeature('CacheStorage')) {
      version = 44;
    } else if (hasFeature('HTMLCanvasElement.captureStream')) {
      version = 43;
    } else if (hasFeature('AnimationPlaybackEvent')) {
      version = 42;
    } else if (hasFeature('Document.fonts')) {
      version = 41;
    } else if (hasFeature('AudioBufferSourceNode.detune')) {
      version = 40;
    } else if (hasFeature('Cache')) {
      version = 39;
    } else if (hasFeature('BroadcastChannel')) {
      version = 38;
    } else if (hasFeature('BaseAudioContext.createStereoPanner')) {
      version = 37;
    } else if (hasFeature('CanvasRenderingContext2D.resetTransform')) {
      version = 36;
    } else if (hasFeature('Element.closest')) {
      version = 35;
    } else if (hasFeature('Crypto.subtle')) {
      version = 34;
    } else if (hasFeature('CSSCounterStyleRule')) {
      version = 33;
    } else if (hasFeature('CanvasRenderingContext2D.drawFocusIfNeeded')) {
      version = 32;
    } else if (hasFeature('CSS.escape')) {
      version = 31;
    } else if (hasFeature('HTMLLinkElement.relList')) {
      version = 30;
    } else if (hasFeature('Gamepad')) {
      version = 29;
    } else if (hasFeature('CanvasRenderingContext2D.drawFocusIfNeeded')) {
      version = 28;
    } else if (hasFeature('CanvasRenderingContext2D.lineDashOffset')) {
      version = 27;
    } else if (hasFeature('Crypto')) {
      version = 26;
    } else if (hasFeature('AnalyserNode')) {
      version = 25;
    } else if (hasFeature('Comment')) {
      version = 24;
    } else if (hasFeature('AnimationEvent')) {
      version = 23;
    } else if (hasFeature('BlobEvent')) {
      version = 22;
    } else if (hasFeature('Element.scrollHeight')) {
      version = 21;
    } else if (hasFeature('CSSConditionRule')) {
      version = 20;
    } else if (hasFeature('CSSPageRule')) {
      version = 19;
    } else if (hasFeature('Document.hidden')) {
      version = 18;
    } else if (hasFeature('CSSMediaRule')) {
      version = 17;
    } else if (hasFeature('BatteryManager')) {
      version = 16;
    } else if (hasFeature('File.lastModified')) {
      version = 15;
    } else if (hasFeature('HTMLImageElement.x')) {
      version = 14;
    } else if (hasFeature('Blob')) {
      version = 13;
    } else if (hasFeature('DOMError')) {
      version = 12;
    } else if (hasFeature('CustomEvent')) {
      version = 11;
    } else if (hasFeature('Document.fullscreenEnabled')) {
      version = 10;
    } else if (hasFeature('CompositionEvent')) {
      version = 9;
    } else if (hasFeature('CloseEvent')) {
      version = 8;
    } else if (hasFeature('CanvasRenderingContext2D.lineDashOffset')) {
      version = 7;
    } else if (hasFeature('AnimationEvent')) {
      version = 6;
    } else if (hasFeature('CSSKeyframesRule.appendRule')) {
      version = 5;
    } else if (hasFeature('Blob')) {
      version = 4;
    } else if (hasFeature('CanvasGradient')) {
      version = 3.6;
    } else if (hasFeature('CanvasRenderingContext2D.font')) {
      version = 3.5;
    } else if (hasFeature('CanvasRenderingContext2D.setTransform')) {
      version = 3;
    } else if (hasFeature('CanvasRenderingContext2D.createImageData')) {
      version = 2;
    } else if (hasFeature('BeforeUnloadEvent')) {
      version = 1.5;
    } else if (hasFeature('Attr')) {
      version = 1;
    }

    if (version) {
      return { name: name, engine: engine, version: version, os: os };
    }
  }
}
