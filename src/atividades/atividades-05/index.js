import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

function Calculadora() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [total, setTotal] = useState('');

  const handleCalculation = (operacao) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    let resultado = 0;

    if (isNaN(n1) || isNaN(n2)) {
      setTotal('Erro');
      return;
    }

    switch (operacao) {
      case '+':
        resultado = n1 + n2;
        break;
      case '-':
        resultado = n1 - n2;
        break;
      case '*':
        resultado = n1 * n2;
        break;
      case '/':
        resultado = n2 !== 0 ? n1 / n2 : 'Erro';
        break;
      default:
        resultado = 'Erro';
    }

    setTotal(resultado.toString());
  };

  const handleReset = () => {
    setNum1('');
    setNum2('');
    setTotal('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Calculadora Completa</Text>

      <Text style={styles.textLabel}>1º número</Text>
      <TextInput
        style={styles.txtEntrada}
        value={num1}
        onChangeText={setNum1}
        keyboardType="numeric"
      />

      <Text style={styles.textLabel}>2º número</Text>
      <TextInput
        style={styles.txtEntrada}
        value={num2}
        onChangeText={setNum2}
        keyboardType="numeric"
      />

      <Text style={styles.textLabel}>Total</Text>
      <TextInput
        style={styles.txtEntrada}
        value={total}
        editable={false}
      />

      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.button} onPress={() => handleCalculation('+')}>
          <Text style={styles.textButton}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleCalculation('-')}>
          <Text style={styles.textButton}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleCalculation('*')}>
          <Text style={styles.textButton}>*</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleCalculation('/')}>
          <Text style={styles.textButton}>/</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
        <Text style={styles.textButton}>Zerar</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Calculadora;
