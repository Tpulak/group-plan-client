import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Home() {

    // NAVIGATION
    const navigation = useNavigation();

    // Group Button -> Group Page
    const handleGroupPress = () => {
        navigation.navigate('Group');
    };

    // Settings Button -> Settings Page
    const handleSettingPress = () => {
        navigation.navigate('Settings');
    };

    // Home Button -> Homepage
    const handleHomePress = () => {
        navigation.navigate('Home');
    };

    // Meal Button -> Meal Page
    const handleMealPress = () => {
        navigation.navigate('Meal');
    };

    // Shop Button -> Shop Page
    const handleShopPress = () => {
        navigation.navigate('Shop');
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
                        <Text style={styles.Icontxt}>GROUP</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.title}>Group Plan</Text>

                {/* SETTINGS ICON*/}
                <View style={styles.iconContainer}>
                    <TouchableOpacity style={styles.icon} onPress={handleSettingPress}>
                        <Image
                            source={require('../assets/icons/setting.png')}
                            style={{ width: 50, height: 50 }}
                        />
                        <Text style={styles.Icontxt}>SETTINGS</Text>
                    </TouchableOpacity>
                </View>

            </View>

            {/* MIDDLE */}
            <View style={styles.middleContainer}>
                <Text style={styles.recommendedMeals}>Recommended Meals</Text>
                <View style={styles.imageContainer}>
                    <Image
                        source={require('../assets/images/stockImage.jpg')}
                        style={{ width: 300, height: 200 }}
                    />

                </View>
            </View>

            {/* BOTTOM */}
            <View style={styles.bottomContainer}>

                {/* MEAL ICON */}
                <TouchableOpacity style={styles.icon} onPress={handleMealPress}>
                    <Image
                        source={require('../assets/icons/meal.png')}
                        style={{ width: 50, height: 50 }}
                    />
                    <Text style={styles.Icontxt}>MEALS</Text>
                </TouchableOpacity>

                {/* HOME ICON */}
                <TouchableOpacity style={styles.icon} onPress={handleHomePress}>
                    <Image
                        source={require('../assets/icons/home.png')}
                        style={{ width: 50, height: 50 }}
                    />
                    <Text style={styles.Icontxt}>HOME</Text>
                </TouchableOpacity>

                {/* SHOP ICON */}
                <TouchableOpacity style={styles.icon} onPress={handleShopPress}>
                    <Image
                        source={require('../assets/icons/shop.png')}
                        style={{ width: 50, height: 50 }}
                    />
                    <Text style={styles.Icontxt}>SHOP</Text>
                </TouchableOpacity>
            </View>
        </View>
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
    Icontxt: {
        textAlign: 'center',
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