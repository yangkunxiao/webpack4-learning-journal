module.exports = function(content,map,meta){
    console.log(content,map,meta,'🍌🍎k开始构建loader了')
    console.log(this.data,'🍌🍎k开始构建loader了')
    const str = content + this.data.value;
    return str 
}

module.exports.pitch = function(remainRequest,preRequest,data){
    data.value = '123'
}

