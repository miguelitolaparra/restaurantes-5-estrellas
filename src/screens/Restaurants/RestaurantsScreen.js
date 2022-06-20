/// <summary>
/// Here is the configuration of the restaurants
/// will be the screen where the logged in user can add new restaurants
/// the restaurants added by the user will be shown
/// </summary>

import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { Icon } from 'react-native-elements'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'

import { LoadingModal } from '../../components/Shared/Loading/LoadingModal'
import { ListRestaurants } from '../../components/Restaurants/ListRestaurants/ListRestaurants'
import { screen, db } from '../../utils'
import Styles from './Styles'

export function RestaurantsScreen(props) {
  const { navigation } = props
  const [currentUser, setCurrentUser] = useState(null)
  const [ restaurants, setRestaurants ] = useState(null)

  useEffect(() => { // checking if the user is logged in
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
  }, [])

  useEffect(() => {
    const q = query( // We get the Firebase collection with the restaurants
      collection(db, "restaurants"),
      orderBy("createdAt", "desc") // sorting in descending order according to its creation
    )

    onSnapshot(q, (snapshot) => {
      //console.log(snapshot);
      setRestaurants(snapshot.docs)
    })
  }, [])

  const goToAddRestaurant = () => {
    navigation.navigate(screen.restaurant.addRestaurant)
  }
  return (
    <View style={Styles.content}>
      {!restaurants ? ( // We show a Modal while loading the restaurants
        <LoadingModal show text= "cargando" />
      ) : (
        <ListRestaurants restaurants = {restaurants} />

      )}

      {currentUser && ( // we show the button if it is a logged user
        <Icon
          // directs us to the page to add a new restaurant
          reverse
          type="material-community"
          name="plus"
          color="#00a680"
          containerStyle={Styles.btnContainer}
          onPress={goToAddRestaurant}
        />
      )}
    </View>
  )
}
