import $ from '../helpers';
import { detectOS } from '../os';
import { detectChromiumVersion } from '../desktop/chromium';
import {
  LAYOUT_WEBKIT,
  LAYOUT_BLINK,
  detectLayout,
  LAYOUT_GECKO
} from '../layout';
import { detectFirefox, detectFirefoxVersion } from '../desktop/firefox';

export function detectFirefoxMobile() {
  var browser = 'Firefox Mobile';
  var layout = detectLayout();
  var os = detectOS();

  // Allowed layouts
  if ([LAYOUT_WEBKIT, LAYOUT_GECKO].indexOf(layout) === -1) {
    return;
  }

  // Firefox Android is Gecko, works like desktop
  // Firefox iOS is Webkit
  var hasWebKitFeatures = $.hasFeature('__firefox__');

  if (layout === LAYOUT_WEBKIT && !hasWebKitFeatures) {
    return;
  }

  var firefoxVersion = detectFirefoxVersion();

  if (!firefoxVersion) {
    return;
  }

  return Object.assign(os, {
    browser: browser,
    browserVersion: firefoxVersion,
    layout: layout,
    layoutVersion: undefined
  });
}
