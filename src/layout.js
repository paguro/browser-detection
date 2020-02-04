import { hasFeature } from './feature';

export var LAYOUT_TRIDENT = 'Trident';
export var LAYOUT_EDGE = 'EdgeHTML';
export var LAYOUT_GECKO = 'Gecko';
export var LAYOUT_WEBKIT = 'WebKit';
export var LAYOUT_BLINK = 'Blink';
export var LAYOUT_KHTML = 'KHTML';
export var LAYOUT_PRESTO = 'Presto';

export function detectLayout() {
  var style = window.document.documentElement.style;

  // EdgeHTML || Trident
  if ('msScrollLimit' in style || 'behavior' in style) {
    if (hasFeature('CSS') && CSS.supports('(-ms-ime-align:auto)')) {
      return LAYOUT_EDGE;
    }

    return LAYOUT_TRIDENT;
  }

  // Gecko
  if ('MozAppearance' in style) {
    return LAYOUT_GECKO;
  }

  // Presto (Opera <15)
  if ('OLink' in style) {
    return LAYOUT_PRESTO;
  }

  // KHTML
  if ('KhtmlUserInput' in style) {
    return LAYOUT_KHTML;
  }

  // WebKit and Blink
  // This test must be executed at the end:
  // Firefox and Edge also support -webkit-appearance, for compatibility reasons.
  if ('WebkitAppearance' in style) {
    if (hasFeature('Intl.v8BreakIterator') && hasFeature('CSS.supports')) {
      return LAYOUT_BLINK;
    }

    return LAYOUT_WEBKIT;
  }
}
