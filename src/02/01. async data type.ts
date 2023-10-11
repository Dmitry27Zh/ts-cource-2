type TProduct = {
  id: number
  prices: number
  rest: number
  title: string
}

async function getProducts(): Promise<TProduct[]> {
  let response = await fetch('http://faceprog.ru/reactcourseapi/products/all.php')
  let data = await response.json()

  return data
}

getProducts().then((products) => {
  console.log(products)

  products.forEach((product) => console.log(product.prices)) // ---- undefined
})

export {}
