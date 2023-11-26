import {
  StyleSheet,
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
import TopNav from "../components/topNav";
import BottomNav from "../components/bottomNav";
import RecipeCard from "../components/recipeCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import GroupMembersModal from "../components/modals/groupMembersModal";
import MealDetailsModal from "../components/modals/mealDetailsModal";
import { PropaneSharp } from "@mui/icons-material";
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
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="default" />
      <View style={styles.container}>
        {/* TOP */}
        <TopNav />
        <View style={styles.topContainer}>
          <Text style={{ color: "black", fontSize: 20, fontWeight: "bold" }}>
            {group.name}
          </Text>
          <TouchableOpacity
            style={styles.membersButton}
            onPress={() => {
              setMemberModalsVisible(true);
            }}
          >
            <Text style={{ color: "white" }}>Members</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.groupContainer}>
          <View style={styles.currentMeal}>
            <Text>Current Meal</Text>
            <TouchableOpacity
              style={styles.mealContainer}
              key={currentRecipe?.pk}
              onPress={() => {
                if (currentRecipe.fields) {
                  setMealModalVisible(true);
                }
              }}
            >
              <View style={styles.mealNameContainer}>
                <Text style={styles.mealName}>
                  {currentRecipe.fields?.name}
                </Text>
              </View>
              <View style={styles.mealImagePlaceholder}></View>
            </TouchableOpacity>
          </View>

          {group.current_poll ? (
            <TouchableOpacity
              style={styles.currentPoll}
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
              style={styles.startPoll}
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
        <MealDetailsModal
          show={mealModalVisible}
          close={setMealModalVisible}
          meal={currentRecipe}
        />
        <GroupMembersModal
          show={memberModalsVisible}
          close={setMemberModalsVisible}
          owner={group.owner}
          groupID={props.group.pk}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  groupContainer: {
    flex: 1,
    justifyContent: "space-around",
  },
  topContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 15,
  },
  currentPoll: {
    justifyContent: "center",
    backgroundColor: "#88B361",
    height: 100,
    marginLeft: 10,
    marginRight: 10,
  },
  startPoll: {
    justifyContent: "center",
    backgroundColor: "#88B361",
    height: 100,
    marginLeft: 10,
    marginRight: 10,
  },
  currentMeal: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  membersButton: {
    backgroundColor: "#88B361",
    padding: 10,
    borderRadius: 10,
  },
  mealContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    overflow: "hidden",
  },
  mealNameContainer: {
    flex: 1,
    padding: 10,
  },
  mealName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  mealImagePlaceholder: {
    width: 100,
    height: 100,
    backgroundColor: "#ccc", // Gray color as a placeholder
  },
});
