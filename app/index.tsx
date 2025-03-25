import { Link } from 'expo-router'
import { StyleSheet, Text } from 'react-native'

import ScreenWrapper from '@/components/ScreenWrapper'
import colors from '@/utils/colors'

export default function Index() {
  return (
    <ScreenWrapper isCentered containerBackgroundColor={colors.background_dark}>
      <Text style={styles.text}>Weather app</Text>
      <Link
        href={{
          pathname: '/[city]',
          params: { city: 'London' },
        }}
        style={styles.link}>
        London Weather
      </Link>
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({
  text: {
    color: colors.secondary,
    fontSize: 32,
    fontWeight: 'bold',
  },
  link: {
    color: colors.secondary,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 24,
    textDecorationLine: 'underline',
  },
})
