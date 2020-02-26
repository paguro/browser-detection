import $ from '../helpers';
import { detectChrome } from '../desktop/chrome';

export function detectBrave() {
  var plugins = $.getFeature('navigator.plugins');

  var browser = 'Brave';
  var browserVersion;
  var chromeFeatures = detectChrome();

  // Brave must have the same features of Chromium
  // TODO: This will change to Chromium once implemented
  if (!chromeFeatures) {
    return;
  }

  // Brave does not support the Native Client plugin (internal-nacl-plugin)
  if ($.hasFeature('navigator.plugins.Native Client')) {
    return;
  }

  // Plugins have been introduced in v0.68
  // The number of supported plugins is just 2 and despite other Chromium-based browsers
  if (plugins.length === 2) {
    if ($.hasFeature('DecompressionStream')) {
      browserVersion = 1.3;
    } else if ($.hasFeature('Geolocation.prototype.getCurrentPosition')) {
      browserVersion = 1.1;
    } else if (
      $.hasFeature('WritableStreamDefaultWriter.prototype.desiredSize')
    ) {
      browserVersion = 1.0;
    } else if (
      $.hasFeature('RTCPeerConnectionIceErrorEvent.prototype.hostCandidate')
    ) {
      browserVersion = 0.69;
    } else if (!$.hasFeature('Image.prototype.loading')) {
      browserVersion = 0.68;
    }
  } else if (plugins.length === 0) {
    if ($.hasFeature('Blob.prototype.text')) {
      browserVersion = 0.67;
    } else if ($.hasFeature('RTCDtlsTransport.prototype.iceTransport')) {
      browserVersion = 0.65;
    } else if ($.hasFeature('TextEncoder.prototype.encodeInto')) {
      browserVersion = 0.63;
    } else if ($.hasFeature('External.prototype.AddSearchProvider')) {
      browserVersion = 0.61;
    } else if ($.hasFeature('RTCRtpContributingSource.prototype.constructor')) {
      browserVersion = 0.6;
    }
  }

  if (browserVersion) {
    return Object.assign(chromeFeatures, {
      browser: browser,
      browserVersion: browserVersion
    });
  }
}
