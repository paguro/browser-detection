import $ from '../helpers';
import { detectOS } from '../os';
import { LAYOUT_BLINK, LAYOUT_WEBKIT, detectLayout } from '../layout';

export function detectChromium() {
  // var appVersion = $.getFeature('navigator.appVersion');

  var browser = 'Chromium';
  var browserVersion;
  var layout = detectLayout();
  var os = detectOS();

  if ([LAYOUT_BLINK].indexOf(layout) === -1) {
    return;
  }

  if (!$.hasFeature('chrome')) {
    return;
  }

  if (!$.hasFeature('navigator.plugins.Chromium PDF Viewer')) {
    return;
  }

  if ($.hasFeature('CompressionStream')) {
    browserVersion = 80;
  } else if ($.hasFeature('GeolocationCoordinates')) {
    browserVersion = 79;
  } else if ($.hasFeature('ReadableStreamDefaultReader')) {
    browserVersion = 78;
  } else if ($.hasFeature('FormDataEvent')) {
    browserVersion = 77;
  } else if ($.hasFeature('Blob.prototype.arrayBuffer')) {
    browserVersion = 76;
  } else if ($.hasFeature('RTCRtpReceiver.prototype.rtcpTransport')) {
    browserVersion = 75;
  } else if ($.hasFeature('TextEncoder.prototype.encodeInto')) {
    browserVersion = 74;
  } else if ($.hasFeature('MediaSession')) {
    browserVersion = 73;
  } else if ($.hasFeature('Intl.ListFormat')) {
    browserVersion = 72;
  } else if ($.hasFeature('TextEncoderStream')) {
    browserVersion = 71;
  } else if ($.hasFeature('Atomics')) {
    browserVersion = 70;
  } else if (
    $.hasFeature('webkitRTCPeerConnection.prototype.getTransceivers')
  ) {
    browserVersion = 69;
  } else if ($.hasFeature('CustomElementRegistry.prototype.upgrade')) {
    browserVersion = 68;
  } else if ($.hasFeature('DataView.prototype.setBigUint64')) {
    browserVersion = 67;
  } else if ($.hasFeature('AbortController')) {
    browserVersion = 66;
  } else {
    return;
  }

  return {
    browser: browser,
    browserVersion: browserVersion,
    layout: layout,
    layoutVersion: undefined,
    os: os,
    osVersion: undefined
  };
}
