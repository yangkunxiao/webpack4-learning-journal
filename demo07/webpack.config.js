const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js',
    },
    devServer: {
        contentBase: './dist',
        open: true,
        hot: true,
        hotOnly: true,
        port: "8081"
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            // options: {
            //     "presets": [
            //         [
            //             "@babel/preset-env", {
            //                 "useBuiltIns": "usage"
            //             }
            //         ]
            //     ]
            // }
        }, {
            test: /\.css$/,
            use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        esModule: true
                    }
                },
                "css-loader"
            ]
        }]
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
        new CleanWebpackPlugin({}),
        new HtmlWebpackPlugin({
            title: 'babel解析es6语法',
            template: './src/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}