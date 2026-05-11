import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../telas/HomeScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <Tab.Navigator>

            <Tab.Screen name= "Home" component= {HomeScreen} />
            
        </Tab.Navigator>

    );
}