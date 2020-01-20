const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    // entry: './src/index.js',
    mode: 'development',
    devtool: 'source-map',
    entry: {
        main: './src/index.js'
    },
    devServer: { //开发配置
        contentBase: './dist', //配置服务器所在的文件夹
        open: true //默认打开新的浏览器窗口
    },
    output: {
        filename: 'bundle.js', //输出文件名称
        publicPath: '/', //服务器端文件输出路径  指定资源文件引用的目录
        path: resolve(__dirname, 'dist') //本地文件输出位置绝对路径
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}