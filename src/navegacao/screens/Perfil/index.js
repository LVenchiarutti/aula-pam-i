// src/navegacao/screens/Perfil/index.js

import { View, Text } from 'react-native';
import styles from './styles';

export default function Perfil() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Leonardo V. G. Henrique</Text>
      
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Idade:</Text>
        <Text style={styles.infoValor}>26</Text>
      </View>
      
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Cidade:</Text>
        <Text style={styles.infoValor}>Tupã</Text>
      </View>
    </View>
  );
}