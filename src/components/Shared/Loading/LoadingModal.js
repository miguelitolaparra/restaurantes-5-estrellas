import React from 'react'
import { View, ActivityIndicator } from "react-native"
import { Overlay, Text } from "react-native-elements"

import Styles from '../Styles'

export function LoadingModal(props) {
  const { show, text } = props
  return (
    <Overlay isVisible={show} overlayStyle={Styles.overlay}>
      <View>
        <ActivityIndicator size="large" color="#24acc0" />
        {text && <Text style={Styles.text}>{text}</Text>}
      </View>
    </Overlay>
  )
}

LoadingModal.defaultProps = {
  show: false,
}
