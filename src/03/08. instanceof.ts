type Id<T> = T extends { id: any } ? T['id'] : never
type Id2<T extends { id: any }> = T['id']

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

type Constructor<T, Arguments extends unknown[] = any[]> = new (...arguments_: Arguments) => T
type Class<T, Arguments extends unknown[] = any[]> = Constructor<T, Arguments> & { prototype: T }
type ProductStorage = IdStorage<TProduct>
type Instance0f<T extends Class<any>> = T extends Class<infer I> ? I : never

export {}
