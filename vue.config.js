const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,

  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      // Clone os argumentos para evitar reatribuição direta
      const newArgs = [...args];
      newArgs[0].externals = {
        css: [
          {
            url: 'https://db.onlinewebfonts.com/c/ea250342ec4016561ba9e791c2f39c11?family=Posterama+2001+W04+Regular',
            attributes: {
              rel: 'stylesheet',
              type: 'text/css',
            },
          },
        ],
      };
      return newArgs;
    });
  },

  pluginOptions: {
    vuetify: {
      // Configurações opcionais do Vuetify
    },
  },
});
