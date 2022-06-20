/// <summary>
/// File to show the user on screen the registration form
/// For the form we will use Formik ...
/// ... There are other ways to do it, but in this case I chose formik
/// </summary>

import React, { useState } from 'react'
import { View } from 'react-native'
import { Icon, Input, Button } from 'react-native-elements'
import { useFormik } from 'formik'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigation } from '@react-navigation/native'
import  Toast  from 'react-native-toast-message'

import { screen } from '../../utils'
import { initialValues, validationSchema } from './RegisterForm.data'
import AuthStyles from './AuthStyles'

export function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [showRepeatPassword, setShowRepeatPassword] = useState(false)

  const navigation = useNavigation()

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(), // validate the form data
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try { // send the data to Firebase
        const auth = getAuth();
        await createUserWithEmailAndPassword(
          auth,
          formValue.email,
          formValue.password
        )
      
        navigation.navigate(screen.account.account)
      } catch (error) {
        // We use Toast to display errors to the user
        Toast.show({
          type: "error",
          position: "bottom",
          text1: "Error al registrarse, intentelo mas tarde",
        })
      }
    },
  })

  // function to hide or show the password
  const showHidenPassword = () => setShowPassword((prevState) => !prevState)
  const showHidenRepeatPassword = () => setShowRepeatPassword((prevState) => !prevState)

  return (
    // Registration form interface
    <View>
      <Input
        placeholder="Correo electronico"
        keyboardType="email-address"
        containerStyle={AuthStyles.input}
        rightIcon={
          <Icon type="material-community" name="at" iconStyle={AuthStyles.icon} />
        }
        onChangeText={(text) => formik.setFieldValue("email", text)}
        errorMessage={formik.errors.email}
      />
      <Input
        placeholder="Contraseña"
        containerStyle={AuthStyles.input}
        secureTextEntry={showPassword ? false : true}
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            iconStyle={AuthStyles.icon}
            onPress={showHidenPassword}
          />
        }
        onChangeText={(text) => formik.setFieldValue("password", text)}
        errorMessage={formik.errors.password}
      />
      <Input
        placeholder="Repetir contraseña"
        containerStyle={AuthStyles.input}
        secureTextEntry={showRepeatPassword ? false : true}
        rightIcon={
          <Icon
            type="material-community"
            name={showRepeatPassword ? "eye-off-outline" : "eye-outline"}
            iconStyle={AuthStyles.icon}
            onPress={showHidenRepeatPassword}
          />
        }
        onChangeText={(text) => formik.setFieldValue("repeatPassword", text)}
        errorMessage={formik.errors.repeatPassword}
      />
      <Button
        title="Unirse"
        containerStyle={AuthStyles.btnContainer}
        buttonStyle={AuthStyles.btn}
        onPress={formik.handleSubmit} // send the form
        loading={formik.isSubmitting}// show loading while doing user registration
      />
    </View>
  )
}
