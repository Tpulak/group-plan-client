import React, { useState, useRef } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  ImagePicker,
  Platform,
} from "react-native";
// import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
import BottomNav from "../components/BottomNav";
import { SafeAreaView } from "react-native";
import { StatusBar } from "react-native";
import MuiCIcon from "react-native-vector-icons/MaterialCommunityIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { CreateRecipesStyles } from "../styles";

export default function CreateRecipePage() {
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
          navigation.navigate("RecipesPage");
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
    <SafeAreaView style={CreateRecipesStyles.container}>
      <StatusBar barStyle="default" />
      <View style={CreateRecipesStyles.pageContainer}>
        {/* MIDDLE */}
        <ScrollView
          ref={scrollViewRef}
          contentContainerStyle={CreateRecipesStyles.middleContainer}
          automaticallyAdjustKeyboardInsets={true}
          style={{ flex: 1 }}
          onContentSizeChange={() =>
            scrollViewRef.current.scrollToEnd({ animated: true })
          }
        >
          <View style={CreateRecipesStyles.section}>
            <Text style={CreateRecipesStyles.sectionLabel}>Name</Text>
            <TextInput
              style={{
                ...CreateRecipesStyles.input,
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
              <Image source={{ uri: mealImage }} style={CreateRecipesStyles.imagePreview} />
            ) : (
              <View style={CreateRecipesStyles.imageUpload} />
            )}
          </TouchableOpacity> */}

          <View style={CreateRecipesStyles.section}>
            <Text style={CreateRecipesStyles.sectionTitle}>Ingredients</Text>
            {ingredients.map((ingredient, index) => (
              <View style={CreateRecipesStyles.inputContainer} key={index}>
                <TextInput
                  key={index}
                  style={[
                    CreateRecipesStyles.input,
                    CreateRecipesStyles.multiLineInput,
                  ]}
                  placeholder={`Ingredient ${index + 1}`}
                  value={ingredient}
                  onChangeText={(text) => onIngredientChange(text, index)}
                />
                <TouchableOpacity
                  style={CreateRecipesStyles.removeButton}
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
              style={CreateRecipesStyles.addMoreButton}
            >
              <MuiCIcon name="plus" size={30} color="#fff" />
            </TouchableOpacity>
          </View>

          <View style={CreateRecipesStyles.section}>
            <Text style={CreateRecipesStyles.sectionTitle}>Steps</Text>
            {steps.map((step, index) => (
              <View style={CreateRecipesStyles.inputContainer} key={index}>
                <TextInput
                  key={index}
                  style={[
                    CreateRecipesStyles.input,
                    CreateRecipesStyles.multiLineInput,
                  ]}
                  placeholder={`Step ${index + 1}`}
                  value={step}
                  onChangeText={(text) => onStepChange(text, index)}
                  multiline={true}
                />
                <TouchableOpacity
                  style={CreateRecipesStyles.removeButton}
                  onPress={() => {
                    removeStep(index);
                  }}
                >
                  <MuiCIcon name="trash-can-outline" size={30} color="#fff" />
                </TouchableOpacity>
              </View>
            ))}
            <TouchableOpacity
              onPress={addStep}
              style={CreateRecipesStyles.addMoreButton}
            >
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
            <Text
              style={{
                color: "white",
                fontSize: 18,
                fontFamily: "Poppins_400Regular",
              }}
            >
              Save
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
