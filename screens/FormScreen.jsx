import React from 'react'
import { Text, View } from 'react-native-ui-lib'

import { From } from '../components/Form'
import { NetworkReader } from '../components/NetworkReader'

export const FormScreen = () => {
  return (
    <View>
      <Text center black text60>
        Online-Offline Form
      </Text>
      <NetworkReader />
      <From />
    </View>
  )
}
