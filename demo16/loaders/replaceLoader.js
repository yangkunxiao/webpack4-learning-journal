const loaderUtils = require('loader-utils');
module.exports = function (content) {
    //同步
    const options = loaderUtils.getOptions(this);
    const result = content + `;console.log("hello ${options.name}")`
    // return result
    this.callback(null, result)
}