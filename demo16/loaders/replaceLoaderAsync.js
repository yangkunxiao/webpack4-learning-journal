const loaderUtils = require('loader-utils');
module.exports = function(content){
    //同步
    // const options = loaderUtils.getOptions(this);
    // const result = content + ';console.log("hello kaka")'
    // // return result
    // this.callback(null,result)

    //异步
    function sleep(time){
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                const result = content.replace("hello","haha")
                resolve(result)
            }, time);
        })
    }
    //告诉loader-runner 这个loader将会异步调用，返回this.callback()
    let callback = this.async();
    sleep(1000).then(data => {
        callback(null,data)
    })
}