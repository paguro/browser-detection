import { detectOS } from '../os';
import { ENGINE_WEBKIT, detectEngine } from '../engine';
import { hasFeature } from '../feature';

export function detectDuckDuckGoMobile() {
  var name = 'Duck Duck Go';
  var engine = detectEngine();
  var os = detectOS();
  var version;

  // Allowed Engines:
  if ([ENGINE_WEBKIT].indexOf(engine) === -1) {
    return;
  }

  if (!hasFeature('window.duckduckgoBlockerData')) {
    return;
  }

  // TODO: add features for version detection
  version = 'unknown';

  if (version) {
    return { name: name, engine: engine, version: version, os: os };
  }
}
