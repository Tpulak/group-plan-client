import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Group() {

    const navigation = useNavigation();

    //NAV: Home Button -> Homepage
    const handleHomePress = () => {
      navigation.navigate('Home'); 
    };

    const handleMealPress = () => {
        navigation.navigate('Meal'); 
      };


    return (
        <View style={styles.container}>
            {/* TOP */}
            <View style={styles.topContainer}>
                <Text style={styles.title}>Group Plan</Text>
            </View>

            {/* MIDDLE */}
            <View style={styles.middleContainer}>

                <TextInput
                    style={styles.searchInput}
                    placeholder="Search for existing groups..."
                    onChangeText={(text) => {}}
                />

                <Button title="Create Group" color="green" onPress={() => {}} />
                <View style={styles.groupRow}>
                    {/* Left side - Group Icon */}
                    {/* Replace 'GroupIcon' with your actual icon component */}
                    {/* <GroupIcon /> */}
                    <TouchableOpacity style={styles.icon}>
                        <Image
                            source={require('../assets/icons/groupchat.png')}
                            style={{ width: 75, height: 75 }}
                        />
                    </TouchableOpacity>                    
                    {/* Right side - Group Name */}
                    <Text style={styles.groupName}>Group 1</Text>
                </View>

                <View style={styles.groupRow}>
                    {/* Left side - Group Icon */}
                    {/* Replace 'GroupIcon' with your actual icon component */}
                    {/* <GroupIcon /> */}
                    <TouchableOpacity style={styles.icon}>
                        <Image
                            source={require('../assets/icons/groupchat.png')}
                            style={{ width: 75, height: 75 }}
                        />
                    </TouchableOpacity>                    
                    {/* Right side - Group Name */}
                    <Text style={styles.groupName}>Group 2</Text>
                </View>

                <View style={styles.groupRow}>
                    {/* Left side - Group Icon */}
                    {/* Replace 'GroupIcon' with your actual icon component */}
                    {/* <GroupIcon /> */}
                    <TouchableOpacity style={styles.icon}>
                        <Image
                            source={require('../assets/icons/groupchat.png')}
                            style={{ width: 75, height: 75 }}
                        />
                    </TouchableOpacity>                    
                    {/* Right side - Group Name */}
                    <Text style={styles.groupName}>Group 3</Text>
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
                </TouchableOpacity>
                
                {/* HOME ICON */}
                <TouchableOpacity style={styles.icon} onPress={handleHomePress}>
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
        </View>
    );
}
   

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    topContainer: {
        backgroundColor: 'green',
        padding: 40,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        color: 'white',
    },
    middleContainer: {
        backgroundColor: 'white',
        padding: 20,
    },
    searchInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 10,
    },
    groupRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    groupName: {
        marginLeft: 10,
        fontSize: 18,
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: 'green',
        padding: 20,
    },
    icon: {
        padding: 10,
    },

    //dont think this is necessary
    // greenBottom: {
    //     position: 'absolute',
    //     bottom: 0,
    //     width: '100%',
    //     height: 100,
    //     backgroundColor: 'green',
    // },
});