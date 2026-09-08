import { useState } from "react";

import {
    Alert,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";

import api from "../services/api";

export default function LoginScreen({ navigation }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin() {

        console.log("================================");
        console.log("BOTÃO DE LOGIN CLICADO");
        console.log("================================");

        // Verifica campos vazios
        if (
            email.trim() === "" ||
            password === ""
        ) {

            Alert.alert(
                "Atenção",
                "Preencha o e-mail e a senha."
            );

            return;
        }

        try {

            console.log("Tentando realizar login...");
            console.log("Email:", email);

            const response = await api.post(
                "/users/login",
                {
                    email: email.trim(),
                    password: password
                }
            );

            console.log("LOGIN REALIZADO COM SUCESSO!");
            console.log("Token:", response.data.token);
            
            navigation.navigate("Tabs")

        } catch (error) {

            console.log("================================");
            console.log("ERRO NO LOGIN");
            console.log("================================");

            console.log("Erro:", error);
            console.log("Resposta da API:", error.response?.data);
            console.log("Status:", error.response?.status);

            Alert.alert(
                "Erro",
                error.response?.data?.message ||
                "Não foi possível realizar o login."
            );
        }
    }

    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                Entre na sua conta
            </Text>

            <Text style={styles.label}>
                E-mail
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Digite seu e-mail"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />

            <Text style={styles.label}>
                Senha
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Digite sua senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <TouchableOpacity
                style={styles.button}
                onPress={handleLogin}
            >
                <Text style={styles.buttonText}>
                    Entrar
                </Text>
            </TouchableOpacity>

            <Text style={styles.registerText}>
                Não possui uma conta?{" "}

                <Text
                    style={styles.registerLink}
                    onPress={() => navigation.navigate("Acessar")}
                >
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
        borderColor: "#999",
        padding: 10,
        borderRadius: 8,
        marginTop: 8
    },

    button: {
        marginTop: 30,
        backgroundColor: "#4A5D23",
        paddingVertical: 12,
        borderRadius: 10,
        width: "60%"
    },

    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center"
    },

    registerText: {
        marginTop: 20
    },

    registerLink: {
        color: "#4A5D23",
        fontWeight: "bold"
    }

});
