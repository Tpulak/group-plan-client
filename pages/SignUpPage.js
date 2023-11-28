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

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={SignUpPageStyles.container}
    >
      <View style={SignUpPageStyles.container}>
        <Text style={SignUpPageStyles.SignUpPageTitle}>
          Become a Group Planner!
        </Text>

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
          style={SignUpPageStyles.SignUpPageBtn}
          onPress={() => {
            // Handle sign-up logic here
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
          <Text style={{ color: "blue", fontSize: 16 }}>
            Back to Landing Page
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
