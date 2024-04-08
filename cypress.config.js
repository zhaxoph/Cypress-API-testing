const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://rickandmortyapi.com/graphql",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});
