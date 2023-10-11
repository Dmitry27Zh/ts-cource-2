type A = {
  a: number
  b: number
  c?: never
}

type B = {
  a?: never
  b: number
  c: number
}

type AB = A | B
let box: AB[] = []
box.push({ a: 1, b: 1 })
box.push({ b: 1, c: 2 })

interface C {
  a: number
  b: number
  c?: never
}

interface D {
  a?: never
  b: number
  c: number
}

// interface CD extends C, D {} ---- error: conflict

let iBox: Array<C | D> = []
iBox.push({ a: 1, b: 2 })

type TSome = number | BigInt // ---- type alias

interface A1 {
  a: number
}

interface A1 {
  b: number
}

interface A2 extends A1 {
  c: number
}

let valueA1: A1 = { a: 2, b: 2 }
let valueA2: A2 = { a: 1, b: 2, c: 3 }

interface Cat {
  age: number
  voice: string
  lifes: number
}

interface Dog {
  age: number
  voice: string
  agressive: boolean
}

interface Kotopes extends Cat, Dog {}

let kotopes: Kotopes = { age: 10, voice: 'gawmew', lifes: 9, agressive: false }

type TCat = {
  age: number
  voice: string
  lifes: number
}

type TDog = {
  age: number
  voice: string
  agressive: boolean
}

type TKotopes = TCat & TDog

let kotopes2: TKotopes = { age: 10, voice: 'gawmew', lifes: 9, agressive: false }

// let kotopes3: Kotopes = { age: 10, voice: 'gawmew' } ---- error
// let kotopes4: TKotopes = { age: 10, voice: 'gawmen' } ---- error

type TCat2 = {
  age: number
  voice: string
  lifes: number
  agressive: null
}

type TDog2 = {
  age: number
  voice: string
  agressive: boolean
}

type TKotopes2 = TCat2 & TDog2 // ---- never

export {}
