import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Input from "../../atoms/input";

interface IProps {
  name: string;
  setName: (text: string) => void;
  email: string;
  setEmail: (text: string) => void;
}

const PersonalInfo: React.FC<IProps> = ({ name, setName, email, setEmail }) => {
  return (
    <View style={styles.form}>
      <Text style={styles.sectionLabel}>Dados pessoais</Text>

      <View>
        <Text style={styles.label}>Nome</Text>
        <Input value={name} onChangeText={setName} />
      </View>

      <View>
        <Text style={styles.label}>Email</Text>
        <Input value={email} onChangeText={setEmail} keyboardType="email-address" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  form: { padding: 20 },
  sectionLabel: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  label: { fontSize: 14, marginBottom: 5, color: "#333" },
});

export default PersonalInfo;
