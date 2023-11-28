import {
  View,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  Button,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import TopNav from "../components/TopNav";
import BottomNav from "../components/BottomNav";
// import RecipeCard from "../components/recipeCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import GroupMembersModal from "../components/Modals/GroupMembersModal";
import RecipeDetailsModal from "../components/Modals/RecipeDetailsModal";
import { DetailedGroupPageStyles } from "../styles";

// import { useNavigation } from "@react-navigation/native";

export default function DetailedGroupPage({ route }) {
  //   const navigation = useNavigation();
  const [group, setGroup] = useState(route.params.group.fields);
  const [currentRecipe, setCurrentRecipe] = useState({});
  const [mealModalVisible, setMealModalVisible] = useState(false);
  const [memberModalsVisible, setMemberModalsVisible] = useState(false);
  useEffect(() => {
    getcurrentRecipe();
  }, [group]);

  const getcurrentRecipe = async () => {
    const info = await AsyncStorage.getItem("sessionId");
    if (!group.current_recipe) {
      return;
    }
    axios
      .get(
        `http://${
          Platform.OS === "ios" ? "192.168.1.75" : "10.0.2.2"
        }:8000/recipes/getRecipe/${group.current_recipe}`,
        {
          withCredentials: true,
          headers: { Coookie: info.split(";")[0].replace(/"/g, "") },
        }
      )
      .then((response) => {
        setCurrentRecipe(response.data[0].fields);
      })
      .catch((error) => console.log(error));
  };

  const startPoll = async () => {
    const info = await AsyncStorage.getItem("sessionId");
    axios
      .put(
        `http://${
          Platform.OS === "ios" ? "192.168.1.75" : "10.0.2.2"
        }:8000/recipes/startPoll/${route.params.group.pk}/`,
        {
          withCredentials: true,
          headers: { Coookie: info.split(";")[0].replace(/"/g, "") },
        }
      )
      .then((response) => {
        setGroup((prev) => {
          return { ...prev, current_poll: true };
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <SafeAreaView style={DetailedGroupPageStyles.container}>
      <StatusBar barStyle="default" />
      <View style={DetailedGroupPageStyles.container}>
        {/* TOP */}
        <TopNav />
        <View style={DetailedGroupPageStyles.topContainer}>
          <Text style={{ color: "black", fontSize: 20, fontWeight: "bold" }}>
            {group.name}
          </Text>
          <TouchableOpacity
            style={DetailedGroupPageStyles.membersButton}
            onPress={() => {
              setMemberModalsVisible(true);
            }}
          >
            <Text style={{ color: "white" }}>Members</Text>
          </TouchableOpacity>
        </View>

        <View style={DetailedGroupPageStyles.groupContainer}>
          <View style={DetailedGroupPageStyles.currentMeal}>
            <Text>Current Meal</Text>
            <TouchableOpacity
              style={DetailedGroupPageStyles.mealContainer}
              key={currentRecipe?.pk}
              onPress={() => {
                if (currentRecipe.fields) {
                  setMealModalVisible(true);
                }
              }}
            >
              <View style={DetailedGroupPageStyles.mealNameContainer}>
                <Text style={DetailedGroupPageStyles.mealName}>
                  {currentRecipe.fields?.name}
                </Text>
              </View>
              <View style={DetailedGroupPageStyles.mealImagePlaceholder}></View>
            </TouchableOpacity>
          </View>

          {group.current_poll ? (
            <TouchableOpacity
              style={DetailedGroupPageStyles.currentPoll}
              onPress={() => {
                console.log("Open Poll Modal");
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                Next Meal Poll
              </Text>
              <View></View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={DetailedGroupPageStyles.startPoll}
              onPress={() => {
                startPoll();
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                Start Poll
              </Text>
              <View></View>
            </TouchableOpacity>
          )}
        </View>

        {/* BOTTOM */}
        <BottomNav />
        <RecipeDetailsModal
          show={mealModalVisible}
          close={setMealModalVisible}
          meal={currentRecipe}
        />
        <GroupMembersModal
          show={memberModalsVisible}
          close={setMemberModalsVisible}
          owner={group.owner}
          groupID={route.params.group.pk}
        />
      </View>
    </SafeAreaView>
  );
}
