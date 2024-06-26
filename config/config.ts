// https://umijs.org/config/
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
import routes from './routes';

const { REACT_APP_ENV } = process.env;

export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  layout: {
    // https://umijs.org/zh-CN/plugins/plugin-layout
    locale: true,
    siderWidth: 208,
    ...defaultSettings,
  },
  dynamicImport: {
    loading: '@ant-design/pro-layout/es/PageLoading',
  },
  targets: false,
  // umi routes: https://umijs.org/docs/routing
  routes,
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    'primary-color': defaultSettings.primaryColor,
  },
  // esbuild is father build tools
  // https://umijs.org/plugins/plugin-esbuild
  esbuild: {},
  title: 'hahah',
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
  devServer: {
    port: 8010,
  },
  // Fast Refresh 热更新
  fastRefresh: {},
  nodeModulesTransform: { type: 'none' },
  // 开启后热更新会闪屏
  // webpack5: {},
  // 开启后热更新子组件失效
  // mfsu: {},
  // plugins: [
  //   new webpack.ProvidePlugin({
  //     // 在这儿添加下面两行
  //     'window.Quill': 'quill/dist/quill.js',
  //     Quill: 'quill/dist/quill.js',
  //   }),
  // ],
  chainWebpack(config, { webpack }) {
    const quillPlugin = new webpack.ProvidePlugin({
      // 在这儿添加下面两行
      'window.Quill': 'quill/dist/quill.js',
      Quill: 'quill/dist/quill.js',
    });
    // config.plugins.set('quill', quillPlugin);
    config.plugin('quill').use(quillPlugin);
  },
  plugins: ['lodash-webpack-plugin'],
  extraBabelPlugins: ['lodash'],
  stillness: {},
});
