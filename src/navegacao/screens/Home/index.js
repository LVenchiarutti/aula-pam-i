// src/navegacao/screens/Home/index.js

import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

// O parâmetro { navigation } é injetado automaticamente pelo React Navigation
export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tela Home</Text>
      <Text style={styles.texto}>Bem-vindo à primeira tela!</Text>

      {/* Botão para navegar para a tela de Perfil */}
      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('Perfil')}
      >
        <Text style={styles.textoBotao}>Ir para o Perfil</Text>
      </TouchableOpacity>
    </View>
  );
}