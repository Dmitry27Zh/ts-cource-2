class IdStorage<T extends { id: number }> {
  items: Array<T> = []

  add(item: T): void {
    this.items.push(item)
  }

  remove(id: number): void {
    this.items = this.items.filter((item) => item.id !== id)
  }
}

type TProduct = {
  id: number
  title: string
  price: number
}

type TMessage = {
  id: number
  user_id: number
  text: string
  dt: Date
}

let productsStorage = new IdStorage() // ---- auto type: unknown
let messageStorage = new IdStorage()

let productsStorage2 = new IdStorage<TProduct>()
let messageStorage2 = new IdStorage<TMessage>()

let p1: TProduct = {
  id: 100,
  title: 'p1',
  price: 1000,
}
let p2: TProduct = {
  id: 101,
  title: 'p2',
  price: 2000,
}
let p3: TProduct = {
  id: 102,
  title: 'p3',
  price: 3000,
}
let m1: TMessage = {
  id: 100,
  user_id: 1,
  text: 'hi there',
  dt: new Date(),
}
let m2: TMessage = {
  id: 101,
  user_id: 2,
  text: 'hi there 2',
  dt: new Date(),
}

productsStorage.add(p1)
messageStorage.add(m1)

productsStorage.add(m2) // ---- no error
// productsStorage2.add(m2) // ---- error

export {}
