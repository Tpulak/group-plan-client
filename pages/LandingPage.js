import React from "react";
import { LandingPageStyles } from "../styles";
import { TouchableOpacity, SafeAreaView, Text, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function LandingPage() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={LandingPageStyles.container}>
      <StatusBar barStyle="default" />
      <Text style={{ fontSize: 24, marginBottom: 20 }}>
        Welcome to Group Plan!
      </Text>

      <TouchableOpacity
        style={{
          ...LandingPageStyles.LandingPageBtn,
          backgroundColor: "white",
        }}
        onPress={() => {
          navigation.navigate("SignUpPage");
        }}
      >
        <Text
          style={{ ...LandingPageStyles.LandingPageBtnText, color: "#88B361" }}
        >
          Sign Up
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={LandingPageStyles.LandingPageBtn}
        onPress={() => {
          navigation.navigate("LoginPage");
        }}
      >
        <Text style={LandingPageStyles.LandingPageBtnText}>Log In</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
