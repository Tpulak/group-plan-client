import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  View,
  TouchableOpacity,
  ScrollView,
  Text,
} from "react-native";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { RecipesPageStyles } from "../styles";
import TopNav from "../components/TopNav";
import BottomNav from "../components/BottomNav";
import RecipeDetailsModal from "../components/Modals/RecipeDetailsModal";

export default function RecipesPage(props) {
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
          Platform.OS === "ios" ? "192.168.1.75" : "10.0.2.2"
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
    <SafeAreaView style={RecipesPageStyles.container}>
      <StatusBar barStyle="default" />
      <View style={RecipesPageStyles.container}>
        <TopNav />
        <View style={RecipesPageStyles.recipesMiddleContainer}>
          <TouchableOpacity
            style={RecipesPageStyles.addRecipebtn}
            onPress={() => {
              navigation.navigate("Create Recipe Page");
            }}
          >
            <Text style={RecipesPageStyles.addRecipeBtnText}>Add Recipe</Text>
          </TouchableOpacity>
          <ScrollView style={RecipesPageStyles.recipesList}>
            {recipes.map((recipe, index) => (
              <TouchableOpacity
                style={RecipesPageStyles.mealContainer}
                key={recipe.pk}
                onPress={() => {
                  openMealModal(index);
                }}
              >
                <View style={RecipesPageStyles.mealNameContainer}>
                  <Text style={RecipesPageStyles.mealName}>
                    {recipe.fields.name}
                  </Text>
                </View>
                <View style={RecipesPageStyles.mealImagePlaceholder}></View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <BottomNav />
        <RecipeDetailsModal
          show={modalVisible}
          close={setModalVisible}
          meal={recipes[focusedMeal]}
        />
      </View>
    </SafeAreaView>
  );
}
