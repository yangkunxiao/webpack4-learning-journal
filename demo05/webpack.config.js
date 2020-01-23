const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    mode: "production",
    output: {
        path: resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].[hash:7].js'
    },
    devServer: {
        contentBase: './dist',
        open: true,
        port: 8080,
        hot: true, //配置HMR 阻止浏览器自动刷新
        hotOnly: true, //即便HMR不生效 也不让浏览器自动刷新
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }, {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        ident: 'postcss',
                        plugins: [
                            require('autoprefixer')({})
                        ]
                    }
                }
            ]
        }, {
            test: /\.less$/,
            use: [
                'style-loader',
                'css-loader',
                'less-loader',
                'postcss-loader'
            ]
        }, {
            test: /\.(png|jpe?g|gif)$/i,
            exclude: /favicon\.png$/,
            use: [{
                loader: 'url-loader',
                options: {
                    esModule: false,
                    limit: 10240,
                    quality: 85,
                    name: 'image/[name].[ext]'
                }
            }]
        }]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'HMR',
            template: './src/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}