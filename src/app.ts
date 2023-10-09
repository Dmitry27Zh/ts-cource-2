let a: number = 1
let b: string = '2'
// let c: number = a + b  ---- error
// console.log(c)

function sum(a: number, b: number) {
  return a + b
}

// console.log(sum(1, '2')) ---- error
console.log(sum(1, 2))

const valueInput = document.querySelector('.value') as HTMLInputElement
// valueInput.value = 2  ---- error
valueInput.value = '2'
