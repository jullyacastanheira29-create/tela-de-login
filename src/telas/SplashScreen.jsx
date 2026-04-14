import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function TelaInicial() {
  return (
    <View style={styles.container}>
      
      {/* Título */}
      <Text style={styles.titulo}>JardimSecreto</Text>

      <Image
        source={ require ('../../assets/logo.jpg') }
        style={styles.imagem}
      />

      <Text style={styles.texto}>
        Onde a natureza revela seus pequenos segredos !
      </Text>

      {/* Botão */}
      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textoBotao}>ACESSAR</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // centraliza vertical
    alignItems: "center", // centraliza horizontal
    backgroundColor: "#fff",
    padding: 20,
  },
  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },
  imagem: {
    width: 200,
    height: 200,
    borderRadius: 20,
    marginBottom: 20,
  },
  texto: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30,
  },
  botao: {
    backgroundColor: "#ccaaf7ff",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  textoBotao: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});