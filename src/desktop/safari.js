import { detectOS } from '../os';
import { ENGINE_WEBKIT, detectEngine } from '../engine';
import { hasFeature } from '../feature';

export function detectSafari() {
  var name = 'Safari';
  var engine = detectEngine();
  var os = detectOS();
  var version;

  // Allowed Engines:
  // - WEKBKIT
  if ([ENGINE_WEBKIT].indexOf(engine) === -1) {
    return;
  }

  // Version detection
  if (hasFeature('IntersectionObserver')) {
    version = 12.1;
  } else if (hasFeature('Element.toggleAttribute')) {
    version = 12;
  } else if (hasFeature('AbortController')) {
    version = 11.1;
  } else if (hasFeature('CSSStyleDeclaration.cssFloat')) {
    version = 11;
  } else if (hasFeature('EventTarget')) {
    version = 10.1;
  } else if (hasFeature('CSS')) {
    version = 10;
  } else if (hasFeature('AnimationEvent')) {
    version = 9.1;
  } else if (hasFeature('AnimationEvent.animationName')) {
    version = 9;
  } else if (hasFeature('Blob')) {
    version = 8;
  } else if (hasFeature('Document.createComment')) {
    version = 7;
  } else if (hasFeature('AudioTrackList')) {
    version = 6.1;
  } else if (hasFeature('AnalyserNode')) {
    version = 6;
  } else if (hasFeature('Blob')) {
    version = 5.1;
  } else if (hasFeature('Document.evaluate')) {
    version = 5;
  } else if (hasFeature('CSSKeyframeRule')) {
    version = 4;
  } else if (hasFeature('DOMParser')) {
    version = 3.2;
  } else if (hasFeature('CanvasGradient')) {
    version = 3.1;
  } else if (hasFeature('Document.createNodeIterator')) {
    version = 3;
  } else if (hasFeature('CanvasRenderingContext2D')) {
    version = 2;
  } else if (hasFeature('Document.onselectionchange')) {
    version = 1.3;
  } else if (hasFeature('HTMLMarqueeElement')) {
    version = 1.2;
  } else if (hasFeature('Document.getElementById')) {
    version = 1;
  }

  if (version) {
    return { name: name, engine: engine, version: version, os: os };
  }
}
