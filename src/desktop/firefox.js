import $ from '../helpers';
import { detectOS } from '../os';
import { LAYOUT_GECKO, detectLayout } from '../layout';

export function detectFirefox() {
  var browser = 'Firefox';
  var browserVersion;
  var layout = detectLayout();
  var os = detectOS();

  // Allowed Layouts:
  if ([LAYOUT_GECKO].indexOf(layout) === -1) {
    return;
  }

  if (
    $.hasFeature('InstallTrigger') ||
    $.hasFeature('Error.prototype.toSource')
  ) {
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
    } else if ($.hasFeature('Document.prototype.hasStorageAccess')) {
      browserVersion = 65;
    } else if ($.hasFeature('Document.prototype.exitFullscreen')) {
      browserVersion = 64;
    } else if ($.hasFeature('Animation.prototype.effect')) {
      browserVersion = 63;
    } else if ($.hasFeature('DOMPointReadOnly.prototype.toJSON')) {
      browserVersion = 62;
    } else if (
      $.hasFeature('PerformanceResourceTiming.prototype.serverTiming')
    ) {
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
    } else if ($.hasFeature('CSS.supports')) {
      browserVersion = 55;
    } else if ($.hasFeature('URL.prototype.toJSON')) {
      browserVersion = 54;
    } else if ($.hasStyle('caret-color')) {
      browserVersion = 53;
    } else if ($.hasFeature('ConstantSourceNode')) {
      browserVersion = 52;
    } else if (
      $.hasFeature('CanvasRenderingContext2D.prototype.imageSmoothingEnabled')
    ) {
      browserVersion = 51;
    } else if ($.hasFeature('BaseAudioContext.prototype.createIIRFilter')) {
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
    } else if ($.hasFeature('CacheStorage')) {
      browserVersion = 44;
    } else if ($.hasFeature('HTMLCanvasElement.prototype.captureStream')) {
      browserVersion = 43;
    } else if ($.hasFeature('AnimationPlaybackEvent')) {
      browserVersion = 42;
    } else if ($.hasFeature('Document.prototype.fonts')) {
      browserVersion = 41;
    } else if ($.hasFeature('AudioBufferSourceNode.prototype.detune')) {
      browserVersion = 40;
    } else if ($.hasFeature('Cache')) {
      browserVersion = 39;
    } else if ($.hasFeature('BroadcastChannel')) {
      browserVersion = 38;
    } else if ($.hasFeature('BaseAudioContext.prototype.createStereoPanner')) {
      browserVersion = 37;
    } else if (
      $.hasFeature('CanvasRenderingContext2D.prototype.resetTransform')
    ) {
      browserVersion = 36;
    } else if ($.hasFeature('Element.prototype.closest')) {
      browserVersion = 35;
    } else if ($.hasFeature('Crypto.prototype.subtle')) {
      browserVersion = 34;
    } else if ($.hasFeature('CSSCounterStyleRule')) {
      browserVersion = 33;
    } else if (
      $.hasFeature('CanvasRenderingContext2D.prototype.drawFocusIfNeeded')
    ) {
      browserVersion = 32;
    } else if ($.hasFeature('CSS.escape')) {
      browserVersion = 31;
    } else if ($.hasFeature('HTMLLinkElement.prototype.relList')) {
      browserVersion = 30;
    } else if ($.hasFeature('Gamepad')) {
      browserVersion = 29;
    } else if (
      $.hasFeature('CanvasRenderingContext2D.prototype.drawFocusIfNeeded')
    ) {
      browserVersion = 28;
    } else if (
      $.hasFeature('CanvasRenderingContext2D.prototype.lineDashOffset')
    ) {
      browserVersion = 27;
    } else if ($.hasFeature('Crypto')) {
      browserVersion = 26;
    } else if ($.hasFeature('AnalyserNode')) {
      browserVersion = 25;
    } else if ($.hasFeature('Comment')) {
      browserVersion = 24;
    } else if ($.hasFeature('AnimationEvent')) {
      browserVersion = 23;
    } else if ($.hasFeature('BlobEvent')) {
      browserVersion = 22;
    } else if ($.hasFeature('Element.prototype.scrollHeight')) {
      browserVersion = 21;
    } else if ($.hasFeature('CSSConditionRule')) {
      browserVersion = 20;
    } else if ($.hasFeature('CSSPageRule')) {
      browserVersion = 19;
    } else if ($.hasFeature('Document.prototype.hidden')) {
      browserVersion = 18;
    } else if ($.hasFeature('CSSMediaRule')) {
      browserVersion = 17;
    } else if ($.hasFeature('BatteryManager')) {
      browserVersion = 16;
    } else if ($.hasFeature('File.prototype.lastModified')) {
      browserVersion = 15;
    } else if ($.hasFeature('HTMLImageElement.prototype.x')) {
      browserVersion = 14;
    } else if ($.hasFeature('Blob')) {
      browserVersion = 13;
    } else if ($.hasFeature('DOMError')) {
      browserVersion = 12;
    } else if ($.hasFeature('CustomEvent')) {
      browserVersion = 11;
    } else if ($.hasFeature('Document.prototype.fullscreenEnabled')) {
      browserVersion = 10;
    } else if ($.hasFeature('CompositionEvent')) {
      browserVersion = 9;
    } else if ($.hasFeature('CloseEvent')) {
      browserVersion = 8;
    } else if (
      $.hasFeature('CanvasRenderingContext2D.prototype.lineDashOffset')
    ) {
      browserVersion = 7;
    } else if ($.hasFeature('AnimationEvent')) {
      browserVersion = 6;
    } else if ($.hasFeature('CSSKeyframesRule.prototype.appendRule')) {
      browserVersion = 5;
    } else if ($.hasFeature('Blob')) {
      browserVersion = 4;
    } else if ($.hasFeature('CanvasGradient')) {
      browserVersion = 3.6;
    } else if ($.hasFeature('CanvasRenderingContext2D.prototype.font')) {
      browserVersion = 3.5;
    } else if (
      $.hasFeature('CanvasRenderingContext2D.prototype.setTransform')
    ) {
      browserVersion = 3;
    } else if (
      $.hasFeature('CanvasRenderingContext2D.prototype.createImageData')
    ) {
      browserVersion = 2;
    } else if ($.hasFeature('BeforeUnloadEvent')) {
      browserVersion = 1.5;
    } else if ($.hasFeature('Attr')) {
      browserVersion = 1;
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
}
