import $ from './helpers';

// https://stackoverflow.com/questions/19877924/what-is-the-list-of-possible-values-for-navigator-platform-as-of-today
export var BROWSER_OSX = 'OS X';
export var BROWSER_IOS = 'iOS';
export var BROWSER_WINDOWS = 'Windows';
export var BROWSER_ANDROID = 'Android';
export var BROWSER_LINUX = 'Linux';
export var BROWSER_UNIX = 'Unix';
export var BROWSER_SOLARIS = 'Solaris';

export function detectOS() {
  var appVersion = $.getFeature('navigator.appVersion');
  var platform = $.getFeature('navigator.platform');

  if (['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'].indexOf(platform) > -1) {
    return BROWSER_OSX;
  }

  if (['iPhone', 'iPad', 'iPod'].indexOf(platform) > -1) {
    return BROWSER_IOS;
  }

  if (['Win32', 'Win64', 'Windows', 'WinCE'].indexOf(platform) > -1) {
    return BROWSER_WINDOWS;
  }

  if (/Android/.test(appVersion) || !platform) {
    return BROWSER_ANDROID;
  }

  if (/Linux/.test(platform)) {
    return BROWSER_LINUX;
  }

  if (['HP-UX'].indexOf(platform) > -1) {
    return BROWSER_UNIX;
  }

  if (['SunOS'].indexOf(platform) > -1) {
    return BROWSER_SOLARIS;
  }
}
