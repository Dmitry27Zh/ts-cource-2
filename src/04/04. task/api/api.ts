import axios from 'axios'
import { GetCarCategoriesList, GetPlacesList, GetSchedule } from './../data/requests'
import { Request, RequestSettings } from '../types/api'
import { BASE_URL } from '../constants'

const http = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
})

const getData = async <T extends Request>(settings: RequestSettings<T>): Promise<T['success']> => {
  const request = await http({
    method: settings.method,
    url: settings.url,
    params: settings.params,
  })

  return request.data
}

const getCarCategoriesList = async () => {
  const data = await getData<GetCarCategoriesList>({ method: 'GET', url: 'tsapi/car-categories/', params: {} })

  return data
}

const getPlacesList = async () => {
  const data = await getData<GetPlacesList>({ method: 'GET', url: 'tsapi/places/', params: {} })

  return data
}

const getSchedule = async (id: number) => {
  const data = await getData<GetSchedule>({ method: 'GET', url: 'tsapi/schedule/', params: { place_id: id } })

  return data
}

const API = {
  getCarCategoriesList,
  getPlacesList,
  getSchedule,
}

export default API
