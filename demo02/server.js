const express = require('express');
const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const config = require('./webpack.config.js');
const complier = webpack(config);
const app = express();

app.use(middleware(complier, {
    publicPath: config.output.publicPath
}))

app.listen(3000)