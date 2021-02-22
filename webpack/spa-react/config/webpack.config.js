const path = require("path");
//引入插件cleanwebpackplugin清除之前的dist文件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BASEPATH = path.resolve(__dirname, "../");

module.exports = {
  entry: {
    main: path.join(BASEPATH, "src/index.js"),
  },
  output: {
    //输出目录
    path: path.join(BASEPATH, "dist"),
    //文件名称
    filename: "bundle.js",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html", //最终创建的文件名
      template: path.join(BASEPATH, "src/index.html"), //指定模板路径
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        include: path.resolve(BASEPATH, "./src"),
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.less/,
        use: [
          "style-loader", //创建style标签，并将css添加进去
          "css-loader", //编译css
          "less-loader", //编译less
        ],
      },
    ],
  },
};
