const path = require("path");
const baseConfig = require("./webpack.config");
const BASEPATH = path.resolve(__dirname, "../");
module.exports = Object.assign(baseConfig, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    hot: true,
    contentBase: path.join(BASEPATH, "dist"),
    host: "0.0.0.0", // 可以使用手机访问
    port: 8080,
    historyApiFallback: true, // 该选项的作用所有的404都连接到index.html
    proxy: {
      // 代理到后端的服务地址，会拦截所有以api开头的请求地址
      "/api": "http://localhost:3000",
    },
  },
});
