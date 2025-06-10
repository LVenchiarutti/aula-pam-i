// src/navegacao/screens/Perfil/styles.js

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  infoLabel: {
    fontSize: 18,
    color: '#666',
    fontWeight: 'bold',
  },
  infoValor: {
    fontSize: 18,
    color: '#333',
  },
});

export default styles;