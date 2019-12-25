const { resolve } = require('path');

module.exports = {
    // entry: './src/index.js',
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: 'bundle.js', //输出文件名称
        publicPath: '/', //服务器端文件输出路径  指定资源文件引用的目录
        path: resolve(__dirname, 'dist') //本地文件输出位置绝对路径
    }
}