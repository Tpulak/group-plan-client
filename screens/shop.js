import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import TopNav from "../components/topNav";
import BottomNav from "../components/bottomNav";

export default function Shop() {
  const navigation = useNavigation();
  const [ingredients, setIngredients] = useState([
    { name: "Example Ingredient 1", checked: false },
    { name: "Example Ingredient 2", checked: false },
    { name: "Example Ingredient 3", checked: false },
  ]);

  const handleCheckboxToggle = (index) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index].checked = !updatedIngredients[index].checked;
    setIngredients(updatedIngredients);
  };

  return (
    <View style={styles.container}>
      {/* TOP */}
      <TopNav />

      {/* MIDDLE */}
      <View style={styles.middleContainer}>
        <TouchableOpacity style={styles.importButton}>
          <Text style={styles.importButtonText}>Import Meal</Text>
        </TouchableOpacity>
        <ScrollView style={styles.checklistContainer}>
          {ingredients.map((ingredient, index) => (
            <View style={styles.checklistItem} key={index}>
              <TouchableOpacity onPress={() => handleCheckboxToggle(index)}>
                <View
                  style={
                    ingredient.checked
                      ? styles.checkboxChecked
                      : styles.checkbox
                  }
                ></View>
              </TouchableOpacity>
              <Text style={styles.ingredientName}>{ingredient.name}</Text>
            </View>
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
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "green",
    padding: 25,
  },
  iconContainer: {
    flex: 1,
    alignItems: "center",
    width: 50,
    height: 50,
  },
  title: {
    flex: 2,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  // middleContainer: {
  //     flex: 3,
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     backgroundColor: 'white',
  // },
  recommendedMeals: {
    fontSize: 18,
    marginBottom: 10,
  },
  imageContainer: {
    width: 200,
    height: 200,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    alignItems: "center",
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "green",
    width: "100%",
    padding: 25,
  },

  middleContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
  checklistContainer: {
    width: "100%",
  },
  checklistItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "black",
    marginRight: 10,
  },
  checkboxChecked: {
    width: 20,
    height: 20,
    backgroundColor: "green",
    marginRight: 10,
  },
  ingredientName: {
    fontSize: 18,
    fontWeight: "bold",
  },

  importButton: {
    backgroundColor: "#88B361",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 30,
    marginTop: 30,
  },
  importButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  Icontxt: {
    textAlign: "center",
  },
});
