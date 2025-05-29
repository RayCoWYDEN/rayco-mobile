import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Input from "../../atoms/input";

interface IProps {
  course: string;
  setCourse: (text: string) => void;
  institution: string;
  setInstitution: (text: string) => void;
};

const AcademicInfo: React.FC<IProps> = ({ course, setCourse, institution, setInstitution }) => {
  return (
    <View style={styles.form}>
      <Text style={styles.label}>Informações acadêmicas</Text>
      <Input placeholder="Curso Atual" value={course} onChangeText={setCourse} />
      <Input placeholder="Instituição Atual" value={institution} onChangeText={setInstitution} />
    </View>
  );
};

const styles = StyleSheet.create({
  form: { padding: 20 },
  label: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
});

export default AcademicInfo;
