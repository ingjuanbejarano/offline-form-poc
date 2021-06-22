import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { TextField, View, Button } from 'react-native-ui-lib'
import { Toast } from 'native-base'
import { useDispatch, useSelector } from 'react-redux'

import { submitForm } from '../redux/actions'
import { ImagePicker } from '../components/ImagePicker'

export const From = () => {
  const dispatch = useDispatch()
  const isConnected = useSelector((state) => state.network.isConnected)
  const [formData, setFormData] = useState({
    name: '',
    phone: null,
    email: '',
    base64Image: null,
  })

  const onChangeHandler = (value, field) => {
    setFormData({
      ...formData,
      [field]: value,
    })
  }

  const onSubmitForm = () => {
    dispatch(submitForm(formData))
    if (!isConnected) {
      Toast.show({
        text: 'Data saved, waiting for reconnection',
        type: 'warning',
        duration: 2000,
      })
    }
  }

  return (
    <View>
      <View style={styles.formContainer}>
        <TextField
          placeholder="Name"
          value={formData.name}
          onChangeText={(value) => onChangeHandler(value, 'name')}
          style={styles.formField}
        />
        <TextField
          placeholder="Phone"
          value={formData.phone}
          keyboardType="phone-pad"
          onChangeText={(value) => onChangeHandler(value, 'phone')}
          style={styles.formField}
        />
        <TextField
          placeholder="Email"
          value={formData.email}
          keyboardType="email-address"
          onChangeText={(value) => onChangeHandler(value, 'email')}
          style={styles.formField}
        />
        <ImagePicker onChangeHandler={onChangeHandler} />
        <Button
          label="Send"
          onPress={onSubmitForm}
          style={{ width: 100, alignSelf: 'center' }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  formContainer: { marginHorizontal: 10 },
  formField: { marginTop: 15 },
})
