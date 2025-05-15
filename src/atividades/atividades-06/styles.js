import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
  },
  title: {
    fontSize: 26,
    textAlign: 'center',
    marginBottom: 30,
    fontWeight: 'bold',
    color: '#888',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  resultado: {
    fontSize: 50,
    textAlign: 'center',
    color: '#ccc',
  },
  mensagem: {
    fontSize: 20,
    textAlign: 'center',
    color: '#bbb',
    marginBottom: 10,
  },
});