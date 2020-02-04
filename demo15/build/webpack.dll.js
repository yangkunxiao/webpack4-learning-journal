const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode:"production",
    entry:{
        react:['react','react-dom','react-router-dom'],
        lodash:['lodash-es']
    },
    output:{
        filename:'[name].dll.js',
        path : path.resolve(__dirname,'../dll'),
        library:'_dll_[name]'
    },
    plugins:[
        new webpack.DllPlugin({
            name: "_dll_[name]",
            path: path.join(__dirname, "../dll/[name].manifest.json"),
        })
    ]
}