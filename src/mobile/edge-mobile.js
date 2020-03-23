import $ from '../helpers';
import { detectOS } from '../os';
import { detectChromiumVersion } from '../desktop/chromium';
import { LAYOUT_WEBKIT, LAYOUT_BLINK, detectLayout } from '../layout';
import { detectChromeMobile } from './chrome-mobile';

export function detectEdgeMobile() {
  var browser = 'Edge Mobile';
  var layout = detectLayout();
  var browserVersion;
  var os = detectOS();

  var chromeMobile = detectChromeMobile();

  if (!chromeMobile) {
    return;
  }

  if (!$.hasFeature('__edgeTrackingPreventionStatistics')) {
    return;
  }

  browserVersion = 44;

  return Object.assign(os, {
    browser: browser,
    browserVersion: browserVersion,
    layout: layout,
    layoutVersion: undefined
  });
}
