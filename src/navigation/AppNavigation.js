/// <summary>
/// In this file we have all the configuration of the navigation between the different screens
/// </summary>

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Icon } from "react-native-elements"

import { RestaurantStack } from "./RestaurantStack"
import { FavoriteStack } from "./FavoriteStack"
import { TopStack } from "./TopStack"
import { SearchStack } from "./SearchStack"
import { AccountStack } from "./AccountStack"

import { screen } from "../utils"

const Tab = createBottomTabNavigator()

export function AppNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#24acc0",
        tabBarInactiveTintColor: "#957376",
        tabBarIcon: ({ color, size }) => screenIconsOptions(route, color, size)
      })}
    >
      <Tab.Screen
        name={screen.restaurant.tab}
        component={RestaurantStack}
        options={{ title: "Restaurantes" }}
      />
      <Tab.Screen
        name={screen.favorites.tab}
        component={FavoriteStack}
        options={{ title: "Favoritos" }}
      />
      <Tab.Screen
        name={screen.top.tab}
        component={TopStack}
        options={{ title: "Top" }}
      />
      <Tab.Screen
        name={screen.search.tab}
        component={SearchStack}
        options={{ title: "Buscar" }}
      />
      <Tab.Screen
        name={screen.account.tab}
        component={AccountStack}
        options={{ title: "Cuenta" }}
      />
    </Tab.Navigator>
  )
}

// Function to add the icons to the bottom navigation bar
function screenIconsOptions(route, color, size) {
  let iconName

  if (route.name === screen.restaurant.tab) {
    iconName = "compass-outline"
  }

  if (route.name === screen.favorites.tab) {
    iconName = "heart-outline"
  }

  if (route.name === screen.top.tab) {
    iconName = "star-outline"
  }

  if (route.name === screen.search.tab) {
    iconName = "magnify"
  }

  if (route.name === screen.account.tab) {
    iconName = "home-outline"
  }

  return (
    <Icon type="material-community" name={iconName} color={color} size={size} />
  )
}


