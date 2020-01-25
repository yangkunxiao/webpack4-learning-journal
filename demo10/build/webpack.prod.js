const commen = require('./webpack.commen.js');
const merge = require('webpack-merge');
const config = {
    mode:'production',
    devtool:'cheap-module-source-map'
};

module.exports = merge(commen,config);