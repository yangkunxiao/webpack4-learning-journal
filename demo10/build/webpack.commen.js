const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    context:path.resolve(__dirname,'../src'),
    entry:'./index.js',
    output:{
        filename:'[name].js',
        path:path.resolve(__dirname,'../dist'),
        publicPath:'./'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader:'babel-loader'
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:'./index.html'
        })
    ]
}