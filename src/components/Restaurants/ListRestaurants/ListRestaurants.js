import React from 'react'
import { View, FlatList, TouchableOpacity } from 'react-native'
import { Text, Image } from 'react-native-elements'

import Styles from './Styles'

export function ListRestaurants(props) {
  const { restaurants } = props

  const goToRestaurant = (restaurant) => {
    console.log("vayamos al restaurante")
    console.log(restaurant.name)
   // navigation.navigate(screen.restaurant.restaurant, { id: restaurant.id });
  }

  return (
    <View>
      <FlatList
        data={restaurants}
        renderItem={(doc) => { // Show the elements that the database contains
          const restaurant = doc.item.data()

           console.log(restaurant);
          return(
            <TouchableOpacity onPress={() => goToRestaurant(restaurant)}>
            <View style={Styles.restaurant}>
              <Image
                source={{ uri: restaurant.images[0] }}
                style={Styles.image}
              />

              <View>
                <Text style={Styles.name}>{restaurant.name}</Text>
                <Text style={Styles.info}>{restaurant.address}</Text>
                <Text style={Styles.info}>{restaurant.description}</Text>
              </View>
            </View> 
          </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}
