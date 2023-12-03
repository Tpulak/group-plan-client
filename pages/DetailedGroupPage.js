/* eslint-disable react/prop-types */
import {
  View,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  Platform,
  Dimensions,
  useWindowDimensions,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import GroupMembersModal from "../components/Modals/GroupMembersModal";
import RecipeDetailsModal from "../components/Modals/RecipeDetailsModal";
import { DetailedGroupPageStyles, RecipeCardStyles } from "../styles";
import { Bar } from "react-native-progress";
import MuiCIcon from "react-native-vector-icons/MaterialCommunityIcons";

import { useNavigation } from "@react-navigation/native";

export default function DetailedGroupPage({ route }) {
  const navigation = useNavigation();
  const { width } = useWindowDimensions();
  const [group, setGroup] = useState(route.params.group.fields);
  const [currentRecipe, setCurrentRecipe] = useState({});
  const [mealModalVisible, setMealModalVisible] = useState(false);
  const [memberModalsVisible, setMemberModalsVisible] = useState(false);
  const [pollSummary, setPollSummary] = useState({
    Taco: { id: 28, votes: 10 },
    "Fried Egg": { id: 41, votes: 3 },
    "Recipe 1": { id: 37, votes: 6 },
    Cake: { id: 40, votes: 2 },
  });

  useEffect(() => {
    getcurrentRecipe();
    pollPreview();
  }, [group]);

  const getcurrentRecipe = async () => {
    const info = await AsyncStorage.getItem("sessionId");
    if (!group.current_recipe) {
      return;
    }
    axios
      .get(
        `http://${
          Platform.OS === "ios" ? "192.168.1.199" : "10.0.2.2"
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
          Platform.OS === "ios" ? "192.168.1.199" : "10.0.2.2"
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

  const pollPreview = () => {
    const x = Object.entries(pollSummary);
    x.sort((a, b) => b[1].votes - a[1].votes);
    const preview = [];
    for (var element in Object.fromEntries(x)) {
      preview.push(
        <Bar
          progress={pollSummary[element].votes / 21}
          width={Dimensions.get("window").width * 0.9}
          height={35}
          animated={true}
          style={{ marginBottom: 15 }}
          color="#88B361"
          // #88B361#FFBA00
          key={element}
        >
          <Text
            style={{
              position: "absolute",
              color: "black",
              fontSize: 15,
              textAlign: "center",
              padding: 8,
            }}
          >
            {element}
          </Text>
        </Bar>
      );
    }
    return preview.slice(-3);
  };

  return (
    <SafeAreaView style={DetailedGroupPageStyles.container}>
      <StatusBar barStyle="default" />
      <View style={DetailedGroupPageStyles.container}>
        <View style={DetailedGroupPageStyles.topContainer}>
          <TouchableOpacity
            style={DetailedGroupPageStyles.button}
            onPress={() => {
              setMemberModalsVisible(true);
            }}
          >
            <Text style={DetailedGroupPageStyles.buttonText}>Members</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...DetailedGroupPageStyles.button,
              backgroundColor: "red",
            }}
            onPress={() => {
              setMemberModalsVisible(true);
            }}
          >
            <Text style={DetailedGroupPageStyles.buttonText}>Leave Group</Text>
          </TouchableOpacity>
        </View>

        <View style={DetailedGroupPageStyles.groupContainer}>
          <View style={DetailedGroupPageStyles.currentMeal}>
            <View style={{ width: "93%", marginBottom: 5 }}>
              <Text style={DetailedGroupPageStyles.sectionTitle}>
                Current Meal
              </Text>
            </View>

            <TouchableOpacity
              style={{
                ...RecipeCardStyles.recipeContainer,
                width: width * 0.9,
              }}
              key={currentRecipe?.pk}
            >
              <Image
                source={{
                  uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png",
                }}
                style={{
                  height: 175,
                  borderRadius: 10,
                }}
              />
              <View style={RecipeCardStyles.recipeBottomBox}></View>
              <Text style={RecipeCardStyles.recipeName}>
                {currentRecipe?.name}
              </Text>
            </TouchableOpacity>
          </View>

          {group.current_poll ? (
            <TouchableOpacity
              style={DetailedGroupPageStyles.currentPoll}
              onPress={() => {
                navigation.navigate("Poll Page", {
                  pollSummary: pollSummary,
                  groupID: route.params.group.pk,
                });
              }}
            >
              <View
                style={{
                  width: "90%",
                  marginBottom: 5,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={DetailedGroupPageStyles.sectionTitle}>
                  Current Poll
                </Text>
                <Text
                  style={{
                    ...DetailedGroupPageStyles.sectionTitle,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  View
                  <MuiCIcon name="arrow-right" size={20} color="#88B361" />
                </Text>
              </View>

              <View>
                {pollPreview().map((preview) => {
                  return preview;
                })}
              </View>
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
