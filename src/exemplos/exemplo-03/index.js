import {useState } from "react";
import { View, Text, Button, Alert, TouchableOpacity } from "react-native";

import styles from "./styles";

function Exemplo03() {

  const [numero,setNumero] = useState(0);
  
  function handleIncremento() {
    setNumero(numero + 1);
  }

  const handleExibeBotao2 = () => {
        Alert.alert ('Clicou dnv!',
        'alguem clicou',
        [
          {
            text: "sim",
            onPress: () => Alert.alert("sim"),
            styles: 'default',
          },
          {
            text: "não",
            onPress: () => Alert.alert("não"),
            styles: 'default',
          },
          {
            text: "cancelar",
            onPress: () => Alert.alert("cancelar"),
            styles: 'default',
          },
        ]
    );
  }
    
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Atividade 03</Text>
      <Text style={styles.texto}>Variaveis e State</Text>
        <Button
          title="Não clique aqui"
          onPress={handleExibeBotao2}
          color="red"
        />
        <Text style={styles.valor}>{numero}</Text>
        <TouchableOpacity style={styles.botao} onPress={handleIncremento}> 
          <Text style={styles.txtBotao}>+1</Text>
        </TouchableOpacity>
    </View>
  );
}

export default Exemplo03;