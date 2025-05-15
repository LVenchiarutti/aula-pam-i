import { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Input from './input';
import Botao from './botao';

export default function CalculadoraIMC() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('0.00');
  const [mensagem, setMensagem] = useState('Mensagem');

  const calcularIMC = () => {
    const p = parseFloat(peso);
    const a = parseFloat(altura);

    if (isNaN(p) || isNaN(a) || a <= 0) {
      setResultado('0.00');
      setMensagem('Valores inválidos');
      return;
    }

    const imc = p / (a * a);
    let classificacao = '';

    if (imc < 18.5) classificacao = 'Abaixo do peso';
    else if (imc < 25) classificacao = 'Peso normal';
    else if (imc < 30) classificacao = 'Sobrepeso';
    else if (imc < 35) classificacao = 'Obesidade Grau I';
    else if (imc < 40) classificacao = 'Obesidade Grau II';
    else classificacao = 'Obesidade Grau III';

    setResultado(imc.toFixed(2));
    setMensagem(classificacao);
  };

  const zerar = () => {
    setPeso('');
    setAltura('');
    setResultado('0.00');
    setMensagem('Mensagem');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Atividade06</Text>

      <View style={styles.row}>
        <Input placeholder="Peso" valor={peso} setValor={setPeso} />
        <Input placeholder="Altura" valor={altura} setValor={setAltura} />
      </View>

      <Text style={styles.resultado}>{resultado}</Text>
      <Text style={styles.mensagem}>{mensagem}</Text>

      <Botao texto="Calcular IMC" acao={calcularIMC} />
      <Botao texto="Zerar" acao={zerar} cor="#ff6b6b" />
    </View>
  );
}