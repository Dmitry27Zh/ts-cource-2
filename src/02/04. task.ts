interface IRouterOptions {
  baseUrl: string
  routes: TRouterRecord[]
}

interface IRouterBaseRecord {
  path: string
  name?: string
}

interface IRouterComponentRecord extends IRouterBaseRecord {
  component: object
  children?: TRouterRecord[]
  redirect?: never
}

interface IRouterComponentsRecord extends IRouterBaseRecord {
  components: object[]
  children?: TRouterRecord[][]
  redirect?: never
  component?: never
}

interface IRouterRedirectRecord extends IRouterBaseRecord {
  component?: never
  components?: never
  redirect: string
}

type TRouterRecord = IRouterComponentRecord | IRouterRedirectRecord | IRouterComponentsRecord

class Router {
  baseUrl: string
  routes: object[]

  constructor(options: IRouterOptions) {
    this.baseUrl = options.baseUrl
    this.routes = options.routes
  }
}

const router = new Router({
  baseUrl: '/',
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      component: {},
    },
    {
      path: '/home',
      components: [{}],
      children: [[{ path: '/home', redirect: '1' }]],
    },
    {
      path: '/office',
      // redirect: '/', // ---- error
      component: {},
      // children: [],  // ---- error
    },
  ],
})

export {}
