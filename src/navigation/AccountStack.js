/// <summary>
/// This is the Stack of the different screens that we will ...
/// ...  have to manage the user account: start session, login, etc. screens that will have
/// </summary>
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { AccountScreen } from "../screens/Account/AccountScreen"
import { LoginScreen } from "../screens/Account/LoginScreen"
import { RegisterScreen } from "../screens/Account/RegisterScreen"
import { screen } from "../utils"

const Stack = createNativeStackNavigator()

export function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.account.account}
        component={AccountScreen}
        options={{ title: "Mi Cuenta" }}
      />
      <Stack.Screen
        name={screen.account.login}
        component={LoginScreen}
        options={{ title: "Inicía Sesión" }}
      />
      <Stack.Screen
        name={screen.account.register}
        component={RegisterScreen}
        options={{ title: "Crea una Cuenta" }}
      />
    </Stack.Navigator>
  )
}
