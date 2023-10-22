import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity, Image, Alert } from 'react-native';
import React, { useState } from 'react';
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

    //------------------FOR DISPLAYING PUBLIC/PRIVATE GROUPS -------------------------------------------------------------------------

    // Array that holds the groups
    const publicGroups = ['Public Group 1', 'Public Group 2', 'Public Group 3', 'Public Group 4'];
    const privateGroups = ['Pescetarian', 'Vegan', 'Vegetarian'];

    const [searchText, setSearchText] = useState('');

    /* User uses search bar for private groups */
    const handleTextChange = (text) => {
        setSearchText(text.toLowerCase());
    };

    //Initially display public groups until user uses search bar 
    const renderPublicGroups = () => {
        return publicGroups.map((group, index) => (
            <View key={index} style={styles.groupRow}>
                <TouchableOpacity style={styles.icon}>
                    <Image
                        source={require('../assets/icons/groupchat.png')}
                        style={{ width: 75, height: 75 }}
                    />
                </TouchableOpacity>
                <Text style={styles.groupName}>{group}</Text>

                <View style={styles.Join_button}>
                    <Button
                        title="Join"
                        color="white"
                        onPress={() => Alert.alert(`${group} joined`)}
                    />
                </View>
            </View>
        ));
    };

    /* Display the private groups once the user search*/
    const renderPrivateGroups = () => {
        const filteredGroups = privateGroups.filter(group => group.toLocaleLowerCase().includes(searchText));
        return filteredGroups.map((group, index) => (
            <View key={index} style={styles.groupRow}>

                <TouchableOpacity style={styles.icon}>
                    <Image
                        source={require('../assets/icons/groupchat.png')}
                        style={{ width: 75, height: 75 }}
                    />
                </TouchableOpacity>
                {/* Right side - Group Name */}
                <Text style={styles.groupName}>{group}</Text>
                <View style={styles.Join_button}>
                    <Button
                        title="Request"
                        color="white"
                        disabled
                        onPress={() => Alert.alert(`${group} Group Pending`)}

                    />
                </View>
            </View>
        ));
    };
    //------------------FOR DISPLAYING PUBLIC/PRIVATE GROUPS -------------------------------------------------------------------------

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
                    placeholder="Search for private groups..."
                    onChangeText={handleTextChange}
                    value={searchText}
                />

                <Button title="Create Group" color="green" onPress={() => { }} />

                <View>
                    <Text style={styles.Recgroup}> Recommend Groups</Text>

                    {/* if (searchText === '') {
                        renderPublicGroups();
                    } else {
                        renderPrivateGroups();
                    }; */}

                    {/* if search text is empty display public groups else private on user input  */}
                    {searchText === '' ? renderPublicGroups() : renderPrivateGroups()}


                </View>


                {/* <View style={styles.groupRow}>
                    <TouchableOpacity style={styles.icon}>
                        <Image
                            source={require('../assets/icons/groupchat.png')}
                            style={{ width: 75, height: 75 }}
                        />
                    </TouchableOpacity>

                    <Text style={styles.groupName}>Public Group 1</Text>

                    <View style={styles.Join_button}>
                        <Button
                            title="Join"
                            color="white"
                            onPress={() => Alert.alert('PG1 success')}
                        />
                    </View>
                </View>

                <View style={styles.groupRow}>
                    <TouchableOpacity style={styles.icon}>
                        <Image
                            source={require('../assets/icons/groupchat.png')}
                            style={{ width: 75, height: 75 }}
                        />
                    </TouchableOpacity>
                    <Text style={styles.groupName}>Public Group 2</Text>

                    <View style={styles.Join_button}>
                        <Button
                            title="Join"
                            color="white"
                            onPress={() => Alert.alert('PG2 Success')}
                        />
                    </View>
                </View>

                <View style={styles.groupRow}>
                    <TouchableOpacity style={styles.icon}>
                        <Image
                            source={require('../assets/icons/groupchat.png')}
                            style={{ width: 75, height: 75 }}
                        />
                    </TouchableOpacity>
                    <Text style={styles.groupName}>Public Group 3</Text>
                    <View style={styles.Join_button}>
                        <Button
                            title="Join"
                            color="white"
                            onPress={() => Alert.alert('PG3 Sucess')}
                        />
                    </View>
                </View>

                <View style={styles.groupRow}>
                    <TouchableOpacity style={styles.icon}>
                        <Image
                            source={require('../assets/icons/groupchat.png')}
                            style={{ width: 75, height: 75 }}
                        />
                    </TouchableOpacity>
                    <Text style={styles.groupName}>Public Group 4</Text>
                    <View style={styles.Join_button}>
                        <Button
                            title="Join"
                            color="white"
                            onPress={() => Alert.alert('PG4 Sucess')}
                        />
                    </View>
                </View> */}
            </View >

            {/* BOTTOM */}
            < View style={styles.bottomContainer} >

                {/* MEAL ICON */}
                < TouchableOpacity style={styles.icon} onPress={handleMealPress} >
                    <Image
                        source={require('../assets/icons/meal.png')}
                        style={{ width: 50, height: 50 }}
                    />
                </TouchableOpacity >

                {/* HOME ICON */}
                < TouchableOpacity style={styles.icon} onPress={handleHomePress} >
                    <Image
                        source={require('../assets/icons/home.png')}
                        style={{ width: 50, height: 50 }}
                    />
                </TouchableOpacity >

                {/* SHOP ICON */}
                < TouchableOpacity style={styles.icon} >
                    <Image
                        source={require('../assets/icons/shop.png')}
                        style={{ width: 50, height: 50 }}
                    />
                </TouchableOpacity >
            </View >
        </View >
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    topContainer: {
        backgroundColor: 'green',
        padding: 25,
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
        padding: 10,
        alignItems: 'center',
    },
    icon: {
        padding: 10,
    },

    Join_button: {
        margin: 30,
        padding: 5,
        borderRadius: 5,
        backgroundColor: 'green',
        marginLeft: 'auto',
    },

    Recgroup: {
        fontSize: 19,
        fontWeight: 'bold',
    },


});