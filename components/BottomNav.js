import { View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import MuiIcon from "react-native-vector-icons/MaterialIcons";
import MuiCIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { NavStyles } from "../styles";

export default function BottomNav() {
  const navigation = useNavigation();
  // Group Button -> Group Page
  const handleHomePress = () => {
    navigation.navigate("HomePage");
  };

  // Meal Button -> Meal Page
  const handleRecipesPress = () => {
    navigation.navigate("RecipesPage");
  };

  // Shop Button -> Shop Page
  const handleCartPress = () => {
    navigation.navigate("CartPage");
  };
  return (
    <View style={NavStyles.bottomNavContainer}>
      {/* MEAL ICON */}
      <Pressable onPress={handleRecipesPress}>
        <MuiCIcon name="food-variant" size={40} color="#fff" />
      </Pressable>

      {/* HOME ICON */}
      <Pressable onPress={handleHomePress}>
        <MuiIcon name="food-bank" size={40} color="#fff" />
      </Pressable>

      {/* SHOP ICON */}
      <Pressable onPress={handleCartPress}>
        <MuiCIcon name="clipboard-list" size={40} color="#fff" />
      </Pressable>
    </View>
  );
}
