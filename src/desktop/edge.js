import {detectOS} from '../os';
import {detectEngine, ENGINE_BLINK, ENGINE_EDGE} from '../engine';
import {hasFeature} from '../feature';

export function detectEdge() {
    var browser = 'Microsoft Edge';
    var browserVersion;
    var engine = detectEngine();
    var os = detectOS();

    // Allowed Engines:
    // - EDGE
    // - BLINK https://blogs.windows.com/msedgedev/2019/11/04/edge-chromium-release-candidate-get-ready/
    if ([ENGINE_EDGE, ENGINE_BLINK].indexOf(engine) === -1) {
        return;
    }

    if ([ENGINE_BLINK].indexOf(engine) !== -1) {
        if (hasFeature('RTCIceCandidate.address')) {
            browserVersion = 79;
        }
    } else if ([ENGINE_EDGE].indexOf(engine) !== -1) {
        if (hasFeature('AuthenticatorAssertionResponse')) {
            browserVersion = 44; //18
        } else if (hasFeature('Client')) {
            browserVersion = 42; //17
        } else if (hasFeature('AbortController')) {
            browserVersion = 41; //16
        } else if (hasFeature('CanvasRenderingContext2D.imageSmoothingEnabled')) {
            browserVersion = 40; //15
        } else if (hasFeature('AudioContext.close')) {
            browserVersion = 38; //14
        } else if (hasFeature('AudioBuffer.copyFromChannel')) {
            browserVersion = 25; //13
        } else if (hasFeature('ANGLE_instanced_arrays.drawArraysInstancedANGLE')) {
            browserVersion = 20; //12
        }
    }

    if (browserVersion) {
        return {
            browser: browser,
            browserVersion: browserVersion,
            engine: engine,
            engineVersion: undefined,
            os: os,
            osVersion: undefined
        };
    }
}
