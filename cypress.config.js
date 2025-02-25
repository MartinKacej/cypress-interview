const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
      reporter: 'cypress-mochawesome-reporter',
      setupNodeEvents(on, config) {
       require('cypress-mochawesome-reporter/plugin')(on);
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
