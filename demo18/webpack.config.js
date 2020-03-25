const path = require('path')
const ConsoleLogPlugin = require('./plugins/index')
const HappyPack = require('happypack')
const os = require('os')
// 开辟一个线程池
// 拿到系统CPU的最大核数，happypack 将编译工作灌满所有线程
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length })
module.exports = {
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env']
						}
					},
					{
						loader: path.resolve('./loaders/index.js')
					}
				]
				// loaders:path.resolve('./loaders/index.js')
			}
		]
	},
	plugins: [
		new ConsoleLogPlugin(),
		new HappyPack({
			id: 'js',
			threadPool: happyThreadPool,
			loaders: [
				{
					loader: 'babel-loader'
				}
			]
		})
	]
}
