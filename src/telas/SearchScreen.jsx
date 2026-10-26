
import { useEffect, useState } from "react";

import {
    ActivityIndicator,
    FlatList,
    Image,
    StyleSheet,
    View,
    Text,
    TextInput,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import api from "../services/api";

export default function SearchScreen() {

    // Guarda o texto digitado na barra de pesquisa
    const [nome, setNome] = useState("");

    // Guarda as plantas recebidas do backend
    const [plantas, setPlantas] = useState([]);

    // Controla o indicador de carregamento
    const [carregando, setCarregando] = useState(true);

    // Guarda possíveis mensagens de erro
    const [erro, setErro] = useState("");

    // Busca as plantas no backend
    async function buscarPlantas(valor = "") {

        try {
            setCarregando(true);
            setErro("");

            let response;

            if (valor.trim() === "") {

                // Sem texto: busca todas as plantas
                response = await api.get("/plants");

            } else {

                // Com texto: pesquisa pelo nome
                response = await api.get("/plants/search", {
                    params: {
                        nome: valor.trim(),
                    },
                });
            }

            // Atualiza a lista com os dados recebidos
            // Aceita tanto um array direto quanto um objeto
            // que contenha as plantas na propriedade "plantas".
            const dados = response.data;

            const lista = Array.isArray(dados)
                ? dados
                : dados.plantas ?? dados.plants ?? [];

            setPlantas(lista);

        } catch (error) {

            console.error(
                "Erro ao buscar plantas:",
                error.response?.data || error.message
            );

            setPlantas([]);

            setErro(
                error.response?.data?.mensagem ||
                "Não foi possível carregar as plantas."
            );

        } finally {

            setCarregando(false);

        }
    }

    // Busca novamente quando o texto digitado mudar
    useEffect(() => {

        buscarPlantas(nome);

    }, [nome]);

    // Exibe cada planta recebida do backend
    function renderizarPlanta({ item }) {

        return (
            <View style={styles.cardPlanta}>

                <Image
                    source={{
                        uri: item.imagem ||
                            "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=500&q=80",
                    }}
                    style={styles.imagemPlanta}
                />

                <View style={styles.infoPlanta}>

                    <Text style={styles.nomePlanta}>
                        {item.nome}
                    </Text>

                    <Text style={styles.precoPlanta}>
                        R$ {Number(item.preco || 0).toFixed(2)}
                    </Text>

                </View>

            </View>
        );
    }

    return (

        <View style={styles.container}>

            <Text style={styles.titulo}>
                Encontre sua planta
            </Text>

            {/* Barra de pesquisa */}
            <View style={styles.searchContainer}>

                <TextInput
                    placeholder="Pesquisar plantas..."
                    placeholderTextColor="#000000"
                    style={styles.input}
                    value={nome}
                    onChangeText={setNome}
                    autoCapitalize="none"
                    autoCorrect={false}
                />

                <Ionicons
                    name="search"
                    size={20}
                    color="#000000"
                    style={styles.icon}
                />

            </View>

            {/* Carregamento */}
            {carregando ? (

                <View style={styles.mensagemContainer}>

                    <ActivityIndicator
                        size="large"
                        color="#52734D"
                    />

                    <Text style={styles.mensagem}>
                        Carregando plantas...
                    </Text>

                </View>

            ) : erro ? (

                /* Erro na comunicação com o backend */
                <View style={styles.mensagemContainer}>

                    <Text style={styles.mensagemErro}>
                        {erro}
                    </Text>

                </View>

            ) : plantas.length === 0 ? (

                /* Pesquisa sem resultados */
                <View style={styles.mensagemContainer}>

                    <Text style={styles.mensagem}>
                        Nenhuma planta encontrada.
                    </Text>

                </View>

            ) : (

                /* Lista de plantas recebidas da API */
                <FlatList
                    data={plantas}
                    keyExtractor={(item, index) =>
                        String(item.id_plants ?? item.id ?? index)
                    }
                    renderItem={renderizarPlanta}
                    contentContainerStyle={styles.listaPlantas}
                    showsVerticalScrollIndicator={false}
                />

            )}

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",
    },

    titulo: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#35543A",
        marginBottom: 20,
    },

    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#d9e2d5",
        borderRadius: 30,
        paddingHorizontal: 15,
        height: 50,
        marginBottom: 20,
    },

    input: {
        flex: 1,
        color: "#000",
        fontSize: 16,
        paddingVertical: 0,
    },

    icon: {
        marginLeft: 10,
    },

    listaPlantas: {
        paddingBottom: 20,
    },

    cardPlanta: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f5f7f2",
        borderRadius: 15,
        marginBottom: 15,
        padding: 10,
        elevation: 2,
    },

    imagemPlanta: {
        width: 90,
        height: 90,
        borderRadius: 12,
        backgroundColor: "#d9e2d5",
    },

    infoPlanta: {
        flex: 1,
        marginLeft: 15,
    },

    nomePlanta: {
        fontSize: 17,
        fontWeight: "bold",
        color: "#35543A",
    },

    precoPlanta: {
        fontSize: 15,
        color: "#444",
        marginTop: 8,
    },

    mensagemContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },

    mensagem: {
        fontSize: 16,
        color: "#555",
        textAlign: "center",
        marginTop: 10,
    },

    mensagemErro: {
        fontSize: 16,
        color: "#B3261E",
        textAlign: "center",
    },

});
