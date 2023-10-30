import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import TopNav from "../components/topNav";
import BottomNav from "../components/bottomNav";
import { SafeAreaView } from "react-native";
import { StatusBar } from "react-native";

export default function Meal() {
  // NAVIGATION
  const navigation = useNavigation();

  // Logout Button -> Login Page
  const handleLogoutPress = () => {
    navigation.navigate("Login");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="default" />
      <View style={styles.container}>
        {/* TOP */}
        <TopNav />

        {/* MIDDLE */}
        <View style={styles.middleContainer}>
          <View style={styles.section}>
            {/* <Text style={styles.sectionTitle}>Change Username</Text> */}
            <Button
              title="Change Username"
              color="green"
              onPress={() => {
                // Add logic to handle username change here
              }}
            />
          </View>
          <View style={styles.section}>
            {/* <Text style={styles.sectionTitle}>Change Password</Text> */}
            <Button
              title="Change Password"
              color="green"
              onPress={() => {
                // Add logic to handle password change here
              }}
            />
          </View>
          <TouchableOpacity
            style={styles.logoutButton}
            onPress={handleLogoutPress}
          >
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.deleteButton}>
            <Text style={styles.deleteText}>Delete Account</Text>
          </TouchableOpacity>
        </View>

        {/* BOTTOM */}
        <BottomNav />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "green",
    padding: 25,
  },
  iconContainer: {
    flex: 1,
    alignItems: "center",
    width: 50,
    height: 50,
  },
  title: {
    flex: 2,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  // middleContainer: {
  //     flex: 3,
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     backgroundColor: 'white',
  // },
  recommendedMeals: {
    fontSize: 18,
    marginBottom: 10,
  },
  imageContainer: {
    width: 200,
    height: 200,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    alignItems: "center",
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "green",
    width: "100%",
    padding: 25,
  },

  middleContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "bold",
    textAlign: "center",
  },

  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: 200,
  },
  deleteButton: {
    backgroundColor: "red",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  deleteText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },

  logoutButton: {
    backgroundColor: "green", // You can change the color as needed
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginRight: 10, // Add some margin to separate it from other elements
    marginBottom: 40,
    marginTop: 100,
  },
  logoutText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },

  Icontxt: {
    textAlign: "center",
  },
});
