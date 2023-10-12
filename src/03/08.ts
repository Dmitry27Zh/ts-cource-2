type Id<T> = T extends { id: any } ? T['id'] : never
type Id2<T extends { id: any }> = T['id']

export {}
