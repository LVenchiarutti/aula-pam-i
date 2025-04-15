import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'rgb(0, 241, 40)',
    padding: 16,
    alignItems: "center",
  },

  titulo: {
    fontSize: RFPercentage(4),
    marginTop: RFPercentage(3),
    marginBottom: RFPercentage(2),
    color: 'rgb(39, 1, 255)',
    fontWeight: 'bold',
  },

  instrucao: {
    fontSize: RFPercentage(2.2),
    marginBottom: RFPercentage(2),
    color: 'rgb(55, 0, 255)',
  },

  nomeCompleto: {
    fontSize: RFPercentage(2.4),
    marginBottom: RFPercentage(2),
    color: 'rgb(0, 0, 0)',
    fontWeight: 'bold',
  },

  label: {
    fontSize: RFPercentage(2),
    alignSelf: 'flex-start',
    marginLeft: RFPercentage(2),
    color: 'rgb(0, 4, 255)',
    fontWeight: 'bold',
    marginTop: RFPercentage(1),
  },

  TxtInput: {
    borderWidth: 1,
    borderColor: 'rgb(255, 0, 0)',
    color: 'rgb(0, 0, 0)',
    fontSize: RFPercentage(2),
    width: '90%',
    padding: 8,
    borderRadius: 8,
    marginBottom: RFPercentage(2),
    backgroundColor: 'rgb(255, 255, 255)',
    shadowColor: 'rgb(0, 0, 0)',
  },

  botao: {
    backgroundColor: 'rgb(255, 0, 0)',
    width: '90%',
    padding: RFPercentage(1.5),
    borderRadius: 10,
    alignItems: 'center',
  },

  txtBotao: {
    fontSize: RFPercentage(2),
    color: 'rgb(0, 26, 255)',
  },
});

export default styles;
