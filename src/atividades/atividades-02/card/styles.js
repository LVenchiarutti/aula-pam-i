import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ff0000",
    borderRadius: 10,
    width: "90%",
    padding: 10,
    backgroundColor: "#F8F8FF",
    marginBottom: 10,
  },
  imagem: {
    width: 100,  
    height: 100, 
    resizeMode: "contain",
    marginRight: 10, 
  },
  textContainer: {
    flex: 1, 
  },
  titulo: {
    fontSize: RFPercentage(3),
    fontWeight: "bold",
    color: "red",
  },
  descricao: {
    fontSize: RFPercentage(2.2),
    color: "#222",
  },
});

export default styles;