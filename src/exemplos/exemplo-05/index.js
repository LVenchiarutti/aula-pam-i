import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';  // Importando os estilos

function Exemplo05() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [total, setTotal] = useState('');

  const handleCalculation = () => {
    const result = parseFloat(num1) + parseFloat(num2);
    setTotal(result.toString());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Exemplo 5</Text>

      <Text style={styles.txtSaida}>Calculadora básica</Text>

      <Text style={styles.textLabel}>1º número</Text>
      <TextInput
        style={styles.txtEntrada}
        value={num1}
        onChangeText={setNum1}
        keyboardType="numeric"
      />

      <Text style={styles.txtSaida}>+</Text>

      <Text style={styles.textLabel}>2º número</Text>
      <TextInput
        style={styles.txtEntrada}
        value={num2}
        onChangeText={setNum2}
        keyboardType="numeric"
      />

      <Text style={[styles.txtSaida, { margin: 0 }]}>=</Text>

      <Text style={styles.textLabel}>Total</Text>
      <TextInput
        style={styles.txtEntrada}
        value={total}
        editable={false}
      />

      <TouchableOpacity style={styles.button} onPress={handleCalculation}>
        <Text style={styles.textButton}>Calcular</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Exemplo05;
