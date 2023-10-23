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
  Platform
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation();
  const [userInfo, setUserInfo] = React.useState({
    username: "",
    password: "",
  });

  //NAV: Signup -> Signup Page
  const handleSignUpPress = () => {
    navigation.navigate("signup"); // 'SignUp' should be the name of your sign-up screen
  };
  //NAV: Login -> Homepage
  const handleLogInPress = () => {
    //testing
    // navigation.navigate("Home");

    axios
      .post(`http://${Platform.OS === "ios" ? "localhost" : "10.0.2.2"}:8000/users/login/`, (data = userInfo))
      .then((response) => {
        console.log(response.data);
        if ("pk" in response.data) {
          navigation.navigate("Home");
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
    console.log(userInfo);
  };

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "flex-start" }}>
        <Text> GROUP PLAN </Text>
      </View>

      <Image
        source={require("../assets/icons/logoPH.png")}
        style={{ width: 100, height: 100 }}
      />

      <View style={{ alignItems: "flex-start" }}>
        <Text style={{ textAlign: "left" }}>Username</Text>
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
        <Text style={{ textAlign: "left" }}>Password</Text>
        <View style={styles.input}>
          <TextInput
            placeholder=" "
            //hides password
            secureTextEntry={true}
            onChangeText={(passwordInput) => {
              setUserInfo((prevState) => {
                return { ...prevState, password: passwordInput };
              });
            }}
          />
        </View>
      </View>

      <View style={styles.Login_button}>
        <Button
          title="Login"
          color="white"
          onPress={handleLogInPress}
        // onPress={() => Alert.alert('Button pressed')}
        />
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
    // margin: 10,
    margin: 15,
    padding: 4,
    borderRadius: 5,
    backgroundColor: "green",
  },
});
