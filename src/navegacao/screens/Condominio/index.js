// src/navegacao/screens/Condominio/index.js

import { View, Text } from 'react-native';
import styles from './styles';

export default function Condominio() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Condomínio Nº 1</Text>
      <Text style={styles.info}>AP: 299</Text>

      <View style={styles.reservasContainer}>
        <Text style={styles.reservasTitulo}>Suas reservas</Text>
        <View style={styles.bannerReserva}>
          <Text style={styles.bannerTexto}>Piscina reservada!</Text>
          <Text style={styles.bannerSubtexto}>Dia 01/01/2001 às 15h</Text>
        </View>
      </View>
    </View>
  );
}