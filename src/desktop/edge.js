import { detectOS } from '../os';
import { detectEngine, ENGINE_BLINK, ENGINE_EDGE } from '../engine';
import { hasFeature } from '../feature';

export function detectEdge() {
  var name = 'Microsoft Edge';
  var engine = detectEngine();
  var os = detectOS();
  var version;

  // Allowed Engines:
  // - EDGE
  // - BLINK https://blogs.windows.com/msedgedev/2019/11/04/edge-chromium-release-candidate-get-ready/
  if ([ENGINE_EDGE, ENGINE_BLINK].indexOf(engine) === -1) {
    return;
  }

  if ([ENGINE_BLINK].indexOf(engine) !== -1) {
    if (hasFeature('RTCIceCandidate.address')) {
      version = 79;
    }
  } else if ([ENGINE_EDGE].indexOf(engine) !== -1) {
    if (hasFeature('AuthenticatorAssertionResponse')) {
      version = 44; //18
    } else if (hasFeature('Client')) {
      version = 42; //17
    } else if (hasFeature('AbortController')) {
      version = 41; //16
    } else if (hasFeature('CanvasRenderingContext2D.imageSmoothingEnabled')) {
      version = 40; //15
    } else if (hasFeature('AudioContext.close')) {
      version = 38; //14
    } else if (hasFeature('AudioBuffer.copyFromChannel')) {
      version = 25; //13
    } else if (hasFeature('ANGLE_instanced_arrays.drawArraysInstancedANGLE')) {
      version = 20; //12
    }
  }

  if (version) {
    return { name: name, engine: engine, version: version, os: os };
  }
}
