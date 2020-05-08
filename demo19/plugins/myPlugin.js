const { SyncHook ,AsyncParallelHook} = require('tapable')

class MyPlugin {
    constructor(){
        this.hooks = {
            kzSyncHook:new SyncHook(['name','age']),
            kzAsyncParallaHook:new AsyncParallelHook(['name','age'])
        }
    }
}

const myPlugin = new MyPlugin();

myPlugin.hooks.kzSyncHook.tap('eventName1',function(name,age){
    console.log(`同步事件eventName1： ${name} 今年 ${age} 周岁了, 可是还是单身`);
})

myPlugin.hooks.kzAsyncParallaHook.tapAsync('eventName2',function(name,age,done) {
    setTimeout(() => {
        console.log(`异步事件eventName2： ${name} 今年 ${age} 周岁了, 可是还是单身`);
        done()
    },3000)
})

myPlugin.hooks.kzSyncHook.call('kaka',25);
myPlugin.hooks.kzAsyncParallaHook.callAsync('kaka',35,() => {
    console.log('end')
});


module.exports = MyPlugin