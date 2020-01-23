import '@babel/polyfill';
import './index.css'
const arr = [
    new Promise(() => {}),
    new Promise(() => {})
];
arr.map(v => {
    console.log(v)
})