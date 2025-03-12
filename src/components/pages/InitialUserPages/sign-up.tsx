import React from "react";
import { View, TouchableOpacity, Text, TextInput } from "react-native";

import styles from "./styles";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import FormButton from "../../atoms/button";
import Input from "../../atoms/input";

const SingUp = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>RayCo</Text>
        <Text style={styles.welcomeText}>Crie sua conta aqui!</Text>
      </View>

      <View style={styles.form}>
        <Input placeholder="Nome" />
        <Input placeholder="E-mail" />
        <Input placeholder="Senha" secureTextEntry />
        <Input placeholder="Confirmar Senha" secureTextEntry />
        <FormButton title="Cadastrar-se" onPress={() => ""} />
      </View>

      <FormButton title="Entrar" onPress={() => navigation.navigate("Login")} isOutline/>
    </View>
  );
};

export default SingUp;
