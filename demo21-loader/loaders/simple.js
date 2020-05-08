const loaderUtils = require('loader-utils')
const acorn = require('acorn')
const walk = require('acorn-walk')
const MagicString = require('magic-string')

module.exports = function(content){
    console.log('🍌获取的文件内容：',content)
    const options = loaderUtils.getOptions(this);
    console.log('🍎前置钩子：',this.data.value);
    const code = new MagicString(content);
    const ast = acorn.parse(content);
    // console.log('获取的ast：' ,ast);

    walk.simple(ast,{
        VariableDeclaration(node) {
            console.log('🌳node数据: ',node);
            const { start,end } = node;
            code.overwrite(start,start + 5,'var')
        }
    })

    return code.toString()
}

module.exports.pitch = function(r,prerequest,data){
    data.value = 'kaka'
}