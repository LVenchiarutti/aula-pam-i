// src/navegacao/screens/Home/styles.js

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0f7fa',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#00796b',
  },
  texto: {
    fontSize: 18,
    marginBottom: 30,
    color: '#004d40',
  },
  botao: {
    backgroundColor: '#00796b',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  textoBotao: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;