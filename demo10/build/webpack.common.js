const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, '../src'),
    entry: './index.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: './'
    },
    optimization: {
        splitChunks: {
            chunks: "all",//进行代码分割的时候，all：针对所有的导入  async:只针对异步导入 initial:针对同步代码导入。
            minSize: 30000,//设置最小阀值，只有大于该阀值，才会进行代码分割。
            minChunks: 1,//在分割模块之前共享一个模块的最小块数（设置代码最少被引用次数）
            maxAsyncRequests: 5,//按需加载时的最大并行请求数 超过就不会在做代码分割打包
            maxInitialRequests: 3,//一个入口点的最大并行请求数  超过就不会做代码分割
            automaticNameDelimiter: '~',//打包生成之后，默认情况下，webpack将使用块的来源和名称来生成名称，比如vendor ~main.js。
            name: true,//使得cacheGroups中打包生成的文件名称
            cacheGroups: {
                vendors: {//配置同步导入 
                    test: /[\\/]node_modules[\\/]/,//只有node_module中的才会进入
                    priority: -10,//值越大 优先级越高
                    filename: 'vendors.js'
                },
                default: {
                    // minChunks: 2,
                    priority: 0,
                    reuseExistingChunk: true,// 如果模块已经被打包了，在此遇到的时候 直接忽略，直接使用以打包好的模块。
                    filename:'default.js'
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
}