import { MaterialIcons } from '@expo/vector-icons'
import { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import GetLocation from 'react-native-get-location'
import Animated, { FadeInUp } from 'react-native-reanimated'

import { getCurrentWeather } from '@/api/current-weather'
import { CurrentWeather, Location } from '@/api/types'
import LoadingScreen from '@/components/LoadingScreen'
import ScreenWrapper from '@/components/ScreenWrapper'
import { requestGeoPermission } from '@/geo/request-geo-permission'
import colors from '@/utils/colors'

export default function Index() {
  const [currentWeather, setCurrentWeather] = useState<CurrentWeather | null>(
    null,
  )
  const [currentLocation, setCurrentLocation] = useState<Location | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<unknown>(null)

  useEffect(() => {
    const getLocation = async () => {
      try {
        setIsLoading(true)
        setError(null)
        const hasPermission = await requestGeoPermission()

        if (!hasPermission) {
          setError(new Error('Location permission denied'))
          return
        }

        const { longitude, latitude } = await GetLocation.getCurrentPosition({
          enableHighAccuracy: true,
          timeout: 10000,
        })

        const q = latitude + ',' + longitude

        const weather = await getCurrentWeather({
          q,
        })

        setCurrentWeather(weather.current)
        setCurrentLocation(weather.location)
      } catch (error) {
        console.error('Weather fetch error:', error)
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }

    getLocation()
  }, [])

  if (isLoading) return <LoadingScreen />

  if (error)
    return (
      <ScreenWrapper isCentered containerBackgroundColor={colors.muted}>
        <Text style={{ fontSize: 24, color: colors.primary }}>
          Please, allow location
        </Text>
        <Text style={{ fontSize: 14, color: colors.primary, marginTop: 8 }}>
          Go to Settings - Location - Weather App - Allow
        </Text>
      </ScreenWrapper>
    )

  return (
    <ScreenWrapper containerBackgroundColor={colors.background_dark}>
      {currentWeather && currentLocation && (
        <Animated.View
          entering={FadeInUp.restDisplacementThreshold(0.1).withInitialValues({
            transform: [{ translateY: -120 }],
          })}
          style={styles.main_info}>
          <View style={styles.main_info_top_block}>
            <View>
              <Text style={styles.degrees_indicator}>
                {currentWeather?.feelslike_c}
                {'\u00B0'}
              </Text>
              <Text style={styles.weather_description}>
                {currentWeather?.condition.text}
              </Text>
            </View>
            <Image
              source={{ uri: `https://${currentWeather?.condition.icon}` }}
              style={styles.weather_condition_image}
              resizeMethod='scale'
              resizeMode='cover'
            />
          </View>
          <View style={styles.location_city_container}>
            <Text style={styles.location_city}>{currentLocation?.name}</Text>
            <MaterialIcons
              name='location-on'
              size={24}
              color={colors.secondary}
            />
          </View>
          <Text style={styles.location_region}>
            {currentLocation?.region}, {currentLocation?.country}
          </Text>
          <Text style={styles.feeling_like}>
            Feeling like {currentWeather?.feelslike_c}
            {'\u00B0'}
          </Text>
        </Animated.View>
      )}
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({
  main_info: {
    paddingHorizontal: 24,
  },
  main_info_top_block: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  degrees_indicator: {
    fontSize: 44,
    fontWeight: 'bold',
    color: colors.secondary,
  },
  weather_description: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.secondary,
  },
  weather_condition_image: {
    width: 170,
    height: 170,
  },
  location_city_container: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 4,
  },
  location_city: {
    fontSize: 18,
    color: colors.secondary,
    fontWeight: 'bold',
  },
  location_region: {
    fontSize: 14,
    marginTop: 8,
    color: colors.secondary,
  },
  feeling_like: {
    fontSize: 16,
    color: colors.secondary,
    fontWeight: 'bold',
    marginTop: 12,
  },
})
