import React, { useState } from 'react'
import { Platform, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { View, Button, Image, Text } from 'react-native-ui-lib'
import * as ImgPicker from 'expo-image-picker'

export const ImagePicker = ({ onChangeHandler }) => {
  const [image, setImage] = useState(null)

  const searchImage = async () => {
    if (Platform.OS !== 'web') {
      const { status } = await ImgPicker.requestMediaLibraryPermissionsAsync()
      if (status !== 'granted') {
        alert('Sorry, we need galery permissions to make this work!')
        return
      }

      const result = await ImgPicker.launchImageLibraryAsync({
        mediaTypes: ImgPicker.MediaTypeOptions.All,
        quality: 1,
        base64: true,
      })

      if (!result.cancelled) {
        setImage(result.uri)
        onChangeHandler(result.base64, 'base64Image')
      }
    }
  }

  const takePhoto = async () => {
    const { status } = await ImgPicker.requestCameraPermissionsAsync()
    if (status !== 'granted') {
      alert('Sorry, we need camera permissions to make this work!')
      return
    }

    const result = await ImgPicker.launchCameraAsync({
      mediaTypes: ImgPicker.MediaTypeOptions.Images,
      base64: true,
    })

    if (!result.cancelled) {
      setImage(result.uri)
      onChangeHandler(result.base64, 'base64Image')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upload a picture</Text>
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 10,
          justifyContent: 'center',
        }}
      >
        <Button
          label={<FontAwesome name="folder-open" color="#ffffff" size={20} />}
          backgroundColor="orange"
          onPress={searchImage}
          style={styles.button}
          round={true}
        />
        <Button
          label={<FontAwesome name="camera" color="#ffffff" size={20} />}
          backgroundColor="orange"
          onPress={takePhoto}
          style={styles.button}
          round={true}
        />
      </View>
      {image && <Image source={{ uri: image }} style={styles.image} />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: { marginTop: 10 },
  title: {
    marginBottom: 10,
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
  button: { width: 50, height: 50, marginHorizontal: 10 },
  image: {
    width: 200,
    height: 200,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center',
  },
})
