const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "ty67n4",

  e2e: {
    baseUrl: "http://localhost:3000",
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
      on("after:spec", (spec, results) => {
        if (results && results.video) {
          const videoFileName = results.video.split("/").pop();
          const screenshotsFolder = `${config.screenshotsFolder}/${spec.relative}`;

          const afterScreenshot = (details) => {
            if (details.specName === spec.relative) {
              const screenshotFileName = details.path.split("/").pop();
              return `${screenshotsFolder}/${screenshotFileName}`;
            }
            return details.path;
          };

          on("after:screenshot", afterScreenshot);
        }
      });
    },
  },

  screenshotsFolder: "cypress/screenshots",

  component: {
    devServer: {
      framework: "vue-cli",
      bundler: "webpack",
    },
  },
});
