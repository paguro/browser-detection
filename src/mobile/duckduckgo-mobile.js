import { detectOS } from '../os';
import { LAYOUT_WEBKIT, detectLayout } from '../layout';
import { hasFeature } from '../feature';

export function detectDuckDuckGoMobile() {
  var browser = 'Duck Duck Go';
  var browserVersion;
  var layout = detectLayout();
  var os = detectOS();

  // Allowed Layouts:
  if ([LAYOUT_WEBKIT].indexOf(layout) === -1) {
    return;
  }

  if (!hasFeature('window.duckduckgoBlockerData')) {
    return;
  }

  if (browserVersion) {
    return {
      browser: browser,
      browserVersion: browserVersion,
      layout: layout,
      layoutVersion: undefined,
      os: os,
      osVersion: undefined
    };
  }
}
