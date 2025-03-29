import { useEffect, useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import GetLocation from 'react-native-get-location'

import { getCurrentWeather } from '@/api/current-weather'
import { CurrentWeatherResponse } from '@/api/types'
import EmptyState from '@/components/EmptyState'
import LoadingScreen from '@/components/LoadingScreen'
import ScreenWrapper from '@/components/ScreenWrapper'
import WeatherDetails from '@/components/WeatherDetails'
import { requestGeoPermission } from '@/geo/request-geo-permission'
import colors from '@/utils/colors'

type Status = 'idle' | 'pending' | 'done' | 'error'

export default function Index() {
  const [currentWeather, setCurrentWeather] =
    useState<CurrentWeatherResponse | null>(null)
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const getLocation = async () => {
      setStatus('pending')
      setError(null)

      try {
        const hasPermission = await requestGeoPermission()
        if (!hasPermission) {
          setError('Location permission denied')
          setStatus('error')
          return
        }

        const { longitude, latitude } = await GetLocation.getCurrentPosition({
          enableHighAccuracy: true,
          timeout: 10000,
        })

        const q = `${latitude},${longitude}`
        const weather = await getCurrentWeather({ q })

        setCurrentWeather(weather)
        setStatus('done')
      } catch (error) {
        console.error('Weather fetch error:', error)
        setError('Failed to fetch weather data')
        setStatus('error')
      }
    }

    getLocation()
  }, [])

  if (status === 'pending') return <LoadingScreen />

  if (status === 'error') {
    return (
      <ScreenWrapper
        isCentered
        containerBackgroundColor={colors.background_dark}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>
            {error || 'Something went wrong'}
          </Text>
        </View>
      </ScreenWrapper>
    )
  }

  return (
    <ScreenWrapper containerBackgroundColor={colors.background_dark}>
      {status === 'idle' ? null : status === 'done' && currentWeather ? (
        <WeatherDetails
          weather={currentWeather.current}
          location={currentWeather.location}
        />
      ) : (
        <EmptyState />
      )}
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 24,
    color: colors.secondary,
    textAlign: 'center',
    padding: 10,
  },
})
