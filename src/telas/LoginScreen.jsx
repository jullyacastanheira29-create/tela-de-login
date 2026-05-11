import { Text, TextInput, View, TouchableOpacity, StyleSheet } from "react-native";

export default function LoginScreen({ navigation }) {
    return (
        <View style={styles.container}> 
            <Text style={styles.title}>Entre na sua conta</Text>

            <Text style={styles.label}>E-mail</Text>
            <TextInput 
                style={styles.input} 
                placeholder="Digite seu e-mail"
            />

            <Text style={styles.label}>Senha</Text>
            <TextInput 
                style={styles.input} 
                placeholder="Digite sua senha"
            />

            <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate("Acessar")}
            >
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <Text style={{ marginTop: 20 }}>
                Não possui uma conta?{" "}
                <Text onPress={() => navigation.navigate("Register")}>
                    Cadastre-se
                </Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },

    title: {
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 30
    },

    label: {
        alignSelf: "flex-start",
        fontWeight: "bold",
        marginTop: 15
    },

    input: {
        width: "100%",
        borderWidth: 1,
        padding: 10,
        borderRadius: 8,
        marginTop: 8,
    },

    button: {
        marginTop: 30,
        backgroundColor: "#4A5D23",
        paddingVertical: 12,
        borderRadius: 10,
        width: "60%",
    },

    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
    },
});