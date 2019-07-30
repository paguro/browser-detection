import { detectOS } from '../os';
import {
  ENGINE_BLINK,
  ENGINE_WEBKIT,
  ENGINE_PRESTO,
  detectEngine
} from '../engine';
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

  var name = 'Opera';
  var engine = detectEngine();
  var os = detectOS();
  var version;

  // Allowed Engines:
  if ([ENGINE_BLINK, ENGINE_WEBKIT, ENGINE_PRESTO].indexOf(engine) === -1) {
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
      version = 60;
    } else if (hasFeature('Element.requestFullscreen')) {
      version = 58;
    } else if (hasFeature('Bluetooth')) {
      version = 57;
    } else if (hasFeature('AbsoluteOrientationSensor')) {
      version = 56;
    } else if (hasFeature('CustomElementRegistry.upgrade')) {
      version = 55;
    } else if (hasFeature('InputDeviceInfo.getCapabilities')) {
      version = 54;
    } else if (hasFeature('AbortController')) {
      version = 53;
    } else if (hasFeature('CSS.paintWorklet')) {
      version = 52;
    } else if (hasFeature('EventTarget')) {
      version = 51;
    } else if (hasFeature('Navigator.deviceMemory')) {
      version = 50;
    } else if (hasFeature('HTMLDataElement')) {
      version = 49;
    } else if (hasFeature('DOMMatrix')) {
      version = 48;
    } else if (hasFeature('BroadcastChannel.onmessageerror')) {
      version = 47;
    } else if (hasFeature('ByteLengthQueuingStrategy')) {
      version = 46;
    } else if (hasFeature('AudioContext.baseLatency')) {
      version = 45;
    } else if (hasFeature('AudioContext.getOutputTimestamp')) {
      version = 44;
    } else if (hasFeature('BaseAudioContext.createConstantSource')) {
      version = 43;
    } else if (hasFeature('AnalyserNode')) {
      version = 42;
    } else if (hasFeature('BroadcastChannel')) {
      version = 41;
    } else if (hasFeature('Element.attachShadow')) {
      version = 40;
    } else if (hasFeature('AudioListener.forwardX')) {
      version = 39;
    } else if (hasFeature('Element.scrollIntoView')) {
      version = 38;
    } else if (hasFeature('DOMTokenList.value')) {
      version = 37;
    } else if (hasFeature('BlobEvent')) {
      version = 36;
    } else if (hasFeature('IDBIndex.getAll')) {
      version = 35;
    } else if (hasFeature('Cache.matchAll')) {
      version = 34;
    } else if (hasFeature('Cache.addAll')) {
      version = 33;
    } else if (hasFeature('CSSGroupingRule')) {
      version = 32;
    } else if (hasFeature('AudioBufferSourceNode.detune')) {
      version = 31;
    } else if (hasFeature('Cache')) {
      version = 30;
    } else if (hasFeature('Headers')) {
      version = 29;
    } else if (hasFeature('Element.closest')) {
      version = 28;
    } else if (hasFeature('CacheStorage')) {
      version = 27;
    } else if (hasFeature('HTMLContentElement')) {
      version = 26;
    } else if (hasFeature('BatteryManager')) {
      version = 25;
    } else if (hasFeature('Crypto.subtle')) {
      version = 24;
    } else if (hasFeature('Element.animate')) {
      version = 23;
    } else if (hasFeature('AudioContext')) {
      version = 22;
    } else if (hasFeature('Element.matches')) {
      version = 21;
    } else if (hasFeature('URL')) {
      version = 19;
    } else if (hasFeature('CanvasRenderingContext2D.ellipse')) {
      version = 18;
    } else if (hasFeature('KeyboardEvent.getModifierState')) {
      version = 17;
    } else if (hasFeature('Document.currentScript')) {
      version = 16;
    } else if (hasFeature('AnalyserNode')) {
      version = 15;
    } else if (hasFeature('AnimationEvent')) {
      version = 12.1;
    } else if (hasFeature('Blob')) {
      version = 12;
    } else if (hasFeature('CustomEvent')) {
      version = 11.6;
    } else if (hasFeature('Element.matches')) {
      version = 11.5;
    } else if (hasFeature('Blob')) {
      version = 11;
    } else if (hasFeature('HashChangeEvent')) {
      version = 10.6;
    } else if (hasFeature('HTMLVideoElement')) {
      version = 10.5;
    } else if (hasFeature('KeyboardEvent.which')) {
      version = 10.1;
    } else if (hasFeature('Document.querySelector')) {
      version = 10;
    } else if (hasFeature('Document.body')) {
      version = 9.6;
    } else if (hasFeature('CanvasGradient')) {
      version = 9;
    } else if (hasFeature('DOMParser')) {
      version = 8;
    } else if (hasFeature('HTMLMarqueeElement')) {
      version = 7.2;
    } else if (hasFeature('Document.getElementById')) {
      version = 7;
    } else if (hasFeature('MouseEvent.which')) {
      version = 5;
    } else if (hasFeature('HTMLSelectElement')) {
      version = 2;
    }

    if (version) {
      return { name: name, engine: engine, version: version, os: os };
    }
  }
}
