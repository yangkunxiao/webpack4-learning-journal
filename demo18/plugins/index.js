class ConsoleLogPlugin {
    constructor(options){
        console.log(options);
    }
	apply(compiler) {//compiler存放着所有的配置内容，而compliation只是存放着本次打包的相关内容
		//注册插件
		/* compiler.hooks.run.tap('ConsoleLogPlugin', compilation => {
			console.log('构建开始～～～')
			console.log('================================')
		}) */

		//异步
		/* compiler.hooks.run.tapPromise(
			'MyPlugin',
			(source, target, routesList) => {
				return new Promise(resolve => setTimeout(resolve, 1000)).then(
					() => {
                        // console.log(source,'source')
						console.log('以具有延迟的异步方式触及 run 钩子。')
					}
				)
			}
		)

		compiler.hooks.run.tapPromise(
			'MyPlugin',
			async (source, target, routesList) => {
				await new Promise(resolve => setTimeout(resolve, 1000))
				console.log('以具有延迟的异步方式触及 run 钩子。')
			}
		) */
		/* compiler.hooks.run.tapAsync(
			'ConsoleLogPlugin',
			(source, target, routesList, callback) => {
				console.log('以异步方式触及 run 钩子')
				callback()
			}
        ) */

        compiler.hooks.compile.tap('ConsoleLogPlugin',(compilation) => {
            console.log('compiler')
        })
        
        compiler.hooks.emit.tapAsync('ConsoleLogPlugin',(compilation,callback) => {
            console.log("构建开始了");
            //打包的内容存放在compilation的assets中
            const str = 'coperight by kaka';
            // debugger
            compilation.assets['copyright.txt'] = {
                source:function(){
                    return str
                },
                size:function(){
                    return str.length
                }
            }
            console.log(compilation.assets,"assets");
            callback()
        })
	}
}

module.exports = ConsoleLogPlugin
