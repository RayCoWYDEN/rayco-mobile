import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { UniversityDTO } from "../../../models/universities.model";
import { favoriteUniversity } from "../../../services/universities.service";

interface IProps {
  university: UniversityDTO;
  reloadUniversities: () => void
}

const UniversityCard = (props: IProps) => {
  const { university, reloadUniversities} = props;


  const handleFavorite = (id: number ) => {
    favoriteUniversity(university.id)
    .then(() => reloadUniversities())
  }

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <FontAwesome name="building" size={30} color={"#7c7c7c"} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{university.name}</Text>
        <View style={styles.ratingContainer}>
          <FontAwesome name="star" size={16} color="gold" />
          <Text style={styles.rating}>{university.averageRank}</Text>
          <Text style={styles.separator}>•</Text>
          <Text style={styles.type}>
            {university.privateInstitution ? "Particular" : "Pública"}
          </Text>
          {university.distance > 0 && (
            <>
              <Text style={styles.separator}>•</Text>
              <Text style={styles.distance}>{university.distance}</Text>
            </>
          )}
        </View>
        <Text style={styles.details}>
          Formas de Ingresso:{" "}
          {university.entryTypes.map(
            (entryType, i) =>
              `${entryType.name} ${
                i != university.entryTypes.length - 1 && "•"
              } `
          )}
        </Text>
      </View>
      <FontAwesome
        name={university.favorite ? "heart" : "heart-o"}
        size={20}
        color={university.favorite ? "red" : "black"}
        style={styles.favoriteIcon}
        onPress={() => handleFavorite(university.id)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 3,
    marginBottom: 5,
    width: 375,
  },
  logo: {
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 8,
    elevation: 5,
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: "#eeeeee",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  rating: {
    marginLeft: 4,
    fontSize: 14,
    color: "#E8AA47",
  },
  separator: {
    marginHorizontal: 4,
    fontSize: 14,
  },
  type: {
    fontSize: 14,
  },
  distance: {
    fontSize: 14,
  },
  details: {
    marginTop: 4,
    fontSize: 12,
    color: "#666",
  },
  favoriteIcon: {
    marginLeft: 10,
  },
});

export default UniversityCard;
