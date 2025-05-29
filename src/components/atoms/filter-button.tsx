import { Pressable, StyleSheet, Text, View } from 'react-native';
import { GRAY_200, PINK_100, PINK_300 } from '../../utils/colors';
import { MaterialIcons } from '@expo/vector-icons';

interface IProps {
    filterId: string;
    title: string;
    handleStateChange: (filterId: string) => void;
    selected?: boolean;
    direction: string
}

const FilterButton: React.FC<IProps> = (props) => {
  const { filterId, title, handleStateChange, selected = false , direction} = props;
  
  return <View id={filterId} style={{...styles.container, backgroundColor: selected ? PINK_100 : GRAY_200}}>
        <Pressable onPress={() => handleStateChange(filterId)}>
          <Text style={styles.title}>{title}</Text>
        </Pressable>
        {selected && (
        direction === 'asc' 
          ? <MaterialIcons style={{marginTop: 4}} name="keyboard-arrow-up" size={20} color={PINK_300} />
          : <MaterialIcons style={{marginTop: 4}} name="keyboard-arrow-down" size={20} color={PINK_300} />
      )}
  </View>;
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: 110,
        height: 35,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
    },
    title: {
        fontSize: 16,
        color: PINK_300,
        textAlign: 'center',
        lineHeight: 35,
    }    
})


export default FilterButton;
