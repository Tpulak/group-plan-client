import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
  Modal,
  Platform,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CreateMealModal(props) {
  // NAVIGATION
  const navigation = useNavigation();
  const [mealName, setMealName] = useState("");
  const [ingredients, setIngredients] = useState([""]);
  const [steps, setSteps] = useState([""]);
  const [mealImage, setMealImage] = useState(null);

  const addIngredient = () => {
    setIngredients([...ingredients, ""]);
  };

  const addStep = () => {
    setSteps([...steps, ""]);
  };

  const handleDone = () => {
    props.close();
    if (mealName && ingredients.length > 0 && steps.length > 0) {
      Alert.alert(
        "Confirmation",
        "Are you done creating the meal?",
        [
          {
            text: "Cancel",
            style: "cancel",
          },
          {
            text: "Yes",
            onPress: () => {
              console.log("Meal created");
              navigation.navigate("Meal"); // Navigate to NextScreen
            },
          },
        ],
        { cancelable: false }
      );
    } else {
      Alert.alert("Error", "Please fill in all fields");
    }
  };

  const uploadImage = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!pickerResult.cancelled) {
      setMealImage(pickerResult.uri);
    }
  };

  const createRecipe = async () => {
    const info = await AsyncStorage.getItem("sessionId");
    axios
      .post(
        `http://${
          Platform.OS === "ios" ? "192.168.1.51" : "10.0.2.2"
        }:8000/recipes/createRecipe/`,
        { recipe_name: mealName },
        {
          withCredentials: true,
          headers: { Coookie: info.split(";")[0].replace(/"/g, "") },
        } // Assuming you want to send the 'group' data in the request
      )
      .then((response) => {
        props.updateRecipes();
        props.close(false);
        setMealName("");
      })
      .catch((error) => {
        Alert.alert("Recipe Creation error", error.response.data.message, [
          {
            text: "OK",
            onPress: () => {
              // do something
            },
          },
        ]);
      });
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.show}
      onRequestClose={() => {
        props.close(false);
      }}
    >
      <View style={styles.modalView}>
        <Text style={styles.modalText}>Create Recipe</Text>
        <TextInput
          style={styles.groupInput}
          placeholder="Enter recipe name"
          placeholderTextColor="grey"
          value={mealName}
          onChangeText={(mealNameInput) => {
            setMealName(mealNameInput);
          }}
          // Add appropriate onChangeText and value props here
        />

        <View style={styles.modalButtons}>
          {Platform.OS === "ios" ? (
            <TouchableOpacity
              onPress={() => {
                props.close(false);
              }}
              style={styles.modalButton}
            >
              <Text
                style={{ textAlign: "center", color: "white", fontSize: 16 }}
              >
                Cancel
              </Text>
            </TouchableOpacity>
          ) : (
            <Button
              title="Cancel"
              onPress={() => {
                props.close(false);
              }}
              color="#88B631"
            />
          )}

          {Platform.OS === "ios" ? (
            <TouchableOpacity onPress={createRecipe} style={styles.modalButton}>
              <Text
                style={{ textAlign: "center", color: "white", fontSize: 16 }}
              >
                Create
              </Text>
            </TouchableOpacity>
          ) : (
            <Button title="Create" onPress={createRecipe} color="#88B631" />
          )}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalButton: {
    padding: 10,
    backgroundColor: "#88B631",
    borderRadius: 5,
    width: 100,
  },
  modalView: {
    margin: 20,
    marginTop: 100,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: 24,
    marginBottom: 15,
    textAlign: "center",
  },
  groupInput: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },

  groupTypeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  groupTypeText: {
    fontSize: 18,
    marginLeft: 10,
  },

  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 20,
  },

  radioButtons: {
    flexDirection: "row",
    marginBottom: 10,
  },
  radioButton: {
    borderWidth: 1,
    borderColor: "#888",
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  radioButtonSelected: {
    backgroundColor: "#888",
  },
  radioButtonText: {
    color: "#888",
  },

  groupTypeContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  groupTypeButton: {
    borderWidth: 1,
    borderColor: "#888",
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  groupTypeButtonSelected: {
    backgroundColor: "#88B361",
  },
  groupTypeButtonText: {
    color: "black",
  },
});
