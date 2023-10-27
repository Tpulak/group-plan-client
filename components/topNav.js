import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";

import MuiCIcon from "react-native-vector-icons/MaterialCommunityIcons";

export default function TopNav() {
  const navigation = useNavigation();
  // Group Button -> Group Page
  const handleGroupPress = () => {
    navigation.navigate("Group");
  };

  // Settings Button -> Settings Page
  const handleSettingPress = () => {
    navigation.navigate("Settings");
  };
  return (
    <View style={styles.topContainer}>
      {/* GROUP ICON*/}
      <Pressable onPress={handleGroupPress}>
        <MuiCIcon
          name="account-group-outline"
          size={40}
          color="#FFBA00"
          style={{ backgroundColor: "#fff", borderRadius: 5, padding: 5 }}
        />
      </Pressable>

      <Text style={styles.title}>Group Plan</Text>

      {/* SETTINGS ICON*/}
      <Pressable onPress={handleSettingPress}>
        <MuiCIcon
          name="account-settings-outline"
          size={40}
          color="#FFBA00"
          style={{ backgroundColor: "#fff", borderRadius: 5, padding: 5 }}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },

  title: {
    fontSize: 30,
    color: "black",
    fontWeight: "bold",
  },
});
