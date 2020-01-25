const commen = require('./webpack.common.js');
const merge = require('webpack-merge');
const config = {
    mode:'production',
    devtool:'cheap-module-source-map'
};

module.exports = merge(commen,config);