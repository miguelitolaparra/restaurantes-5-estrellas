/// <summary>
/// This is the Pile of screens of the most valued restaurants
/// Here we group the accesses from the bottom navigation bar
/// </summary>
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { TopScreen } from "../screens/TopScreen"
import { screen } from "../utils"

const Stack = createNativeStackNavigator()

export function TopStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.top.top}
        component={TopScreen}
        options={{ title: "El Top 20" }}
      />
    </Stack.Navigator>
  )
}
