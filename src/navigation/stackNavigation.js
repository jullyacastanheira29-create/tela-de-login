
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Telas de cadastro e login comentadas para não serem utilizadas agora
// import SplashScreen from "../telas/SplashScreen";
// import LoginScreen from "../telas/LoginScreen";
// import RegisterScreen from "../telas/RegisterScreen";

import TabNavigation from "./tabNavigation";

const Stack = createNativeStackNavigator();

export default function StackNavigation() {

    return (

        <Stack.Navigator
            // Define a tela inicial como Home (Tabs)
            initialRouteName="Tabs"

            screenOptions={{
                headerShown: false
            }}
        >

            {/* Tela principal com as abas do aplicativo */}
            <Stack.Screen
                name="Tabs"
                component={TabNavigation}
            />

            {/*
            Telas de cadastro e login desativadas temporariamente.
            Para voltar a utilizá-las, remova os comentários.

            <Stack.Screen
                name="Acessar"
                component={RegisterScreen}
            />

            <Stack.Screen
                name="Login"
                component={LoginScreen}
            />
            */}

        </Stack.Navigator>

    );
}
