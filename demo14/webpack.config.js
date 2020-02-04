const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');

const files = fs.readdirSync(path.resolve(__dirname,'./dll'));
console.log(files);

let pluginsDll = [
    new HtmlWebpackPlugin({
        template: './src/index.html'
    })
];

files.forEach(file => {
    if(/.*\.dll.js$/.test(file)){

        pluginsDll.push(
            new AddAssetHtmlWebpackPlugin({
                filepath:path.resolve(__dirname,'./dll',file)
            })
        )
    }else if(/.*\.manifest.json$/.test(file)){
        new webpack.DllReferencePlugin({
            manifest: require(path.resolve(__dirname,'./dll',file)),
        })
    }
});

console.log(JSON.stringify(pluginsDll))


module.exports = {
    entry: './src/app.js',
    mode: "production",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve:{
        extensions:['.js','.jsx'],
        mainFiles:['main','index']
    },
    devServer:{
        contentBase:'./dist',
        open:true,
        hotOnly:true
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    plugins: pluginsDll
}