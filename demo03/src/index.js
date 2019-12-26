//webpack 支持ESModule 、 CommonJS 、 AMD规范

//ES Module
import add from '../components/a.js';
console.log(add(1, 1));


//CommonJS
const minus = require('../components/b.js');
console.log(minus(2, 1));


//AMD
// require(['../components/c.js'], function(mult) {
//     console.log(mult(2, 3));
// })