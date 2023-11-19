import React, { useState, useRef } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
import BottomNav from "../components/bottomNav";
import { SafeAreaView } from "react-native";
import { StatusBar } from "react-native";
import MuiCIcon from "react-native-vector-icons/MaterialCommunityIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const CreateMealPage = () => {
  const navigation = useNavigation();
  const scrollViewRef = useRef();
  const [mealName, setMealName] = useState("");
  const [ingredients, setIngredients] = useState([""]);
  const [steps, setSteps] = useState([""]);
  const [mealImage, setMealImage] = useState(null);

  const addIngredient = () => setIngredients([...ingredients, ""]);
  const addStep = () => setSteps([...steps, ""]);

  const handleCreate = async () => {
    if (mealName && ingredients.length > 0 && steps.length > 0) {
      const info = await AsyncStorage.getItem("sessionId");
      const mealIngredients = "[" + ingredients.toString() + "]";
      const mealInstructions = "[" + steps.toString() + "]";

      axios
        .post(
          `http://${
            Platform.OS === "ios" ? "localhost" : "10.0.2.2"
          }:8000/recipes/createRecipe/`,
          {
            recipe_name: mealName,
            recipe_ingredients: mealIngredients,
            recipe_instructions: mealInstructions,
          },
          {
            withCredentials: true,
            headers: { Coookie: info.split(";")[0].replace(/"/g, "") },
          } // Assuming you want to send the 'group' data in the request
        )
        .then((response) => {
          navigation.navigate("Meals");
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
    } else {
      Alert.alert("Error", "Please fill in all fields");
    }
  };

  const onCreatePressed = () => {
    console.log("Meal created");
    navigation.navigate("Meal");
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

  const onIngredientChange = (text, index) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index] = text;
    setIngredients(updatedIngredients);
  };

  const removeIngredient = (index) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients.splice(index, 1);
    setIngredients(updatedIngredients);
  };

  const onStepChange = (text, index) => {
    const updatedSteps = [...steps];
    updatedSteps[index] = text;
    setSteps(updatedSteps);
  };

  const removeStep = (index) => {
    const updatedSteps = [...steps];
    updatedSteps.splice(index, 1);
    setSteps(updatedSteps);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="default" />
      <View style={styles.pageContainer}>
        {/* MIDDLE */}
        <ScrollView
          ref={scrollViewRef}
          contentContainerStyle={styles.middleContainer}
          automaticallyAdjustKeyboardInsets={true}
          style={{ flex: 1 }}
          onContentSizeChange={() =>
            scrollViewRef.current.scrollToEnd({ animated: true })
          }
        >
          <View style={styles.section}>
            <Text style={styles.sectionLabel}>Name</Text>
            <TextInput
              style={{
                ...styles.input,
                width: "100%",
                borderTopColor: "#000",
                borderLeftColor: "#000",
                borderBottomColor: "#000",
                borderRightColor: "#000",
              }}
              placeholder="Title of meal"
              value={mealName}
              onChangeText={(text) => setMealName(text)}
            />
          </View>

          {/* <TouchableOpacity onPress={uploadImage}>
            {mealImage ? (
              <Image source={{ uri: mealImage }} style={styles.imagePreview} />
            ) : (
              <View style={styles.imageUpload} />
            )}
          </TouchableOpacity> */}

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Ingredients</Text>
            {ingredients.map((ingredient, index) => (
              <View style={styles.inputContainer} key={index}>
                <TextInput
                  key={index}
                  style={styles.input}
                  placeholder={`Ingredient ${index + 1}`}
                  value={ingredient}
                  onChangeText={(text) => onIngredientChange(text, index)}
                />
                <TouchableOpacity
                  style={{
                    borderWidth: 0,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#88B361",
                    flex: 1,
                  }}
                  onPress={() => {
                    removeIngredient(index);
                  }}
                >
                  <MuiCIcon name="trash-can-outline" size={30} color="#fff" />
                </TouchableOpacity>
              </View>
            ))}
            <TouchableOpacity
              onPress={addIngredient}
              style={styles.addMoreButton}
            >
              <MuiCIcon name="plus" size={30} color="#fff" />
            </TouchableOpacity>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Steps</Text>
            {steps.map((step, index) => (
              <View style={styles.inputContainer} key={index}>
                <TextInput
                  key={index}
                  style={[styles.input, styles.multiLineInput]}
                  placeholder={`Step ${index + 1}`}
                  value={step}
                  onChangeText={(text) => onStepChange(text, index)}
                  multiline={true}
                />
                <TouchableOpacity
                  style={{
                    borderWidth: 0,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#88B361",
                    flex: 1,
                  }}
                  onPress={() => {
                    removeStep(index);
                  }}
                >
                  <MuiCIcon name="trash-can-outline" size={30} color="#fff" />
                </TouchableOpacity>
              </View>
            ))}
            <TouchableOpacity onPress={addStep} style={styles.addMoreButton}>
              <MuiCIcon name="plus" size={30} color="#fff" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={{
              borderWidth: 0,

              backgroundColor: "#88B361",
              width: "90%",
              padding: 15,
              marginBottom: 10,
              alignItems: "center",
              borderRadius: 10,
            }}
            onPress={handleCreate}
          >
            <Text style={{ color: "white", fontSize: 18 }}>Save</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* BOTTOM */}
        <BottomNav />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  pageContainer: {
    height: "100%",
  },
  middleContainer: {
    alignItems: "center",
    backgroundColor: "white",
  },
  section: {
    width: "90%",
    marginBottom: 20,
  },
  sectionLabel: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
    textAlign: "left",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    width: "88%",
    paddingLeft: 10,
    borderTopColor: "#88B361",
    borderLeftColor: "#88B361",
    borderBottomColor: "#88B361",
    borderRightColor: "#88B361",
  },
  inputContainer: {
    flexDirection: "row",
    alignContent: "center",
    marginBottom: 10,

    paddingBottom: 15,
    overflow: "hidden",
    justifyContent: "center",
  },
  multiLineInput: {
    height: 50,
    textAlign: "left",
    paddingTop: 15,
  },
  imageUpload: {
    width: 300,
    height: 150,
    backgroundColor: "lightgray",
    marginBottom: 20,
  },
  imagePreview: {
    width: 200,
    height: 100,
    marginBottom: 20,
  },
  addMoreButton: {
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#FFBA00",
    borderRadius: 10,
    backgroundColor: "#FFBA00",
    height: 50,
    justifyContent: "center",
  },
});

export default CreateMealPage;
