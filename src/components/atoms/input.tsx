import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = (props: any) => {

    return (
    <TextInput
      style={styles.input}
      placeholderTextColor="#888"
      {...props}
    />
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
});

export default Input;
