import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const CollegeCard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <FontAwesome name='building' size={30} color={'#7c7c7c'}/>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.title}>Unimetrocamp</Text>
                <View style={styles.ratingContainer}>
                    <FontAwesome name="star" size={16} color="gold" />
                    <Text style={styles.rating}>4,5</Text>
                    <Text style={styles.separator}>•</Text>
                    <Text style={styles.type}>Particular</Text>
                    <Text style={styles.separator}>•</Text>
                    <Text style={styles.distance}>3 km</Text>
                </View>
                <Text style={styles.details}>Formas de Ingresso: Enem • Vestibular</Text>
            </View>
            <FontAwesome name="heart-o" size={24} color="black" style={styles.favoriteIcon} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 8,
        elevation: 2,
        marginBottom: 10,
    },
    logo: {
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 8,
        elevation: 5,
        width:70,
        height: 70,
        borderRadius: 50,
        backgroundColor: '#eeeeee',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    infoContainer: {
        flex: 1,
        marginLeft: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
    rating: {
        marginLeft: 4,
        fontSize: 14,
        color: '#E8AA47'
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
        color: '#666',
    },
    favoriteIcon: {
        marginLeft: 10,
    },
});

export default CollegeCard;