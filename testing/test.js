module.exports = {
  'Detecting browser': function(browser) {
    browser
      .url('http://127.0.0.1:8080/testing/index.html')
      .waitForElementVisible('body', 2000)
      .getText('#output', result => {
        if (result.value) {
          console.log('OUTPUT:\n\n' + JSON.stringify(result.value));
        }
      })
      .assert.title('Passed')
      .end();
  }
};
