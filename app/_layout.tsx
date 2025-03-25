import { Stack } from 'expo-router'
import { StatusBar } from 'react-native'
import { useColorScheme } from 'react-native'

export default function Layout() {
  const colorScheme = useColorScheme()

  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
      <StatusBar
        barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={'transparent'}
        translucent={true}
      />
    </>
  )
}
