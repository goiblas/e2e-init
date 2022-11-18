const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '',
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: 'https://example.cypress.io',
    pageLoadTimeout: 1000,
    viewportHeight: 950,
    viewportWidth: 1920
  },
});
