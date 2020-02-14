import $ from './helpers';

export var LAYOUT_TRIDENT = 'Trident';
export var LAYOUT_EDGE = 'EdgeHTML';
export var LAYOUT_GECKO = 'Gecko';
export var LAYOUT_WEBKIT = 'WebKit';
export var LAYOUT_BLINK = 'Blink';
export var LAYOUT_KHTML = 'KHTML';
export var LAYOUT_PRESTO = 'Presto';

export function detectLayout() {
  // EdgeHTML || Trident
  if ($.hasStyle('msScrollLimit') || $.hasStyle('behavior')) {
    // FIXME: remove function call
    if ($.hasFeature('CSS') && CSS.supports('(-ms-ime-align:auto)')) {
      return LAYOUT_EDGE;
    }

    return LAYOUT_TRIDENT;
  }

  // Gecko
  if ($.hasStyle('MozAppearance')) {
    return LAYOUT_GECKO;
  }

  // Presto (Opera <15)
  if ($.hasStyle('OLink')) {
    return LAYOUT_PRESTO;
  }

  // KHTML
  if ($.hasStyle('KhtmlUserInput')) {
    return LAYOUT_KHTML;
  }

  // WebKit and Blink
  // This test must be executed at the end:
  // Firefox and Edge also support -webkit-appearance, for compatibility reasons.
  if ($.hasStyle('webkitAppearance')) {
    if ($.hasFeature('Intl.v8BreakIterator') && $.hasFeature('CSS.supports')) {
      return LAYOUT_BLINK;
    }

    return LAYOUT_WEBKIT;
  }
}
