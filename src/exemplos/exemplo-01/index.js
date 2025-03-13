import { View, Text } from "react-native";

import styles from "./styles";
function Exemplo01() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo} >Exemplo 01</Text>
      <Text>Aula PAM I, primeiro componete.</Text>
    </View>
  );
}

export default Exemplo01;