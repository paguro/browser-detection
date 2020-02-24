const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const retrocycle = require('./utils/retrocycle');

const BrowserDetection = require('../dist/browser-detection');
const TestCases = require('./test-cases.js');

TestCases.forEach(testCase => {
  const { id, expected } = testCase;

  const bomPath = path.join('testing', 'dataset', `${id}.json.gz`);

  const compressedJson = fs.readFileSync(bomPath);
  const json = zlib.gunzipSync(compressedJson);

  const { window } = retrocycle(JSON.parse(json));

  it(`Testing ${id}`, () => {
    BrowserDetection.helpers.windowObject = window;

    expect(BrowserDetection()).toEqual(expected);
  });
});
