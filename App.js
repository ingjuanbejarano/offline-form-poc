import { StatusBar } from 'expo-status-bar'
import React from 'react'
import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar as bar,
} from 'react-native'
import { Provider } from 'react-redux'
import { Root } from 'native-base'

import { FormScreen } from './screens/FormScreen'
import { reduxStore } from './redux/createStore'

const store = reduxStore()

export default function App() {
  return (
    <Root>
      <Provider store={store}>
        <ScrollView style={styles.container}>
          <SafeAreaView>
            <FormScreen />
            <StatusBar style="auto" />
          </SafeAreaView>
        </ScrollView>
      </Provider>
    </Root>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: bar.currentHeight + 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    height: '100%',
  },
})
