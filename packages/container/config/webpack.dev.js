// merge different webpack configs
const { merge } = require('webpack-merge');

// take some kind html files and inject a couple of different tags inside of it
const HtmlWebpackPlugin = require('html-webpack-plugin');

const commonConfig = require('./webpack.common');

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        })
    ]
}

const mergedConfig = merge(commonConfig, devConfig);

module.exports = mergedConfig;
// export { mergedConfig }