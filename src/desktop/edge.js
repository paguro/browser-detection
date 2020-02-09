import { detectOS } from '../os';
import { LAYOUT_EDGE, LAYOUT_BLINK, detectLayout } from '../layout';
import { hasFeature } from '../feature';

export function detectEdge() {
  var browser = 'Microsoft Edge';
  var browserVersion;
  var layout = detectLayout();
  var os = detectOS();

  // Allowed Layouts:
  // - EDGE
  // - BLINK https://blogs.windows.com/msedgedev/2019/11/04/edge-chromium-release-candidate-get-ready/
  if ([LAYOUT_EDGE, LAYOUT_BLINK].indexOf(layout) === -1) {
    return;
  }

  if ([LAYOUT_BLINK].indexOf(layout) !== -1) {
    // Edge is eccentric:
    if (
      hasFeature('navigator.plugins') &&
      navigator.plugins[0] &&
      navigator.plugins[0].name === 'Microsoft Edge PDF Plugin'
    ) {
      browserVersion = 79;
    }
  } else if ([LAYOUT_EDGE].indexOf(layout) !== -1) {
    if (hasFeature('AuthenticatorAssertionResponse')) {
      browserVersion = 44;
    } else if (hasFeature('Client')) {
      browserVersion = 42;
    } else if (hasFeature('AbortController')) {
      browserVersion = 41;
    } else if (hasFeature('CanvasRenderingContext2D.imageSmoothingEnabled')) {
      browserVersion = 40;
    } else if (hasFeature('AudioContext.close')) {
      browserVersion = 38;
    } else if (hasFeature('AudioBuffer.copyFromChannel')) {
      browserVersion = 25;
    } else if (hasFeature('ANGLE_instanced_arrays.drawArraysInstancedANGLE')) {
      browserVersion = 20;
    }
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
