import { ActivityIndicator, StyleSheet, Text } from 'react-native'

import colors from '@/utils/colors'

import ScreenWrapper from './ScreenWrapper'

const LoadingScreen = () => {
  return (
    <ScreenWrapper isCentered containerBackgroundColor={colors.background_dark}>
      <ActivityIndicator size={50} color={colors.secondary} />
      <Text style={styles.loading_text}>Please wait...</Text>
    </ScreenWrapper>
  )
}

export default LoadingScreen

const styles = StyleSheet.create({
  loading_text: {
    fontSize: 18,
    color: colors.secondary,
    marginTop: 12,
    fontWeight: 'semibold',
  },
})
