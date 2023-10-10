"use strict";
let a = 1;
let b = '2';
// let c: number = a + b  ---- error
// console.log(c)
function sum(a, b) {
    return a + b;
}
// console.log(sum(1, '2')) ---- error
console.log(sum(1, 2));
const valueInput = document.querySelector('.value');
if (valueInput !== null) {
    // valueInput.value = 2  ---- error
    // valueInput.value = '2' ---- error type Element
}
if (valueInput instanceof HTMLInputElement) {
    valueInput.value = '2';
}
if (valueInput !== null && typeof valueInput === 'object' && 'value' in valueInput) {
    valueInput.value = '3';
}
let c = 3;
let d;
d = 5;
let e = 'str';
let f = true;
let g = /.*/g;
let h = [1, 2, 3];
let counter = 1;
let i = [counter, () => counter++];
function sum2(a, b) {
    if (typeof a === 'string') {
        a = parseInt(a);
    }
    if (typeof b === 'string') {
        b = parseInt(b);
    }
    return a + b;
}
sum2(1, '2');
function useState(initial) {
    let value = initial;
    function setValue(newValue) {
        value = newValue;
    }
    // ---- (number | ((newValue: number) => void))[]
    return [value, setValue];
}
let [counter2, setCounter2] = useState(2);
// counter2 + 1 ---- error
// setCounter2() ---- error
function useState2(initial) {
    let value = initial;
    function setValue(newValue) {
        value = newValue;
    }
    return [value, setValue];
}
let [counter3, setCounter3] = useState2(2);
counter3 + 1;
setCounter3(); // ---- Function: no arg, no error
function useState3(initial) {
    let value = initial;
    function setValue(newValue) {
        value = newValue;
    }
    return [value, setValue];
}
let [counter4, setCounter4] = useState3(5);
// setCounter4() ---- error
setCounter4(1);
function setUser(user) { }
function updateUser(id, user) { }
updateUser(2, {
    name: 'sjjs',
    some: 100,
    // a: 1, ---- error
});
const freeState = 'free';
const state1 = 'free';
function printFigure() { }
class Router {
    constructor(options) {
        this.baseUrl = options.baseUrl;
        this.routes = options.routes;
    }
}
const router = new Router({
    baseUrl: '/',
    routes: [
        {
            path: '/',
            redirect: '/home',
        },
        {
            path: '/home',
            component: {},
        },
        {
            path: '/office',
            // redirect: '/', ---- error
            component: {},
            // children: [],  ---- error
        },
    ],
});
const obj1 = { a: 2, b: 1 };
const value1 = '1'; // ---- string
const obj2 = { a: 1, b: 2, c: 3 }; // ---- 3 keys
// const obj3: Union2 = { a: 1, b: 2, c: 3 } ---- error: type never usage
const obj4 = { a: 1, b: 2 };