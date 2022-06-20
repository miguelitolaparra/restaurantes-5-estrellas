/// <summary>
/// This is the Pile of screens of the most valued restaurants
/// Here we group the accesses from the bottom navigation bar
/// </summary>
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { SearchScreen } from "../screens/SearchScreen"
import { screen } from "../utils"

const Stack = createNativeStackNavigator()

export function SearchStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.top.top}
        component={SearchScreen}
        options={{ title: "Buscar" }}
      />
    </Stack.Navigator>
  )
}
