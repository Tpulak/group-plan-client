import React, { useState } from "react";
import { View } from "react-native";
import {
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LoginPageStyles } from "../styles";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [btnColor, setBtnColor] = useState(false);
  const navigation = useNavigation();

  const storeUserData = async (value, key) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      // saving error
    }
  };

  const handleLogInPress = () => {
    setBtnColor(true);
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
          navigation.navigate("AppTabs");
          setUsername("");
          setPassword("");
          setBtnColor(false);
        } else {
          setBtnColor(false);
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
      .catch((error) => {
        setBtnColor(false);
        console.log(error);
      });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={LoginPageStyles.container}
    >
      <View style={LoginPageStyles.container}>
        <View style={{ flexDirection: "row", marginLeft: 15 }}>
          <Text
            style={{
              ...LoginPageStyles.LoginPageTitle,
            }}
          >
            Welcome Back
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingBottom: 25,
            marginRight: 15,
          }}
        >
          <Text
            style={{
              ...LoginPageStyles.LoginPageTitle,
              textAlign: "right",
            }}
          >
            Group Planner !!!
          </Text>
        </View>

        <Image
          // eslint-disable-next-line no-undef
          source={require("../assets/icons/logoPH.png")}
          style={{ width: 125, height: 125 }}
        />

        <TextInput
          style={{
            ...LoginPageStyles.LoginPageInput,
            ...LoginPageStyles.usernameInput,
          }}
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />

        <TextInput
          style={{
            ...LoginPageStyles.LoginPageInput,
          }}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <TouchableOpacity
          style={{
            ...LoginPageStyles.LoginPageBtn,
            backgroundColor: btnColor ? "#88B361" : "#FFBA00",
          }}
          disabled={btnColor ? true : false}
          onPress={() => {
            // Handle login logic here with username and password
            // console.log("Login pressed with:", { username, password });
            handleLogInPress();
          }}
        >
          <Text
            style={{
              ...LoginPageStyles.LoginPageBtnText,
            }}
          >
            Log In
          </Text>
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
          <Text
            style={{
              color: "white",
              fontSize: 18,
              fontFamily: "Poppins_400Regular",
            }}
          >
            Back to Landing Page
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
