import { StyleSheet, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import MuiIcon from "react-native-vector-icons/MaterialIcons";
import MuiCIcon from "react-native-vector-icons/MaterialCommunityIcons";

export default function BottomNav() {
  const navigation = useNavigation();
  // Group Button -> Group Page
  const handleHomePress = () => {
    navigation.navigate("Home");
  };

  // Meal Button -> Meal Page
  const handleMealPress = () => {
    navigation.navigate("Meals");
  };

  // Shop Button -> Shop Page
  const handleShopPress = () => {
    navigation.navigate("Shop");
  };
  return (
    <View style={styles.bottomContainer}>
      {/* MEAL ICON */}
      <Pressable onPress={handleMealPress}>
        <MuiCIcon name="food-variant" size={40} color="#fff" />
      </Pressable>

      {/* HOME ICON */}
      <Pressable onPress={handleHomePress}>
        <MuiIcon name="food-bank" size={40} color="#fff" />
      </Pressable>

      {/* SHOP ICON */}
      <Pressable onPress={handleShopPress}>
        <MuiCIcon name="clipboard-list" size={40} color="#fff" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#FFBA00",
    width: "100%",
    padding: 10,
  },
});
