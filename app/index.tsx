import { StyleSheet, Text, View } from 'react-native'

import colors from '@/utils/colors'

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Weather app</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background_dark,
  },
  text: {
    color: colors.secondary,
    fontSize: 24,
    fontWeight: 'bold',
  },
})
