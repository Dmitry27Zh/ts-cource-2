type LazyKey<O extends object, K extends Extract<keyof O, string>> = {
  [N in keyof O]: N extends K ? () => O[N] : O[N]
}

function lazyKey<O extends object, K extends Extract<keyof O, string>>(obj: O, targetKey: K): LazyKey<O, K> {
  let res: any = {}

  for (let k in obj) {
    const value = obj[k]

    if (k === targetKey) {
      res[k] = () => value
    } else {
      res[k] = value
    }
  }

  return res
}

interface Test {
  id: number
  title: string
  steps: Array<object>
}

let test1: Test = {
  id: 1,
  title: 'First',
  steps: [
    {
      title: 'step1',
    },
    {
      title: 'step2',
    },
    {
      title: 'step3',
    },
  ],
}

interface BigMap {
  id: number
  title: string
  schema: Object[][][]
}

let map1: BigMap = {
  id: 1,
  title: 'Map',
  schema: [[[{ a: 1 }]]],
}

type LazyTest<K extends keyof Test> = LazyKey<Test, K>
let lazyTest: LazyTest<'steps'> = lazyKey(test1, 'steps')
console.log(test1)
console.log(lazyTest)
console.log(lazyTest.steps())

type LazyMap<K extends keyof BigMap> = LazyKey<BigMap, K>
let lazyMap: LazyMap<'schema'> = lazyKey(map1, 'schema')
console.log(map1)
console.log(lazyMap)
console.log(lazyMap.schema())
