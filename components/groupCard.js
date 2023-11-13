import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export default function GroupCard(props) {
  // NAVIGATION
  const handleJoin = async (groupId) => {
    // const groupId = await x._dispatchInstances.memoizedProps.testID;
    const userId = await AsyncStorage.getItem("userId");
    const info = await AsyncStorage.getItem("sessionId");
    axios
      .post(
        `http://${
          Platform.OS === "ios" ? "localhost" : "10.0.2.2"
        }:8000/recipes/group/add`,
        {
          user_id: userId,
          group_id: groupId,
        },
        {
          withCredentials: true,
          headers: { Coookie: info.split(";")[0].replace(/"/g, "") },
        } // Assuming you want to send the 'group' data in the request
      )
      .then(() => {
        props.updateUserGroups();
      });
  };
  return (
    <TouchableOpacity
      style={styles.mealContainer}
      onPress={() => {
        handleJoin(props.group.pk);
      }}
    >
      <View style={styles.mealNameContainer}>
        <Text style={styles.mealName}>{props.group.fields.name}</Text>
      </View>
      <View style={styles.mealImagePlaceholder}></View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  mealList: {
    width: "100%",
  },
  mealContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    overflow: "hidden",
  },
  mealNameContainer: {
    flex: 1,
    padding: 10,
  },
  mealName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  mealImagePlaceholder: {
    width: 100,
    height: 100,
    backgroundColor: "#ccc", // Gray color as a placeholder
  },
  Icontxt: {
    textAlign: "center",
  },
});
