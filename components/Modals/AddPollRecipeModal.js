/* eslint-disable react/prop-types */
import React, { useState } from "react";
import {
  Modal,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  Platform,
} from "react-native";
import { AddPollRecipeModalStyles } from "../../styles";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AddPollRecipeModal(props) {
  const [recipeNames, setRecipeNames] = useState([
    "Recipe 1",
    "Recipe Uno",
    "Recipe One",
  ]);
  const [selected, setSelected] = useState(null);
  const addRecipe = async () => {
    props.modal(false);
    const info = await AsyncStorage.getItem("sessionId");
    axios
      .put(
        `http://${
          Platform.OS === "ios" ? "localhost" : "10.0.2.2"
        }:8000/recipes/addRecipe/${props.groupID}`,
        // eslint-disable-next-line no-undef
        (data = {}),
        {
          withCredentials: true,
          headers: { Coookie: info.split(";")[0].replace(/"/g, "") },
        }
      )
      .then((response) => {})
      .catch((error) => console.log(error));
  };
  return (
    <Modal visible={props.visible} transparent={true}>
      <View style={AddPollRecipeModalStyles.modalView}>
        <TouchableOpacity onPress={() => props.close(false)}>
          <Text style={AddPollRecipeModalStyles.sectionHeader}>X</Text>
        </TouchableOpacity>
        <Text style={AddPollRecipeModalStyles.sectionHeader}>
          Choose one from your Recipes
        </Text>

        {recipeNames.map((name) => {
          <Text style={{ color: "black" }} key={name}>
            {name}
          </Text>;
        })}

        <TouchableOpacity
          style={AddPollRecipeModalStyles.addButton}
          onPress={addRecipe}
        >
          <Text style={AddPollRecipeModalStyles.addButtonText}>Add Recipe</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
