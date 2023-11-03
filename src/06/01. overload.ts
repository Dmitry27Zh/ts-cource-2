function makeDate(timestamp: number): Date
function makeDate(mOrTimestamp: number, d: number, y: number): Date

function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d)
  } else {
    return new Date(mOrTimestamp)
  }
}

const d1 = makeDate(12345678)
const d2 = makeDate(5, 5, 5)

let a = { a: 1 }
let b = { b: 1 }
let c = { c: 1 }
let d = { d: 1 }
let e = { e: 1 }

let res = Object.assign({}, a, b, c) // ---- intersection
let res2 = Object.assign({}, a, b, c, d) // ---- any

function merge<T extends object, U extends object>(o1: T, o2: U): T & U
function merge<T extends object, U extends object, V extends object>(o1: T, o2: U, o3: V): T & U & V

function merge(...args: object[]) {
  return Object.assign({}, ...args)
}

let res3 = merge(a, b) // ---- any without overload
