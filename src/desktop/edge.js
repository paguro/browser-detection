import $ from '../helpers';
import { detectOS } from '../os';
import { LAYOUT_EDGE, LAYOUT_BLINK, detectLayout } from '../layout';

export function detectEdge() {
  var plugins = $.getFeature('navigator.plugins');

  var browser = 'Edge';
  var browserVersion;
  var layout = detectLayout();
  var os = detectOS();

  // Allowed Layouts:
  // - EDGE
  // - BLINK https://blogs.windows.com/msedgedev/2019/11/04/edge-chromium-release-candidate-get-ready/
  if ([LAYOUT_EDGE, LAYOUT_BLINK].indexOf(layout) === -1) {
    return;
  }

  // Edge with Blink layout engine
  if (layout === LAYOUT_BLINK) {
    if (
      plugins &&
      plugins[0] &&
      plugins[0].name === 'Microsoft Edge PDF Plugin'
    ) {
      if ($.hasFeature('VideoPlaybackQuality.prototype.creationTime')) {
        browserVersion = 80;
      } else {
        browserVersion = 79;
      }
    }
    // Edge with EdgeHTML
  } else if (layout === LAYOUT_EDGE) {
    if ($.hasFeature('AuthenticatorAssertionResponse')) {
      browserVersion = 44;
    } else if ($.hasFeature('PaymentRequestUpdateEvent.prototype.bubbles')) {
      browserVersion = 42;
    } else if ($.hasFeature('AbortController')) {
      browserVersion = 41;
    } else if (
      $.hasFeature('CanvasRenderingContext2D.prototype.imageSmoothingEnabled')
    ) {
      browserVersion = 40;
    } else if ($.hasFeature('AudioContext.prototype.close')) {
      browserVersion = 38;
    } else if ($.hasFeature('AudioBuffer.prototype.copyFromChannel')) {
      browserVersion = 25;
    } else if (
      $.hasFeature('ANGLE_instanced_arrays.drawArraysInstancedANGLE')
    ) {
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
