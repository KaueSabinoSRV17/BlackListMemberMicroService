import { defineConfig } from "cypress";

export default defineConfig({
  compilerOptions: {
    target: "es5",
    lib: ["es6", "dom"],
    types: ["cypress"],
    module: "commonjs",
    baseUrl: ".",
    paths: {
      "*": ["node_modules/*", "src/types/*"],
    },
  },

  include: ["cypress/**/*.ts"],

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
