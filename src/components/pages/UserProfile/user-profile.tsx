import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import FormButton from "../../atoms/button";
import { removeUserLoged } from "../../../services/user.service";
import { ParamListBase, useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import PersonalInfo from "./personal-info";
import AcademicInfo from "./academic-info";

const UserProfile = () => {
  const [name, setName] = useState("Gustavo Anacleto");
  const [email, setEmail] = useState("gustavo@gmail.com");
  const [course, setCourse] = useState("Ciência da Computação");
  const [university, setUniversity] = useState("Unimetrocamp");
  const [period, setPeriod] = useState("5º semestre");
  const [tuitionFee, setTuitionFee] = useState("1200");

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const handleSubmmit = () => {
    
  } 

  const handleLogout = () => {
    removeUserLoged().then(() => navigation.navigate("Login"));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.logoutIcon} onPress={handleLogout}>
          <Feather name="log-out" size={25} color="#fff" />
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

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <PersonalInfo
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
        />
        <AcademicInfo
          course={course}
          setCourse={setCourse}
          university={university}
          setUniversity={setUniversity}
          period={period}
          setPeriod={setPeriod}
          tuitionFee={tuitionFee}
          setTuitionFee={setTuitionFee}
        />
        <View style={styles.buttonContainer}>
          <FormButton title="Salvar Alterações" onPress={handleSubmmit} />
        </View>
      </ScrollView>
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
    borderRadius: 50, 
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
  logoutIcon: {
    position: "absolute",
    top: 80,
    left: 20,
    zIndex: 1,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  buttonContainer: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
});

export default UserProfile;
