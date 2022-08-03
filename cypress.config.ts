import { defineConfig } from "cypress"

export default defineConfig({
  screenshotsFolder: "./e2e/screenshots",
  videosFolder: "./e2e/videos",
  fixturesFolder: false,
  watchForFileChanges: false,
  includeShadowDom: true,
  e2e: {
    setupNodeEvents() {
      // do nothing here
    },
    baseUrl: "http://localhost:3000",
    specPattern: "./e2e/specs/**/*.e2e.ts",
    supportFile: false,
  },
})
