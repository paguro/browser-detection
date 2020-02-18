import $ from '../helpers';
import { detectChrome } from '../desktop/chrome';

export function detectBrave() {
  var browser = 'Brave';
  var browserVersion;
  var chromeFeatures = detectChrome();

  // Brave must have the same feature of Chrome
  if (!chromeFeatures) {
    return;
  }

  var plugins = $.getFeature('navigator.plugins');

  // Brave does not support internal-nacl-plugin
  // TODO: Switch to a more reliable check
  if (!plugins || plugins.length !== 2) {
    return;
  }

  if ($.hasFeature('DecompressionStream')) {
    browserVersion = 1.3;
  } else {
    browserVersion = 1.2;
  }

  return Object.assign(chromeFeatures, {
    browser: browser,
    browserVersion: browserVersion
  });
}
