# 🔎 Paguro's Browser Detection

[![npm version](https://badge.fury.io/js/%40paguro%2Fbrowser-detection.svg)](https://badge.fury.io/js/%40paguro%2Fbrowser-detection)

JavaScript library for detecting browsers and platforms using feature testing.

## Getting started

To add _Paguro's Browser Detection_ library to your project:

```
$ yarn add @paguro/browser-detection
```

## Usage

```js
import BrowserDetection from '@paguro/browser-detection'; // ES6

const detectedBrowser = BrowserDetection();
console.log(detectedBrowser);

/* -- Output
  {
     browser: 'Firefox',
     browserVersion: 67,
     layout: 'Gecko',
     layoutVersion: 67,
     os: 'Windows',
     osVersion: 95
  }
*/
```

## Detected browsers

| Browser              | Latest version | Platforms                              |
|----------------------|:--------------:|----------------------------------------|
| Internet Explorer    |       11       | Windows XP / Windows 7+                |
| Microsoft Edge       |       44       | Windows 10                             |
| Google Chrome        |       80       | Windows XP / Windows 7+ / Mac OS 10.0+ |
| Mozilla Firefox      |       73       | Windows XP / Windows 7+ / Mac OS 10.0+ |
| Apple Safari         |       13       | Mac OS 10.0+                      |
| Opera                |       63       | Windows XP / Windows 7+ / Mac OS 10.0+ |
| Brave                |       1.3      | Windows 7+ / Mac OS 10.10+             |
| Google Chrome Mobile |       80       | ?                                      |
| Apple Safari Mobile  |       13       | iOS 1+                                 |
| DuckDuckGo Mobile    |       7.3      | ?                                      |

## Authors

* **Giacomo Trudu** - [Wicker25](https://github.com/Wicker25)
* **Giuseppe Trotta** - [ohpe](https://github.com/ohpe)

See also the list of [contributors](https://github.com/Wicker25/browser-detection/graphs/contributors)
who participated in this project.

## License

_Paguro's Browser Detection_ is [MIT licensed](LICENSE).
