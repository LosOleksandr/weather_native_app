import * as axios from 'axios'

export const axiosErrorValidator = (error: unknown) => {
  return axios.isAxiosError(error)
}

export const throwAxiosError = (axiosError: axios.AxiosError) => {
  throw new axios.AxiosError(
    axiosError.message,
    axiosError.code,
    axiosError.config,
    axiosError.response,
  )
}
