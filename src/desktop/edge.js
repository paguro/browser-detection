import { detectOS } from '../os';
import { ENGINE_EDGE, detectEngine } from '../engine';
import { hasFeature } from '../feature';

export function detectEdge() {
  var name = 'Microsoft Edge';
  var engine = detectEngine();
  var os = detectOS();
  var version;

  // Allowed Engines:
  if ([ENGINE_EDGE].indexOf(engine) === -1) {
    return;
  }

  if (hasFeature('AuthenticatorAssertionResponse')) {
    version = 18;
  } else if (hasFeature('Client')) {
    version = 17;
  } else if (hasFeature('AbortController')) {
    version = 16;
  } else if (hasFeature('CanvasRenderingContext2D.imageSmoothingEnabled')) {
    version = 15;
  } else if (hasFeature('AudioContext.close')) {
    version = 14;
  } else if (hasFeature('AudioBuffer.copyFromChannel')) {
    version = 13;
  } else if (hasFeature('ANGLE_instanced_arrays.drawArraysInstancedANGLE')) {
    version = 12;
  }

  if (version) {
    return { name: name, engine: engine, version: version, os: os };
  }
}
