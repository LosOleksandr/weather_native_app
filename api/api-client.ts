import axios from 'axios'

import { env } from '@/utils/env'

const BASE_URL = env.BASE_URL
const API_KEY = env.WEATHER_API_KEY

const api = axios.create({
  baseURL: BASE_URL,
})

api.interceptors.request.use(
  config => {
    if (!config.params) {
      config.params = {}
    }

    config.params.key = API_KEY

    return config
  },
  error => Promise.reject(error),
)

export default api
