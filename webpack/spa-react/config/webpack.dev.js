const path = require('path')
const baseConfig = require("./webpack.config");
const BASEPATH = path.resolve(__dirname, '../')

module.exports = Object.assign(baseConfig, {
    mode: "development",
    devtool: "source-map",
    devServer: {
        hot: true,
        contentBase: path.join(BASEPATH, 'dist'),
        host: '0.0.0.0',
        port: 8888,
        historyApiFallback: true,
        proxy: {
            '/api': 'http://localhost:3000'
        }
    }
});