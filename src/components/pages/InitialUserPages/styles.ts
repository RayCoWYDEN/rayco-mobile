import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: "#fff", // Cor de fundo
      paddingBottom: 50,
      paddingTop: 90,
      paddingHorizontal: 30,
    },
    header: {
      flex: 0.5,
      justifyContent: "flex-start",
      alignItems: "center",
    },
    form: {
      flex: 1,
      width: "100%",
    },
    logo: {
      fontSize: 70,
      fontFamily: "JollyLodger",
      color: "#FF0000", // Cor do logo
      marginBottom: 20,
    },
    welcomeText: {
      fontFamily: "OpenSansBold",
      fontSize: 24,
      color: "#414141",
      marginBottom: 10,
    },
    description: {
      fontFamily: "OpenSans",
      fontSize: 16,
      color: "#414141",
      textAlign: "center",
      marginBottom: 50,
    },
    button: {
      height: 50,
      width: "100%",
      backgroundColor: "#900059", // Cor do botão
      borderRadius: 30,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 20,
    },

  });

  export default styles;