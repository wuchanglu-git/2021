const path=require('path')
module.exports = {
  entry: {
    main: path.join(__dirname,'src/index.js'),
  },
  output: {
    //输出目录
    path: path.join(__dirname, "dist"),
    //文件名称
    filename: "bundle.js",
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        include:path.resolve(__dirname,'./src'),
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
};
