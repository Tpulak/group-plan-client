import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function UserGroupCard(props) {
  // NAVIGATION
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.mealContainer}
      id="hi"
      onPress={(x) => {
        navigation.navigate("DetailedGroupPage", { group: props.group });
      }}
    >
      <View style={styles.mealImagePlaceholder}></View>
      <View style={styles.mealNameContainer}>
        <Text style={styles.mealName}>{props.group.fields.name}</Text>
      </View>
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
    backgroundColor: "#E0E0E0",
    borderRadius: 10,
    overflow: "hidden",
  },
  mealNameContainer: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    backgroundColor: "",
  },
  mealName: {
    fontSize: 20,
    // fontWeight: "bold",
  },
  mealImagePlaceholder: {
    width: 80,
    height: 80,
    backgroundColor: "#88B361", // Gray color as a placeholder
  },
  Icontxt: {
    textAlign: "center",
    color: "white",
  },
});
