import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';



export default function Meal() {
    //NAV
    const navigation = useNavigation();

    //NAV: Group Button -> Group Page
    const handleGroupPress = () => {
        navigation.navigate('Home');
    };

    const handleMealPress = () => {
        navigation.navigate('Meal');
    };

    return (

        <View style={styles.container}>
            {/* TOP */}
            <View style={styles.topContainer}>

                {/* GROUP ICON*/}
                <View style={styles.iconContainer}>
                    <TouchableOpacity style={styles.icon} onPress={handleGroupPress}>
                        <Image
                            source={require('../assets/icons/group.png')}
                            style={{ width: 50, height: 50 }}
                        />
                    </TouchableOpacity>
                </View>

                <Text style={styles.title}>Meal</Text>

                {/* SETTINGS ICON*/}
                <View style={styles.iconContainer}>
                    <TouchableOpacity style={styles.icon}>
                        <Image
                            source={require('../assets/icons/setting.png')}
                            style={{ width: 50, height: 50 }}
                        />
                    </TouchableOpacity>
                </View>

            </View>

            {/* MIDDLE */}
            <View style={styles.middleContainer}>
                <Text>MEAL PAGE </Text>
            </View>


            {/* BOTTOM */}
            <View style={styles.bottomContainer}>

                {/* MEAL ICON */}
                <TouchableOpacity style={styles.icon} onPress={handleMealPress}>
                    <Image
                        source={require('../assets/icons/meal.png')}
                        style={{ width: 50, height: 50 }}
                    />
                </TouchableOpacity>

                {/* HOME ICON */}
                <TouchableOpacity style={styles.icon}>
                    <Image
                        source={require('../assets/icons/home.png')}
                        style={{ width: 50, height: 50 }}
                    />
                </TouchableOpacity>

                {/* SHOP ICON */}
                <TouchableOpacity style={styles.icon}>
                    <Image
                        source={require('../assets/icons/shop.png')}
                        style={{ width: 50, height: 50 }}
                    />
                </TouchableOpacity>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'green',
        padding: 25,
    },
    iconContainer: {
        flex: 1,
        alignItems: 'center',
        width: 50,
        height: 50,
    },
    title: {
        flex: 2,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    middleContainer: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    recommendedMeals: {
        fontSize: 18,
        marginBottom: 10,
    },
    imageContainer: {
        width: 200,
        height: 200,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        alignItems: 'center',
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'green',
        width: '100%',
        padding: 25,
    },

});