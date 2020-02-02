const path = require('path');
const common = require('./webpack.common.js');
const merge = require('webpack-merge');
const config = {
    mode:'development',
    // devtool:'cheap-module-eval-source-map',
    optimization:{
        usedExports:true//tree shaking 只导出已使用的
    },
    output:{
        filename: '[name].js'
    }
};

module.exports = merge(common,config);