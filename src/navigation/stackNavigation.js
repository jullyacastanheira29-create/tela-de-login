import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "../telas/SplashScreen";
import RegisterScreen from "../telas/RegisterScreen";
import LoginScreen from "../telas/LoginScreen";

import TabNavigation from "./tabNavigation";

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Acessar"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Tabs"
        component={TabNavigation}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
}