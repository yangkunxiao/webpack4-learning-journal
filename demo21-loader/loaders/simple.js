const loaderUtils = require('loader-utils')
//主要解析ast的解析起
const acorn = require('acorn')
//遍历抽象语法树
const walk = require('acorn-walk')
//魔法字符串 用户替换字符串
const MagicString = require('magic-string')
//用于将JavaScript ast生成JavaScript代码
const escodegen = require('escodegen');

module.exports = function (content) {
	// console.log('🍌获取的文件内容：',content)
	const options = loaderUtils.getOptions(this)
	// console.log('🍎前置钩子：',this.data.value);
    const code = new MagicString(content)
    let res ;
	const ast = acorn.parse(content)
	console.log('获取的ast：' ,ast);
	walk.simple(ast, {
       // 解析let const 为var
		VariableDeclaration(node) {
            // res = node;
            // console.log('🌳node数据: ',node);
            node.kind = 'var';
		    // const { start } = node;
		    // code.overwrite(start,start + 5,'var')
        },
        //解析函数
        FunctionExpression(node){
            console.log('普通函数:', node);
        },
        //解析箭头函数
		ArrowFunctionExpression(node) {
			console.log('箭头函数:', node);
            node.type = 'FunctionDeclaration';
		},
    })
	return escodegen.generate(ast)
}
//前置钩子
module.exports.pitch = function (r, prerequest, data) {
	data.value = 'kaka'
}

/**
 * Node {
  type: 'FunctionDeclaration',
  start: 80,
  end: 127,
  id: Node { type: 'Identifier', start: 89, end: 92, name: 'fun' },
  expression: false,
  generator: false,
  async: false,
  params: [ Node { type: 'Identifier', start: 93, end: 99, name: 'params' } ],
  body: Node {
    type: 'BlockStatement',
    start: 100,
    end: 127,
    body: [ [Node] ]
  }
}


Node {
  type: 'ArrowFunctionExpression',
  start: 39,
  end: 78,
  id: null,
  expression: false,
  generator: false,
  async: false,
  params: [ Node { type: 'Identifier', start: 40, end: 46, name: 'params' } ],
  body: Node { type: 'BlockStatement', start: 51, end: 78, body: [ [Node] ] }
}
 */
