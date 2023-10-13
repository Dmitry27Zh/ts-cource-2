type Some = {
  property: number
  other: string
  1: string
}

type CapitalizeObject<O extends object> = {
  [K in keyof O as Capitalize<K & string>]: O[K]
}

type CapitalizeObject2<O extends object> = {
  [K in keyof O as K extends string ? Capitalize<K> : never]: O[K]
}

type CapSome = CapitalizeObject<Some>
type CapSome2 = CapitalizeObject2<Some>

export {}
