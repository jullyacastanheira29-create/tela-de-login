import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../telas/HomeScreen";
import SearchScreen from "../telas/SearchScreen";
import FavoritesScreen from "../telas/FavoritesScreen";
import ProfileScreen from "../telas/ProfileScreen";
import ProductScreen from "../telas/ProductScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <Tab.Navigator>

            <Tab.Screen
                name="Home"
                component={HomeScreen}
            />

            <Tab.Screen
                name="Pesquisa"
                component={SearchScreen}
            />

            <Tab.Screen
                name="Favoritos"
                component={FavoritesScreen}
            />

            <Tab.Screen
                name="Perfil"
                component={ProfileScreen}
            />

            <Tab.Screen
                name="Produto"
                component={ProductScreen}
            />

        </Tab.Navigator>
    );
}