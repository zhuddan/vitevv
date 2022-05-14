const { defineConfig } = require('@vue/cli-service');
const autoImport = require('unplugin-auto-import/webpack');
// const pa
const ps = require('path');
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  configureWebpack: {
    plugins: [
      autoImport({
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/, // .vue
          /\.md$/, // .md
        ],
        imports: ['vue', 'vue-router'],
        dts: '@types/auto-imports.d.ts',
        eslintrc: {
          enabled: true, // Default `false`
          filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
          globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
        },
      }),
    ],
    resolve: {
      alias: {
        '@': ps.resolve(__dirname, 'src'),
        '#': ps.resolve(__dirname, '@types'),
      },
    },
  },
});
