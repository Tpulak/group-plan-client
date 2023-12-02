/* eslint-disable react/prop-types */
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { RecipeCardStyles } from "../../styles";

export default function HomeRecipeCard(props) {
  const { width } = useWindowDimensions();
  return (
    <TouchableOpacity
      style={{ ...RecipeCardStyles.recipeContainer, width: width * 0.9 }}
    >
      <Image
        source={{ uri: props.image }}
        style={{ height: 175, borderRadius: 10 }}
      />
      <View style={RecipeCardStyles.recipeBottomBox}></View>
      <Text style={RecipeCardStyles.recipeName}>{props.name}</Text>
    </TouchableOpacity>
  );
}
