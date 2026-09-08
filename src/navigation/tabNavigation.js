import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../telas/HomeScreen";
import SearchScreen from "../telas/SearchScreen";
import FavoritesScreen from "../telas/FavoritesScreen";
import ProfileScreen from "../telas/ProfileScreen";
import ProductsScreen from "../telas/ProductScreen";
import CartScreen from "../telas/CartScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (

        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: "#4A5D23",
            tabBarActiveTintColor: "#999",
        }}
        >


            <Tab.Screen name="Home" component={HomeScreen} 
            options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons
                    name="home-outline"
                    size= {size}
                    color= {color}/>
                ),
            }}
            />
            <Tab.Screen name="Search" component={SearchScreen} 
            options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons
                    name="search-outline"
                    size= {size}
                    color= {color}/>
                ),
            }}/>
            <Tab.Screen name="Favoritos" component={FavoritesScreen} 
            options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons
                    name="heart-outline"
                    size= {size}
                    color= {color}/>
                ),
            }}/>
            <Tab.Screen name="Perfil" component={ProfileScreen} 
            options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons
                    name="person-outline"
                    size= {size}
                    color= {color}/>
                ),
            }}/>
            
            <Tab.Screen name="Carrinho" component={CartScreen} 
            options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons
                    name="cart-outline"
                    size= {size}
                    color= {color}/>
                ),
            }}/>

        </Tab.Navigator>
    );
}