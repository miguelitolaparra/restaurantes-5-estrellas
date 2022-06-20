/// <summary>
/// Screen when the User is logged in
/// the css styles are in the globalAccount.js file
/// Create a button to log out
/// We import LoadingModal to show the Loading while loading the Avatar image
/// </summary>

import React, { useState } from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-elements'
import { getAuth, signOut } from 'firebase/auth'

import { LoadingModal } from '../../components/Shared/Loading/LoadingModal'
import { InfoUser } from '../../components/Account/InfoUser'
import { AccountOptions } from '../../components/Account/AccountOptions'
import Styles from './Styles'

export function UserLoggedScreen() {
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("")
  const [_, setReload] = useState(false)

  const onReload = () => setReload((prevState) => !prevState)

  const logout = async () => { // we bring the functions of Firebase
    const auth = getAuth()
    await signOut(auth)
  }

  return (
    <View>
      <InfoUser setLoading={setLoading} setLoadingText={setLoadingText} />
     
    <AccountOptions onReload={onReload}/>
      <Button
        title="Cerrar sesión"
        buttonStyle={Styles.btnStyles}
        titleStyle={Styles.btnTextStyle}
        onPress={logout}
      />

      <LoadingModal show={loading} text={loadingText} /> 
    </View>
  )
}
