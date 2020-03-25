/**
 * 1、SyncHook 同步的串行 不关心监听函数的返回值
 * 2、SyncBailHook 同步的串行 只有有一个函数的返回值不为null 即跳过所有的
 * 3、SyncWaterfallHook 同步的串行 上一个回调函数的返回值可以返给下一个回调函数
 * 4、SyncLoopHook 同步循环 监听函数返回true返回的执行 
 * 
 * 5+ 同上 但是异步
 */
const {
    SyncHook,
    SyncBailHook,
    SyncWaterfallHook,
    SyncLoopHook,
    AsyncParallelHook,
    AsyncParallelBailHook,
    AsyncSeriesHook,
    AsyncSeriesBailHook,
    AsyncSeriesWaterfallHook 
 } = require("tapable");
//接受一个可选参数 参数为字符串的数组
// compiler.hooks 等同于
 const queue = new SyncWaterfallHook(['name']);
//订阅
//标识订阅函数
 queue.tap('1',function(name){
     console.log(name,1);
     return 1
 })

 queue.tap('2',function(name,name2){
    console.log(name,name2,1)
 })
//执行钩子 等同apply
 queue.call("webpack 🍎")