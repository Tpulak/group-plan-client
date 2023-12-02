import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { NavStyles } from "../styles";
import MuiCIcon from "react-native-vector-icons/MaterialCommunityIcons";

export default function TopNav() {
  const navigation = useNavigation();
  // Group Button -> Group Page
  const handleGroupPress = () => {
    navigation.navigate("GroupsPage");
  };

  // Settings Button -> Settings Page
  const handleSettingPress = () => {
    navigation.navigate("AccountSettingsPage");
  };
  return (
    <View style={NavStyles.topNavContainer}>
      {/* GROUP ICON*/}
      {/* <Pressable onPress={handleGroupPress}>
        <MuiCIcon
          name="account-group-outline"
          size={40}
          color="#FFBA00"
          style={{ backgroundColor: "#fff", borderRadius: 5, padding: 5 }}
        />
      </Pressable> */}

      <Text style={NavStyles.topNavtitle}>Group Plan</Text>

      {/* SETTINGS ICON*/}
      {/* <Pressable onPress={handleSettingPress}>
        <MuiCIcon
          name="account-settings-outline"
          size={40}
          color="#FFBA00"
          style={{ backgroundColor: "#fff", borderRadius: 5, padding: 5 }}
        />
      </Pressable> */}
    </View>
  );
}
