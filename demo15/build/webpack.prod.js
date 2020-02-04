const common = require('./webpack.config');
const merge = require('webpack-merge');
const webpack = require('webpack');
module.exports = merge({
    mode:'production',
    output:{
        filename:'[name].[hash].js'
    }
},common)