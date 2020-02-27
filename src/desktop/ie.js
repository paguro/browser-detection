import $ from '../helpers';
import { detectOS } from '../os';
import { LAYOUT_TRIDENT, detectLayout } from '../layout';

export function detectInternetExplorer() {
  var browser = 'IE';
  var browserVersion;
  var layout = detectLayout();
  var os = detectOS();

  // Allowed Layouts:
  if ([LAYOUT_TRIDENT].indexOf(layout) === -1) {
    return;
  }

  if ($.hasFeature('ANGLE_instanced_arrays')) {
    browserVersion = 11;
  } else if ($.hasFeature('AnimationEvent')) {
    browserVersion = 10;
  } else if ($.hasFeature('CSSRule')) {
    browserVersion = 9;
  } else if ($.hasFeature('console')) {
    browserVersion = 8;
  } else if ($.hasFeature('HTMLElement.prototype.tabIndex')) {
    browserVersion = 7;
  } else if ($.hasFeature('CharacterData')) {
    browserVersion = 6;
  } else if ($.hasFeature('document.getElementById')) {
    browserVersion = 5.5;
  } else if ($.hasFeature('document.documentElement')) {
    browserVersion = 5;
  } else if ($.hasFeature('document.queryCommandEnabled')) {
    browserVersion = 4;
  } else if ($.hasFeature('HTMLMarqueeElement')) {
    browserVersion = 2;
  } else if ($.hasFeature('HTMLSelectElement')) {
    browserVersion = 1;
  } else {
    return;
  }

  return {
    browser: browser,
    browserVersion: browserVersion,
    layout: layout,
    layoutVersion: undefined,
    os: os,
    osVersion: undefined
  };
}
