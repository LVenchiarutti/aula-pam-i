import { View, Text, Button, Alert } from "react-native";

import styles from "./styles";
function Exemplo03() {

    function handleExibeBotao() {
        Alert.alert("Clicou!");
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
    )}
    
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Exemplo 03</Text>
      <Text style={styles.texto}>Variaveis e State</Text>
        <Button
          title="Não clique aqui"
          onPress={handleExibeBotao2}
          color="red"
        />

    
    </View>    

  );
}

export default Exemplo03;