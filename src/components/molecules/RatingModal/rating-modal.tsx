import React, { useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { UniversityDTO } from "../../../models/universities.model";
import { PINK_100, PINK_300 } from "../../../utils/colors";

type RatingModalProps = {
  visible: boolean;
  university: UniversityDTO | null;
  onClose: () => void;
  onSubmit: (rating: number) => void;
};

const STARTS_AMOUNT = [1, 2, 3, 4, 5]

const RatingModal = ({
  visible,
  university,
  onClose,
  onSubmit,
}: RatingModalProps) => {
  const [rating, setRating] = useState(0);

  const handleRating = (value: number) => {
    setRating(value);
  };

  const handleConfirm = () => {
    onSubmit(rating);
    setRating(0);
    onClose();
  };

  return (
    <Modal transparent={true} visible={visible} animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>
            Avaliar {university?.name || "universidade"}
          </Text>

          <View style={styles.starsContainer}>
            {STARTS_AMOUNT.map((index) => (
              <TouchableOpacity key={index} style={{marginHorizontal: 5}} onPress={() => handleRating(index)}>
                <FontAwesome
                    name={index <= rating ? 'star' : 'star-o'}
                    size={32}
                    color="#FFD700"
                />
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleConfirm}>
              <Text style={styles.buttonText}>Confirmar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.cancelButton]}
              onPress={onClose}
            >
              <Text style={[styles.buttonText, styles.cancelButtonText]}>
                Cancelar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default RatingModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "#00000099",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "85%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 24,
    alignItems: "center",
    elevation: 5,
  },
  title: {
    fontSize: 18,
    marginBottom: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  starsContainer: {
    flexDirection: "row",
    marginVertical: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 24,
  },
  button: {
    backgroundColor: PINK_300,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 5,
    borderRadius: 8,
  },
  cancelButton: {
    backgroundColor: PINK_100,
  },
  buttonText: {
    color: PINK_100,
    fontWeight: "bold",
  },
  cancelButtonText: {
    color: PINK_300,
    fontWeight: "bold",
  },
});
