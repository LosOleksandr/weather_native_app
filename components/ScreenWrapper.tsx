import { FC } from 'react'
import { StyleSheet, View, ViewStyle } from 'react-native'
import { SafeAreaView, SafeAreaViewProps } from 'react-native-safe-area-context'

import colors from '@/utils/colors'

type Props = {
  containerBackgroundColor?: string
  isCentered?: boolean
  children: React.ReactNode
} & SafeAreaViewProps

const ScreenWrapper: FC<Props> = ({
  children,
  containerBackgroundColor,
  isCentered,
  style,
  ...props
}) => {
  const isCenteredStyle: ViewStyle = isCentered
    ? { justifyContent: 'center', alignItems: 'center' }
    : {}

  return (
    <View
      style={[styles.container, { backgroundColor: containerBackgroundColor }]}>
      <SafeAreaView
        style={[styles.safe_area, isCenteredStyle, style]}
        {...props}>
        {children}
      </SafeAreaView>
    </View>
  )
}

export default ScreenWrapper

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },

  safe_area: {
    flex: 1,
  },
})
