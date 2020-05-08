const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry:'./src/index.js',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: [
                    // {
                    //     loader:'babel-loader',
                    //     options: {
                    //         presets: ['@babel/preset-env'],
                    //     },
                    // },
                    {
                        loader:path.resolve('./loaders/simple.js')
                    }
                ],
			},
		],
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ]
}
