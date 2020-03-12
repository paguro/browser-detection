import $ from '../helpers';
import { detectChromium } from './chromium';

export function detectOpera() {
  var appVersion = $.getFeature('navigator.appVersion');

  var browser = 'Opera';

  if (!appVersion.match(/Opera|OPR\//)) {
    return;
  }

  // Opera is based on Chromium since v15
  var chromiumFeatures = detectChromium();
  if (chromiumFeatures) {
    // Opera to Chromium version mapping:
    // https://help.opera.com/en/opera-version-history/
    var cV = chromiumFeatures.browserVersion;
    return Object.assign(chromiumFeatures, {
      browser: browser,
      browserVersion: cV - 13
    });
  }
}
