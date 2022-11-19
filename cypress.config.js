const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "et3bg9",
  reporter: "cypress-mochawesome-reporter",
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },
});
