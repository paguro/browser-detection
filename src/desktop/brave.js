import $ from '../helpers';
import { detectChrome } from '../desktop/chrome';

export function detectBrave() {
  var browser = 'Brave';
  var features = detectChrome();

  // Has Chrome's features
  if (features) {
    var plugins = $.getFeature('navigator.plugins');

    if (hasBraveProps()) {
      features.browser = browser;
      features.browserVersion = 0.23;
    } else if (plugins && plugins.length === 2) {
      // FIXME: Maybe not the smartest way, but it's fine for now.
      // Brave does not support internal-nacl-plugin
      features.browser = browser;

      if ($.hasFeature('DecompressionStream')) {
        features.browserVersion = 1.3;
      } else {
        features.browserVersion = 1.2;
      }
    }

    return features;
  }
}

function hasBraveProps() {
  // Detect brave set up test
  // https://www.ctrl.blog/entry/brave-user-agent-detection.html
  // - works up to v0.23.19
  var testElement = document.createElement('iframe');
  testElement.style.display = 'none';
  window.document.body.appendChild(testElement);

  // Empty frames only have this attribute set in Brave Shield
  var useGoogleOnloadFired =
    testElement.contentWindow.google_onload_fired === true;

  // Teardown test
  testElement.parentNode.removeChild(testElement);

  return useGoogleOnloadFired;
}
