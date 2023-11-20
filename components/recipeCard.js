import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";

export default function RecipeCard(props) {
  return (
    <TouchableOpacity
      style={styles.mealContainer}
      onPress={() => {
        console.log("open meal modal");
      }}
    >
      <View style={styles.mealNameContainer}>
        <Text style={styles.mealName}>{props.recipe.fields.name}</Text>
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
