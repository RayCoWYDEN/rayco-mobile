import { StyleSheet, View } from 'react-native';
import FilterButton from '../atoms/filter-button';

interface IFiltersListProps {}

const FiltersList: React.FC<IFiltersListProps> = () => {
  return <View style={styles.container}>
    <FilterButton title="Nota" onPress={() => ""} selected={true}/>
    <FilterButton title="Distância" onPress={() => ""}/>
    <FilterButton title="Nome" onPress={() => ""}/>
  </View>;
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-start',
    gap: 20
  }
})

export default FiltersList;
