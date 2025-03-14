import { StyleSheet, View } from "react-native"
import CollegeCard from "../../molecules/CollegeCard/college-card"

const Rank = () => {
    return <View style={styles.container}>
        <CollegeCard />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems : 'center'
    }
})
export default Rank