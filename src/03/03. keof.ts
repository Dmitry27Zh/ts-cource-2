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

type CatKey = keyof Cat
let a: CatKey = 'age'

type CatKeyH = 'age' | 'voice' | 'lifes'
let b: CatKeyH = 'lifes'

export {}
