import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
  Platform,
} from "react-native";
import React from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Signup() {
  //NAV
  const navigation = useNavigation();
  const [userInfo, setUserInfo] = React.useState({
    email: "",
    first_name: "",
    last_name: "",
    username: "",
    password1: "",
    password2: "",
  });

  const storeUserData = async (value, key) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      // saving error
    }
  };

  //NAV: SignUp -> Homepage
  const handleSignUpPress = () => {
    axios
      .post(
        `http://${
          Platform.OS === "ios" ? "192.168.1.51" : "10.0.2.2"
        }:8000/users/register/`,
        (data = userInfo)
      )
      .then((response) => {
        console.log(response.data[0]);
        if ("fields" in response.data[0]) {
          storeUserData(response.headers["set-cookie"][0], "sessionId");
          navigation.navigate("Home");
        } else {
          Alert.alert("Sign Up Error", response.data["message"], [
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
    console.log(userInfo);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Create Account </Text>

      <View style={{ alignItems: "flex-start" }}>
        <Text style={{ textAlign: "left" }}>First Name</Text>
        <View style={styles.input}>
          <TextInput
            placeholder=" "
            onChangeText={(usernameInput) => {
              setUserInfo((prevState) => {
                return { ...prevState, first_name: usernameInput };
              });
            }}
          />
        </View>
      </View>

      <View style={{ alignItems: "flex-start" }}>
        <Text style={{ textAlign: "left" }}> Last Name</Text>
        <View style={styles.input}>
          <TextInput
            placeholder=" "
            onChangeText={(usernameInput) => {
              setUserInfo((prevState) => {
                return { ...prevState, last_name: usernameInput };
              });
            }}
          />
        </View>
      </View>

      <View style={{ alignItems: "flex-start" }}>
        <Text style={{ textAlign: "left" }}>Email</Text>
        <View style={styles.input}>
          <TextInput
            placeholder=" "
            onChangeText={(usernameInput) => {
              setUserInfo((prevState) => {
                return { ...prevState, email: usernameInput };
              });
            }}
          />
        </View>
      </View>

      <View style={{ alignItems: "flex-start" }}>
        <Text style={{ textAlign: "left" }}>Username </Text>
        <View style={styles.input}>
          <TextInput
            placeholder=" "
            onChangeText={(usernameInput) => {
              setUserInfo((prevState) => {
                return { ...prevState, username: usernameInput };
              });
            }}
          />
        </View>
      </View>

      <View style={{ alignItems: "flex-start" }}>
        <Text style={{ textAlign: "left" }}>Password </Text>
        <View style={styles.input}>
          <TextInput
            placeholder=" "
            onChangeText={(usernameInput) => {
              setUserInfo((prevState) => {
                return { ...prevState, password1: usernameInput };
              });
            }}
          />
        </View>
      </View>

      <View style={{ alignItems: "flex-start" }}>
        <Text style={{ textAlign: "left" }}>Confirm Password </Text>
        <View style={styles.input}>
          <TextInput
            placeholder=" "
            onChangeText={(usernameInput) => {
              setUserInfo((prevState) => {
                return { ...prevState, password2: usernameInput };
              });
            }}
          />
        </View>
      </View>

      <View style={styles.signup_button}>
        <Button title="Sign Up" color="green" onPress={handleSignUpPress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    backgroundColor: "ECECEC",
    margin: 10,
    borderWidth: 1,
    padding: 8,
    width: 210,
  },

  signup_button: {
    margin: 10,
  },

  title: {
    fontSize: 30,
  },
  text: {
    marginTop: 25,
  },
});
