type ReturnOf<T> = T extends () => infer R ? R : never
type IsFn<T> = T extends (...args: any[]) => any ? T : never

function a() {}
function a2() {
  return 2
}
let b = 'hi'

type A1 = IsFn<typeof a>
type A2 = IsFn<typeof b>

type ReturnA1 = ReturnOf<typeof a>
type ReturnA2 = ReturnOf<typeof a2>

type Actions = {
  getUserId: () => number
  getUserName: () => string
}

type ActionsResults = {
  [K in keyof Actions]: ReturnOf<Actions[K]>
}

type SomeString<T> = T extends `${infer R1}` ? R1 : T
type SomeString2<T> = T extends `${infer R1}${infer R2}` ? R1 : T // ---- lazy infer -> greedy infer
type SomeString3<T> = T extends `${infer R1} ${infer R2}` ? R1 : T
type SomeString4<T> = T extends `${infer R1} ${infer R2}` ? R2 : T

const str = 'Hello, World!'

type T1 = SomeString<typeof str>
type T2 = SomeString2<typeof str>
type T3 = SomeString3<typeof str>
type T4 = SomeString4<typeof str>

const snakeString = 'some_other_property'

type SomeString5<T> = T extends `${infer R1}_${infer R2}${infer R3}` ? R1 : T
type SomeString6<T> = T extends `${infer R1}_${infer R2}${infer R3}` ? R2 : T
type SomeString7<T> = T extends `${infer R1}_${infer R2}${infer R3}` ? R3 : T

type T5 = SomeString5<typeof snakeString>
type T6 = SomeString6<typeof snakeString>
type T7 = SomeString7<typeof snakeString>

type CamelCase<T> = T extends `${infer R1}_${infer R2}${infer R3}` ? `${R1}${Uppercase<R2>}${CamelCase<R3>}` : T

type CamelKeys<T extends object> = {
  [K in keyof T as CamelCase<K>]: T[K]
}

type TDog = {
  age: number
  voice: string
  is_agressive: boolean
  can_find_food_without_human: boolean
}

type CamelDog = CamelKeys<TDog>

type TProduct = {
  id: number
  category_id: number
  store_rest_full: number
  title: string
}

type Product = CamelKeys<TProduct>

function camelCase<T extends string>(str: T): CamelCase<T> {
  return str.replace(/[_.-](\w|$)/g, (_, x) => x.toUpperCase()) as CamelCase<T>
}

function camelKeys(obj: any): any {
  let res: any = {}

  for (let key in obj) {
    res[camelCase(key)] = obj[key]
  }

  return res
}

function getFromServer(): TProduct {
  return { id: 1, category_id: 2, store_rest_full: 3, title: 'Hello!' }
}

let product = camelKeys(getFromServer())

const snakeStr = 'hello_world'
const camelStr = camelCase(snakeStr)

export {}
