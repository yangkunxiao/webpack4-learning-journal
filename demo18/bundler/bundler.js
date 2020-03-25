const fs = require('fs')
const path = require('path')
//分析 生成ast
const parser = require('@babel/parser')
//
const traverse = require('@babel/traverse').default
const babel = require('@babel/core')

const moduleAnalyser = filename => {
	const content = fs.readFileSync(filename, 'utf-8')
	// console.log(content,'content');
	const ast = parser.parse(content, {
		sourceType: 'module'
	})
	const dependences = {}
	// const dependences = [];
	traverse(ast, {
		ImportDeclaration({ node }) {
			// console.log(node);
			const pathDir = path.dirname(filename)
			const pathResolveDir = './' + path.join(pathDir, node.source.value)
			// console.log(pathResolveDir,'resolve');
			// dependences.push(pathResolveDir);
			dependences[node.source.value] = pathResolveDir
		}
	})
	// console.log(dependences);
	const { code } = babel.transformFromAst(ast,null,{
	    presets:['@babel/preset-env']
	})
	// console.log(code,'code')
	// babel.transformFromAst( 
	// 	ast,
	// 	null,
	// 	{ presets: ['@babel/preset-env'] },
	// 	function(err, result) {
	// 		const { code, map, ast } = result
    //         console.log(code, map, ast);
    //         return result
	// 	}
    // )
	return {
		filename,
        dependences,
        code
	}
	// console.log(ast.program.body)
}


const makeDependencesGraphInfo = function(entry){
    const moduleInfo = moduleAnalyser(entry);
    const graphArray = [ moduleInfo ];
    for(let i = 0 ; i < graphArray.length; i++){
        const item = graphArray[i];
        const { dependences } = item;
        if(dependences){
            for (let j in dependences) {
                console.log(j)
                graphArray.push(moduleAnalyser(dependences[j]))
            }
        }
    }
    const graph = {};
    graphArray.forEach(v => {
        graph[v.filename] = {
            dependences:v.dependences,
            code:v.code
        }
    })
    return graph;
} 

const generatorCode = (entry) => {
    const graph =  JSON.stringify(makeDependencesGraphInfo(entry));
    return `
        (function(graph){
            function require(module){
                function localRequire(relativePath){
                    return require(graph[module].dependences[relativePath])
                }
                var exports = {};
                (function(require,exports,code){
                    eval(code)
                })(localRequire,exports,graph[module].code)
                return exports;
            }
            require('${entry}')
        })(${graph})
    `
}


let result = generatorCode('./src/index.js')
console.log(result)