import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";

function Atividade04() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [nomeCompleto, setNomeCompleto] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Atividade 4</Text>

      {nomeCompleto ? (
        <Text style={styles.nomeCompleto}>{nomeCompleto}</Text>
      ) : (
        <Text style={styles.instrucao}>Inserir o nome e sobrenome</Text>
      )}

      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.TxtInput}
        placeholder="Digite seu nome"
        value={nome} // <-- LIGA O ESTADO AO CAMPO
        onChangeText={setNome}
      />

      <Text style={styles.label}>Sobrenome</Text>
      <TextInput
        style={styles.TxtInput}
        placeholder="Digite seu sobrenome"
        value={sobrenome} // <-- LIGA O ESTADO AO CAMPO
        onChangeText={setSobrenome}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={() => {
          setNomeCompleto(`${nome} ${sobrenome}`);
          setNome("");          // <-- LIMPA CAMPO NOME
          setSobrenome("");     // <-- LIMPA CAMPO SOBRENOME
        }}
      >
        <Text style={styles.txtBotao}>Exibir texto</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Atividade04;
