const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js',
        vendor: ['loadsh']
    },
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                common: {
                    name: "manifest"
                },
                vendor: {
                    name: "vendor"
                }
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '缓存设置',
            template: './src/index.html'
        }),
        new webpack.NamedModulesPlugin()
    ]
}