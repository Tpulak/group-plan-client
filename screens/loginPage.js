import React from "react";
import axios from "axios";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Alert,
  Platform,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LoginPage() {
  const navigation = useNavigation();
  const [userInfo, setUserInfo] = React.useState({
    username: "",
    password: "",
  });

  //NAV: Signup -> Signup Page
  const handleSignUpPress = () => {
    navigation.navigate("signup"); // 'SignUp' should be the name of your sign-up screen
  };
  const storeUserData = async (value, key) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      // saving error
    }
  };
  //NAV: Login -> Homepage
  const handleLogInPress = () => {
    navigation.navigate("Home");
    const user = userInfo;
    axios
      .post(
        `http://${
          Platform.OS === "ios" ? "localhost" : "10.0.2.2"
        }:8000/users/login/`,
        (data = userInfo)
      )
      .then((response) => {
        storeUserData(response.headers["set-cookie"][0], "sessionId");
        storeUserData(response.data.pk, "userId");
        if ("pk" in response.data) {
          navigation.navigate("Home");
          setUserInfo({
            username: "",
            password: "",
          });
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
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="default" />
      <View style={styles.container}>
        {/* <View style={{ alignItems: "flex-start" }}>
          <Text> GROUP PLAN </Text>
        </View> */}

        <Image
          source={require("../assets/icons/logoPH.png")}
          style={{ width: 100, height: 100 }}
        />

        <View style={{ alignItems: "flex-start" }}>
          <Text style={{ textAlign: "left" }}>Username</Text>
          <View style={styles.input}>
            <TextInput
              placeholder=""
              onChangeText={(usernameInput) => {
                setUserInfo((prevState) => {
                  return { ...prevState, username: usernameInput };
                });
              }}
              value={userInfo.username}
            />
          </View>
        </View>

        <View style={{ alignItems: "flex-start" }}>
          <Text style={{ textAlign: "left" }}>Password</Text>
          <View style={styles.input}>
            <TextInput
              placeholder=""
              //hides password
              secureTextEntry={true}
              onChangeText={(passwordInput) => {
                setUserInfo((prevState) => {
                  return { ...prevState, password: passwordInput };
                });
              }}
              value={userInfo.password}
            />
          </View>
        </View>

        <View>
          {Platform.OS === "ios" ? (
            <TouchableOpacity
              style={styles.Login_button}
              onPress={handleLogInPress}
            >
              <Text style={{ fontSize: 17, color: "white" }}>Login</Text>
            </TouchableOpacity>
          ) : (
            <Button title="Login" color="#88B361" onPress={handleLogInPress} />
          )}
        </View>

        <Text>Forgot Password?</Text>

        <View>
          <Text>
            Don't have an account?{" "}
            <TouchableOpacity onPress={handleSignUpPress}>
              <Text style={{ textDecorationLine: "underline" }}>Sign Up</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // #9DC183
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

  Login_button: {
    margin: 10,
    padding: 8,
    borderRadius: 5,
    backgroundColor: "#88B361",
  },
});
