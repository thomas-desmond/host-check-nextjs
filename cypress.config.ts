import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {
    },
  },
  env: {
    url: "https://host-check-nextjs.vercel.app/",
  }
});
