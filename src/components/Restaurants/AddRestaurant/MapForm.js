/// <summary>
/// File where we create the Modal of the map for the Geolocation of the restaurant
/// Contains the necessary dependencies "expo-location"
/// We use react-native-maps to display the location of the restaurant on a map
/// we will show the location to the user with react-native-maps
/// </summary>

import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-elements'
import * as Location from 'expo-location'
import MapView from 'react-native-maps'
import Toast from 'react-native-toast-message'
import { Modal } from '../../Shared/Modal'

import Styles from './Styles'

export function MapForm(props) {
  const { show, close, formik } = props

  const [location, setLocation] = useState({ // save the position in a state
    latitude: 0.001,
    longitude: 0.001,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  })

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync()

      // code in case the user rejects the location
      if (status !== "granted") {
        Toast.show({
          type: "info",
          position: "bottom",
          text1: "Debes activar la localización desde los ajustes de localización de tu telefono",
        })
        return
      }

      const location = await Location.getCurrentPositionAsync({})

      console.log(location)

      // code in case the user accepts the location
      const locationTemp = await Location.getCurrentPositionAsync({})

      setLocation({ // add the location to our state
        latitude: locationTemp.coords.latitude,
        longitude: locationTemp.coords.longitude,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
      })

    })()
  }, [])

  const saveLocation = () => {
    formik.setFieldValue("location", location)
   console.log(location)
    close()
  }

  return (
    <Modal show={show} close={close}>
      <MapView
        initialRegion={location}
        showsUserLocation={true}
        style={Styles.mapStyle}
        onRegionChange={(locationTemp) => setLocation(locationTemp)}
      >
        <MapView.Marker draggable coordinate={location} />
      </MapView>

      <View style={Styles.mapActions}>
        <Button
          title="Guardar"
          containerStyle={Styles.btnMapContainerSave}
          buttonStyle={Styles.btnMapSave}
          onPress={saveLocation}
        />

        <Button
          title="Cerrar"
          containerStyle={Styles.btnMapContainerCancel}
          buttonStyle={Styles.btnMapCancel}
          onPress={close}
        />
      </View>
    </Modal>
  )
}
