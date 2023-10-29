import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
  SafeAreaView,
  StatusBar,
  Pressable,
  TouchableOpacity,
} from "react-native";

import { Picker } from "@react-native-picker/picker";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import BottomNav from "../components/bottomNav";
import axios from "axios";
import MuiIcon from "react-native-vector-icons/MaterialIcons";
import MuiCIcon from "react-native-vector-icons/MaterialCommunityIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SelectDropdown from "react-native-select-dropdown";

export default function Group() {
  // NAVIGATION
  const navigation = useNavigation();

  //PICKER
  const [selectedValue, setSelectedValue] = useState("My Group");

  //Groups is an empty array, this will hold data from api & setgroups will fetch data from backend
  const [group, setGroups] = useState([]);

  //empty string that later on holds text enterted by user input
  const [searchText, setSearchText] = useState("");

  //------------------FOR DISPLAYING PUBLIC/PRIVATE GROUPS -------------------------------------------------------------------------
  const createGroup = async () => {
    const info = await AsyncStorage.getItem("sessionId");
    axios
      .post(
        `http://${
          Platform.OS === "ios" ? "192.168.1.51" : "10.0.2.2"
        }:8000/recipes/group/`,
        { name: "some_name4", privacy: "PUBLIC" },
        {
          withCredentials: true,
          headers: { Coookie: info.split(";")[0].replace(/"/g, "") },
        } // Assuming you want to send the 'group' data in the request
      )
      .then((response) => {
        setGroups(response.body); // stores data into group state
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  const handleSearchTextChange = (text) => {
    setSearchText(text);
  };

  //Function to render group based on search
  const renderGroups = () => {
    const renderedGroups = [];

    //loop through the group array to check each group
    for (let i = 0; i < group.length; i++) {
      const currentGroup = group[i];
      if (currentGroup.name.toLowerCase().includes(searchText.toLowerCase())) {
        renderedGroups.push(
          <View key={i}>
            {/* displays name of current group*/}
            <Text>{currentGroup.name}</Text>
            {currentGroup.type === "public" ? (
              <Button
                title="Join"
                onPress={() => handleJoin(currentGroup.id)}
              />
            ) : (
              <Button
                title="Request"
                onPress={() => handleRequest(currentGroup.id)}
              />
            )}
          </View>
        );
      }
    }
    return renderedGroups; //returns the array
  };
  //------------------FOR DISPLAYING PUBLIC/PRIVATE GROUPS -------------------------------------------------------------------------

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="default" />
      <View style={styles.container}>
        {/* TOP */}

        <Text style={styles.title}>Group Plan</Text>

        {/* MIDDLE */}
        <View style={styles.topContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search public and private groups..."
            onChangeText={setSearchText}
            value={searchText}
            autoCorrect={false}
            returnKeyType="search"
            onSubmitEditing={() => console.log("submitted")}
          />
          <Pressable onPress={() => console.log("clicked")}>
            <MuiIcon
              name="search"
              size={40}
              color="#FFBA00"
              style={{ backgroundColor: "#fff", borderRadius: 5, padding: 5 }}
            />
          </Pressable>
        </View>
        <View style={styles.middleContainer}>
          {Platform.OS === "ios" ? (
            <TouchableOpacity style={styles.createButton} onPress={createGroup}>
              <Text
                style={{
                  textAlign: "center",
                  color: "#fff",
                  marginBottom: 10,
                  marginTop: 10,
                  fontSize: 16,
                }}
              >
                Create Group
              </Text>
            </TouchableOpacity>
          ) : (
            <Button
              title="Create Group"
              color="#88B361"
              onPress={createGroup}
              style={styles.createButton}
            />
          )}
          {/* <Button
            title="Create Group"
            color="#88B361"
            onPress={createGroup}
            style={styles.createButton}
          /> */}
          <View style={styles.pickerContainer}>
            <SelectDropdown
              data={["My Groups", "Recommened Groups"]}
              renderDropdownIcon={() => {
                return (
                  <MuiCIcon
                    name="chevron-down"
                    size={20}
                    color="#FFBA00"
                    style={{
                      backgroundColor: "transparent",
                      borderRadius: 5,
                      padding: 5,
                    }}
                  />
                );
              }}
              buttonStyle={{ width: "100%" }}
            />
            {/* <Picker
              selectedValue={selectedValue}
              style={styles.dropdown}
              onValueChange={(itemValue) => setSelectedValue(itemValue)}
            >
              <Picker.Item label="My Groups" value="mygroup" />
              <Picker.Item
                label="Recommended Groups"
                value="recommendedgroups"
              />
            </Picker> */}
          </View>
        </View>

        {/* DROP DOWN MENU FOR MY GROUPS & RECOMMENDED GROUPS  */}

        {/* {selectedValue === "My Group"
          ? renderGroups()
          : selectedValue === "Recommended Groups"
          ? renderRecommendedGroups()
          : null} */}

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
    flex: 0,
    flexDirection: "row",
    alignContent: "center",
    backgroundColor: "white",
    padding: 20,
  },
  title: {
    fontSize: 30,
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
  middleContainer: {
    flex: 1,
    alignContent: "center",
    backgroundColor: "white",
    padding: 20,
    borderColor: "black",
    borderWidth: 0,
  },
  searchInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 10,
    width: "90%",
  },
  createButton: {
    backgroundColor: "#88B361",
    borderRadius: 5,
    marginBottom: 10,
  },

  // groupRow: {
  //   flexDirection: "row",
  //   alignItems: "center",
  //   marginBottom: 10,
  // },
  // groupName: {
  //   marginLeft: 10,
  //   fontSize: 18,
  // },
  // bottomContainer: {
  //   flexDirection: "row",
  //   justifyContent: "space-around",
  //   position: "absolute",
  //   bottom: 0,
  //   width: "100%",
  //   backgroundColor: "green",
  //   padding: 10,
  //   alignItems: "center",
  // },
  // icon: {
  //   padding: 10,
  // },

  // Join_button: {
  //   margin: 30,
  //   padding: 5,
  //   borderRadius: 5,
  //   backgroundColor: "#88B361",
  //   marginLeft: "auto",
  // },

  // Recgroup: {
  //   fontSize: 19,
  //   fontWeight: "bold",
  // },
  // Icontxt: {
  //   textAlign: "center",
  // },

  pickerContainer: {
    marginTop: 1,
    width: "100%",
    // flex: 1,
  },
});

// Apply platform-specific styles
if (Platform.OS === "ios") {
  styles.pickerContainer = {
    marginTop: 1,
    flex: 1,
    backgroundColor: "white", // Adjust this value to control the space between the button and the Picker for iOS
  };
} else if (Platform.OS === "android") {
  styles.pickerContainer = {
    marginTop: 20,
    flex: 1,
    backgroundColor: "white", // Adjust this value to control the space between the button and the Picker for Android
  };
}
