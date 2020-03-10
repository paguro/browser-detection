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
