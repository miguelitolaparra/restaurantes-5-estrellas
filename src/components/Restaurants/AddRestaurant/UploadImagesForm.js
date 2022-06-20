/// <summary>
/// This will be the component in charge of uploading the ...
/// ... images of the restaurants to the Firebase database ...
/// ... to be able to show them on the screen
/// </summary>

import React, { useState } from 'react'
import { ScrollView, Alert } from 'react-native'
import { Icon, Text, Avatar } from 'react-native-elements'
import * as ImagePicker from 'expo-image-picker'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { v4 as uuid } from 'uuid'
import { map, filter } from 'lodash'

import { LoadingModal } from '../../Shared/Loading/LoadingModal'
import Styles from './Styles'

export function UploadImagesForm(props) {
  const { formik } = props
  const [isLoading, setIsLoading] = useState(false) // status for loading

  // Function in charge of opening the image gallery
  const openGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    if (!result.cancelled) {
      // console.log('buscando imagenes')
      setIsLoading(true) // uploading the image
      uploadImage(result.uri)
    }
  }

  // function to upload the images to Firebase
  const uploadImage = async (uri) => {
    const response = await fetch(uri)
    const blob = await response.blob()

    const storage = getStorage()
    const storageRef = ref(storage, `restaurants/${uuid()}`)

    // we go to storage where we want to save the images
    uploadBytes(storageRef, blob).then((snapshot) => {
      // console.log(snapshot)
      updatePhotosRestaurant(snapshot.metadata.fullPath)
    })
  }

  // we take the URL in the previous function and set it in the state of the form
  const updatePhotosRestaurant = async (imagePath) => {
    const storage = getStorage()
    const imageRef = ref(storage, imagePath)


    const imageUrl = await getDownloadURL(imageRef) // get the url

    // code to upload all images without replacing them
    // get the current images and add the new ones with the array
    formik.setFieldValue("images", [...formik.values.images, imageUrl])

    setIsLoading(false)
  }

  const removeImage = (img) => { // delete an image selected by the user
    Alert.alert(
      "Eliminar imagen",
      "¿Estás seguro de eliminar esta imagen?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Eliminar",
          onPress: () => {
            const result = filter(
              formik.values.images,
              (image) => image !== img
            )
            formik.setFieldValue("images", result)
          },
        },
      ],
      { cancelable: false }
    ) 
  }

  return (

    <>
      <ScrollView
        style={Styles.viewImage}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <Icon
          type="material-community"
          name="camera"
          color="#a7a7a7"
          containerStyle={Styles.containerIcon}
          onPress={openGallery}
        />
        {map(formik.values.images, (image) => ( // display the images on the screen
          <Avatar
            key={image}
            source={{ uri: image }}
            containerStyle={Styles.imageStyle}
            onPress={() => removeImage(image)}
          />
        ))}
      </ScrollView>
      <Text style={Styles.error}>{formik.errors.images}</Text>
      <LoadingModal show={isLoading} text="Subiendo la imagen" />
    </>
  )
}
