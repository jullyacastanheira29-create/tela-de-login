import { Text, TextInput, View, TouchableOpacity, StyleSheet } from "react-native";

export default function RegisterScreen({navigation}) {
    return(
        <View style={styles.container}> 
            <Text style={styles.title}>Crie sua conta</Text>

            <Text style={styles.label}>Nome</Text>

            <TextInput style={styles.input} placeholder="Digite seu nome"/>

            <Text  style={styles.label}>E-mail</Text>

            <TextInput style={styles.input} placeholder="Digite seu E-mail"/>

            <Text  style={styles.label}>Senha</Text>

            <TextInput style={styles.input} placeholder="Digite sua senha"/>

            <Text  style={styles.label}>Confirme sua senha</Text>

            <TextInput style={styles.input} placeholder="Digite sua senha novamente"/>

            <TouchableOpacity style={styles.button}
                onPress={() => navigation.navigate("Tabs")}
            >
                <Text style={styles.buttonText} >Acessar</Text>

                  
            </TouchableOpacity>
            
            <Text>
                Já possui uma conta ?{" "}
                <Text onPress={() => navigation.navigate("Login")}>
                    Faça o Login
                </Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container :{
        flex: 1, 
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },

    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 20
    },
    label:{
        alignSelf: "flex-start",
        fontWeight: "bold",
        marginTop: 20
    },
    input: {
        width: "100%",
        borderWidth: 1,
        padding: 10,
        borderRadius: 8,
        marginTop: 8,
        outlineStyle: "none",
    },
    button: {
        marginTop: 30,
        backgroundColor: "#4A5D23",
        paddingVertical: 12,
        paddingHorizontal: 40,
        borderRadius: 10,
        width: "50%",
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
    },
}); 