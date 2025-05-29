import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Input from "../../atoms/input";

interface IProps {
  name: string;
  setName: (text: string) => void;
  email: string;
  setEmail: (text: string) => void;
};

const PersonalInfo: React.FC<IProps> = ({ name, setName, email, setEmail }) => {
  return (
    <View style={styles.form}>
      <Text style={styles.label}>Dados pessoais</Text>
      <Input placeholder="Nome" value={name} onChangeText={setName} />
      <Input
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  form: { padding: 20 },
  label: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
});

export default PersonalInfo;
