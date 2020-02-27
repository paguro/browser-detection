# Paguro's Browser Detection

[![npm version](https://badge.fury.io/js/%40paguro%2Fbrowser-detection.svg)](https://badge.fury.io/js/%40paguro%2Fbrowser-detection)

JavaScript library for detecting browsers and platforms using feature testing.

* **Accurate**: it doesn't rely on the User-Agent string like other libraries
[\[1\]](https://www.zdnet.com/article/google-to-phase-out-user-agent-strings-in-chrome/)
[\[2\]](https://forums.developer.apple.com/thread/119186).

* **Solid**: it's tested against a [large dataset](https://github.com/paguro/browser-detection/blob/master/testing/test-cases.js)
of Browser Object Model (BOM).

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

## Detection

### Browsers

| Browser            | Latest version |
|--------------------|:--------------:|
| Internet Explorer  |       11       |
| Edge               |     44 / 80    |
| Chrome             |       81       |
| Firefox            |       73       |
| Safari             |       13       |
| Opera              |       66       |
| Brave              |       1.3      |

### Layout engines

| Browser    | Latest version |
|------------|:--------------:|
| Trident    |       -        |
| EdgeHTML   |       -        |
| Gecko      |       -        |
| WebKit     |       -        |
| Blink      |       -        |
| KHTML      |       -        |
| Presto     |       -        |

### Operating systems

| Browser    | Latest version |
|------------|:--------------:|
| OS X       |       -        |
| Windows    |       -        |
| Linux      |       -        |
| Unix       |       -        |
| Solaris    |       -        |
| iOS        |       -        |
| Android    |       -        |

## Known bugs and issues

- The fields `layoutVersion` and `osVersion` are not populated yet

## Roadmap for Release 0.2.0

- [ ] Support for mobile browsers (most popular ones)
- [ ] Populate the field `layoutVersion`
- [ ] Populate the field `osVersion`

## Authors

- **Giacomo Trudu** - [Wicker25](https://github.com/Wicker25)
- **Giuseppe Trotta** - [ohpe](https://github.com/ohpe)

See also the list of [contributors](https://github.com/paguro/browser-detection/graphs/contributors)
who participated in this project.

## License

_Paguro's Browser Detection_ is [MIT licensed](https://github.com/paguro/browser-detection/blob/master/LICENSE).
