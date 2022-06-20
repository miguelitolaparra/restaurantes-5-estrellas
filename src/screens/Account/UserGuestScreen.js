/// <summary>
/// Presentation screen for the User profile
/// </summary>
import React from 'react'
import { ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Text, Button, Image } from 'react-native-elements'

import { screen } from '../../utils'
import Styles from './Styles'

export function UserGuestScreen() {
  const navigation = useNavigation()

  const goToLogin = () => {
    navigation.navigate(screen.account.login)
  }

  return (
    <ScrollView centerContent={true} style={Styles.contentGuest}>
      <Image
        source={require("../../../assets/img/user-guest.png")}
        style={Styles.imageGuest}
      />
      <Text style={Styles.title}>Consulta tu perfil de 5 Estrellas</Text>
      <Text style={Styles.description}>
        ¿Como describirías tu mejor restaurante? Busca y visualiza los mejores
        restaurantes de una forma sencilla, vota cual te ha gustado más y
        comenta como ha sito tu experiencia.
      </Text>

      <Button
        title="Ver tu perfil"
        onPress={goToLogin}
        buttonStyle={Styles.btnStyle}
      />
    </ScrollView>
  )
}
