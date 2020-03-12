import $ from '../helpers';
import { detectOS } from '../os';
import { LAYOUT_WEBKIT, detectLayout } from '../layout';

export function detectSafari() {
  var browser = 'Safari';
  var browserVersion;
  var layout = detectLayout();
  var os = detectOS();

  // Allowed layouts
  if ([LAYOUT_WEBKIT].indexOf(layout) === -1) {
    return;
  }

  // Version detection
  if ($.hasFeature('Document.prototype.onpointerenter')) {
    browserVersion = 13;
  } else if ($.hasFeature('DOMRectList')) {
    browserVersion = 12;
  } else if ($.hasFeature('HTMLSlotElement.prototype.onrejectionhandled')) {
    browserVersion = 11;
  } else if ($.hasFeature('XMLHttpRequest.prototype.onreadystatechange')) {
    browserVersion = 10;
  } else if ($.hasFeature('AnimationEvent')) {
    browserVersion = 9;
  } else if ($.hasFeature('Blob')) {
    browserVersion = 8;
  } else {
    return;
  }

  return Object.assign(os, {
    browser: browser,
    browserVersion: browserVersion,
    layout: layout,
    layoutVersion: undefined
  });
}
