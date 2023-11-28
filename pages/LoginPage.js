import React, { useState } from "react";
import { View } from "react-native";
import {
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LoginPageStyles } from "../styles";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const storeUserData = async (value, key) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      // saving error
    }
  };

  const handleLogInPress = () => {
    axios
      .post(
        `http://${
          Platform.OS === "ios" ? "localhost" : "10.0.2.2"
        }:8000/users/login/`,
        // eslint-disable-next-line no-undef
        (data = { username: username, password: password })
      )
      .then((response) => {
        storeUserData(response.headers["set-cookie"][0], "sessionId");
        storeUserData(response.data.pk, "userId");
        if ("pk" in response.data) {
          navigation.navigate("HomePage");
          setUsername("");
          setPassword("");
        } else {
          Alert.alert("Log In Error", response.data["message"], [
            {
              text: "OK",
              onPress: () => {
                // do something
              },
            },
          ]);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={LoginPageStyles.container}
    >
      <View style={LoginPageStyles.container}>
        <Text style={LoginPageStyles.LoginPageTitle}>
          Welcome back Group Planner!
        </Text>

        <TextInput
          style={LoginPageStyles.LoginPageInput}
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />

        <TextInput
          style={LoginPageStyles.LoginPageInput}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <TouchableOpacity
          style={LoginPageStyles.LoginPageBtn}
          onPress={() => {
            // Handle login logic here with username and password
            // console.log("Login pressed with:", { username, password });
            handleLogInPress();
          }}
        >
          <Text style={LoginPageStyles.LoginPageBtnText}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            marginTop: 20,
            padding: 10,
            alignItems: "center",
          }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text style={{ color: "blue", fontSize: 16 }}>
            Back to Landing Page
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
