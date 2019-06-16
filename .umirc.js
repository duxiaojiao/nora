
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  outputPath:'./build',
  // base: '/nora/',
  // publicPath: "/nora/",
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: { webpackChunkName: true },
      title: 'nora',
      dll: false,

      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],

  proxy: {
    "/nora": {
      target: "http://localhost:8100",
      changeOrigin: true,
      // pathRewrite: {"^/system": ""}
    }
  },
}
