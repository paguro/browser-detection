import { detectOS } from '../os';
import { LAYOUT_WEBKIT, detectLayout } from '../layout';
import { hasFeature } from '../feature';

export function detectSafari() {
  var browser = 'Safari';
  var browserVersion;
  var layout = detectLayout();
  var os = detectOS();

  // Allowed Layouts:
  if ([LAYOUT_WEBKIT].indexOf(layout) === -1) {
    return;
  }

  // Version detection
  if (hasFeature('IntersectionObserver')) {
    browserVersion = 12.1;
  } else if (hasFeature('Element.toggleAttribute')) {
    browserVersion = 12;
  } else if (hasFeature('AbortController')) {
    browserVersion = 11.1;
  } else if (hasFeature('CSSStyleDeclaration.cssFloat')) {
    browserVersion = 11;
  } else if (hasFeature('EventTarget')) {
    browserVersion = 10.1;
  } else if (hasFeature('CSS')) {
    browserVersion = 10;
  } else if (hasFeature('AnimationEvent')) {
    browserVersion = 9.1;
  } else if (hasFeature('AnimationEvent.animationName')) {
    browserVersion = 9;
  } else if (hasFeature('Blob')) {
    browserVersion = 8;
  } else if (hasFeature('Document.createComment')) {
    browserVersion = 7;
  } else if (hasFeature('AudioTrackList')) {
    browserVersion = 6.1;
  } else if (hasFeature('AnalyserNode')) {
    browserVersion = 6;
  } else if (hasFeature('Blob')) {
    browserVersion = 5.1;
  } else if (hasFeature('Document.evaluate')) {
    browserVersion = 5;
  } else if (hasFeature('CSSKeyframeRule')) {
    browserVersion = 4;
  } else if (hasFeature('DOMParser')) {
    browserVersion = 3.2;
  } else if (hasFeature('CanvasGradient')) {
    browserVersion = 3.1;
  } else if (hasFeature('Document.createNodeIterator')) {
    browserVersion = 3;
  } else if (hasFeature('CanvasRenderingContext2D')) {
    browserVersion = 2;
  } else if (hasFeature('Document.onselectionchange')) {
    browserVersion = 1.3;
  } else if (hasFeature('HTMLMarqueeElement')) {
    browserVersion = 1.2;
  } else if (hasFeature('Document.getElementById')) {
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
