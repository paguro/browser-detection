import $ from './helpers';

export var BROWSER_MACOS = 'MacOS';
export var BROWSER_IOS = 'iOS';
export var BROWSER_WINDOWS = 'Windows';
export var BROWSER_ANDROID = 'Android';
export var BROWSER_LINUX = 'Linux';
export var BROWSER_OPENBSD = 'OpenBSD';
export var BROWSER_UNIX = 'Unix';
export var BROWSER_SOLARIS = 'Solaris';

var WINDOWS_NT_VERSION_MAP = {
  '5.1': 'XP',
  '5.2': 'Server 2003',
  '6.0': 'Vista',
  '6.1': 7,
  '6.2': 8,
  '10.0': 10
};

export function detectOSfromAppVersion() {
  var appVersion = $.getFeature('navigator.appVersion');

  var os;
  var osVersion;

  var match;

  if ((match = appVersion.match(/Windows NT (\d+)\.(\d+)/))) {
    os = BROWSER_WINDOWS;
    osVersion = WINDOWS_NT_VERSION_MAP[match[1] + '.' + match[2]];
  } else if ((match = appVersion.match(/Mac OS X (\d+)_(\d+)(_(\d+))?/))) {
    os = BROWSER_MACOS;
    osVersion = parseFloat(match[1] + '.' + match[2]);
  } else if (/Linux/.test(appVersion)) {
    os = BROWSER_LINUX;
  } else if (/OpenBSD/.test(appVersion)) {
    os = BROWSER_OPENBSD;
  } else if (/HP-UX/.test(appVersion)) {
    os = BROWSER_UNIX;
  } else if (/SunOS/.test(appVersion)) {
    os = BROWSER_SOLARIS;
  } else if ((match = appVersion.match(/OS (\d+)_(\d+)/))) {
    os = BROWSER_IOS;
    osVersion = parseFloat(match[1] + '.' + match[2]);
  } else if ((match = appVersion.match(/iPhone OS (\d+)_(\d+)/))) {
    os = BROWSER_IOS;
    osVersion = parseFloat(match[1] + '.' + match[2]);
  } else if ((match = appVersion.match(/Android (\d+)\.(\d+)(\.(\d+))?/))) {
    os = BROWSER_ANDROID;
    osVersion = parseFloat(match[1] + '.' + match[2]);
  } else {
    return;
  }

  return {
    os: os,
    osVersion: osVersion
  };
}

function detectOSfromOscpu() {
  var oscpu = $.getFeature('navigator.oscpu');

  // Only Firefox supports this property
  if (!oscpu) {
    return;
  }

  var os;
  var osVersion;

  var match;

  if ((match = oscpu.match(/Windows NT (\d+)\.(\d+)/))) {
    os = BROWSER_WINDOWS;
    osVersion = WINDOWS_NT_VERSION_MAP[match[1] + '.' + match[2]];
  } else if ((match = oscpu.match(/Mac OS X (\d+).(\d+)(_(\d+))?/))) {
    os = BROWSER_MACOS;
    osVersion = parseFloat(match[1] + '.' + match[2]);
  } else if (/Linux/.test(oscpu)) {
    os = BROWSER_LINUX;
  } else if (/OpenBSD/.test(oscpu)) {
    os = BROWSER_OPENBSD;
  } else if (/HP-UX/.test(oscpu)) {
    os = BROWSER_UNIX;
  } else if (/SunOS/.test(oscpu)) {
    os = BROWSER_SOLARIS;
  } else {
    return;
  }

  return {
    os: os,
    osVersion: osVersion
  };
}

export function detectOSfromPlatform() {
  var platform = $.getFeature('navigator.platform');

  var os;

  if (/Macintosh|MacIntel|MacPPC|Mac68K/.test(platform)) {
    os = BROWSER_MACOS;
  } else if (/iPhone|iPad|iPod/.test(platform)) {
    os = BROWSER_IOS;
  } else if (/Win32|Win64|Windows|WinCE/.test(platform)) {
    os = BROWSER_WINDOWS;
  } else if (/Linux/.test(platform)) {
    os = BROWSER_LINUX;
  } else if (/OpenBSD/.test(platform)) {
    os = BROWSER_OPENBSD;
  } else if (/HP-UX/.test(platform)) {
    os = BROWSER_UNIX;
  } else if (/SunOS/.test(platform)) {
    os = BROWSER_SOLARIS;
  }

  return {
    os: os,
    osVersion: undefined
  };
}

export function detectOS() {
  return (
    detectOSfromAppVersion() || detectOSfromOscpu() || detectOSfromPlatform()
  );
}
