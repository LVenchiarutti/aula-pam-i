// src/navegacao/screens/Perfil/index.js

import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function Perfil({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tela de Perfil</Text>
      <Text style={styles.texto}>Aqui estão as informações do perfil.</Text>

      {/* Botão para voltar para a tela Home */}
      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.textoBotao}>Voltar para Home</Text>
      </TouchableOpacity>
    </View>
  );
}