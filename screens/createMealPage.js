import React, { useState } from "react";
import {
  Button,
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
import TopNav from "../components/topNav";
import BottomNav from "../components/bottomNav";
import { SafeAreaView } from "react-native";
import { StatusBar } from "react-native";

export default function CreateMealPage() {
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

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="default" />
      <View style={styles.container}>
        {/* TOP */}
        <TopNav />

        {/* MIDDLE */}

        <Text style={styles.title}>CREATE A MEAL</Text>
        <ScrollView contentContainerStyle={styles.middleContainer}>
          <TextInput
            style={styles.input}
            placeholder="Title of meal"
            value={mealName}
            onChangeText={(text) => setMealName(text)}
          />

          <TouchableOpacity onPress={uploadImage}>
            {mealImage ? (
              <Image
                source={{ uri: mealImage }}
                style={{ width: 300, height: 150 }}
              />
            ) : (
              <View style={styles.imageUpload} />
            )}
          </TouchableOpacity>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Ingredients</Text>
            {ingredients.map((ingredient, index) => (
              <TextInput
                key={index}
                style={styles.input}
                placeholder={`Ingredient ${index + 1}`}
                value={ingredient}
                onChangeText={(text) => {
                  const updatedIngredients = [...ingredients];
                  updatedIngredients[index] = text;
                  setIngredients(updatedIngredients);
                }}
              />
            ))}
            <Button title="Add More" onPress={addIngredient} />
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Steps</Text>
            {steps.map((step, index) => (
              <TextInput
                key={index}
                style={[styles.input, styles.multiLineInput]}
                placeholder={`Step ${index + 1}`}
                value={step}
                onChangeText={(text) => {
                  const updatedSteps = [...steps];
                  updatedSteps[index] = text;
                  setSteps(updatedSteps);
                }}
                multiline={true}
              />
            ))}
            <Button title="Add More" onPress={addStep} />
          </View>

          <Button title="Done" onPress={handleDone} />
          <View style={{ height: 100 }} />
        </ScrollView>

        {/* BOTTOM */}
        <BottomNav />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  middleContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  input: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    width: "100%", // Adjusted width
    marginBottom: 20,
    paddingLeft: 10,
  },
  multiLineInput: {
    height: 50,
    textAlign: "left",
    paddingTop: 15,
  },
  imageUpload: {
    width: 300, // Adjusted width for rectangular shape
    height: 150,
    backgroundColor: "lightgray",
    marginBottom: 20,
  },
  imagePreview: {
    width: 200, // Adjusted width for rectangular shape
    height: 100,
    marginBottom: 20,
  },
  section: {
    width: "90%", // Adjusted width
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
