const path=require('path')
const baseConfig = require("./webpack.config");
module.exports = Object.assign(baseConfig, {
  mode: "production",
//   devtool: "cheap-module-eval-source-map",
});
