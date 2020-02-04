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

| Browser              | Versions |
|----------------------|---------:|
| Internet Explorer    |    11    |
| Microsoft Edge       |    44    |
| Google Chrome        |   1-80   |
| Mozilla Firefox      |   1-73   |
| Apple Safari         |   1-13   |
| Opera                |   2-63   |
| Brave                |     ?    |
| Google Chrome Mobile |   18-80  |
| Apple Safari Mobile  |    1-13  |
| DuckDuckGo Mobile    |   7.34   |

## Authors

* **Giacomo Trudu** - [Wicker25](https://github.com/Wicker25)
* **Giuseppe Trotta** - [ohpe](https://github.com/ohpe)

See also the list of [contributors](https://github.com/Wicker25/browser-detection/graphs/contributors)
who participated in this project.

## License

_Paguro's Browser Detection_ is [MIT licensed](LICENSE).
