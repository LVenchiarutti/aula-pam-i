import { View, Text, Image } from "react-native";

import styles from "./styles";

import img from '../../../assets/002-1-react-native.png';
import Mensagens from "./mensagens";

function Exemplo02(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Exemplo 02</Text>
      <Image source={img} style={styles.imagem} />
      
      <Mensagens titulo={'sucesso'} >
      valor enviado corretamente!
      </Mensagens>
      <Mensagens titulo={'erro'}>
        Vc nao pde fazer isso 
      </Mensagens>
      <Mensagens titulo={'aviso'}>
      valor não informado!
      </Mensagens>
    </View>
  );
}

export default Exemplo02;