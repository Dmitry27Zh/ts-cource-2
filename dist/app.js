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
// valueInput.value = 2  ---- error
valueInput.value = '2';
