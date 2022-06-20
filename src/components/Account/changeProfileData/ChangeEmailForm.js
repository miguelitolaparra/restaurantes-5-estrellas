/// <summary>
/// Here we create the form for the user to change their profile email
/// styles for this file are found in globalForm.js
/// We store in Firebase the data that the user enters in his profile form
/// We do the validations on the ChangeEmailForm.data file using 'yup'
/// </summary>

import React, { useState } from 'react'
import { View } from 'react-native'
import { Input, Button } from 'react-native-elements'
import Toast from 'react-native-toast-message'
import { useFormik } from 'formik'
import {
  getAuth,
  updateEmail,
  EmailAuthProvider,
  reauthenticateWithCredential,
} from 'firebase/auth'

import { initialValues, validationSchema } from './ChangeEmailForm.data'
import DisplayStyles from './DisplayStyles'

export function ChangeEmailForm(props) {
  const { onClose, onReload } = props
  const [showPassword, setShowPassword] = useState(false)

  // function to show and hide the password
  const onShowPassword = () => setShowPassword((prevState) => !prevState)

  // we use formik to validate the data
  // and show the errors
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try { // send the data to Firebase
        const currentUser = getAuth().currentUser // get the current user data

        // confirm the user's credentials
        const credentials = EmailAuthProvider.credential(
          currentUser.email,
          formValue.password
        )
        reauthenticateWithCredential(currentUser, credentials)

        await updateEmail(currentUser, formValue.email)

        onReload()
        onClose()
      } catch (error) {
        //console.log(error)
        Toast.show({ // show the errors
          type: "error",
          position: "bottom",
          text1: "Error al cambiar el email",
        })
      }
    },
  })
  return ( // Form interface, input and button
    <View>
      <Input
        placeholder="Nuevo email"
        containerStyle={DisplayStyles.input}
        onChangeText={(text) => formik.setFieldValue("email", text)}
        errorMessage={formik.errors.email}
      />
      <Input
        placeholder="Contraseña"
        containerStyle={DisplayStyles.input}
        secureTextEntry={showPassword ? false : true}
        rightIcon={{ // hide or show the password
          type: "material-community",
          name: showPassword ? "eye-off-outline" : "eye-outline",
          color: "#c2c2c2",
          onPress: onShowPassword, // hide or show characters
        }}
        onChangeText={(text) => formik.setFieldValue("password", text)}
        errorMessage={formik.errors.password}
      />
      <Button
        title="Cambiar email"
        containerStyle={DisplayStyles.btnContainer}
        buttonStyle={DisplayStyles.btn}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  )
}
