import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";

import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const SingUp = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>RayCo</Text>
        <Text style={styles.welcomeText}>Crie sua conta aqui!</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#888"
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Confirmar Senha"
          placeholderTextColor="#888"
          secureTextEntry
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Cadastrar-Se</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.registerText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

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
  button: {
    height: 50,
    width: "100%",
    backgroundColor: "#900059", // Cor do botão
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    fontFamily: "OpenSansBold",
    color: "#fff",
    fontSize: 16,
  },
  registerText: {
    fontFamily: "OpenSansBold",
    color: "#900059",
    fontSize: 16,
  },
  registerButton: {
    borderWidth: 2,
    borderRadius: 30,
    borderColor: "#900059",
    height: 50,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SingUp;
