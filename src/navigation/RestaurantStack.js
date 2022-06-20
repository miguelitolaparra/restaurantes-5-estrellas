/// <summary>
/// This is the Stack of our Restaurant screens
/// Here we group the accesses from the bottom navigation bar
/// </summary>
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { RestaurantsScreen } from "../screens/Restaurants/RestaurantsScreen"
import { AddRestaurantScreen } from "../screens/Restaurants/AddRestaurant/AddRestaurantScreen"
import { screen } from "../utils"

const Stack = createNativeStackNavigator()

export function RestaurantStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.restaurant.restaurants}
        component={RestaurantsScreen}
        options= {{ title: "Restaurant"}}
      />
      <Stack.Screen
        name={screen.restaurant.addRestaurant}
        component={AddRestaurantScreen}
        options= {{ title: "Nuevo Restaurante"}}
      />
    </Stack.Navigator>
  )
}
