import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import TopNav from "../components/topNav";
import BottomNav from "../components/bottomNav";

export default function Meal() {
  // NAVIGATION
  const navigation = useNavigation();

  // const handleAddMeal = () => {
  //     // Add logic for adding a meal here
  // };

  return (
    <View style={styles.container}>
      {/* TOP */}
      <TopNav />

      {/* MIDDLE */}
      <View style={styles.middleContainer}>
        {/* onPress={handleAddMeal} */}
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Add Meal</Text>
        </TouchableOpacity>

        <ScrollView style={styles.mealList}>
          {[1, 2, 3].map((meal) => (
            <TouchableOpacity style={styles.mealContainer} key={meal}>
              <View style={styles.mealNameContainer}>
                <Text style={styles.mealName}>Meal {meal}</Text>
              </View>
              <View style={styles.mealImagePlaceholder}></View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* BOTTOM */}
      <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  middleContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  imageContainer: {
    width: 200,
    height: 200,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    alignItems: "center",
  },

  middleContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
  addButton: {
    backgroundColor: "#88B361", // You can change the color as needed
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 30,
  },
  addButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
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
