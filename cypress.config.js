const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config.baseUrl = "https://materdei.jacad.com.br/academico";
      return config;
    },
    env: {
      usuario: "12319336",
      senha: "12319336",
    },
  },
});
