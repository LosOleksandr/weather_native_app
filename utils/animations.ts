import { FadeInDown, ReduceMotion } from 'react-native-reanimated'

const animations = {
  fadeInDown: FadeInDown.duration(500)
    .delay(100)
    .reduceMotion(ReduceMotion.System)
    .withInitialValues({
      transform: [{ translateY: 100 }],
    }),
}

export default animations
