/// <summary>
/// Here we create the form for the user to change the name of their profile
/// the styles for this file are located in globalForm.js
/// We store in Firebase the data that the user enters in his profile form
/// </summary>

import React from 'react'
import { View } from 'react-native'
import { Input, Button } from 'react-native-elements'
import { useFormik } from 'formik'
import Toast from 'react-native-toast-message'
import { getAuth, updateProfile } from 'firebase/auth'

import { initialValues, validationSchema } from './ChangeNameForm.data'
import DisplayStyles from './DisplayStyles'

export function ChangeNameForm(props) {
  const { onClose, onReload } = props

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try { // send the data to Firebase
        const { displayName } = formValue
        const currentUser = getAuth().currentUser
        await updateProfile(currentUser, { displayName })

        onReload()
        onClose()
      } catch (error) {
        Toast.show({ // show the errors
          type: "error",
          position: "bottom",
          text1: "Error al cambiar el nombre",
        })
      }
    },
  })

  return ( // Showing the form on the screen
    <View style={DisplayStyles.content}>
      <Input
        placeholder='Nombre'
        rightIcon={{
          type: "material-community",
          name: "account-circle-outline",
          color: "#c2c2c2",
        }}
        onChangeText={(text) => formik.setFieldValue("displayName", text)}
        errorMessage={formik.errors.displayName}
      />
      <Button
        title="Cambiar el Nombre"
        containerStyle={DisplayStyles.btnContainerName}
        buttonStyle={DisplayStyles.btn}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  )
}
