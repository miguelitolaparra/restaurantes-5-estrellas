/// <summary>
/// This is the Stack of Favorites screens
/// Here we group the accesses from the bottom navigation bar
/// </summary>
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { FavoriteScreen } from "../screens/FavoriteScreen";
import { screen } from "../utils"


const Stack = createNativeStackNavigator()

export function FavoriteStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.favorites.favorites}
        component={FavoriteScreen}
        options={{ title: "Favorites" }}
      />
    </Stack.Navigator>
  )
}
