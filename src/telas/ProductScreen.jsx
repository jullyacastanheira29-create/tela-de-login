import React from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
} from "react-native";

export default function ProductScreen() {
    return (
        <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
        >

            {/* Imagem do produto */}
            <View style={styles.imageContainer}>
                <Image
                    source={require("../../assets/banner.jpg")}
                    style={styles.productImage}
                />
            </View>

            {/* Informações */}
            <View style={styles.content}>

                <Text style={styles.productName}>
                    Monstera Deliciosa
                </Text>

                <Text style={styles.price}>
                    R$ 89,90
                </Text>

                {/* Sobre */}
                <Text style={styles.title}>
                    Sobre
                </Text>

                <Text style={styles.description}>
                    A Monstera deliciosa, popularmente conhecida no Brasil como Costela-de-Adão, é uma planta trepadeira tropical da família Araceae, nativa do México e da América Central.
              
                </Text>

                {/* Separador */}
                <View style={styles.line} />

                {/* Botão */}
                <TouchableOpacity
                    style={styles.cartButton}
                    onPress={() =>
                        alert("Produto adicionado ao carrinho!")
                    }
                >
                    <Text style={styles.cartIcon}>
                        🛒
                    </Text>

                    <Text style={styles.cartText}>
                        ADICIONAR AO CARRINHO
                    </Text>
                </TouchableOpacity>

            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#F8F8F8",
    },

    imageContainer: {
        width: "100%",
        height: 330,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,

        // Sombra Android
        elevation: 4,

        // Sombra iPhone
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.08,
        shadowRadius: 5,
    },

    productImage: {
        width: "80%",
        height: "80%",
        resizeMode: "contain",
        borderRadius: 20,
    },

    content: {
        padding: 25,
    },

    productName: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#222222",
        marginBottom: 8,
    },

    price: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#4A5D23",
        marginBottom: 30,
    },

    title: {
        fontSize: 21,
        fontWeight: "bold",
        color: "#222222",
        marginBottom: 10,
    },

    description: {
        fontSize: 16,
        lineHeight: 25,
        color: "#666666",
        textAlign: "justify",
    },

    line: {
        height: 1,
        backgroundColor: "#DDDDDD",
        marginVertical: 25,
    },

    cartButton: {
        height: 58,
        backgroundColor: "#4A5D23",
        borderRadius: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",

        elevation: 4,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },

    cartIcon: {
        fontSize: 21,
        marginRight: 10,
    },

    cartText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "bold",
    },

});