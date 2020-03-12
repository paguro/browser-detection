import $ from '../helpers';
import { detectOS } from '../os';
import { LAYOUT_EDGE, LAYOUT_BLINK, detectLayout } from '../layout';
import { detectChromium } from './chromium';

export function detectEdge() {
  var plugins = $.getFeature('navigator.plugins');

  var browser = 'Edge';
  var browserVersion;
  var layout = detectLayout();
  var os = detectOS();

  var chromiumFeatures = detectChromium();
  if (chromiumFeatures) {
    if ($.hasPlugin('Microsoft Edge PDF Plugin')) {
      return Object.assign(chromiumFeatures, {
        browser: browser
      });
    }
  }

  // Edge with EdgeHTML
  if (layout === LAYOUT_EDGE) {
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
    return Object.assign(os, {
      browser: browser,
      browserVersion: browserVersion,
      layout: layout,
      layoutVersion: undefined
    });
  }
}
