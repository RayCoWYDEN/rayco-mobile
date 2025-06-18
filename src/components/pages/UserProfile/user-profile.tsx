import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import FormButton from "../../atoms/button";
import { getUserLoged, removeUserLoged } from "../../../services/user.service";
import { ParamListBase, useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import PersonalInfo from "./personal-info";
import AcademicInfo from "./academic-info";
import { UserInfoDTO } from "../../../models/user-data.model";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { CourseDTO } from "../../../models/course.model";
import { UniversityDTO, UniversitySaveDTO } from "../../../models/universities.model";

const UserProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [courseId, setCourse] = useState<number | null>(null);
  const [universityId, setUniversity] = useState<number | null>(null);
  const [period, setPeriod] = useState<number | null>(null);
  const [tuitionFee, setTuitionFee] = useState<number | null>(0);

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  useEffect(() => {
    getUserLoged().then((userLogged) => {
      setName(userLogged!.name);
      setEmail(userLogged!.email);
    });
  }, []);

  const handleSubmmit = () => {
    const course: CourseDTO = { id : courseId!}
    const university: UniversitySaveDTO = { id : universityId!}
    const userInfoDTO: UserInfoDTO = {
      name,
      email,
      course,
      university,
      period,
      tuitionFee,
    };

    
  };

  const handleLogout = () => {
    removeUserLoged().then(() => navigation.navigate("Login"));
  };

  const isValidForm = () => {
    console.log(
      name != null &&
        email != null &&
        courseId != null &&
        universityId != null &&
        period != null &&
        tuitionFee != null 
    );
    return (
      name != null &&
      email != null &&
      courseId != null &&
      universityId != null &&
      period != null &&
      tuitionFee != null
    );
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
      <KeyboardAwareScrollView
        enableOnAndroid
        extraScrollHeight={20}
        keyboardShouldPersistTaps="handled"
        nestedScrollEnabled
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <PersonalInfo
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
        />

        <AcademicInfo
          courseId={courseId}
          setCourse={setCourse}
          universityId={universityId}
          setUniversity={setUniversity}
          period={period}
          setPeriod={setPeriod}
          tuitionFee={tuitionFee}
          setTuitionFee={setTuitionFee}
        />

        <View style={styles.buttonContainer}>
          <FormButton
            title="Salvar Alterações"
            disabled={!isValidForm()}
            onPress={handleSubmmit}
          />
        </View>
      </KeyboardAwareScrollView>
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
