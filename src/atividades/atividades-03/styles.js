import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 50,
    fontWeight: 'bold',
    marginTop: 50,
    color: 'black',
  },
  texto: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 60,
    color: 'red',
  },
  counterBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 80,
    borderWidth: 1,
    borderColor: '#999',
    padding: 10,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#ccc',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 10,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  counterText: {
    fontSize: 24,
    fontWeight: 'bold',
    minWidth: 40,
    textAlign: 'center',
  },
  resetButton: {
    backgroundColor: '#ccc',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 30,
  },
  resetText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#555',
  },
});
