const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const dumpObject = require('../utils/dumpObject');
const retrocycle = require('../utils/retrocycle');

const TEST_PROTOCOL = 'http';
const TEST_HOSTNAME = 'test.browser-detection.paguro';
const TEST_PORT = '8080';
const TEST_PATHNAME = '/testing/index.html';
const TEST_URL = `${TEST_PROTOCOL}://${TEST_HOSTNAME}:${TEST_PORT}${TEST_PATHNAME}`;
const TEST_ORIGIN = `${TEST_PROTOCOL}://${TEST_HOSTNAME}:${TEST_PORT}`;

const datasetPath = path.join('testing', 'dataset');
const fileNames = fs.readdirSync(datasetPath);

fileNames.forEach(function(fileName) {
  if (path.extname(fileName) !== '.gz') {
    return;
  }

  const filePath = path.join(datasetPath, fileName);
  console.log(`Processing ${filePath}`);

  const compressedInput = fs.readFileSync(filePath);
  const input = zlib.gunzipSync(compressedInput);

  const { window } = retrocycle(JSON.parse(input.toString()));

  try {
    // Clean up the location
    window.origin = TEST_ORIGIN;
    window.document.origin = TEST_ORIGIN;
    window.document.defaultView.origin = TEST_ORIGIN;

    window.document.title = 'title';
    window.document.URL = TEST_URL;
    window.document.documentURI = TEST_URL;
    window.document.baseURI = TEST_URL;
    window.document.domain = TEST_HOSTNAME;
    window.document.referrer = '';
    window.document.anchors = [];

    // IE features
    if ('nameProp' in window.document) {
      window.document.nameProp = 'title';
    }

    if ('URLUnencoded' in window.document) {
      window.document.URLUnencoded = TEST_URL;
    }

    // Clean the scripts
    window.document.scripts = [];
    window.document.currentScript = null;

    // Clean up the DOM
    Array.prototype.forEach.call(window.document.childNodes, node => {
      node.URL = TEST_URL;
      node.baseURI = TEST_URL;
      node.documentURI = TEST_URL;
    });

    Array.prototype.forEach.call(
      window.document.documentElement.childNodes,
      node => {
        node.URL = TEST_URL;
        node.baseURI = TEST_URL;
        node.documentURI = TEST_URL;
      }
    );

    window.document.location.protocol = `${TEST_PROTOCOL}:`;
    window.document.location.href = TEST_URL;
    window.document.location.origin = TEST_ORIGIN;
    window.document.location.host = `${TEST_HOSTNAME}:${TEST_PORT}`;
    window.document.location.hostname = TEST_HOSTNAME;
    window.document.location.port = TEST_PORT;
    window.document.location.pathname = TEST_PATHNAME;

    window.document.documentElement.textContent = '';
    window.document.documentElement.innerHTML = '';
    window.document.documentElement.outerHTML = '';
    window.document.documentElement.innerText = '';
    window.document.documentElement.outerText = '';

    ['head', 'body'].forEach(tagName => {
      window.document[tagName].children = [];
      window.document[tagName].childNodes = [];
      window.document[tagName].firstChild = null;
      window.document[tagName].lastChild = null;
      window.document[tagName].firstElementChild = null;
      window.document[tagName].lastElementChild = null;
      window.document[tagName].nextElementSibling = null;
      window.document[tagName].previousElementSibling = null;
      window.document[tagName].childElementCount = 0;
      window.document[tagName].textContent = '';
      window.document[tagName].innerHTML = '';
      window.document[tagName].outerHTML = '';
      window.document[tagName].innerText = '';
      window.document[tagName].outerText = '';
    });

    // Clean the nested plugins (for Safari)
    Array.prototype.forEach.call(window.navigator.plugins, node => {
      Object.keys(node).forEach(key => {
        if (/^[0-9]+$/.test(key)) {
          delete node[key];
        }
      });
    });

    Object.entries(window.navigator.mimeTypes).forEach(node => {
      if (node[1]) {
        node[1].enabledPlugin = null;
      }
    });
  } catch (e) {
    console.warn(`WARNING: unable to process "${filePath}"`);
    console.warn(e);
  }

  const output = JSON.stringify(dumpObject({ window: window }, 'window'));
  const compressedOutput = zlib.gzipSync(output);

  fs.writeFileSync(filePath, compressedOutput);
});

process.exit(0);
