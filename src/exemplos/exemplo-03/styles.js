import { StyleSheet } from "react-native"; 

import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  container: {
    flex: 1, // container ocupa % da tela
    backgroundColor: "#fafafa", // cor de fundo
    borderRadius: 5, // bordas arredondadas
    padding: 8,
    alignItems: "center", // alinhamento horizontal
  },
  titulo: {
    fontSize: RFPercentage(4), //tamanho da fonte
    borderWidth: 3, //expessura da borda	
    marginTop: 20,  // margem acima do elemento
    marginBottom: 20,  //margem acima do elemento
    //padding: 8,   //espaçamento interno
    width: '100%',  //altura do elemento
    height:80,   //largura do elemento
    textAlign: 'center',  //alinhamento de texto
    textAlignVertical: 'center', //alinhamento vertical
    color: 'black', //cor do texto
    backgroundColor: 'darkslategrey', //cor de fundo
    borderRadius: 20,  //bordas arredondadas
  },
  texto:{
    fontSize: RFPercentage(2.2), //tamanho da fonte
    
  },
  valor: {
    fontSize: RFPercentage(5), //tamanho da fonte
    color: 'black', //cor do texto
  },
  botao: {
    backgroundColor: 'darkslategrey', //cor de fundo
    width: '75%', //altura do elemento
    borderRadius : RFPercentage(2), //bordas arredondadas
    padding: RFPercentage(1.5), //espaçamento interno
    alignItems: 'center', //alinhamento horizontal
    justifyContent: 'center', //alinhamento vertical
    margin: RFPercentage(2), // margem acima do elemento

  },
    txtBotao: {
    fontSize: RFPercentage(2), //tamanho da fonte
    color: 'black', //cor do texto
    },
});

export default styles;