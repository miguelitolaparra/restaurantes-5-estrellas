/// <summary>
/// we create a Modal Overlay of 'react-native-elements'...
/// ... to handle and change user data
/// </summary>
import React from 'react'
import { Overlay } from 'react-native-elements'

import Styles from './Styles'

export function Modal(props) {
  const { show, close, children } = props

  return ( // We show the Modal if the rendering
    <Overlay
      isVisible={show}
      overlayStyle={Styles.overlayModal}
      onBackdropPress={close} // We show the Modal if the rendering
    >
      {children}
    </Overlay>
  )
}
