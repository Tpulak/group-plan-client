import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';



export default function Meal() {

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

    // Logout Button -> Login Page
    const handleLogoutPress = () => {
        navigation.navigate('Login');
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
                <View style={styles.iconContainer} onPress={handleSettingPress}>
                    <TouchableOpacity style={styles.icon}>
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

                <View style={styles.section}>
                    {/* <Text style={styles.sectionTitle}>Change Username</Text> */}
                    <Button
                        title="Change Username"
                        color="green"
                        onPress={() => {
                            // Add logic to handle username change here
                        }}
                    />
                </View>
                <View style={styles.section}>
                    {/* <Text style={styles.sectionTitle}>Change Password</Text> */}
                    <Button
                        title="Change Password"
                        color="green"
                        onPress={() => {
                            // Add logic to handle password change here
                        }}
                    />
                </View>
                <TouchableOpacity style={styles.logoutButton} onPress={handleLogoutPress}>
                    <Text style={styles.logoutText}>Logout</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.deleteButton}>
                    <Text style={styles.deleteText}>Delete Account</Text>
                </TouchableOpacity>
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
                <TouchableOpacity style={styles.icon} onPress={handleHomePress} >
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
    // middleContainer: {
    //     flex: 3,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: 'white',
    // },
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


    middleContainer: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 18,
        marginBottom: 10,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        width: 200,
    },
    deleteButton: {
        backgroundColor: 'red',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    deleteText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    logoutButton: {
        backgroundColor: 'green', // You can change the color as needed
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginRight: 10, // Add some margin to separate it from other elements
        marginBottom: 40,
        marginTop: 100,
    },
    logoutText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    Icontxt: {
        textAlign: 'center',
    },








});