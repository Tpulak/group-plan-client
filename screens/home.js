import { Button, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import React from 'react';


//not loading --set it up as an image
// //icons 
// import GroupChatIcon from '../assets/icons/group.png';
// import SettingsIcon from '../assets/icons/setting.png';
// import MealIcon from '../assets/icons/meal.png';
// import HomeIcon from '../assets/icons/home.png';
// import ShopIcon from '../assets/icons/shop.png';

// //placeholder
// import StockImage from '../assets/images/stockImage.jpg';




export default function Home() {
    return (
        <View style={styles.container}>
            {/* TOP */}
            <View style={styles.topContainer}>
                <View style={styles.iconContainer}>
                    {/* Icon for group chats */}
                    {/* Uncomment 'GroupChatIcon' */}
                    <Image
                        source={require('../assets/icons/group.png')}
                        style={{ width: 50, height: 50 }}
                    />
                    {/* <GroupChatIcon /> */}
                </View>
                <Text style={styles.title}>Group Plan</Text>
                <View style={styles.iconContainer}>
                    {/* Icon for settings */}
                    {/* Uncomment 'SettingsIcon' */}
                    <Image
                        source={require('../assets/icons/setting.png')}
                        style={{ width: 50, height: 50 }}
                    />
                    {/* <SettingsIcon /> */}
                </View>
            </View>

            {/* MIDDLE */}
            <View style={styles.middleContainer}>
                <Text style={styles.recommendedMeals}>Recommended Meals</Text>
                <View style={styles.imageContainer}>
                    {/* Placeholder for the image */}
                    {/* Replace 'YourImageComponent' with your actual image component */}
                    {/* <StockImage /> */}
                </View>
            </View>

            {/* BOTTOM */}
            <View style={styles.bottomContainer}>
                {/* Icons */}
                {/* Uncomment 'MealIcon', 'HomeIcon', 'ShopIcon' */}
                {/* <MealIcon />
                
                
                <HomeIcon />
                <ShopIcon /> */}
                    <Image
                        source={require('../assets/icons/meal.png')}
                        style={{ width: 50, height: 50 }}
                    />
                     <Image
                        source={require('../assets/icons/home.png')}
                        style={{ width: 50, height: 50 }}
                    />    
                    <Image
                        source={require('../assets/icons/shop.png')}
                        style={{ width: 50, height: 50 }}
                    />                                                   
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
        padding: 40,
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
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'green',
        padding: 50,
    },

});