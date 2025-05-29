import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import Input from "../../atoms/input";
import FormButton from "../../atoms/button";
import { removeUserLoged } from "../../../services/user.service";
import { ParamListBase, useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const UserProfile = () => {
  const [name, setName] = useState("Gustavo Anacleto");
  const [email, setEmail] = useState("gustavo@gmail.com");
  const [course, setCourse] = useState("Ciência da Computação");
  const [institution, setInstitution] = useState("Unimetrocamp");
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const handleLogout = () => {
    removeUserLoged()
    .then(() => navigation.navigate("Login"))
  }


  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity style={styles.logoutIcon} onPress={handleLogout}>
        <Feather name="log-out" size={25} />
      </TouchableOpacity>
        <View style={styles.avatarContainer}>
          <View style={styles.avatar}>
            <Feather name="user" size={60} color="#fff" />
          </View>
          <TouchableOpacity style={styles.cameraIcon}>
            <Text style={styles.cameraText}>
              <Feather name="camera" size={20} />
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.headerText}>Editar meu perfil</Text>
      </View>
      <View style={styles.form}>
        <View style={styles.tabsContainer}>
          <Text style={styles.label}>Dados pessoais</Text>
          <Text style={styles.label}>Informações Acadêmicas</Text>
        </View>
        <Input placeholder="Nome" value={name} onChangeText={setName} />
        <Input
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <Input
          placeholder="Curso Atual"
          value={course}
          onChangeText={setCourse}
        />
        <Input
          placeholder="Instituição Atual"
          value={institution}
          onChangeText={setInstitution}
        />
        <FormButton title="Salvar Alterações" onPress={() => ""} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    backgroundColor: "#880046",
    alignItems: "center",
    paddingVertical: 80,
    height: 260,
  },
  avatarContainer: {
    position: "relative",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: "100%",
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  cameraIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 4,
  },
  cameraText: {
    fontSize: 14,
  },
  headerText: {
    color: "#FFF",
    fontSize: 18,
    fontFamily: "OpenSansBold",
    marginTop: 25,
  },
  form: {
    marginTop: 20,
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontFamily: "OpenSansBold",
    marginRight: 30,
  },
  tabsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  logoutIcon: {
    position: 'absolute',
    top: 80,
    left: 20,
    zIndex: 1,
  },
});

export default UserProfile;
