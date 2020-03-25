let acorn = require('acorn')
const walk = require('acorn-walk')

const result = acorn.parse('1 + 1')
console.log(result)

walk.simple(result, {
	Literal(node) {
		console.log(`Found a literal: ${node.value}`)
	}
})
