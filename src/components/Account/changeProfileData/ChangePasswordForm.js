/// <summary>
/// Here we create the form for the user to change the password of his profile
/// styles for this file are found in globalForm.js
/// We store in Firebase the data that the user enters in his profile form
/// We do the validations on the ChangePasswordForm.data file using 'yup'
/// <summary>

import React, { useState } from 'react'
import { View } from 'react-native'
import { Input, Button } from 'react-native-elements'
import { useFormik } from 'formik'
import {
  getAuth,
  updatePassword,
  EmailAuthProvider,
  reauthenticateWithCredential
} from 'firebase/auth'
import Toast from 'react-native-toast-message'

import { initialValues, validationSchema } from './ChangePasswordForm.data'
import DisplayStyles from './DisplayStyles'

export function ChangePasswordForm(props) {
  const { onClose } = props
  const [showPassword, setShowPassword] = useState(false)
  const [showRepeatPassword, setShowRepeatPassword] = useState(false)
  const [showRepeatNewPassword, setShowRepeatNewPassword] = useState(false)

  // function to hide or show the password
  const onShowPassword = () => setShowPassword((prevState) => !prevState)
  const showHidenRepeatPassword = () => setShowRepeatPassword((prevState) => !prevState)
  const showHidenRepeatNewPassword = () => setShowRepeatNewPassword((prevState) => !prevState)

  // we use formik to validate the data
  // and show the errors
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const currentUser = getAuth().currentUser;

        const credentials = EmailAuthProvider.credential(  // pass the current user data
          currentUser.email,
          formValue.password
        )
        // require the user credentials to change the password
        reauthenticateWithCredential(currentUser, credentials)

        await updatePassword(currentUser, formValue.newPassword)

        onClose()
      } catch (error) {
        // console.log(error)
        Toast.show({
          type: "error",
          position: "bottom",
          text1: "Error al cambiar la contraseña",
        })
      }
    },
  })

  return ( // Interface where the user adds his data
    <View>
      <Input
        // Current password
        placeholder="Contraseña actual"
        containerStyle={DisplayStyles.inputPassword}
        secureTextEntry={showPassword ? false : true} // hide or show the password
        rightIcon={{
          type: "material-community",
          name: showPassword ? "eye-off-outline" : "eye-outline",
          color: "#c2c2c2",
          onPress: onShowPassword,
        }}
        onChangeText={(text) => formik.setFieldValue("password", text)}
        errorMessage={formik.errors.password}
      />
      <Input
        // New Password
        placeholder="Nueva contraseña"
        containerStyle={DisplayStyles.inputPassword}
        secureTextEntry={showRepeatPassword ? false : true} // hide or show the password
        rightIcon={{
          type: "material-community",
          name: showRepeatPassword ? "eye-off-outline" : "eye-outline",
          color: "#c2c2c2",
          onPress: showHidenRepeatPassword,
        }}
        onChangeText={(text) => formik.setFieldValue("newPassword", text)}
        errorMessage={formik.errors.newPassword}
      />
      <Input
        // repeat the new password
        placeholder="Repite la nueva contraseña"
        containerStyle={DisplayStyles.inputPassword}
        secureTextEntry={showRepeatNewPassword ? false : true} // hide or show the password
        rightIcon={{
          type: "material-community",
          name: showRepeatNewPassword ? "eye-off-outline" : "eye-outline",
          color: "#c2c2c2",
          onPress: showHidenRepeatNewPassword,
        }}
        onChangeText={(text) =>
          formik.setFieldValue("confirmNewPassword", text)
        }
        errorMessage={formik.errors.confirmNewPassword}
      />
      <Button
        title="Cambiar contraseña"
        containerStyle={DisplayStyles.btnContainerPassword}
        buttonStyle={DisplayStyles.btn}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  )
}
