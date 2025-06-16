import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Input from "../../atoms/input";

interface IProps {
  course: string;
  setCourse: (text: string) => void;
  university: string;
  setUniversity: (text: string) => void;
  period: string;
  setPeriod:(text: string) => void;
  tuitionFee: string;
  setTuitionFee:(text: string) => void 
}

const AcademicInfo: React.FC<IProps> = ({
  course,
  setCourse,
  university,
  setUniversity,
  period,
  setPeriod,
  tuitionFee,
  setTuitionFee,
}) => {
  return (
    <View style={styles.form}>
      <Text style={styles.sectionLabel}>Informações acadêmicas</Text>

      <View>
        <Text style={styles.label}>Curso Atual</Text>
        <Input value={course} onChangeText={setCourse} />
      </View>

      <View>
        <Text style={styles.label}>Instituição Atual</Text>
        <Input value={university} onChangeText={setUniversity} />
      </View>

      <View>
        <Text style={styles.label}>Período</Text>
        <Input value={period} onChangeText={setPeriod} />
      </View>

      <View>
        <Text style={styles.label}>Mensalidade Atual</Text>
        <Input value={tuitionFee} onChangeText={setTuitionFee} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  form: { padding: 20 },
  sectionLabel: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  label: { fontSize: 14, marginBottom: 5, color: "#333" },
});

export default AcademicInfo;
