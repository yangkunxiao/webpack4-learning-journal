const commen = require('./webpack.common.js');
const path = require('path');
const WorkboxPlugin = require('workbox-webpack-plugin');
const merge = require('webpack-merge');

const config = {
    mode:'production',
    devtool:'cheap-module-source-map',
    output:{
        filename: '[name].[hash].js'
    },
    plugins:[
        new WorkboxPlugin.GenerateSW()
    ]
};

module.exports = merge(commen,config);