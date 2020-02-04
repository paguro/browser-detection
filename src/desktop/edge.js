import { detectOS } from '../os';
import { LAYOUT_EDGE, detectLayout } from '../layout';
import { hasFeature } from '../feature';

export function detectEdge() {
  var browser = 'Microsoft Edge';
  var browserVersion;
  var layout = detectLayout();
  var os = detectOS();

  // Allowed Layouts:
  if ([LAYOUT_EDGE].indexOf(layout) === -1) {
    return;
  }

  if (hasFeature('AuthenticatorAssertionResponse')) {
    browserVersion = 18;
  } else if (hasFeature('Client')) {
    browserVersion = 17;
  } else if (hasFeature('AbortController')) {
    browserVersion = 16;
  } else if (hasFeature('CanvasRenderingContext2D.imageSmoothingEnabled')) {
    browserVersion = 15;
  } else if (hasFeature('AudioContext.close')) {
    browserVersion = 14;
  } else if (hasFeature('AudioBuffer.copyFromChannel')) {
    browserVersion = 13;
  } else if (hasFeature('ANGLE_instanced_arrays.drawArraysInstancedANGLE')) {
    browserVersion = 12;
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
