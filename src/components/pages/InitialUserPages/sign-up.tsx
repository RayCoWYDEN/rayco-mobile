import React, { useState } from "react";
import { View, TouchableOpacity, Text, TextInput } from "react-native";

import styles from "./styles";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import FormButton from "../../atoms/button";
import Input from "../../atoms/input";
import { register, storeUserLoged } from "../../../services/user.service";
import { UserCreateDTO } from "../../../models/user-data.model";

const SingUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  async function handleSingUp() {
    if (password !== confirmPassword) return;

    const user: UserCreateDTO = {
      name,
      email,
      password,
    };

    setLoading(true);
    register(user)
      .then(({ data }) => {
        storeUserLoged(data);
        navigation.navigate("Tabs");
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>RayCo</Text>
        <Text style={styles.welcomeText}>Crie sua conta aqui!</Text>
      </View>

      <View style={styles.form}>
        <Input placeholder="Nome" value={name} onChangeText={setName} />
        <Input placeholder="E-mail" value={email} onChangeText={setEmail} />
        <Input
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          textContentType="none"
          autoComplete="off"
        />
        <Input
          placeholder="Confirmar Senha"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          textContentType="none"
          autoComplete="off"
        />

        <FormButton title="Cadastrar-se" onPress={handleSingUp} />
      </View>

      <FormButton
        title="Entrar"
        onPress={() => navigation.navigate("Login")}
        isOutline
      />
    </View>
  );
};

export default SingUp;
