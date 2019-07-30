import { detectOS } from '../os';
import { ENGINE_WEBKIT, detectEngine } from '../engine';
import { hasFeature } from '../feature';

export function detectSafariMobile() {
  var name = 'Safari Mobile';
  var engine = detectEngine();
  var os = detectOS();
  var version;

  // Allowed Engines:
  if ([ENGINE_WEBKIT].indexOf(engine) === -1) {
    return;
  }

  // https://stackoverflow.com/questions/8348139/detect-ios-version-less-than-5-with-javascript/14223920#14223920
  function iOSversion() {
    if (
      /iP(hone|od|ad)/.test(navigator.platform) &&
      /Safari/.test(navigator.appVersion)
    ) {
      // supports iOS 2.0 and later: <http://bit.ly/TJjs1V>
      var v = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
      return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
    }
  }

  if (iOSversion()) {
    if (hasFeature('IntersectionObserver')) {
      version = 12.2;
    } else if (hasFeature('ShadowRoot.fullscreenElement')) {
      version = 12;
    } else if (hasFeature('DOMMatrixReadOnly')) {
      version = 11.3;
    } else if (hasFeature('AbortController')) {
      version = 11.1;
    } else if (hasFeature('CanvasPattern.setTransform')) {
      version = 11;
    } else if (hasFeature('KeyboardEvent.getModifierState')) {
      version = 10.3;
    } else if (hasFeature('Document.fonts')) {
      version = 10.2;
    } else if (hasFeature('Crypto.subtle')) {
      version = 10.1;
    } else if (hasFeature('Element.attachShadow')) {
      version = 10;
    } else if (hasFeature('HTMLPictureElement')) {
      version = 9.3;
    } else if (hasFeature('PerformanceTiming')) {
      version = 9.2;
    } else if (hasFeature('Document.scrollingElement')) {
      version = 9;
    } else if (hasFeature('WebGLActiveInfo')) {
      version = 8.1;
    } else if (hasFeature('Document.currentScript')) {
      version = 8;
    } else if (hasFeature('AudioTrackList')) {
      version = 7.1;
    } else if (hasFeature('Document.hidden')) {
      version = 7;
    } else if (hasFeature('Crypto')) {
      version = 6.1;
    } else if (hasFeature('Event')) {
      version = 6;
    } else if (hasFeature('KeyboardEvent.charCode')) {
      version = 5.1;
    } else if (hasFeature('Document.body')) {
      version = 5;
    } else if (hasFeature('History.pushState')) {
      version = 4.3;
    } else if (hasFeature('DeviceMotionEvent')) {
      version = 4.2;
    } else if (hasFeature('Element.getBoundingClientRect')) {
      version = 4;
    } else if (hasFeature('CanvasGradient')) {
      version = 3.2;
    } else if (hasFeature('SVGCircleElement')) {
      version = 3.1;
    } else if (hasFeature('Document.createTreeWalker')) {
      version = 3;
    } else if (hasFeature('GestureEvent')) {
      version = 2;
    } else if (hasFeature('Document.getElementById')) {
      version = 1;
    }

    if (version) {
      return { name: name, engine: engine, version: version, os: os };
    }
  }
}
