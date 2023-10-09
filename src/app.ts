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

function useState(initial: number) {
  let value = initial
  function setValue(newValue: number) {
    value = newValue
  }

  // ---- (number | ((newValue: number) => void))[]
  return [value, setValue]
}

let [counter2, setCounter2] = useState(2)
// counter2 + 1 ---- error
// setCounter2() ---- error

function useState2(initial: number): [number, Function] {
  let value = initial
  function setValue(newValue: number) {
    value = newValue
  }

  return [value, setValue]
}

let [counter3, setCounter3] = useState2(2)
counter3 + 1
setCounter3() // ---- Function: no arg, no error

function useState3(initial: number): [number, (newValue: number) => void] {
  let value = initial
  function setValue(newValue: number) {
    value = newValue
  }

  return [value, setValue]
}

let [counter4, setCounter4] = useState3(5)
// setCounter4() ---- error
setCounter4(1)

type User = {
  name: string
  some?: number
}

function setUser(user: User): void {}

function updateUser(id: number, user: User): void {}

updateUser(2, {
  name: 'sjjs',
  some: 100,
  // a: 1, ---- error
})

const freeState = 'free'
type TState = typeof freeState | 'pending' | 'done'
const state1: TState = 'free'

type Figure = {
  type: 'square' | 'circle'
}

type square = {
  type: 'square'
  x: number
  y: number
  perimeter: () => void
  area: () => void
}

type Circle = {
  type: 'circle'
  r: number
  area: () => number
}

function printFigure() {}
