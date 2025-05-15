import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

export default function Botao({ texto, acao, cor }) {
  return (
    <TouchableOpacity
      style={[styles.botao, cor ? { backgroundColor: cor } : null]}
      onPress={acao}
    >
      <Text style={styles.texto}>{texto}</Text>
    </TouchableOpacity>
  );
}