import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function Bulhacha() {

  const [texto, setTexto] = useState("");
  const [rachado, setRachado] = useState(false);

  const frases = [
    "A vida trará coisas boas se tiver paciência",
    "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si",
    "Não compense na ira o que lhe falta na razão",
    "Defeitos e virtudes são apenas dois lados da mesma moeda",
    "A maior de todas as torres começa no solo",
"Não há que ser forte. Há que ser flexível"
  ];

  const rachaBiscoito = () => {
    if (!rachado) {
      const randomIndex = Math.floor(Math.random() * frases.length);
      setTexto(frases[randomIndex]);
      setRachado(true);
    }
  };

  const voltarBiscoito = () => {
    setTexto("");
    setRachado(false);
  };

  return (
    <View style={styles.container}>
      {rachado ? (
        <Image
          style={styles.imagem}
          source={require("../assets/biscoitoAberto.png")}
        />
      ) : (
        <Image
          style={styles.imagem}
          source={require("../assets/biscoito.png")}
        />
      )}
      <View style={styles.container}>
        <Text style={styles.textofrase}>{texto}</Text>
      </View>
      <TouchableOpacity
        onPress={rachaBiscoito}
        style={styles.botao}
        disabled={rachado}
      >
        <Text style={{ color: "white" }}>Quebrar o Biscoito</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={voltarBiscoito}
        style={styles.botao}
        disabled={!rachado}
      >
        <Text style={{ color: "white" }}>Reiniciar o Biscoito</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  texto: {
    fontSize: 30,
    color: "white",
  },

  textofrase: {
    fontSize: 15,
    fontStyle: "italic",
    color: "#003566",
  },

  imagem: {
    width:250,
    height:250,
    marginTop: 80
  },

  botao: {
    backgroundColor: "black",
    marginBottom: 50,
    padding: 10,
    borderRadius: 5,
  },
});