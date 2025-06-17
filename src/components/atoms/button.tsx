import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

interface IProps {
  title: string;
  onPress: () => void;
  isOutline?: boolean;
  disabled?: boolean
}
const FormButton = (props: IProps) => {
  const { title, isOutline } = props;

  return (
    <TouchableOpacity
      style={isOutline ? styles.buttoOutline : styles.button}
      {...props}
    >
      <Text
        style={{
          ...styles.buttonText,
          color: isOutline ? "#900059" : "#fff",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  input: {
    fontFamily: "OpenSans",
    fontSize: 17,
    height: 50,
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 13,
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 25,
  },
  buttoOutline: {
    borderWidth: 2,
    borderRadius: 30,
    borderColor: "#900059",
    height: 50,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    height: 50,
    width: "100%",
    backgroundColor: "#900059", // Cor do botão
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    textAlign: "center"
  },
  buttonText: {
    fontFamily: "OpenSansBold",
    fontSize: 16,
  },
});

export default FormButton;
