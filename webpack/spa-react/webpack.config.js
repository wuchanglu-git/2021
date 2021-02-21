const path = require("path");
//引入插件cleanwebpackplugin清除之前的dist文件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: {
    main: path.join(__dirname, "src/index.js"),
  },
  output: {
    //输出目录
    path: path.join(__dirname, "dist"),
    //文件名称
    filename: "bundle.js",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html", //最终创建的文件名
      template: path.join(__dirname, "src/index.html"), //指定模板路径
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        include: path.resolve(__dirname, "./src"),
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
};
