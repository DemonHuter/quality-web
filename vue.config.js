const { defineConfig } = require('@vue/cli-service')
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Timestamp = new Date().getTime();
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = defineConfig({
  devServer: {
    historyApiFallback: true,
    allowedHosts: "all",
  },
  transpileDependencies: true,
  lintOnSave: false,
  productionSourceMap: false,
  publicPath: "/", //router：mode为history时不能为"./",不然页面加载不出来
  outputDir: undefined,
  assetsDir: 'static',//
  configureWebpack: { // webpack 配置
    output: { // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
      filename: `static/js/[name].${Timestamp}.js`,
      chunkFilename: `static/js/[name].${Timestamp}.js`,
    },
    plugins: [
      new MiniCssExtractPlugin({
        // 修改打包后css文件名
        filename: `static/css/[name].${Timestamp}.css`,
        chunkFilename: `static/css/[name].${Timestamp}.css`
      })
    ],
  },
  runtimeCompiler: undefined,
  parallel: undefined,

})
