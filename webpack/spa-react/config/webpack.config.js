const path = require("path");
//引入插件cleanwebpackplugin清除之前的dist文件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BASEPATH = path.resolve(__dirname, "../");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { ProvidePlugin } = require("webpack");
module.exports = {
  entry: {
    main: path.join(BASEPATH, "src/index.js"),
  },
  output: {
    //输出目录
    path: path.join(BASEPATH, "dist"),
    //文件名称
    filename: "[name]-bundle.js",
    // 设置了publicPath之后，devserver的publicPath也得做设置
    publicPath: "./",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html", //最终创建的文件名
      template: path.join(BASEPATH, "src/index.html"), //指定模板路径
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new ProvidePlugin({
      $moment: "moment",
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
          // "style-loader", // b不再需要style-loader要已经分离处理
          MiniCssExtractPlugin.loader,
          "css-loader", //编译css
          //"postcss-loader", //将被less编译出来的css通过postcss处理
          "less-loader", //编译less
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|webp)/,
        use: {
          loader: "url-loader",
          options: {
            outputPath: "images", //图片输出的路径
            limit: 10 * 1024,
          },
        },
      },
      {
        test: /\.(eot|woff2?|ttf|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[name]-[hash:5].min.[ext]",
              limit: 5000, // fonts file size <= 5KB, use 'base64'; else, output svg file
              publicPath: "fonts/",
              outputPath: "fonts/",
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@": path.join(BASEPATH, "src"),
    },
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 1024,
      minChunks: 5,
    },
    usedExports: false,
  },
};
