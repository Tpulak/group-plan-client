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

import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import BottomNav from "../components/bottomNav";
import axios from "axios";
import MuiIcon from "react-native-vector-icons/MaterialIcons";
import MuiCIcon from "react-native-vector-icons/MaterialCommunityIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SelectDropdown from "react-native-select-dropdown";
import GroupsCollections from "../components/GroupsCollection";

export default function Group() {
  // NAVIGATION
  const navigation = useNavigation();

  //PICKER
  const [selectedValue, setSelectedValue] = useState(0);

  //Groups is an empty array, this will hold data from api & setgroups will fetch data from backend
  const [searchedGroups, setSearchedGroups] = useState([]);

  //empty string that later on holds text enterted by user input
  const [searchText, setSearchText] = useState("");

  const [userGroups, setUserGroups] = useState([]);

  const [recommendedGroups, setRecommendedGroups] = useState([]);

  const handleSearchTextChange = (text) => {
    setSearchText(text);
  };

  const cancelSearch = () => {
    setSearchText("");
    // searchedGroups([]);
  };

  //------------------FOR DISPLAYING PUBLIC/PRIVATE GROUPS -------------------------------------------------------------------------
  const getGroups = () => {
    if (searchText === "") {
      return;
    }
    axios
      .get(
        `http://${
          Platform.OS === "ios" ? "192.168.1.209" : "10.0.2.2"
        }:8000/recipes/searchGroups/${searchText}`
      )
      .then((response) => {
        setSearchedGroups(response.data);
      })
      .catch((error) => console.log(error));
  };

  const getUserGroups = async () => {
    const info = await AsyncStorage.getItem("sessionId");
    axios
      .get(
        `http://${
          Platform.OS === "ios" ? "192.168.1.209" : "10.0.2.2"
        }:8000/recipes/getUserGroups/`,
        {
          withCredentials: true,
          headers: { Coookie: info.split(";")[0].replace(/"/g, "") },
        }
      )
      .then((response) => {
        setUserGroups(response.data);
      })
      .catch((error) => console.log(error));
  };

  const createGroup = async () => {
    const info = await AsyncStorage.getItem("sessionId");
    axios
      .post(
        `http://${
          Platform.OS === "ios" ? "192.168.1.209" : "10.0.2.2"
        }:8000/recipes/group/`,
        { name: "some_name9", privacy: "PUBLIC" },
        {
          withCredentials: true,
          headers: { Coookie: info.split(";")[0].replace(/"/g, "") },
        } // Assuming you want to send the 'group' data in the request
      )
      .then((response) => {
        getUserGroups();
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  useEffect(() => {
    getUserGroups();
  }, []);

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
            onChangeText={handleSearchTextChange}
            value={searchText}
            autoCorrect={false}
            returnKeyType="search"
            onSubmitEditing={getGroups}
          />
          <Pressable onPress={getGroups}>
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
            <TouchableOpacity
              style={{
                ...styles.createButton,
                backgroundColor: searchText ? "red" : "#88B361",
              }}
              onPress={searchText ? cancelSearch : createGroup}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "#fff",
                  marginBottom: 10,
                  marginTop: 10,
                  fontSize: 16,
                }}
              >
                {searchText ? "Cancel search" : "Create Group"}
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

          {searchText ? (
            <GroupsCollections groups={searchedGroups} />
          ) : (
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
                onSelect={(selectedItem, index) => {
                  setSelectedValue(index);
                }}
                defaultValueByIndex={0}
              />
              {selectedValue ? (
                <GroupsCollections groups={recommendedGroups} showbtn={true} />
              ) : (
                <GroupsCollections groups={userGroups} showbtn={false} />
              )}
            </View>
          )}
        </View>
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
    borderWidth: 2,
    overflow: "hidden",
  },
  searchInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 10,
    width: "90%",
  },
  createButton: {
    borderRadius: 5,
    marginBottom: 10,
  },

  pickerContainer: {
    marginTop: 1,
    width: "100%",
    // flex: 1,
  },
  Join_button: {
    margin: 30,
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#88B361",
    marginLeft: "auto",
  },
  groupRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  groupName: {
    marginLeft: 10,
    fontSize: 18,
  },
});

// Apply platform-specific styles
if (Platform.OS === "ios") {
  styles.pickerContainer = {
    marginTop: 1,
    backgroundColor: "white", // Adjust this value to control the space between the button and the Picker for iOS
  };
} else if (Platform.OS === "android") {
  styles.pickerContainer = {
    marginTop: 20,
    backgroundColor: "white", // Adjust this value to control the space between the button and the Picker for Android
  };
}
