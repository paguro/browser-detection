import { detectOS } from '../os';
import {
  LAYOUT_BLINK,
  LAYOUT_WEBKIT,
  LAYOUT_PRESTO,
  detectLayout
} from '../layout';
import { hasFeature } from '../feature';

// References
// - https://it.wikipedia.org/wiki/Opera_(browser)#Cronologia_delle_versioni
// - Opera version history:
//      - 1-12.18 https://help.opera.com/en/operas-archived-history/
//      - =>15  https://help.opera.com/en/opera-version-history/
// - Legacy features http://www.howtocreate.co.uk/operaStuff/operaObject.html
// - Opera Objects http://www.howtocreate.co.uk/operaStuff/operaObject.html

export function detectOpera() {
  var appVersion = window.navigator.appVersion;

  var browser = 'Opera';
  var browserVersion;
  var layout = detectLayout();
  var os = detectOS();

  // Allowed Layouts:
  if ([LAYOUT_BLINK, LAYOUT_WEBKIT, LAYOUT_PRESTO].indexOf(layout) === -1) {
    return;
  }

  // (Blink|WebKit)-based Opera
  // vs
  // Legacy Opera
  if (
    appVersion.match(/Opera|OPR\//) ||
    (window.opera && appVersion.match(/Opera.*Presto.*Version\/([\d+.]+)/))
  ) {
    if (hasFeature('ShadowRoot.adoptedStyleSheets')) {
      browserVersion = 60;
    } else if (hasFeature('Element.requestFullscreen')) {
      browserVersion = 58;
    } else if (hasFeature('Bluetooth')) {
      browserVersion = 57;
    } else if (hasFeature('AbsoluteOrientationSensor')) {
      browserVersion = 56;
    } else if (hasFeature('CustomElementRegistry.upgrade')) {
      browserVersion = 55;
    } else if (hasFeature('InputDeviceInfo.getCapabilities')) {
      browserVersion = 54;
    } else if (hasFeature('AbortController')) {
      browserVersion = 53;
    } else if (hasFeature('CSS.paintWorklet')) {
      browserVersion = 52;
    } else if (hasFeature('EventTarget')) {
      browserVersion = 51;
    } else if (hasFeature('Navigator.deviceMemory')) {
      browserVersion = 50;
    } else if (hasFeature('HTMLDataElement')) {
      browserVersion = 49;
    } else if (hasFeature('DOMMatrix')) {
      browserVersion = 48;
    } else if (hasFeature('BroadcastChannel.onmessageerror')) {
      browserVersion = 47;
    } else if (hasFeature('ByteLengthQueuingStrategy')) {
      browserVersion = 46;
    } else if (hasFeature('AudioContext.baseLatency')) {
      browserVersion = 45;
    } else if (hasFeature('AudioContext.getOutputTimestamp')) {
      browserVersion = 44;
    } else if (hasFeature('BaseAudioContext.createConstantSource')) {
      browserVersion = 43;
    } else if (hasFeature('AnalyserNode')) {
      browserVersion = 42;
    } else if (hasFeature('BroadcastChannel')) {
      browserVersion = 41;
    } else if (hasFeature('Element.attachShadow')) {
      browserVersion = 40;
    } else if (hasFeature('AudioListener.forwardX')) {
      browserVersion = 39;
    } else if (hasFeature('Element.scrollIntoView')) {
      browserVersion = 38;
    } else if (hasFeature('DOMTokenList.value')) {
      browserVersion = 37;
    } else if (hasFeature('BlobEvent')) {
      browserVersion = 36;
    } else if (hasFeature('IDBIndex.getAll')) {
      browserVersion = 35;
    } else if (hasFeature('Cache.matchAll')) {
      browserVersion = 34;
    } else if (hasFeature('Cache.addAll')) {
      browserVersion = 33;
    } else if (hasFeature('CSSGroupingRule')) {
      browserVersion = 32;
    } else if (hasFeature('AudioBufferSourceNode.detune')) {
      browserVersion = 31;
    } else if (hasFeature('Cache')) {
      browserVersion = 30;
    } else if (hasFeature('Headers')) {
      browserVersion = 29;
    } else if (hasFeature('Element.closest')) {
      browserVersion = 28;
    } else if (hasFeature('CacheStorage')) {
      browserVersion = 27;
    } else if (hasFeature('HTMLContentElement')) {
      browserVersion = 26;
    } else if (hasFeature('BatteryManager')) {
      browserVersion = 25;
    } else if (hasFeature('Crypto.subtle')) {
      browserVersion = 24;
    } else if (hasFeature('Element.animate')) {
      browserVersion = 23;
    } else if (hasFeature('AudioContext')) {
      browserVersion = 22;
    } else if (hasFeature('Element.matches')) {
      browserVersion = 21;
    } else if (hasFeature('URL')) {
      browserVersion = 19;
    } else if (hasFeature('CanvasRenderingContext2D.ellipse')) {
      browserVersion = 18;
    } else if (hasFeature('KeyboardEvent.getModifierState')) {
      browserVersion = 17;
    } else if (hasFeature('Document.currentScript')) {
      browserVersion = 16;
    } else if (hasFeature('AnalyserNode')) {
      browserVersion = 15;
    } else if (hasFeature('AnimationEvent')) {
      browserVersion = 12.1;
    } else if (hasFeature('Blob')) {
      browserVersion = 12;
    } else if (hasFeature('CustomEvent')) {
      browserVersion = 11.6;
    } else if (hasFeature('Element.matches')) {
      browserVersion = 11.5;
    } else if (hasFeature('Blob')) {
      browserVersion = 11;
    } else if (hasFeature('HashChangeEvent')) {
      browserVersion = 10.6;
    } else if (hasFeature('HTMLVideoElement')) {
      browserVersion = 10.5;
    } else if (hasFeature('KeyboardEvent.which')) {
      browserVersion = 10.1;
    } else if (hasFeature('Document.querySelector')) {
      browserVersion = 10;
    } else if (hasFeature('Document.body')) {
      browserVersion = 9.6;
    } else if (hasFeature('CanvasGradient')) {
      browserVersion = 9;
    } else if (hasFeature('DOMParser')) {
      browserVersion = 8;
    } else if (hasFeature('HTMLMarqueeElement')) {
      browserVersion = 7.2;
    } else if (hasFeature('Document.getElementById')) {
      browserVersion = 7;
    } else if (hasFeature('MouseEvent.which')) {
      browserVersion = 5;
    } else if (hasFeature('HTMLSelectElement')) {
      browserVersion = 2;
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
