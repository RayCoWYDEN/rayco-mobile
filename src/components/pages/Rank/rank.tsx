import { StyleSheet, View } from "react-native"
import CollegeCard from "../../molecules/CollegeCard/college-card"
import { paddingTop } from "../../../utils/utils-aligment"
import FiltersList from "../../molecules/filters-list"

const Rank = () => {
    return <View style={styles.container}>
        <FiltersList />
        <CollegeCard />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems : 'center',
        justifyContent: 'space-between',
        paddingTop,

    }
})
export default Rank