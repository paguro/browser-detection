import $ from '../helpers';
import { detectOS } from '../os';
import { LAYOUT_WEBKIT, detectLayout } from '../layout';

export function detectSafariMobile() {
  var browser = 'Safari Mobile';
  var browserVersion;
  var layout = detectLayout();
  var os = detectOS();

  // Allowed Layouts:
  if ([LAYOUT_WEBKIT].indexOf(layout) === -1) {
    return;
  }

  // https://stackoverflow.com/questions/8348139/detect-ios-version-less-than-5-with-javascript/14223920#14223920
  function iOSversion() {
    var appVersion = $.getFeature('navigator.appVersion');
    var platform = $.getFeature('navigator.platform');

    if (/iP(hone|od|ad)/.test(platform) && /Safari/.test(appVersion)) {
      // supports iOS 2.0 and later: <http://bit.ly/TJjs1V>
      var v = appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
      return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
    }
  }

  if (iOSversion()) {
    if ($.hasFeature('PointerEvent')) {
      browserVersion = 13;
    } else if ($.hasFeature('IntersectionObserver')) {
      browserVersion = 12.2;
    } else if ($.hasFeature('ShadowRoot.prototype.fullscreenElement')) {
      browserVersion = 12;
    } else if ($.hasFeature('DOMMatrixReadOnly')) {
      browserVersion = 11.3;
    } else if ($.hasFeature('AbortController')) {
      browserVersion = 11.1;
    } else if ($.hasFeature('CanvasPattern.prototype.setTransform')) {
      browserVersion = 11;
    } else if ($.hasFeature('KeyboardEvent.prototype.getModifierState')) {
      browserVersion = 10.3;
    } else if ($.hasFeature('Document.prototype.fonts')) {
      browserVersion = 10.2;
    } else if ($.hasFeature('Crypto.prototype.subtle')) {
      browserVersion = 10.1;
    } else if ($.hasFeature('Element.prototype.attachShadow')) {
      browserVersion = 10;
    } else if ($.hasFeature('HTMLPictureElement')) {
      browserVersion = 9.3;
    } else if ($.hasFeature('PerformanceTiming')) {
      browserVersion = 9.2;
    } else if ($.hasFeature('Document.prototype.scrollingElement')) {
      browserVersion = 9;
    } else if ($.hasFeature('WebGLActiveInfo')) {
      browserVersion = 8.1;
    } else if ($.hasFeature('Document.prototype.currentScript')) {
      browserVersion = 8;
    } else if ($.hasFeature('AudioTrackList')) {
      browserVersion = 7.1;
    } else if ($.hasFeature('Document.prototype.hidden')) {
      browserVersion = 7;
    } else if ($.hasFeature('Crypto')) {
      browserVersion = 6.1;
    } else if ($.hasFeature('Event')) {
      browserVersion = 6;
    } else if ($.hasFeature('KeyboardEvent.prototype.charCode')) {
      browserVersion = 5.1;
    } else if ($.hasFeature('Document.prototype.body')) {
      browserVersion = 5;
    } else if ($.hasFeature('History.prototype.pushState')) {
      browserVersion = 4.3;
    } else if ($.hasFeature('DeviceMotionEvent')) {
      browserVersion = 4.2;
    } else if ($.hasFeature('Element.prototype.getBoundingClientRect')) {
      browserVersion = 4;
    } else if ($.hasFeature('CanvasGradient')) {
      browserVersion = 3.2;
    } else if ($.hasFeature('SVGCircleElement')) {
      browserVersion = 3.1;
    } else if ($.hasFeature('Document.prototype.createTreeWalker')) {
      browserVersion = 3;
    } else if ($.hasFeature('GestureEvent')) {
      browserVersion = 2;
    } else if ($.hasFeature('Document.prototype.getElementById')) {
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
