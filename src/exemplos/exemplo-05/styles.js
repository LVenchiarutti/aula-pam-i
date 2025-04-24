// styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // Container principal da tela
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
  },

  // Título principal
  paragraph: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },

  // Estilo para rótulos como "1º número", "2º número", "Total"
  textLabel: {
    fontSize: 16,
    marginTop: 10,
    color: '#555',
  },

  // Entrada de texto (TextInput)
  txtEntrada: {
    height: 40,
    borderColor: '#999',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
  },

  // Estilo para símbolos e resultados: "+", "=", "Calculadora básica"
  txtSaida: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: '#000',
  },

  button: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },

  // Texto dentro do botão
  textButton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
