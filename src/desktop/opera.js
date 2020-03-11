import $ from '../helpers';
import { detectChromium } from './chromium';
import { detectLayout } from '../layout';
import { detectOS } from '../os';

export function detectOpera() {
  var appVersion = $.getFeature('navigator.appVersion');

  var browser = 'Opera';
  var browserVersion;
  var layout = detectLayout();
  var os = detectOS();

  // Blink or WebKit-based Opera
  var isOpera = appVersion.match(/Opera|OPR\//);
  if (!isOpera) {
    return;
  }

  // Opera is based on Chromium since v15
  var chromiumFeatures = detectChromium();

  if (chromiumFeatures) {
    // Opera to Chromium version mapping:
    // https://help.opera.com/en/opera-version-history/
    var cV = chromiumFeatures.browserVersion;

    browserVersion = cV - 13;

    return Object.assign(chromiumFeatures, {
      browser: browser,
      browserVersion: browserVersion
    });
  }

  // TODO: We have tests for Chromium only from v66.
  //  Hence, Opera is inherited up to 53. The remaining will be checked the old-school
  if ($.hasFeature('PerformanceServerTiming')) {
    browserVersion = 52;
  } else if ($.hasFeature('Request.prototype.cache')) {
    browserVersion = 51;
  } else if ($.hasFeature('OverconstrainedError.prototype.constraint')) {
    browserVersion = 50;
  } else if ($.hasFeature('HTMLDataElement')) {
    browserVersion = 49;
  } else if ($.hasFeature('DOMMatrix')) {
    browserVersion = 48;
  } else if ($.hasFeature('MessagePort.prototype.onmessageerror')) {
    browserVersion = 47;
  } else if ($.hasFeature('ImageCapture.prototype.takePhoto')) {
    browserVersion = 46;
  } else if ($.hasFeature('AudioContext.prototype.baseLatency')) {
    browserVersion = 45;
  } else if ($.hasFeature('AudioContext.prototype.getOutputTimestamp')) {
    browserVersion = 44;
  } else if ($.hasFeature('BaseAudioContext.prototype.createConstantSource')) {
    browserVersion = 43;
  } else if ($.hasFeature('MediaKeySession.prototype.onmessage')) {
    browserVersion = 42;
  } else if ($.hasFeature('BroadcastChannel.prototype.close')) {
    browserVersion = 41;
  } else if ($.hasFeature('Element.prototype.attachShadow')) {
    browserVersion = 40;
  } else if ($.hasFeature('AudioListener.prototype.forwardX')) {
    browserVersion = 39;
  } else if ($.hasFeature('Node.prototype.isConnected')) {
    browserVersion = 38;
  } else if ($.hasFeature('DOMTokenList.prototype.value')) {
    browserVersion = 37;
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
