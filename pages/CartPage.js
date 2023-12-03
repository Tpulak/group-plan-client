import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TopNav from "../components/TopNav";
import { SafeAreaView } from "react-native";
import { StatusBar } from "react-native";
import { CartPageStyles } from "../styles";

export default function CartPage() {
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
    <SafeAreaView style={CartPageStyles.container}>
      <StatusBar barStyle="default" />
      <View style={CartPageStyles.container}>
        {/* TOP */}
        <TopNav />

        {/* MIDDLE */}
        <View style={CartPageStyles.middleContainer}>
          <TouchableOpacity style={CartPageStyles.importButton}>
            <Text style={CartPageStyles.importButtonText}>Import Meal</Text>
          </TouchableOpacity>
          <ScrollView style={CartPageStyles.checklistContainer}>
            {ingredients.map((ingredient, index) => (
              <View style={CartPageStyles.checklistItem} key={index}>
                <TouchableOpacity onPress={() => handleCheckboxToggle(index)}>
                  <View
                    style={
                      ingredient.checked
                        ? CartPageStyles.checkboxChecked
                        : CartPageStyles.checkbox
                    }
                  ></View>
                </TouchableOpacity>
                <Text style={CartPageStyles.ingredientName}>
                  {ingredient.name}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}
