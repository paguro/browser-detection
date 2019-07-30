import { hasFeature } from './feature';

export var ENGINE_TRIDENT = 'Trident';
export var ENGINE_EDGE = 'EdgeHTML';
export var ENGINE_GECKO = 'Gecko';
export var ENGINE_WEBKIT = 'WebKit';
export var ENGINE_BLINK = 'Blink';
export var ENGINE_KHTML = 'KHTML';
export var ENGINE_PRESTO = 'Presto';

export function detectEngine() {
  var style = window.document.documentElement.style;

  // EdgeHTML || Trident
  if ('msScrollLimit' in style || 'behavior' in style) {
    if (hasFeature('CSS') && CSS.supports('(-ms-ime-align:auto)')) {
      return ENGINE_EDGE;
    }

    return ENGINE_TRIDENT;
  }

  // Gecko
  if ('MozAppearance' in style) {
    return ENGINE_GECKO;
  }

  // Presto (Opera <15)
  if ('OLink' in style) {
    return ENGINE_PRESTO;
  }

  // KHTML
  if ('KhtmlUserInput' in style) {
    return ENGINE_KHTML;
  }

  // WebKit and Blink
  // This test must be executed at the end:
  // Firefox and Edge also support -webkit-appearance, for compatibility reasons.
  if ('WebkitAppearance' in style) {
    if (hasFeature('Intl.v8BreakIterator') && hasFeature('CSS.supports')) {
      return ENGINE_BLINK;
    }

    return ENGINE_WEBKIT;
  }
}
