import React, { useEffect, useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  ActivityIndicator,
  Linking,
} from "react-native";

import styles from "./styles";
import { Link, ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Input from "../../atoms/input";
import FormButton from "../../atoms/button";
import {
  getUserLoged,
  login,
  removeUserLoged,
  storeUserLoged,
} from "../../../services/user.service";
import { LoginDTO } from "../../../models/login-data.model";
import { isTokenExpired } from "../../../services/token-service";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  useEffect(() => {
    const verifyUser = async () => {
      if (await isTokenExpired()) {
        await removeUserLoged();
      }

      const user = await getUserLoged();

      if (user) {
        navigation.reset({
          index: 0,
          routes: [{ name: "Tabs" }],
        });
      }
    };

    verifyUser();
  }, []);

  async function handleLogin() {
    const loginDTO: LoginDTO = { email, password };

    setLoading(true);
    try {
      const { data } = await login(loginDTO);

      await storeUserLoged(data);
      navigation.navigate("Tabs");
    } catch (error: any) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  const openLink = () => {
    Linking.openURL("https://www.google.com");
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

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
        <Input placeholder="E-mail" value={email} onChangeText={setEmail} />
        <Input
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Text onPress={openLink} style={{marginBottom:10, ...styles.link}}>Esqueci minha senha</Text>

        <FormButton title="Entrar" onPress={handleLogin} />
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
