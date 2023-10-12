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

interface Tiger extends Cat {
  agressive: boolean
}

type SafetyAnimal<T, U> = T extends { agressive: boolean } ? (U extends { agressive: boolean } ? never : U) : T
type A1 = SafetyAnimal<Cat, Dog>
type A2 = SafetyAnimal<Dog, Cat>
type A3 = SafetyAnimal<Tiger, Dog>

export {}
