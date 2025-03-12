import React from "react";
import { View, TouchableOpacity, Text, TextInput } from "react-native";

import styles from "./styles";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Input from "../../atoms/input";
import FormButton from "../../atoms/button";

const LoginScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>RayCo</Text>
        <Text style={styles.welcomeText}>Bem vindo ao RayCo!</Text>
        <Text style={styles.description}>
          Encontre aqui, a faculdade que combina com seu estilo!
        </Text>
      </View>

      <View style={styles.form}>
        <Input placeholder="E-mail" />
        <Input placeholder="Senha" secureTextEntry />
        <FormButton title="Entrar" onPress={() => ""} />
      </View>

      <FormButton
        title="Cadastrar-se"
        onPress={() => navigation.navigate("SingUp")}
        isOutline
      />
    </View>
  );
};

export default LoginScreen;
