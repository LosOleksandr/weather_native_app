import { Link } from 'expo-router'
import { Image, StyleSheet, Text, View } from 'react-native'

import colors from '@/utils/colors'

const NotFound = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/not-found.png')}
        style={styles.img}
      />
      <Text style={styles.title}>Page not found</Text>
      <Link href='/' style={styles.link}>
        Go back to the home page
      </Link>
    </View>
  )
}

export default NotFound

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 24,
  },
  title: {
    textTransform: 'uppercase',
    fontSize: 24,
    fontWeight: 'bold',
  },
  link: {
    color: colors.background_dark,
    textDecorationLine: 'underline',
    fontSize: 16,
    marginTop: 12,
    fontWeight: 'bold',
  },
})
