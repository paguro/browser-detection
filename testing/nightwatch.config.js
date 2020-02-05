const platforms = require('./platforms');

const common_capabilities = {
  name: 'BrowserStack-[Nightwatch] Local Test',
  'browserstack.user': process.env.BROWSERSTACK_USERNAME,
  'browserstack.key': process.env.BROWSERSTACK_ACCESS_KEY,
  'browserstack.local': true,
  'browserstack.video': false,
  'browserstack.debug': false
};

const test_settings = {};

platforms.forEach(platform => {
  const [os, os_version, browser, browser_version] = platform;

  const platform_key = `${os}_${os_version}_${browser}_${browser_version}`.replace(
    /\./g,
    '_'
  );

  test_settings[platform_key] = {
    os,
    os_version,
    desiredCapabilities: {
      os,
      browser,
      browser_version,
      ...common_capabilities
    }
  };
});

const nightwatch_config = {
  src_folders: ['testing'],
  filter: 'testing/test.js',

  selenium: {
    start_process: false,
    host: 'hub-cloud.browserstack.com',
    port: 80
  },

  test_settings
};

module.exports = nightwatch_config;
