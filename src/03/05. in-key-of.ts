interface Cat {
  age: number
  voice: string
  lifes: number
}

type Readonly<T extends object> = {
  readonly [K in keyof T]?: T[K]
}

type ReadonlyCat = Readonly<Cat>

let cat1: Cat = {
  age: 1,
  voice: 'meow',
  lifes: 9,
}
let cat2: ReadonlyCat = {
  lifes: 9,
}

cat1.lifes-- // ---- no error
// cat2.lifes-- // ---- error

type UppercaseObjectKeys<O extends object> = {
  [K in keyof O as Uppercase<K & string>]: O[K] // type Uppercase<T extends string>
}

let uppercaseCat: UppercaseObjectKeys<Cat> = {
  AGE: 2,
  VOICE: 'meow',
  LIFES: 9,
}

export {}
