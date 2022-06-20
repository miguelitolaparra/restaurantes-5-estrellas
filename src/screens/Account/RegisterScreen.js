/// <summary>
/// We will use this file to add new user registration settings
/// </summary>
import React from 'react'
import { View } from 'react-native'
import { Image } from 'react-native-elements'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"

import { RegisterForm } from '../../components/Auth/RegisterForm'
import Styles from './Styles'

export function RegisterScreen() {
  return (
    <KeyboardAwareScrollView>
      <Image
        style={Styles.image}
        source={require("../../../assets/img/myLogo.png")}
      />
      <View style={Styles.content}>
        <RegisterForm />
      </View>
    </KeyboardAwareScrollView>
  )
}
