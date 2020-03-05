const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');


/**
 * @param { Object } 
 * @return { Object }
 */
const makeHtml = (configs) => {
    let pluginsDll = [
        new CleanWebpackPlugin(),
    ];
    Object.keys(configs.entry).forEach(key => {
        console.log(key)
        pluginsDll.push(
            new HtmlWebpackPlugin({
                filename:`${key}.html`,
                template:'./src/index.html',
                chunks:['lodash','react',key]
            })
        )
    })
    const files = fs.readdirSync(path.resolve(__dirname,'../dll'));
    files.forEach(file => {
        if(/.*\.dll.js$/.test(file)){
            pluginsDll.push(
                new AddAssetHtmlWebpackPlugin({
                    filepath:path.resolve(__dirname,'../dll',file)
                })
            )
        }
        if(/.*\.manifest.json$/.test(file)){
            new webpack.DllReferencePlugin({
                manifest: require(path.resolve(__dirname,'../dll',file)),
            })
        }
    });
    return pluginsDll;
}



const config = {
    entry:{
        index:'./src/index.js',
        list:'./src/list.js'
    },
    output:{
        path:path.resolve(__dirname,'../dist')
    },
    module:{
        rules:[
            {
                test:/\.jsx?$/,
                loader:'babel-loader'
            }
        ]
    }
};

config.plugins = makeHtml(config);

module.exports = config;