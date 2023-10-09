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

let c: number = 3
let d: number
d = 5
let e: string = 'str'
let f: boolean = true
let g: RegExp = /.*/g
let h: number[] = [1, 2, 3]
let counter = 1
let i = [counter, () => counter++]

function sum2(a: number | string, b: number | string) {
  if (typeof a === 'string') {
    a = parseInt(a)
  }

  if (typeof b === 'string') {
    b = parseInt(b)
  }

  return a + b
}

sum2(1, '2')
