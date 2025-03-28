const checkEnv = (value: string | undefined, key: string) => {
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`)
  }

  return value
}

const env = {
  BASE_URL: checkEnv(process.env.EXPO_PUBLIC_API_URL, 'EXPO_PUBLIC_API_URL'),
  WEATHER_API_KEY: checkEnv(
    process.env.EXPO_PUBLIC_API_KEY,
    'EXPO_PUBLIC_API_KEY',
  ),
  GOOGLE_API_KEY: checkEnv(
    process.env.EXPO_PUBLIC_GOOGLE_API_KEY,
    'EXPO_PUBLIC_GOOGLE_API_KEY',
  ),
  NODE_ENV: process.env.NODE_ENV,
}

export { env }
