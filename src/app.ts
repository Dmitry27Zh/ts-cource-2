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

type RouterOptions = {
  baseUrl: string
  routes: object[]
}

type RouterBaseRecord = {
  path: string
  name?: string
}

type RouterComponentRecord = RouterBaseRecord & {
  component: object
}

type RouterRedirectRecord = {}

class Router {
  baseUrl: string
  routes: object[]

  constructor(options: RouterOptions) {
    this.baseUrl = options.baseUrl
    this.routes = options.routes
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
      component: {},
      children: [],
    },
  ],
})

type haha = number & string

type TA = {
  a: number
  b: number
}

type TC = {
  b: string
  c: number
}

type Union = TA | TC
const obj1: Union = { a: 2, b: 1 }
type Extended = TA & TC
// const obj2: Extended = { a: 1, b: 2, c: 3 } ---- error: b type – never
type A = string | number
type B = string | boolean
type Intersection = A & B
const value1: Intersection = '1' // ---- string

const obj2: Union = { a: 1, b: 2, c: 3 } // ---- 3 keys
type TA2 = {
  a: number
  b: number
  c?: never
}

type TC2 = {
  a?: never
  b: string
  c: number
}

type Union2 = TA2 | TC2
// const obj3: Union2 = { a: 1, b: 2, c: 3 } ---- error: type never usage
const obj4: Union2 = { a: 1, b: 2 }
