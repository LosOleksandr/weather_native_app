import { axiosErrorValidator, throwAxiosError } from '@/utils/axios-error'

import api from './api-client'
import { CurrentWeatherQueryParams, CurrentWeatherResponse } from './types'

export const getCurrentWeather = async (
  query: CurrentWeatherQueryParams,
): Promise<CurrentWeatherResponse> => {
  try {
    const res = await api.get<CurrentWeatherResponse>('/current.json', {
      params: query,
    })

    return res.data
  } catch (error: unknown) {
    if (axiosErrorValidator(error)) {
      throwAxiosError(error)
    }

    throw new Error('An unknown error occurred')
  }
}
