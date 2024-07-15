import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {
    },
  },
  env: {
    url: "https://firebase-backend--nextjs-host-check.us-central1.hosted.app/",
  }
});
