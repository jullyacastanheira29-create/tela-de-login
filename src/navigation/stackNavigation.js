import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "../telas/SplashScreen";
import LoginScreen from "../telas/LoginScreen";
import RegisterScreen from "../telas/RegisterScreen";

import TabNavigation from "./tabNavigation";

const Stack = createNativeStackNavigator();

export default function StackNavigation() {

    return (

        <Stack.Navigator
            initialRouteName="splash"
            screenOptions={{
                headerShown: false
            }}
        >

            <Stack.Screen
                name="splash"
                component={SplashScreen}
            />

            <Stack.Screen
                name="Tabs"
                component={TabNavigation}
            />

            <Stack.Screen
                name="Acessar"
                component={RegisterScreen}
            />

            <Stack.Screen
                name="Login"
                component={LoginScreen}
            />

        </Stack.Navigator>

    );
}

