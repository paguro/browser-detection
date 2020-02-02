import { detectOS } from '../os';
import { ENGINE_TRIDENT, detectEngine } from '../engine';
import { hasFeature } from '../feature';

export function detectInternetExplorer() {
  var browser = 'IE';
  var browserVersion;
  var engine = detectEngine();
  var os = detectOS();

  // Allowed Engines:
  if ([ENGINE_TRIDENT].indexOf(engine) === -1) {
    return;
  }

  if (hasFeature('ANGLE_instanced_arrays')) {
    browserVersion = 11;
  } else if (hasFeature('AnimationEvent')) {
    browserVersion = 10;
  } else if (hasFeature('CSSRule')) {
    browserVersion = 9;
  } else if (hasFeature('console')) {
    browserVersion = 8;
  } else if (hasFeature('HTMLElement.tabIndex')) {
    browserVersion = 7;
  } else if (hasFeature('CharacterData')) {
    browserVersion = 6;
  } else if (hasFeature('document.getElementById')) {
    browserVersion = 5.5;
  } else if (hasFeature('document.documentElement')) {
    browserVersion = 5;
  } else if (hasFeature('document.queryCommandEnabled')) {
    browserVersion = 4;
  } else if (hasFeature('HTMLMarqueeElement')) {
    browserVersion = 2;
  } else if (hasFeature('HTMLSelectElement')) {
    browserVersion = 1;
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
