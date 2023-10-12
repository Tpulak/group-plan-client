import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import React from 'react';

export default function Group() {
    return (
        <View style={styles.container}>
            {/* TOP */}
            <View style={styles.topContainer}>
                <Text style={styles.title}>Group Plan</Text>
            </View>

            {/* MIDDLE */}
            <View style={styles.middleContainer}>
                <Button title="Create Group" onPress={() => {}} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search for existing groups"
                    onChangeText={(text) => {}}
                />
                <View style={styles.groupRow}>
                    {/* Left side - Group Icon */}
                    {/* Replace 'GroupIcon' with your actual icon component */}
                    {/* <GroupIcon /> */}
                    {/* Right side - Group Name */}
                    <Text style={styles.groupName}>Group Name</Text>
                </View>
            </View>

            {/* BOTTOM */}
            <View style={styles.bottomContainer}>
                {/* Icons */}
                {/* Replace 'Icon1', 'Icon2', 'Icon3' with your actual icon components */}
                <TouchableOpacity style={styles.icon}>
                    {/* <Icon1 /> */}
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon}>
                    {/* <Icon2 /> */}
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon}>
                    {/* <Icon3 /> */}
                </TouchableOpacity>
            </View>
            <View style={styles.greenBottom}></View>
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
        padding: 50,
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
        backgroundColor: 'transparent', // To allow icons to overlay on green
    },
    icon: {
        padding: 10,
    },
    greenBottom: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 100,
        backgroundColor: 'green',
    },
});