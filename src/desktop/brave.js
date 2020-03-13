import $ from '../helpers';
import { detectChromium } from './chromium';

var BRAVE_VERSION_MAP = {
  72: 0.6,
  73: 0.61,
  74: 0.63,
  75: 0.65,
  76: 0.67, // or 0.68 if Brave supports the plugins
  77: 0.69,
  78: 1.0,
  79: 1.1,
  80: 1.3
};

export function detectBrave() {
  var plugins = $.getFeature('navigator.plugins');

  var browser = 'Brave';
  var browserVersion;

  // Brave is based on Chromium
  var chromiumFeatures = detectChromium();

  if (!chromiumFeatures) {
    return;
  }

  // Plugins have been introduced in v0.68
  // The number of supported plugins is just 2 despite other Chromium-based browsers
  if (plugins.length !== 0 && plugins.length !== 2) {
    return;
  }

  browserVersion = BRAVE_VERSION_MAP[chromiumFeatures.browserVersion];

  // Both 0.67 and 0.68 are based on the same Chromium version but the 0.68
  // supports plugins
  if (browserVersion === 0.67 && plugins.length === 2) {
    browserVersion = 0.68;
  }

  return Object.assign(chromiumFeatures, {
    browser: browser,
    browserVersion: browserVersion
  });
}
