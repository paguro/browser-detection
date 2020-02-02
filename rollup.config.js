import { uglify } from 'rollup-plugin-uglify';

export default [
  {
    input: 'src/main.js',
    output: {
      format: 'umd',
      name: 'browser-detection',
      file: './dist/browser-detection.js'
    },
    plugins: [uglify()]
  },
  {
    input: 'src/main.js',
    output: {
      format: 'iife',
      name: 'BrowserDetection',
      file: './dist/browser-detection.iife.js'
    },
    plugins: [uglify()]
  }
];
