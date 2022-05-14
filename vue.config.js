const { defineConfig } = require('@vue/cli-service');
const autoImport = require('unplugin-auto-import/webpack');
const path = require('path');
const PORT = process.env.VUE_APP_PORT;
const APP_NAME = process.env.VUE_APP_APP_NAME;

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title= APP_NAME
        return args
      })
  },
  configureWebpack: {
    plugins: [
      autoImport({
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/, // .vue
        ],
        imports: ['vue', 'vue-router'],
        dts: 'types/auto-imports.d.ts',
        eslintrc: {
          enabled: true,
          filepath: './.eslintrc-auto-import.json',
          globalsPropValue: true,
        },
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '#': path.resolve(__dirname, 'types'),
      },
    },
    devServer: {
      port: PORT,
    },
  },
});
