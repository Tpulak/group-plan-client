import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import BottomNav from "../components/BottomNav";
import TopNav from "../components/TopNav";
import { SettingsPageStyles } from "../styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export default function AccountSettingsPage() {
  const navigation = useNavigation();

  const storeUserData = async (value, key) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      // saving error
    }
  };

  const handleLogout = async () => {
    const info = await AsyncStorage.getItem("sessionId");
    axios
      .post(
        `http://${
          Platform.OS === "ios" ? "192.168.1.75" : "10.0.2.2"
        }:8000/users/logout/`,
        {
          withCredentials: true,
          headers: { Coookie: info.split(";")[0].replace(/"/g, "") },
        }
      )
      .then((response) => {
        storeUserData("", "sessionId");
        storeUserData("", "userId");
        navigation.navigate("LoginPage");
      })
      .catch((error) => console.log(error));
  };

  return (
    <SafeAreaView style={SettingsPageStyles.container}>
      <StatusBar barStyle="default" />
      <View style={SettingsPageStyles.container}>
        <TopNav />
        <View style={SettingsPageStyles.middleContainer}>
          <Text style={{ fontSize: 24, marginBottom: 20 }}>
            Account Settings
          </Text>

          <TouchableOpacity
            style={{
              width: 200,
              padding: 15,
              backgroundColor: "red",
              borderRadius: 5,
              alignItems: "center",
              marginTop: 20,
            }}
            onPress={handleLogout}
          >
            <Text style={{ color: "white", fontSize: 18 }}>Log Out</Text>
          </TouchableOpacity>
        </View>

        <BottomNav />
      </View>
    </SafeAreaView>
  );
}
