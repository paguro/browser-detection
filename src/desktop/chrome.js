import $ from '../helpers';
import { detectOS } from '../os';
import { LAYOUT_BLINK, LAYOUT_WEBKIT, detectLayout } from '../layout';

export function detectChrome() {
  var appVersion = $.getFeature('navigator.appVersion');

  var browser = 'Chrome';
  var browserVersion;
  var layout = detectLayout();
  var os = detectOS();

  // Allowed Layouts:
  if ([LAYOUT_BLINK, LAYOUT_WEBKIT].indexOf(layout) === -1) {
    return;
  }

  if ($.hasFeature('chrome') && !appVersion.match(/Opera|OPR\//)) {
    if ($.hasFeature('SubmitEvent.prototype.submitter')) {
      browserVersion = 81;
    } else if (
      $.hasFeature('HTMLVideoElement.prototype.getVideoPlaybackQuality')
    ) {
      browserVersion = 80;
    } else if ($.hasFeature('GeolocationCoordinates')) {
      browserVersion = 79;
    } else if ($.hasFeature('CSS.registerProperty')) {
      browserVersion = 78;
    } else if ($.hasFeature('FormDataEvent')) {
      browserVersion = 77;
    } else if ($.hasFeature('Blob.prototype.arrayBuffer')) {
      browserVersion = 76;
    } else if ($.hasFeature('Animation.prototype.effect')) {
      browserVersion = 75;
    } else if ($.hasFeature('TextEncoder.prototype.encodeInto')) {
      browserVersion = 74;
    } else if ($.hasFeature('MediaSession')) {
      browserVersion = 73;
    } else if ($.hasFeature('RTCPeerConnection.prototype.connectionState')) {
      browserVersion = 72;
    } else if ($.hasFeature('Element.prototype.requestFullscreen')) {
      browserVersion = 71;
    } else if ($.hasFeature('HTMLScriptElement.prototype.referrerPolicy')) {
      browserVersion = 70;
    } else if ($.hasFeature('Element.prototype.toggleAttribute')) {
      browserVersion = 69;
    } else if ($.hasFeature('AnimationEvent.prototype.pseudoElement')) {
      browserVersion = 68;
    } else if ($.hasFeature('InputDeviceInfo.prototype.getCapabilities')) {
      browserVersion = 67;
    } else if ($.hasFeature('AbortController')) {
      browserVersion = 66;
    } else if ($.hasFeature('PerformanceObserver.prototype.takeRecords')) {
      browserVersion = 65;
    } else if ($.hasFeature('Document.prototype.alinkColor')) {
      browserVersion = 64;
    } else if ($.hasFeature('HTMLFrameSetElement.prototype.onbeforeprint')) {
      browserVersion = 63;
    } else if ($.hasFeature('HTMLDataElement')) {
      browserVersion = 62;
    } else if (
      $.hasFeature('SVGAnimationElement.prototype.getAttributeNames')
    ) {
      browserVersion = 61;
    } else if ($.hasFeature('BroadcastChannel.prototype.onmessageerror')) {
      browserVersion = 60;
    } else if ($.hasFeature('ImageCapture.prototype.getPhotoCapabilities')) {
      browserVersion = 59;
    } else if ($.hasFeature('AudioContext.prototype.baseLatency')) {
      browserVersion = 58;
    } else if ($.hasFeature('AudioContext.prototype.getOutputTimestamp')) {
      browserVersion = 57;
    } else if (
      $.hasFeature('BaseAudioContext.prototype.createConstantSource')
    ) {
      browserVersion = 56;
    } else if ($.hasFeature('Element.prototype.setPointerCapture')) {
      browserVersion = 55;
    } else if ($.hasFeature('BroadcastChannel')) {
      browserVersion = 54;
    } else if ($.hasFeature('Element.prototype.attachShadow')) {
      browserVersion = 53;
    } else if ($.hasFeature('AudioListener.prototype.forwardX')) {
      browserVersion = 52;
    } else if ($.hasFeature('CanvasCaptureMediaStreamTrack')) {
      browserVersion = 51;
    } else if ($.hasFeature('DOMTokenList.prototype.value')) {
      browserVersion = 50;
    } else if ($.hasFeature('URLSearchParams.prototype.toString')) {
      browserVersion = 49;
    } else if ($.hasFeature('webkitIDBIndex.prototype.getAll')) {
      browserVersion = 48;
    } else if ($.hasFeature('CSSNamespaceRule')) {
      browserVersion = 47;
    } else if (
      $.hasFeature('Performance.prototype.onresourcetimingbufferfull')
    ) {
      browserVersion = 46;
    } else if ($.hasFeature('BeforeInstallPromptEvent')) {
      browserVersion = 45;
    } else if ($.hasFeature('AudioBufferSourceNode.prototype.detune')) {
      browserVersion = 44;
    } else if ($.hasFeature('AnimationEvent')) {
      browserVersion = 43;
    } else if ($.hasFeature('AudioContext.prototype.close')) {
      browserVersion = 42;
    } else if ($.hasFeature('AudioContext.prototype.resume')) {
      browserVersion = 41;
    } else if ($.hasFeature('HTMLButtonElement.prototype.reportValidity')) {
      browserVersion = 40;
    } else if ($.hasFeature('Navigator.prototype.sendBeacon')) {
      browserVersion = 39;
    } else if ($.hasFeature('BatteryManager')) {
      browserVersion = 38;
    } else if ($.hasFeature('CryptoKey')) {
      browserVersion = 37;
    } else if ($.hasFeature('Element.prototype.animate')) {
      browserVersion = 36;
    } else if ($.hasFeature('AudioContext')) {
      browserVersion = 35;
    } else if ($.hasFeature('Element.prototype.matches')) {
      browserVersion = 34;
    } else if ($.hasFeature('Document.prototype.hidden')) {
      browserVersion = 33;
    } else if ($.hasFeature('Navigator.prototype.vibrate')) {
      browserVersion = 32;
    } else if ($.hasFeature('CanvasRenderingContext2D.prototype.ellipse')) {
      browserVersion = 31;
    } else if (
      $.hasFeature('CanvasRenderingContext2D.prototype.imageSmoothingEnabled')
    ) {
      browserVersion = 30;
    } else if ($.hasFeature('Document.prototype.currentScript')) {
      browserVersion = 29;
    } else if ($.hasFeature('CSS')) {
      browserVersion = 28;
    } else if ($.hasFeature('RTCDTMFSender')) {
      browserVersion = 27;
    } else if ($.hasFeature('Element.prototype.attributes')) {
      browserVersion = 26;
    } else if ($.hasFeature('RTCPeerConnection.prototype.createDataChannel')) {
      browserVersion = 25;
    } else if ($.hasFeature('IDBCursor')) {
      browserVersion = 24;
    } else if ($.hasFeature('HTMLTrackElement')) {
      browserVersion = 23;
    } else if ($.hasFeature('Notification')) {
      browserVersion = 22;
    } else if ($.hasFeature('Blob.prototype.slice')) {
      browserVersion = 21;
    } else if ($.hasFeature('Blob')) {
      browserVersion = 20;
    } else if ($.hasFeature('HTMLElement.prototype.translate')) {
      browserVersion = 19;
    } else if ($.hasFeature('Event.prototype.defaultPrevented')) {
      browserVersion = 18;
    } else if ($.hasFeature('HTMLElement.prototype.accessKey')) {
      browserVersion = 17;
    } else if ($.hasFeature('CustomEvent')) {
      browserVersion = 15;
    } else if ($.hasFeature('AnalyserNode')) {
      browserVersion = 14;
    } else if ($.hasFeature('DataTransferItem.prototype.webkitGetAsEntry')) {
      browserVersion = 13;
    } else if ($.hasFeature('Document.prototype.onselectionchange')) {
      browserVersion = 12;
    } else if ($.hasFeature('Crypto')) {
      browserVersion = 11;
    } else if ($.hasFeature('ErrorEvent')) {
      browserVersion = 10;
    } else if ($.hasFeature('EventSource')) {
      browserVersion = 9;
    } else if ($.hasFeature('Document.prototype.caretRangeFromPoint')) {
      browserVersion = 8;
    } else if ($.hasFeature('FileReader')) {
      browserVersion = 7;
    } else if ($.hasFeature('Event.prototype.stopImmediatePropagation')) {
      browserVersion = 6;
    } else if ($.hasFeature('Blob')) {
      browserVersion = 5;
    } else if ($.hasFeature('CanvasGradient')) {
      browserVersion = 4;
    } else if ($.hasFeature('StorageEvent.prototype.storageArea')) {
      browserVersion = 3;
    } else if ($.hasFeature('TransitionEvent.prototype.propertyName')) {
      browserVersion = 2;
    } else if ($.hasFeature('CDATASection')) {
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
