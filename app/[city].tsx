import { useLocalSearchParams } from 'expo-router'
import { StyleSheet, Text } from 'react-native'

import ScreenWrapper from '@/components/ScreenWrapper'
import colors from '@/utils/colors'

const CityWeather = () => {
  const { city } = useLocalSearchParams()

  return (
    <ScreenWrapper
      isCentered
      containerBackgroundColor={colors.background_light}>
      <Text style={styles.title}>City weather</Text>
      <Text style={styles.text}>{city}</Text>
    </ScreenWrapper>
  )
}

export default CityWeather

const styles = StyleSheet.create({
  title: {
    color: colors.primary,
    fontSize: 32,
    fontWeight: 'bold',
  },
  text: {
    color: colors.primary,
    fontSize: 24,
    fontWeight: 'bold',
  },
})
