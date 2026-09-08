import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View, TextInput } from "react-native";

export default function SearchScreen() {
    return (
        <View style={style.container}>
            <View style={style.SearchContainer}>

                <TextInput
                    placeholder="Pesquisar plantas..."
                    placeholderTextColor="#000000"
                     style={style.input}
                />
                <Ionicons
                    name="search"
                    size={20}
                    color="#000000"
                     style={style.icon}
                /></View>


        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",
    },
    SearchContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#d9e2d5",
        borderRadius: 30,
        paddingHorizontal: 15,
        height: 50,
    },
    icon: {
    marginLeft: 10,
},

input: {
    flex: 1,
    outlineStyle:"none",
},
});