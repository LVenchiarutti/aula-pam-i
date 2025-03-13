import { StyleSheet } from "react-native"; 

  import { RFPercentage } from "react-native-responsive-fontsize"; 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafaf", // cor de fundo
    borderRadius: 10, // borda arredondada
    padding: 8, // preenchimento
    alignItems: "center", // alinhamento horizontal
  },
  titulo: {
    fontSize: RFPercentage(4), //tamanho da fonte
    borderWidth: 3, // expessura da borda
    marginBottom: 8, // margem inferior
    marginTop: 20, // margem superior
    width: "100%", // largura
    height: 80, // altura
    textAlign: "center", // alinhamento horizontal
    textAlignVertical: "center", // alinhamento vertical
    color: "darkslategrey", // cor do texto
    bordeColor: "lightblue", // cor de fundo
    borderRadius: 20, // borda arredondada
  },
  texto: {
    fontSize: RFPercentage(2.2), //tamanho da fonte
    textAlign: "center", // alinhamento horizontal
    color: "darkslategrey", // cor do texto
  },
});

export default styles;