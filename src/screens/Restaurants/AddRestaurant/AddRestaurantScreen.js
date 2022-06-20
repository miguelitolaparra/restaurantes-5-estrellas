/// <summary>
/// This file will be the screen where we can add new restaurants
/// It will show the user the form to add new restaurants to the App
/// </summary>

import React from 'react'
import { Button } from 'react-native-elements'
import { useFormik } from 'formik'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import { v4 as uuid } from 'uuid'
import { doc, setDoc } from "firebase/firestore"
import { useNavigation } from '@react-navigation/native'

import { db } from '../../../utils/firebase'
import { InfoForm } from '../../../components/Restaurants/AddRestaurant/InfoForm'
import { UploadImagesForm } from '../../../components/Restaurants/AddRestaurant/UploadImagesForm'
import { initialVales, validationSchema } from './AddRestaurantScreen.data'
import { ImageRestaurant } from '../../../components/Restaurants/AddRestaurant/ImageRestaurant'
import Styles from '../Styles'

export function AddRestaurantScreen() {
  const navigation = useNavigation()

  const formik = useFormik({
    initialValues: initialVales(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const newData = formValue
        newData.id = uuid()
        newData.createdAt = new Date()

        /*  you can use this way to save the data in the database
          personally, I choose the one line option
          const myDb = doc( db, 'restaurants', newData.id)
          await setDoc(myDb, newData) */

        // store the restaurant data in the database
        await setDoc(doc(db, "restaurants", newData.id), newData)

        navigation.goBack()
      } catch (error) {
        console.log(error)
      }
    },
  })

  return (
    <KeyboardAwareScrollView>
      <ImageRestaurant formik={formik} />
      <InfoForm formik={formik} />
      <UploadImagesForm formik={formik} />
      <Button
        title="Crear Restaurante"
        buttonStyle={Styles.addRestaurant}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </KeyboardAwareScrollView>
  )
}
