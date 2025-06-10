// src/navegacao/screens/Home/index.js

import { View, Text } from 'react-native';
import styles from './styles';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>CondoWay</Text>
      <Text style={styles.texto}>Bem-vindo à sua conta!</Text>
    </View>
  );
}