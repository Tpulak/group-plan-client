/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";

import {
  SafeAreaView,
  TouchableOpacity,
  View,
  StatusBar,
  Text,
  ScrollView,
  Platform,
} from "react-native";
import { PollPageStyles } from "../styles";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import AddPollRecipeModal from "../components/Modals/AddPollRecipeModal";

export default function PollPage({ route }) {
  const [pollSummary, setPollSummary] = useState(route.params.pollSummary);
  const [recipeNames, setRecipeNames] = useState([]);
  const [selected, setSelected] = useState(null);
  const [modalVisible, setmodalVisible] = useState(false);
  useEffect(() => {
    setRecipeNames(Object.keys(pollSummary));
  }, []);

  const showModal = () => {
    setmodalVisible(true);
  };

  return (
    <SafeAreaView style={PollPageStyles.container}>
      <StatusBar barStyle="default" />
      <View style={PollPageStyles.container}>
        <View style={PollPageStyles.pollPageTopContainer}>
          <Text
            style={{
              textAlign: "center",
              color: "black",
              marginBottom: 10,
              marginTop: 10,
              fontSize: 20,
              fontFamily: "Poppins_600SemiBold",
            }}
          >
            Recipes
          </Text>
          <TouchableOpacity
            style={PollPageStyles.pollPageBtn}
            onPress={showModal}
          >
            <Text style={PollPageStyles.pollPageBtnText}>Add Recipe</Text>
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={PollPageStyles.recipesContainer}>
          {recipeNames.map((name, index) => {
            return (
              <View key={name} style={PollPageStyles.listItemContainer}>
                <BouncyCheckbox
                  size={25}
                  fillColor="#FFBA00"
                  unfillColor="#FFFFFF"
                  iconStyle={{ borderColor: "red", borderRadius: 5 }}
                  innerIconStyle={{ borderWidth: 2 }}
                  isChecked={selected == index ? true : false}
                  disableBuiltInState
                  onPress={() => setSelected(index)}
                />
                <Text style={{ fontFamily: "Poppins_400Regular" }}>{name}</Text>
              </View>
            );
          })}
        </ScrollView>
        <View style={PollPageStyles.pollPageBottomContainer}>
          <TouchableOpacity
            style={{ ...PollPageStyles.pollPageBtn, width: "90%" }}
          >
            <Text style={PollPageStyles.pollPageBtnText}>Vote</Text>
          </TouchableOpacity>
        </View>
      </View>
      <AddPollRecipeModal
        visible={modalVisible}
        close={setmodalVisible}
        groupID={route.params.groupID}
      />
    </SafeAreaView>
  );
}
