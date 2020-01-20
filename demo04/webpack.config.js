const { resolve } = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: 'development', //默认为production
    // entry: './src/index.js',
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: 'bundle.js', //输出文件名称
        // publicPath: './', //服务器端文件输出绝对路径  指定资源文件引用的目录
        path: resolve(__dirname, 'dist') //本地文件输出位置路径
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                common: {
                    chunks: "initial",
                    name: "common",
                    minChunks: 1, //最少引用
                    maxInitialRequests: 5, //最大请求
                    minSize: 0 //限制大小
                },
                vendor: {
                    chunks: 'initial',
                    name: 'vendor',
                    test: 'vendor',
                    enforce: true
                }
            }
        }
    },
    module: {
        rules: [{
            test: /\.(png|gif|svg|jpg)$/i,
            use: [
                //{
                //     loader: 'file-loader',
                //     options: {
                //         //placeholder 占位符
                //         name: '[name].[ext]',
                //         outputPath: 'images/',
                //         publicPath: 'assets/'
                //     }
                // }, 
                {
                    loader: 'url-loader',
                    options: {
                        //placeholder 占位符
                        limit: 8192,
                        name: '[name].[ext]',
                        outputPath: 'images/'
                            // publicPath: 'assets/'
                    }
                }
            ]
        }, {
            test: /\.vue$/i,
            use: ['vue-loader']
        }]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}