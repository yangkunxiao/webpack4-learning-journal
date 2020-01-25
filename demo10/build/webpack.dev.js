const commen = require('./webpack.common.js');
const merge = require('webpack-merge');
const config = {
    mode:'development',
    devtool:'cheap-module-eval-source-map',
    optimization:{
        usedExports:true//tree shaking 只导出已使用的
    },
};

module.exports = merge(commen,config);