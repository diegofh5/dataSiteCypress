const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.uhaul.com/Storage',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
