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

type CommonPart<T extends object, U extends object> = {
  [K in keyof T]: K extends keyof U ? K : never
}

type CommonPart2<T extends object, U extends object> = {
  [K in keyof T as K extends keyof U ? K : never]: T[K]
}

type Animal = CommonPart<Cat, Dog>
type Animal2 = CommonPart2<Cat, Dog>

export {}
