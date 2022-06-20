/// <summary>
/// Screen Containing user information: name, email
/// If we upload the images that we will use from Avatar to Firebase.
/// We create loading to show the time it takes to load the image...
/// </summary>

import React, { useState } from 'react'
import { View } from 'react-native'
import { Avatar, Text } from 'react-native-elements'
import { getAuth, updateProfile } from 'firebase/auth'
import { getStorage, ref, uploadBytes, getDownloadURL} from 'firebase/storage'
import * as ImagePicker from 'expo-image-picker'

import InfoStyles from './InfoStyles'

export function InfoUser(props) {
  const { setLoading, setLoadingText } = props
  const { uid, photoURL, displayName, email } = getAuth().currentUser
  const [avatar, setAvatar] = useState(photoURL)

  const changeAvatar = async () => { // function to change the avatar
    // access the image gallery
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    })
    console.log(result)

    if (!result.cancelled) uploadImage(result.uri)
  }
  //We upload the image to the Firebase storage
  const uploadImage = async (uri) => {
    setLoadingText("Actualizando Avatar")
    setLoading(true)

    const response = await fetch(uri)
    const blob = await response.blob()

    // folder to store the images in Firebase
    const storage = getStorage()
    const storageRef = ref(storage, `avatar/${uid}`)

    uploadBytes(storageRef, blob).then((snapshot) => {
      updatePhotoUrl(snapshot.metadata.fullPath)
      //console.log(snapshot.metadata)
    })
  }

  // use the user data to get the avatar path
  const updatePhotoUrl = async (imagePath) => { 
    const storage = getStorage()
    const imageRef = ref(storage, imagePath)

    const imageUrl = await getDownloadURL(imageRef)

    const auth = getAuth() // modify the User data
    updateProfile(auth.currentUser, { photoURL: imageUrl })

    setAvatar(imageUrl)
    setLoading(false)
  }

  return ( // displaying the user data on the screen
    <View style={InfoStyles.content}>
      <Avatar
        size="large"
        rounded
        containerStyle={InfoStyles.avatar}
        icon={{ type: "material", name: "person" }}
        source={{ uri: avatar}}
      >
        <Avatar.Accessory size={24} onPress={changeAvatar} />
      </Avatar>
      <View>
        <Text style={InfoStyles.displayName}>{displayName || "Anónimo"}</Text>
        <Text>{email}</Text>
      </View>
    </View>
  )
}
