import { StyleSheet, View } from "react-native";
import FilterButton from "../atoms/filter-button";
import { Sort } from "../../models/sort.model";
import { useState } from "react";

interface IFiltersListProps {
  listUniversities: (sorts: Sort[]) => void;
  initialButtonFiltersState: any[];
}

const FiltersList: React.FC<IFiltersListProps> = (props) => {
  const { initialButtonFiltersState, listUniversities } = props;

  const [buttonFiltersState, setButtonFiltersState] = useState(
    initialButtonFiltersState
  );

  const handleStateChange = (filterId: string) => {
    const updatedState = buttonFiltersState.map((filter) => {
      if (filterId == filter.filterId) {
        if (filter.selected) {
          const direction = filter.direction === "asc" ? "desc" : "asc";
          return { ...filter, direction };
        } else {
          return { ...filter, selected: true };
        }
      }
      return filter;
    });
    setButtonFiltersState(updatedState);
    
    const sortFilters = mountFilters();
    listUniversities(sortFilters);
  };

  const mountFilters = () => {
    return buttonFiltersState
      .filter((filter) => filter.selected)
      .map((filter) => {
        return { field: filter.filterId, direction: filter.direction } as Sort;
      });
  };

  return (
    <View style={styles.container}>
      {buttonFiltersState.map((button) => (
        <FilterButton
          key={button.filterId}
          filterId={button.filterId}
          title={button.title}
          selected={button.selected}
          direction={button.direction}
          handleStateChange={handleStateChange}
        />
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 20,
    marginBottom: 30,
  },
});

export default FiltersList;
