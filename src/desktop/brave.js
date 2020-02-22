import $ from '../helpers';
import { detectChrome } from '../desktop/chrome';

// Releases: https://github.com/brave/brave-browser/releases
// https://github.com/brave/brave-browser/wiki/Brave-Release-Schedule-Archive
//
// Old releases: https://github.com/brave/browser-laptop/releases

export function detectBrave() {
  var plugins = $.getFeature('navigator.plugins');

  var browser = 'Brave';
  var browserVersion;
  var chromeFeatures = detectChrome();

  // Brave must have the same feature of Chrome
  if (!chromeFeatures) {
    return;
  }

  // Brave does not support internal-nacl-plugin
  // TODO: Switch to a more reliable check
  // Plugins have been introduced in v0.68
  if (!plugins || plugins.length !== 2) {
    return;
  }

  if ($.hasFeature('DecompressionStream')) {
    browserVersion = 1.3;
    //} else if ( << 1.2 diff >>) {
    // TODO: There are no valid diff from 1.1 to 1.2 ..
    //  browserVersion = 1.2;
  } else if ($.hasFeature('Geolocation.prototype.getCurrentPosition')) {
    browserVersion = 1.1;
  } else if (
    $.hasFeature('WritableStreamDefaultWriter.prototype.desiredSize')
  ) {
    browserVersion = 1.0;
    //} else if ( << 0.70 diff >>) {
    // TODO: There are no valid diff from 1.0 to 0.70 ..
    //  browserVersion = 0.70;
  } else if (
    $.hasFeature('RTCPeerConnectionIceErrorEvent.prototype.hostCandidate')
  ) {
    browserVersion = 0.69;
  }

  return Object.assign(chromeFeatures, {
    browser: browser,
    browserVersion: browserVersion
  });
}
