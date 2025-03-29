import { MaterialIcons } from '@expo/vector-icons'
import { FC } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Animated from 'react-native-reanimated'

import { CurrentWeather, Location } from '@/api/types'
import animations from '@/utils/animations'
import colors from '@/utils/colors'

type Props = {
  weather: CurrentWeather
  location: Location
}

const WeatherDetails: FC<Props> = ({ weather, location }) => {
  return (
    <Animated.View entering={animations.fadeInDown} style={styles.main_info}>
      <View style={styles.main_info_top_block}>
        <View>
          <Text style={styles.degrees_indicator}>
            {weather.feelslike_c}
            {'\u00B0'}
          </Text>
          <Text style={styles.weather_description}>
            {weather.condition.text}
          </Text>
        </View>
        <Image
          source={{ uri: `https://${weather.condition.icon}` }}
          style={styles.weather_condition_image}
          resizeMethod='scale'
          resizeMode='cover'
        />
      </View>
      <View style={styles.location_city_container}>
        <Text style={styles.location_city}>{location.name}</Text>
        <MaterialIcons name='location-on' size={24} color={colors.secondary} />
      </View>
      <Text style={styles.location_region}>
        {location.region}, {location.country}
      </Text>
      <Text style={styles.feeling_like}>
        Feeling like {weather.feelslike_c}
        {'\u00B0'}
      </Text>
    </Animated.View>
  )
}

export default WeatherDetails

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
