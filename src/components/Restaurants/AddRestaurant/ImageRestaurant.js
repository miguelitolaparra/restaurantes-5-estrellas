/// <summary>
/// This file contains the logic to display the images of each restaurant
/// Will have a default image until the user adds new images
/// </summary>

import React from 'react'
import { View } from 'react-native'
import { Image } from 'react-native-elements'

import Styles from './Styles'

export function ImageRestaurant(props) {
  const { formik } = props

  const primaryImage = formik.values.images[0]
  return (
    <View style={Styles.contentImage}>
      <Image
        source={ // display a default image
          primaryImage
            ? { uri: primaryImage }
            : require("../../../../assets/img/noImage.png")
        }
        style={Styles.image}
      />
    </View>
  )
}
