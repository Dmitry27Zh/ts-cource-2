let a: number = 1
let b: string = '2'
// let c: number = a + b  ---- error
// console.log(c)

function sum(a: number, b: number) {
  return a + b
}

// console.log(sum(1, '2')) ---- error
console.log(sum(1, 2))

const valueInput = document.querySelector('.value')

if (valueInput !== null) {
  // valueInput.value = 2  ---- error
  // valueInput.value = '2' ---- error type Element
}

if (valueInput instanceof HTMLInputElement) {
  valueInput.value = '2'
}

if (valueInput !== null && typeof valueInput === 'object' && 'value' in valueInput) {
  valueInput.value = '3'
}
