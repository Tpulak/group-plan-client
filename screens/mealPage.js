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
import React, { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import TopNav from "../components/topNav";
import BottomNav from "../components/bottomNav";
import { SafeAreaView } from "react-native";
import { StatusBar } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import MealDetailsModal from "../components/mealDetailsModal";
import RecipeCard from "../components/recipeCard";

export default function MealPage(props) {
  // NAVIGATION
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [recipes, setRecipes] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [focusedMeal, setFocusedMeal] = useState(0);

  const handleCreateMeal = () => {
    navigation.navigate("Create Meal Page");
  };

  const getUserRecipes = async () => {
    const info = await AsyncStorage.getItem("sessionId");
    axios
      .get(
        `http://${
          Platform.OS === "ios" ? "localhost" : "10.0.2.2"
        }:8000/recipes/getUserRecipes/`,
        {
          withCredentials: true,
          headers: { Coookie: info.split(";")[0].replace(/"/g, "") },
        }
      )
      .then((response) => {
        setRecipes(response.data);
      })
      .catch((error) => console.log(error));
  };

  const openMealModal = (index) => {
    //prints the meal that should be shown in the modal
    console.log(recipes[index]);
    setFocusedMeal(index);
    setModalVisible(true);
  };

  useEffect(() => {
    if (isFocused) {
      getUserRecipes();
    }
  }, [props, isFocused]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="default" />
      <View style={styles.container}>
        {/* TOP */}
        <TopNav />

        {/* MIDDLE */}
        <View style={styles.middleContainer}>
          {/* onPress={handleAddMeal} */}
          <TouchableOpacity style={styles.addButton} onPress={handleCreateMeal}>
            <Text style={styles.addButtonText}>Add Recipe</Text>
          </TouchableOpacity>

          <ScrollView style={styles.mealList}>
            {recipes.map((recipe, index) => (
              <TouchableOpacity
                style={styles.mealContainer}
                key={recipe.pk}
                onPress={() => {
                  openMealModal(index);
                }}
              >
                <View style={styles.mealNameContainer}>
                  <Text style={styles.mealName}>{recipe.fields.name}</Text>
                </View>
                <View style={styles.mealImagePlaceholder}></View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* BOTTOM */}
        <BottomNav />
        <MealDetailsModal
          show={modalVisible}
          close={setModalVisible}
          meal={recipes[focusedMeal]}
        />
      </View>
    </SafeAreaView>
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
