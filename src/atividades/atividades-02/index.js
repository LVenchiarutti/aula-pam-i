import { View, Text } from "react-native";

import styles from "./styles";
import Card from "./card";

import cb3 from '../../../assets/cb3.png';
import cb5 from '../../../assets/cb5.jpg';
import cb10 from '../../../assets/cb10.png';

function Atividade02() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo2}>Honda motor Company</Text>
      <Card 
        titulo2="Honda cb 300f" 
        descricao="Dia a dia e aventura com economia. R$30.000,00" 
        img={cb3} 
      />
      <Card 
        titulo2="Cb 500" 
        descricao="Conforto e potencia para quem busca aventura. R$50.000,00" 
        img={cb5} 
      />
      <Card 
        titulo2="Cb 1000" 
        descricao="Para quem almeja a adrenalina e a velocidade. R$90.000,00" 
        img={cb10} 
      />
    </View>
  );
}

export default Atividade02;