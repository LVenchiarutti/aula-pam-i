// src/navegacao/screens/Condominio/styles.js

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  info: {
    fontSize: 20,
    color: '#666',
    marginBottom: 40,
  },
  reservasContainer: {
    width: '90%',
  },
  reservasTitulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 15,
  },
  bannerReserva: {
    backgroundColor: '#e0f2f1', // Um tom de verde claro
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#b2dfdb',
  },
  bannerTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00796b',
  },
  bannerSubtexto: {
    fontSize: 16,
    color: '#004d40',
    marginTop: 5,
  },
});

export default styles;