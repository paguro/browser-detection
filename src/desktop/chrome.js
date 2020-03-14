import $ from '../helpers';
import { detectChromium } from './chromium';

export function detectChrome() {
  var browser = 'Chrome';

  // Chrome is based on Chromium
  var chromiumFeatures = detectChromium();

  if (!chromiumFeatures) {
    return;
  }

  // Chromium v41 has both plugins
  if ($.hasPlugin('Chrome PDF Viewer') && !$.hasPlugin('Chromoting Viewer')) {
    return Object.assign(chromiumFeatures, {
      browser: browser
    });
  }
}
