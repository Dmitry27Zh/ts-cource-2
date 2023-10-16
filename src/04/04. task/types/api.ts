import API from '../api/api'
import { BASE_URL } from '../constants'

export type APICategories = ReturnType<typeof API.getCarCategoriesList>

export type APIPlaces = ReturnType<typeof API.getPlacesList>

export type APISchedule = ReturnType<typeof API.getSchedule>

export type Method = 'get' | 'post' | 'GET' | 'POST'

export type Request = {
  method: Method
  url: string
  success: any
  params?: object
}

export type RequestSettings<T extends Request> = Omit<T, 'success' | 'params' | 'url'> & {
  url: StringAfter<typeof BASE_URL, T['url']>
  params: T['params'] extends object ? T['params'] : {}
}

export type StringAfter<T extends string, U extends string> = U extends `${T}${infer R}` ? R : never
