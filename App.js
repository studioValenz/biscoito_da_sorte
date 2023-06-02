import React, { useState } from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
  const [img, setImg] = useState(require("./src/image/biscoito.png"));
  const [textoFrase, setTextoFrase] = useState("");

  let frases = [
    "Siga os bons e aprenda com eles.",
    "O bom-senso vale mais do que muito conhecimento.",
    "O riso é a menor distância entre duas pessoas.",
    "Deixe de lado as preocupações e seja feliz.",
    "Realize o óbvio, pense no improvável e conquiste o impossível.",
    "Acredite em milagres, mas não dependa deles.",
    "A maior barreira para o sucesso é o medo do fracasso.",
  ];

  function quebraBiscoito() {
    let fraseAleatoria = Math.floor(Math.random() * frases.length);
    setTextoFrase(' " ' + frases[fraseAleatoria] + ' " ');

    setImg(require("./src/image/biscoitoAberto.png"));
  }

  function reiniciarBiscoito() {
    setImg(require("./src/image/biscoito.png"));
    setTextoFrase("");
  }

  return (
    <View style={styles.container}>
      <Image source={img} style={styles.img} />

      <Text style={styles.texto}>{textoFrase}</Text>

      <TouchableOpacity style={styles.botao} onPress={quebraBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnText}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.botao, styles.btnResert]}
        onPress={reiniciarBiscoito}
      >
        <View style={styles.btnArea}>
          <Text style={[styles.btnText, { color: "#121212" }]}>
            Reserta Biscoito
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 230,
    height: 230,
  },
  texto: {
    fontSize: 20,
    color: "#dd7b22",
    margin: 30,
    fontStyle: "italic",
    textAlign: "center",
  },
  botao: {
    width: 230,
    height: 50,
    borderColor: "#dd7b22",
    borderWidth: 1,
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#dd7b22",
  },
  btnResert: {
    marginTop: 15,
    borderColor: "#121212",
  },
});
