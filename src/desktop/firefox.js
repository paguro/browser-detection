import { detectOS } from '../os';
import { ENGINE_GECKO, detectEngine } from '../engine';
import { hasFeature } from '../feature';

export function detectFirefox() {
  var browser = 'Firefox';
  var browserVersion;
  var engine = detectEngine();
  var os = detectOS();

  // Allowed Engines:
  if ([ENGINE_GECKO].indexOf(engine) === -1) {
    return;
  }

  if (window.InstallTrigger || Error.prototype.toSource) {
    if (eval.toString().length !== 37) {
      return;
    }

    if (hasFeature('HTMLIFrameElement.allow')) {
      browserVersion = 73;
    } else if (hasFeature('FormDataEvent')) {
      browserVersion = 72;
    } else if (hasFeature('MediaMetadata')) {
      browserVersion = 71;
    } else if (hasFeature('AudioContext.baseLatency')) {
      browserVersion = 70;
    } else if (hasFeature('Blob.arrayBuffer')) {
      browserVersion = 69;
    } else if (hasFeature('MediaDevices.secure_context_required')) {
      browserVersion = 68;
    } else if (hasFeature('InputEvent.data')) {
      browserVersion = 67;
    } else if (hasFeature('HTMLSlotElement.assignedElements')) {
      browserVersion = 66;
    } else if (hasFeature('Document.hasStorageAccess')) {
      browserVersion = 65;
    } else if (hasFeature('Document.exitFullscreen')) {
      browserVersion = 64;
    } else if (hasFeature('Animation.effect')) {
      browserVersion = 63;
    } else if (hasFeature('DOMPointReadOnly.toJSON')) {
      browserVersion = 62;
    } else if (hasFeature('PerformanceResourceTiming.serverTiming')) {
      browserVersion = 61;
    } else if (hasFeature('Animation.updatePlaybackRate')) {
      browserVersion = 60;
    } else if (hasFeature('Animation.pending')) {
      browserVersion = 59;
    } else if (hasFeature('FontFace.display')) {
      browserVersion = 58;
    } else if (hasFeature('AbortController')) {
      browserVersion = 57;
    } else if (hasFeature('Document.onvisibilitychange')) {
      browserVersion = 56;
    } else if (hasFeature('CSS.supports')) {
      browserVersion = 55;
    } else if (hasFeature('URL.toJSON')) {
      browserVersion = 54;
    } else if (hasFeature('AnalyserNode')) {
      browserVersion = 53;
    } else if (hasFeature('ConstantSourceNode')) {
      browserVersion = 52;
    } else if (hasFeature('CanvasRenderingContext2D.imageSmoothingEnabled')) {
      browserVersion = 51;
    } else if (hasFeature('BaseAudioContext.createIIRFilter')) {
      browserVersion = 50;
    } else if (hasFeature('CanvasRenderingContext2D.filter')) {
      browserVersion = 49;
    } else if (hasFeature('Animation')) {
      browserVersion = 48;
    } else if (hasFeature('IDBKeyRange.includes')) {
      browserVersion = 47;
    } else if (hasFeature('History.scrollRestoration')) {
      browserVersion = 46;
    } else if (hasFeature('Element.getAttributeNames')) {
      browserVersion = 45;
    } else if (hasFeature('CacheStorage')) {
      browserVersion = 44;
    } else if (hasFeature('HTMLCanvasElement.captureStream')) {
      browserVersion = 43;
    } else if (hasFeature('AnimationPlaybackEvent')) {
      browserVersion = 42;
    } else if (hasFeature('Document.fonts')) {
      browserVersion = 41;
    } else if (hasFeature('AudioBufferSourceNode.detune')) {
      browserVersion = 40;
    } else if (hasFeature('Cache')) {
      browserVersion = 39;
    } else if (hasFeature('BroadcastChannel')) {
      browserVersion = 38;
    } else if (hasFeature('BaseAudioContext.createStereoPanner')) {
      browserVersion = 37;
    } else if (hasFeature('CanvasRenderingContext2D.resetTransform')) {
      browserVersion = 36;
    } else if (hasFeature('Element.closest')) {
      browserVersion = 35;
    } else if (hasFeature('Crypto.subtle')) {
      browserVersion = 34;
    } else if (hasFeature('CSSCounterStyleRule')) {
      browserVersion = 33;
    } else if (hasFeature('CanvasRenderingContext2D.drawFocusIfNeeded')) {
      browserVersion = 32;
    } else if (hasFeature('CSS.escape')) {
      browserVersion = 31;
    } else if (hasFeature('HTMLLinkElement.relList')) {
      browserVersion = 30;
    } else if (hasFeature('Gamepad')) {
      browserVersion = 29;
    } else if (hasFeature('CanvasRenderingContext2D.drawFocusIfNeeded')) {
      browserVersion = 28;
    } else if (hasFeature('CanvasRenderingContext2D.lineDashOffset')) {
      browserVersion = 27;
    } else if (hasFeature('Crypto')) {
      browserVersion = 26;
    } else if (hasFeature('AnalyserNode')) {
      browserVersion = 25;
    } else if (hasFeature('Comment')) {
      browserVersion = 24;
    } else if (hasFeature('AnimationEvent')) {
      browserVersion = 23;
    } else if (hasFeature('BlobEvent')) {
      browserVersion = 22;
    } else if (hasFeature('Element.scrollHeight')) {
      browserVersion = 21;
    } else if (hasFeature('CSSConditionRule')) {
      browserVersion = 20;
    } else if (hasFeature('CSSPageRule')) {
      browserVersion = 19;
    } else if (hasFeature('Document.hidden')) {
      browserVersion = 18;
    } else if (hasFeature('CSSMediaRule')) {
      browserVersion = 17;
    } else if (hasFeature('BatteryManager')) {
      browserVersion = 16;
    } else if (hasFeature('File.lastModified')) {
      browserVersion = 15;
    } else if (hasFeature('HTMLImageElement.x')) {
      browserVersion = 14;
    } else if (hasFeature('Blob')) {
      browserVersion = 13;
    } else if (hasFeature('DOMError')) {
      browserVersion = 12;
    } else if (hasFeature('CustomEvent')) {
      browserVersion = 11;
    } else if (hasFeature('Document.fullscreenEnabled')) {
      browserVersion = 10;
    } else if (hasFeature('CompositionEvent')) {
      browserVersion = 9;
    } else if (hasFeature('CloseEvent')) {
      browserVersion = 8;
    } else if (hasFeature('CanvasRenderingContext2D.lineDashOffset')) {
      browserVersion = 7;
    } else if (hasFeature('AnimationEvent')) {
      browserVersion = 6;
    } else if (hasFeature('CSSKeyframesRule.appendRule')) {
      browserVersion = 5;
    } else if (hasFeature('Blob')) {
      browserVersion = 4;
    } else if (hasFeature('CanvasGradient')) {
      browserVersion = 3.6;
    } else if (hasFeature('CanvasRenderingContext2D.font')) {
      browserVersion = 3.5;
    } else if (hasFeature('CanvasRenderingContext2D.setTransform')) {
      browserVersion = 3;
    } else if (hasFeature('CanvasRenderingContext2D.createImageData')) {
      browserVersion = 2;
    } else if (hasFeature('BeforeUnloadEvent')) {
      browserVersion = 1.5;
    } else if (hasFeature('Attr')) {
      browserVersion = 1;
    }

    if (browserVersion) {
      return {
        browser: browser,
        browserVersion: browserVersion,
        engine: engine,
        engineVersion: undefined,
        os: os,
        osVersion: undefined
      };
    }
  }
}
