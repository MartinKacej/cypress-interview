const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
      setupNodeEvents(on, config) {
        // implement node event listeners here
      },
      testIsolation: true,
      video:false,
      defaultCommandTimeout: 1000,
      baseUrl: 'http://localhost:3000/',
  },
  env:{
      apiUrl: 'http://localhost:8000'
  }
});
