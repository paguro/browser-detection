const fs = require('fs');
const zlib = require('zlib');
const BrowserDetection = require('../dist/browser-detection');
const TestCases = require('./test-cases.js');

require('./utils/cycle');

TestCases.forEach(testCase => {
  const { id, expected } = testCase;

  const datasetPath = `./testing/dataset/${id}.json.gz`;

  const compressedJson = fs.readFileSync(datasetPath);
  const json = zlib.gunzipSync(compressedJson);

  const { window } = JSON.retrocycle(JSON.parse(json));

  it(`Testing ${id}`, () => {
    BrowserDetection.helpers.windowObject = window;

    expect(BrowserDetection()).toEqual(expected);
  });
});
