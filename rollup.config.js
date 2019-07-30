export default [
  {
    input: 'src/main.js',
    output: {
      format: 'umd',
      name: 'browser-detection',
      file: './dist/browser-detection.js'
    }
  },
  {
    input: 'src/main.js',
    output: {
      format: 'iife',
      name: 'BrowserDetection',
      file: './dist/browser-detection.iife.js'
    }
  }
];
