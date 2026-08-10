import { View, StyleSheet, Image, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function FavoritesScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Image
                    source={{
                        uri: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FjdG98ZW58MHx8MHx8fDA%3D"
                    }}
                    style={styles.image}
                    />

                <View style={styles.infoContainer}>
                    <Text style={styles.plantName}>Monstera Deliciosa</Text>
                    <Text style={styles.price}>R$ 89,90</Text>
                </View>
                <Ionicons 
                    name="heart"
                    size={28}
                    color="#4a5d23"
                />
                
            </View>
        </View>

    );
}
const styles = StyleSheet.create({
    image: {
        width: 80,
        height: 80,
        borderRadius: 10,
    },
    infoContainer: {
        flex:1,
        marginLeft: 15,
    },
    container:{
        flex: 1, 
        padding: 20,
        backgroundColor: "#fff",
    },


    card: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        borderRadius: 15,
        padding: 15,
    },
      plantName: {
        fontSize: 18,
        fontWeight: "bold",
    },

    price: {
        marginTop: 5,
        fontSize: 16,
        color: "#4A5D23",
    }
}); 