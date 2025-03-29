import { StyleSheet, Text, View } from 'react-native'

import colors from '@/utils/colors'

const EmptyState = () => {
  return (
    <View style={styles.empty_container}>
      <Text style={styles.empty_text}>No geolocation data available</Text>
    </View>
  )
}

export default EmptyState

const styles = StyleSheet.create({
  empty_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  empty_text: {
    fontSize: 24,
    color: colors.secondary,
  },
})
