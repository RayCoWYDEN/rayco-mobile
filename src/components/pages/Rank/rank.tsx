import { StyleSheet, Text, View } from "react-native";
import { paddingTop } from "../../../utils/utils-aligment";
import FiltersList from "../../molecules/FilterList/filters-list";
import { useEffect, useState } from "react";
import { getUniversities } from "../../../services/universities.service";
import { PageInfo } from "../../../models/page.model";
import { UniversityDTO } from "../../../models/universities.model";
import { ScrollView } from "react-native-gesture-handler";
import { Sort } from "../../../models/sort.model";
import UniversityCard from "../../molecules/CollegeCard/college-card";
import RatingModal from "../../molecules/RatingModal/rating-modal";

const intialSorts: Sort[] = [
  {
    field: "averageRank",
    direction: "desc",
  },
];

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

const Rank = () => {
  const [universities, setUniversities] = useState<PageInfo<UniversityDTO>>();
  const [selectedUniversity, setSelectedUniversity] = useState<UniversityDTO | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    listUniversities(intialSorts);
  }, []);

  const reloadUniversities = () =>{
    listUniversities(intialSorts)
  }

  const listUniversities = (sorts: Sort[]) => {
    getUniversities(sorts)
      .then(({ data }) => setUniversities(data))
      .catch((e) => {
        console.log("Error:", e.response);
      });
  };
  
  const openModal = (university: UniversityDTO) => {
    setSelectedUniversity(university);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedUniversity(null);
  };

  const handleRatingSubmit = (rating: number) => {
    console.log(`Universidade ${selectedUniversity?.name} avaliada com nota ${rating}`);
  };

  return (
    <View style={styles.container}>
      <FiltersList listUniversities={listUniversities} initialButtonFiltersState={initialButtonFiltersState}/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          {universities?.content.map((university) => (
            <UniversityCard 
              key={university.id} 
              university={university}  
              onPress={() => openModal(university)} 
              reloadUniversities={reloadUniversities} 
            />
          ))}
        </View>
      </ScrollView>
      <RatingModal
        visible={modalVisible}
        university={selectedUniversity}
        onClose={closeModal}
        onSubmit={handleRatingSubmit}
      />
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
export default Rank;
