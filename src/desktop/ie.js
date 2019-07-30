import { detectOS } from '../os';
import { ENGINE_TRIDENT, detectEngine } from '../engine';
import { hasFeature } from '../feature';

export function detectInternetExplorer() {
  var name = 'IE';
  var engine = detectEngine();
  var os = detectOS();
  var version;

  // Allowed Engines:
  // - TRIDENT
  if ([ENGINE_TRIDENT].indexOf(engine) === -1) {
    return;
  }

  if (hasFeature('ANGLE_instanced_arrays')) {
    version = 11;
  } else if (hasFeature('AnimationEvent')) {
    version = 10;
  } else if (hasFeature('CSSRule')) {
    version = 9;
  } else if (hasFeature('console')) {
    version = 8;
  } else if (hasFeature('HTMLElement.tabIndex')) {
    version = 7;
  } else if (hasFeature('CharacterData')) {
    version = 6;
  } else if (hasFeature('document.getElementById')) {
    version = 5.5;
  } else if (hasFeature('document.documentElement')) {
    version = 5;
  } else if (hasFeature('document.queryCommandEnabled')) {
    version = 4;
  } else if (hasFeature('HTMLMarqueeElement')) {
    version = 2;
  } else if (hasFeature('HTMLSelectElement')) {
    version = 1;
  }

  if (version) {
    return { name: name, engine: engine, version: version, os: os };
  }
}
