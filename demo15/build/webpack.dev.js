const common = require('./webpack.config');
const merge = require('webpack-merge');
const webpack = require('webpack');
module.exports = merge({
    mode:'development',
    devServer:{
        contentBase:'../dist',
        open:true,
        hot:true,
        hotOnly:true
    },
    output:{
        filename:'[name].js'
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]
},common)