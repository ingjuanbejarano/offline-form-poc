import React from 'react'
import { useSelector } from 'react-redux'
import { View, Text } from 'react-native-ui-lib'

export const NetworkReader = () => {
  const isConnected = useSelector((state) => state.network.isConnected)

  return (
    <View>
      <Text center>{`Connection status: ${
        isConnected ? 'Connected' : 'Not Connected'
      }`}</Text>
    </View>
  )
}
