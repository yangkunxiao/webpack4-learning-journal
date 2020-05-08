// const Compiler = require('./compiler');



// class Myplugin {
//     constructor(){

//     }
//     apply(compiler){
//         // console.log(compiler.hooks,'compiler')
//         compiler.hooks.kzSyncHook.tap('eventName1',function(name,age){
//             console.log(`同步事件eventName1： ${name} 今年 ${age} 周岁了, 可是还是单身`);
//         })
//         compiler.hooks.kzAsyncParallaHook.tapAsync('eventName2',function(name,age,done){
//             setTimeout(() => {
//                 console.log(`异步事件eventName2： ${name} 今年 ${age} 周岁了, 可是还是单身`);
//                 done()
//             },3000)
//         })
//     }
// }

// const myPlugin = new Myplugin();

// const options = {
//     plugins:[myPlugin]
// }

// const compiler = new Compiler(options);

// compiler.run()

// module.exports = Myplugin

// 一个javascript命名函数
// function MyExampleWebpackPlugin() {
  
// };
// // 在插件函数的prototype上定义一个 apply 方法
// MyExampleWebpackPlugin.prototype.apply = function(compiler) {
//   // 指定一个挂载到webpack自身的事件钩子。
//   compiler.hooks.run.tap('compile', function(compilation) {
//     console.log('这是一个插件demo');
//     console.log(compilation)
//     // 功能完成后调用 webpack 提供的回调
//     // callback();
//   })
// }

// // 导出plugin
// module.exports = MyExampleWebpackPlugin;

// const HtmlWebpackPlugin = require('html-webpack-plugin');
// class Myplugin{
//     apply(compiler){
//         // console.log(compiler.hooks)
//         compiler.hooks.compilation.tap('Myplugin',function(compilation){
//             HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync('Myplugin',(data,done) => {
//                 // console.log(data);
//                 data.html += '<script>alert(0)</script>'
//                 done()
//             })
//             // console.log(compilation.assets,'data')
//             // compilation.hooks.optimize.tap('HelloMyPlugin',function(){
//             // })
//         })

//         compiler.hooks.compilation.tap('MyPlugin',function(compilation){
//             compilation.hooks.optimizeAssets.tapAsync('MyPlugin',function(data,done){
//                 console.log(data,'data')
//                 done()
//             })
//         })
//     }
// }

// module.exports = Myplugin;

// 自定义plugin
// class MyTestPlugin {
//     constructor(){

//     }
//     apply(complier){
//         let filename =  'test.txt';
//         complier.hooks.emit.tap('MyTestPlugin',(compilation) => {
//             compilation.assets[filename] = {
//                 source:() => {
//                     return '123'
//                 },
//                 size:() => {
//                     return 3
//                 }
//             }
//         })
//         complier.hooks.emit.tap('MyTestPlugin',(compilation) => {
//             let file = compilation.assets[filename];
//             console.log(file.source());
//             console.log(file.size());
//         })
//     }
// }
// module.exports = MyTestPlugin;



//自定义日志插件
class LogWebpackPlugin {
    constructor(emitCallback,doneCallback){
        this.emitCallback = emitCallback;
        this.doneCallback = doneCallback;
    }
    apply(complier){
        complier.hooks.emit.tap('LogWebpackPlugin',compilation => {
            this.emitCallback()
        })
        complier.hooks.done.tap('LogWebpackPlugin',compilation => {
            this.doneCallback()
        })
        complier.hooks.compilation.tap('LogWebpackPlugin',compilation => {
            //编译(compilation)创建之后，执行插件。
            console.log('编译ing')
        })
        complier.hooks.compile.tap('LogWebpackPlugin',compilation => {
            //一个新的编译(compilation)创建之后，钩入(hook into) compiler。
            console.log('开始编译')
        })
    }
}

module.exports = LogWebpackPlugin;