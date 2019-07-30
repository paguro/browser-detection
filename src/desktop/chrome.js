import { detectOS } from '../os';
import { ENGINE_BLINK, ENGINE_WEBKIT, detectEngine } from '../engine';
import { hasFeature } from '../feature';

export function detectChrome() {
  var appVersion = window.navigator.appVersion;

  var name = 'Chrome';
  var engine = detectEngine();
  var os = detectOS();
  var version;

  // Allowed Engines:
  if ([ENGINE_BLINK, ENGINE_WEBKIT].indexOf(engine) === -1) {
    return;
  }

  if (window.chrome && !appVersion.match(/Opera|OPR\//)) {
    if (hasFeature('TextEncoder.encodeInto')) {
      version = 74;
    } else if (hasFeature('MediaSession')) {
      version = 73;
    } else if (hasFeature('RTCPeerConnection.connectionState')) {
      version = 72;
    } else if (hasFeature('Element.requestFullscreen')) {
      version = 71;
    } else if (hasFeature('HTMLScriptElement.referrerPolicy')) {
      version = 70;
    } else if (hasFeature('Element.toggleAttribute')) {
      version = 69;
    } else if (hasFeature('AnimationEvent.pseudoElement')) {
      version = 68;
    } else if (hasFeature('InputDeviceInfo.getCapabilities')) {
      version = 67;
    } else if (hasFeature('AbortController')) {
      version = 66;
    } else if (hasFeature('CSSStyleRule.styleMap')) {
      version = 65;
    } else if (hasFeature('Document.alinkColor')) {
      version = 64;
    } else if (hasFeature('MediaStreamTrack.applyConstraints')) {
      version = 63;
    } else if (hasFeature('HTMLDataElement')) {
      version = 62;
    } else if (hasFeature('CSS.supports')) {
      version = 61;
    } else if (hasFeature('BroadcastChannel.onmessageerror')) {
      version = 60;
    } else if (hasFeature('BaseAudioContext.createPeriodicWave')) {
      version = 59;
    } else if (hasFeature('AudioContext.baseLatency')) {
      version = 58;
    } else if (hasFeature('AudioContext.getOutputTimestamp')) {
      version = 57;
    } else if (hasFeature('BaseAudioContext.createConstantSource')) {
      version = 56;
    } else if (hasFeature('AnalyserNode')) {
      version = 55;
    } else if (hasFeature('BroadcastChannel')) {
      version = 54;
    } else if (hasFeature('Element.attachShadow')) {
      version = 53;
    } else if (hasFeature('AudioListener.forwardX')) {
      version = 52;
    } else if (hasFeature('CanvasCaptureMediaStreamTrack')) {
      version = 51;
    } else if (hasFeature('DOMTokenList.value')) {
      version = 50;
    } else if (hasFeature('BaseAudioContext.createIIRFilter')) {
      version = 49;
    } else if (hasFeature('IDBIndex.getAll')) {
      version = 48;
    } else if (hasFeature('CSSNamespaceRule')) {
      version = 47;
    } else if (hasFeature('Attr.localName')) {
      version = 46;
    } else if (hasFeature('BeforeInstallPromptEvent')) {
      version = 45;
    } else if (hasFeature('AudioBufferSourceNode.detune')) {
      version = 44;
    } else if (hasFeature('AnimationEvent')) {
      version = 43;
    } else if (hasFeature('AudioContext.close')) {
      version = 42;
    } else if (hasFeature('AudioContext.resume')) {
      version = 41;
    } else if (hasFeature('HTMLButtonElement.reportValidity')) {
      version = 40;
    } else if (hasFeature('Navigator.sendBeacon')) {
      version = 39;
    } else if (hasFeature('BatteryManager')) {
      version = 38;
    } else if (hasFeature('CryptoKey')) {
      version = 37;
    } else if (hasFeature('Element.animate')) {
      version = 36;
    } else if (hasFeature('AudioContext')) {
      version = 35;
    } else if (hasFeature('Element.matches')) {
      version = 34;
    } else if (hasFeature('Document.hidden')) {
      version = 33;
    } else if (hasFeature('Navigator.vibrate')) {
      version = 32;
    } else if (hasFeature('CanvasRenderingContext2D.ellipse')) {
      version = 31;
    } else if (hasFeature('CanvasRenderingContext2D.imageSmoothingEnabled')) {
      version = 30;
    } else if (hasFeature('Document.currentScript')) {
      version = 29;
    } else if (hasFeature('CSS')) {
      version = 28;
    } else if (hasFeature('RTCDTMFSender')) {
      version = 27;
    } else if (hasFeature('Element.attributes')) {
      version = 26;
    } else if (hasFeature('RTCPeerConnection.createDataChannel')) {
      version = 25;
    } else if (hasFeature('IDBCursor')) {
      version = 24;
    } else if (hasFeature('HTMLTrackElement')) {
      version = 23;
    } else if (hasFeature('Notification')) {
      version = 22;
    } else if (hasFeature('Blob.slice')) {
      version = 21;
    } else if (hasFeature('Blob')) {
      version = 20;
    } else if (hasFeature('HTMLElement.translate')) {
      version = 19;
    } else if (hasFeature('Event.defaultPrevented')) {
      version = 18;
    } else if (hasFeature('HTMLElement.accessKey')) {
      version = 17;
    } else if (hasFeature('CustomEvent')) {
      version = 15;
    } else if (hasFeature('AnalyserNode')) {
      version = 14;
    } else if (hasFeature('DataTransferItem.webkitGetAsEntry')) {
      version = 13;
    } else if (hasFeature('Document.onselectionchange')) {
      version = 12;
    } else if (hasFeature('Crypto')) {
      version = 11;
    } else if (hasFeature('ErrorEvent')) {
      version = 10;
    } else if (hasFeature('EventSource')) {
      version = 9;
    } else if (hasFeature('Document.caretRangeFromPoint')) {
      version = 8;
    } else if (hasFeature('FileReader')) {
      version = 7;
    } else if (hasFeature('Event.stopImmediatePropagation')) {
      version = 6;
    } else if (hasFeature('Blob')) {
      version = 5;
    } else if (hasFeature('CanvasGradient')) {
      version = 4;
    } else if (hasFeature('StorageEvent.storageArea')) {
      version = 3;
    } else if (hasFeature('TransitionEvent.propertyName')) {
      version = 2;
    } else if (hasFeature('CDATASection')) {
      version = 1;
    }

    if (version) {
      return { name: name, engine: engine, version: version, os: os };
    }
  }
}
