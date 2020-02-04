import { detectOS } from '../os';
import { LAYOUT_BLINK, LAYOUT_WEBKIT, detectLayout } from '../layout';
import { hasFeature } from '../feature';

export function detectChrome() {
  var appVersion = window.navigator.appVersion;

  var browser = 'Chrome';
  var browserVersion;
  var layout = detectLayout();
  var os = detectOS();

  // Allowed Layouts:
  if ([LAYOUT_BLINK, LAYOUT_WEBKIT].indexOf(layout) === -1) {
    return;
  }

  if (window.chrome && !appVersion.match(/Opera|OPR\//)) {
    if (hasFeature('HTMLVideoElement.getVideoPlaybackQuality')) {
      browserVersion = 80;
    } else if (hasFeature('GeolocationCoordinates')) {
      browserVersion = 79;
    } else if (hasFeature('CSS.registerProperty')) {
      browserVersion = 78;
    } else if (hasFeature('FormDataEvent')) {
      browserVersion = 77;
    } else if (hasFeature('Blob.arrayBuffer')) {
      browserVersion = 76;
    } else if (eval('31_337') === 31337) {
      // https://developers.google.com/web/updates/2019/06/nic75#num-sep
      browserVersion = 75;
    } else if (hasFeature('TextEncoder.encodeInto')) {
      browserVersion = 74;
    } else if (hasFeature('MediaSession')) {
      browserVersion = 73;
    } else if (hasFeature('RTCPeerConnection.connectionState')) {
      browserVersion = 72;
    } else if (hasFeature('Element.requestFullscreen')) {
      browserVersion = 71;
    } else if (hasFeature('HTMLScriptElement.referrerPolicy')) {
      browserVersion = 70;
    } else if (hasFeature('Element.toggleAttribute')) {
      browserVersion = 69;
    } else if (hasFeature('AnimationEvent.pseudoElement')) {
      browserVersion = 68;
    } else if (hasFeature('InputDeviceInfo.getCapabilities')) {
      browserVersion = 67;
    } else if (hasFeature('AbortController')) {
      browserVersion = 66;
    } else if (hasFeature('CSSStyleRule.styleMap')) {
      browserVersion = 65;
    } else if (hasFeature('Document.alinkColor')) {
      browserVersion = 64;
    } else if (hasFeature('MediaStreamTrack.applyConstraints')) {
      browserVersion = 63;
    } else if (hasFeature('HTMLDataElement')) {
      browserVersion = 62;
    } else if (hasFeature('CSS.supports')) {
      browserVersion = 61;
    } else if (hasFeature('BroadcastChannel.onmessageerror')) {
      browserVersion = 60;
    } else if (hasFeature('BaseAudioContext.createPeriodicWave')) {
      browserVersion = 59;
    } else if (hasFeature('AudioContext.baseLatency')) {
      browserVersion = 58;
    } else if (hasFeature('AudioContext.getOutputTimestamp')) {
      browserVersion = 57;
    } else if (hasFeature('BaseAudioContext.createConstantSource')) {
      browserVersion = 56;
    } else if (hasFeature('AnalyserNode')) {
      browserVersion = 55;
    } else if (hasFeature('BroadcastChannel')) {
      browserVersion = 54;
    } else if (hasFeature('Element.attachShadow')) {
      browserVersion = 53;
    } else if (hasFeature('AudioListener.forwardX')) {
      browserVersion = 52;
    } else if (hasFeature('CanvasCaptureMediaStreamTrack')) {
      browserVersion = 51;
    } else if (hasFeature('DOMTokenList.value')) {
      browserVersion = 50;
    } else if (hasFeature('BaseAudioContext.createIIRFilter')) {
      browserVersion = 49;
    } else if (hasFeature('IDBIndex.getAll')) {
      browserVersion = 48;
    } else if (hasFeature('CSSNamespaceRule')) {
      browserVersion = 47;
    } else if (hasFeature('Attr.localName')) {
      browserVersion = 46;
    } else if (hasFeature('BeforeInstallPromptEvent')) {
      browserVersion = 45;
    } else if (hasFeature('AudioBufferSourceNode.detune')) {
      browserVersion = 44;
    } else if (hasFeature('AnimationEvent')) {
      browserVersion = 43;
    } else if (hasFeature('AudioContext.close')) {
      browserVersion = 42;
    } else if (hasFeature('AudioContext.resume')) {
      browserVersion = 41;
    } else if (hasFeature('HTMLButtonElement.reportValidity')) {
      browserVersion = 40;
    } else if (hasFeature('Navigator.sendBeacon')) {
      browserVersion = 39;
    } else if (hasFeature('BatteryManager')) {
      browserVersion = 38;
    } else if (hasFeature('CryptoKey')) {
      browserVersion = 37;
    } else if (hasFeature('Element.animate')) {
      browserVersion = 36;
    } else if (hasFeature('AudioContext')) {
      browserVersion = 35;
    } else if (hasFeature('Element.matches')) {
      browserVersion = 34;
    } else if (hasFeature('Document.hidden')) {
      browserVersion = 33;
    } else if (hasFeature('Navigator.vibrate')) {
      browserVersion = 32;
    } else if (hasFeature('CanvasRenderingContext2D.ellipse')) {
      browserVersion = 31;
    } else if (hasFeature('CanvasRenderingContext2D.imageSmoothingEnabled')) {
      browserVersion = 30;
    } else if (hasFeature('Document.currentScript')) {
      browserVersion = 29;
    } else if (hasFeature('CSS')) {
      browserVersion = 28;
    } else if (hasFeature('RTCDTMFSender')) {
      browserVersion = 27;
    } else if (hasFeature('Element.attributes')) {
      browserVersion = 26;
    } else if (hasFeature('RTCPeerConnection.createDataChannel')) {
      browserVersion = 25;
    } else if (hasFeature('IDBCursor')) {
      browserVersion = 24;
    } else if (hasFeature('HTMLTrackElement')) {
      browserVersion = 23;
    } else if (hasFeature('Notification')) {
      browserVersion = 22;
    } else if (hasFeature('Blob.slice')) {
      browserVersion = 21;
    } else if (hasFeature('Blob')) {
      browserVersion = 20;
    } else if (hasFeature('HTMLElement.translate')) {
      browserVersion = 19;
    } else if (hasFeature('Event.defaultPrevented')) {
      browserVersion = 18;
    } else if (hasFeature('HTMLElement.accessKey')) {
      browserVersion = 17;
    } else if (hasFeature('CustomEvent')) {
      browserVersion = 15;
    } else if (hasFeature('AnalyserNode')) {
      browserVersion = 14;
    } else if (hasFeature('DataTransferItem.webkitGetAsEntry')) {
      browserVersion = 13;
    } else if (hasFeature('Document.onselectionchange')) {
      browserVersion = 12;
    } else if (hasFeature('Crypto')) {
      browserVersion = 11;
    } else if (hasFeature('ErrorEvent')) {
      browserVersion = 10;
    } else if (hasFeature('EventSource')) {
      browserVersion = 9;
    } else if (hasFeature('Document.caretRangeFromPoint')) {
      browserVersion = 8;
    } else if (hasFeature('FileReader')) {
      browserVersion = 7;
    } else if (hasFeature('Event.stopImmediatePropagation')) {
      browserVersion = 6;
    } else if (hasFeature('Blob')) {
      browserVersion = 5;
    } else if (hasFeature('CanvasGradient')) {
      browserVersion = 4;
    } else if (hasFeature('StorageEvent.storageArea')) {
      browserVersion = 3;
    } else if (hasFeature('TransitionEvent.propertyName')) {
      browserVersion = 2;
    } else if (hasFeature('CDATASection')) {
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
