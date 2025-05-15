import { View, TextInput } from 'react-native';
import styles from './styles';

export default function Input({ placeholder, valor, setValor }) {
  return (
    <View style={styles.box}>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder={placeholder}
        placeholderTextColor="#aaa"
        value={valor}
        onChangeText={setValor}
      />
    </View>
  );
}