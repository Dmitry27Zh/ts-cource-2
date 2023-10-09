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
