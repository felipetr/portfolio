const { defineConfig } = require('@vue/cli-service');
const fs = require('fs');
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,

  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      const newArgs = [...args];
      newArgs[0].externals = {
        css: [],
      };
      return newArgs;
    });
  },

  pluginOptions: {
    vuetify: {},
  },

  configureWebpack: {
    resolve: {
      alias: {
        axios: 'axios',
      },
    },
  },

  devServer: {
    port: 8080,
  },
});
