#!/usr/bin/env node
const Nightwatch = require('nightwatch');
const browserstack = require('browserstack-local');

try {
  process.mainModule.filename = './node_modules/.bin/nightwatch';

  console.log('Connecting local');
  const bs_local = (Nightwatch.bs_local = new browserstack.Local());

  bs_local.start({ key: process.env.BROWSERSTACK_ACCESS_KEY }, error => {
    if (error) {
      throw error;
    }

    console.log('Connected. Now testing...');
    Nightwatch.cli(argv => {
      Nightwatch.CliRunner(argv)
        .setup(null, () => {
          bs_local.stop(() => {});
        })
        .runTests(function() {
          bs_local.stop(() => {});
        });
    });
  });
} catch (e) {
  console.log('There was an error while starting the test runner:\n\n');
  process.stderr.write(e.stack + '\n');
  process.exit(2);
}
