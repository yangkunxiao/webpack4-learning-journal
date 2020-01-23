const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry:'./src/index.js',
    mode:"development",
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'./dist'),
        publicPath:'/'
    },
    devServer:{
        contentBase:'./dist',
        port:8888,
        open:true,
        hot:true,
        hotOnly:true,
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:"babel-loader"
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
        // new webpack.HotModuleReplacementPlugin()
    ]
}