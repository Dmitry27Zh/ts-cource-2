type Sample = Array<number | Pool>

type Pool = { values: Sample }

const box: Sample = [2, 3, { values: [5] }, 4, { values: [5, 6, { values: [1, 4] }] }]

// function flatBox(box: Sample) {
//   const result: number[] = []

//   box.forEach((item) => {
//     if (typeof item === 'number') {
//       result.push(item)
//     } else {
//       flatBox(item.values).forEach((innerItem) => result.push(innerItem))
//     }
//   })

//   return result
// }

function flatBox(box: Sample) {
  const result: number[] = []

  box.forEach((item) => {
    if (typeof item === 'object' && 'values' in item) {
      flatBox(item.values).forEach((innerItem) => result.push(innerItem))
    } else {
      result.push(item)
    }
  })

  return result
}

const a = { values: [1, 2] }
const b = { value: [1, 2] }
const c = { a: 1 }

if ('values' in a) {
  a // ---- not Pool
}

function isPool(item: any): item is Pool {
  return 'values' in item
}

if (isPool(a)) {
  a
}

if (isPool(b)) {
  b
}

if (isPool(c)) {
  c
}

export {}
