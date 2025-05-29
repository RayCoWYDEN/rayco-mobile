import { StyleSheet, View } from "react-native";
import { paddingTop } from "../../../utils/utils-aligment";
import FiltersList from "../../molecules/filters-list";
import { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import UniversityCard from "../../molecules/CollegeCard/college-card";
import { UniversityDTO } from "../../../models/universities.model";
import { listFavoritesUniversities } from "../../../services/universities.service";

const initialButtonFiltersState = [
  { filterId: "averageRank", title: "Nota", direction: "desc", selected: true },
  {
    filterId: "distance",
    title: "Distância",
    direction: "desc",
    selected: false,
  },
  { filterId: "name", title: "Nome", direction: "asc", selected: false },
];

const FavoritesUniversities = () => {
  const [universities, setUniversities] = useState<UniversityDTO[]>([]);

  useEffect(() => {
    listUniversities();
  }, []);

  const listUniversities = () => {
    listFavoritesUniversities()
      .then(({ data }) => setUniversities(data))
      .catch((e) => {
        console.log("Error:", e.response);
      });
  };


  return (
    <View style={styles.container}>
      <FiltersList listUniversities={listUniversities} initialButtonFiltersState={initialButtonFiltersState}/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          {universities.map((university) => (
            <UniversityCard key={university.id} university={university}  reloadUniversities={listUniversities} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop,
  },
});
export default FavoritesUniversities;
