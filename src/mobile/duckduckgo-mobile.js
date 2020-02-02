import { detectOS } from '../os';
import { ENGINE_WEBKIT, detectEngine } from '../engine';
import { hasFeature } from '../feature';

export function detectDuckDuckGoMobile() {
  var browser = 'Duck Duck Go';
  var browserVersion;
  var engine = detectEngine();
  var os = detectOS();

  // Allowed Engines:
  if ([ENGINE_WEBKIT].indexOf(engine) === -1) {
    return;
  }

  if (!hasFeature('window.duckduckgoBlockerData')) {
    return;
  }

  if (browserVersion) {
    return {
      browser: browser,
      browserVersion: browserVersion,
      engine: engine,
      engineVersion: undefined,
      os: os,
      osVersion: undefined
    };
  }
}
