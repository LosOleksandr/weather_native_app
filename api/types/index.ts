export type CurrentWeatherResponse = {
  current: CurrentWeather
  location: Location
}

export type CurrentWeatherQueryParams = {
  q: string
  lang?: string
  aqi?: 'yes' | 'no'
}

export type CurrentWeather = {
  air_quality?: AirQuality
  cloud: number
  condition: Condition
  dewpoint_c: number
  dewpoint_f: number
  feelslike_c: number
  feelslike_f: number
  gust_kph: number
  gust_mph: number
  heatindex_c: number
  heatindex_f: number
  humidity: number
  is_day: number
  last_updated: string
  last_updated_epoch: number
  precip_in: number
  precip_mm: number
  pressure_in: number
  pressure_mb: number
  temp_c: number
  temp_f: number
  uv: number
  vis_km: number
  vis_miles: number
  wind_degree: number
  wind_dir: string
  wind_kph: number
  wind_mph: number
  windchill_c: number
  windchill_f: number
}

export type Location = {
  country: string
  lat: number
  localtime: string
  localtime_epoch: number
  lon: number
  name: string
  region: string
  ts_id: string
}

export type AirQuality = {
  co: number
  'gb-defra-index': number
  no2: number
  o3: number
  pm2_5: number
  pm10: number
  s02: number
  'us-spa-index': number
}

export type Condition = {
  text: string
  icon: string
  code: number
}
