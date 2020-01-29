// import { add } from './math';

// let sum = add(1,4);
// console.log(sum)


//异步导入
function getComponent(){
    return import(/* webpackChunkName:"lodash" */ "lodash").then(({ default:_ }) => {
        let div = document.createElement('div');
        div.innerHTML = _.join(['hello','world','lodash']);
        return div;
    })
};

getComponent().then((ele) => {
    document.body.appendChild(ele)
})

// import _ from 'lodash';
// import $ from 'jquery';
// let div = document.createElement('div');
// div.innerHTML = _.join(['hello', 'world', 'lodash']);
// document.body.appendChild(div)