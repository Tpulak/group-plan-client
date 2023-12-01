import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SignUpPageStyles } from "../styles";

export default function SignUpPage() {
  const navigation = useNavigation();
  const [btnColor, setBtnColor] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlSignUpPress = () => {
    setBtnColor(true);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={SignUpPageStyles.container}
    >
      <View style={SignUpPageStyles.container}>
        <View style={{ flexDirection: "row", marginLeft: 15 }}>
          <Text style={SignUpPageStyles.SignUpPageTitle}>Become a</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingBottom: 25,
            marginRight: 15,
          }}
        >
          <Text
            style={{ ...SignUpPageStyles.SignUpPageTitle, textAlign: "right" }}
          >
            Group Planner !!!
          </Text>
        </View>

        <TextInput
          style={SignUpPageStyles.SignUpPageInput}
          placeholder="First Name"
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
        />

        <TextInput
          style={SignUpPageStyles.SignUpPageInput}
          placeholder="Last Name"
          value={lastName}
          onChangeText={(text) => setLastName(text)}
        />

        <TextInput
          style={SignUpPageStyles.SignUpPageInput}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <TextInput
          style={SignUpPageStyles.SignUpPageInput}
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />

        <TextInput
          style={SignUpPageStyles.SignUpPageInput}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <TextInput
          style={SignUpPageStyles.SignUpPageInput}
          placeholder="Confirm Password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />

        <TouchableOpacity
          style={{
            ...SignUpPageStyles.SignUpPageBtn,
            backgroundColor: btnColor ? "#88B361" : "#FFBA00",
          }}
          disabled={btnColor ? true : false}
          onPress={() => {
            handlSignUpPress();
            console.log("Sign Up pressed with:", {
              firstName,
              lastName,
              email,
              username,
              password,
              confirmPassword,
            });
          }}
        >
          <Text style={SignUpPageStyles.SignUpPageBtnText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            marginTop: 20,
            padding: 10,
            alignItems: "center",
          }}
          onPress={() => {
            // Navigate back to the landing page
            navigation.goBack();
          }}
        >
          <Text style={{ color: "white", fontSize: 18 }}>
            Back to Landing Page
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
