// @ts-check
const { defineConfig } = require('@vue/cli-service');
// const pa
const ps = require('path');
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  configureWebpack: {
    resolve: {
      alias: {
        '@': ps.resolve(__dirname, 'src'),
        '#': ps.resolve(__dirname, '@types'),
      },
    },
  },
});
