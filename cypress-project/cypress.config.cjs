const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
      baseUrl: "https://example.cypress.io",

      retries: {
        runMode: 2,
        openMode: 2
      },

      defaultCommandTimeout: 10000,
      viewportHeight: 1080,
      viewportWidth: 1920,
      screenshotsFolder: "cypress/screenshots",
      screenshotOnRunFailure: true,
      video: true,
      videosFolder: "cypress/videos"
    },
  });