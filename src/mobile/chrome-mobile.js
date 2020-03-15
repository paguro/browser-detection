import $ from '../helpers';
import { detectOS } from '../os';
import { detectChromiumVersion } from '../desktop/chromium';
import { LAYOUT_WEBKIT, LAYOUT_BLINK, detectLayout } from '../layout';

export function detectChromeMobile() {
  var browser = 'Chrome Mobile';
  var layout = detectLayout();
  var os = detectOS();

  // Allowed layouts
  if ([LAYOUT_WEBKIT, LAYOUT_BLINK].indexOf(layout) === -1) {
    return;
  }

  // Chrome iOS is Webkit
  var hasWebKitFeatures =
    $.hasFeature('$jscomp') ||
    $.hasFeature('__gCrWeb') ||
    $.hasFeature('webkit');

  if (layout === LAYOUT_WEBKIT && !hasWebKitFeatures) {
    return;
  }

  // Chrome Android is Blink
  var hasBlinkFeatures = $.hasFeature('chrome');

  if (layout === LAYOUT_BLINK && !hasBlinkFeatures) {
    return;
  }

  var chromiumVersion = detectChromiumVersion();

  if (!chromiumVersion) {
    return;
  }

  return Object.assign(os, {
    browser: browser,
    browserVersion: chromiumVersion,
    layout: layout,
    layoutVersion: undefined
  });
}
