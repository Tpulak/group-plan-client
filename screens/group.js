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
  Switch,
  Modal,
} from "react-native";

import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import BottomNav from "../components/bottomNav";
import ModalView from "../components/ModalView";
import axios from "axios";
import MuiIcon from "react-native-vector-icons/MaterialIcons";
import MuiCIcon from "react-native-vector-icons/MaterialCommunityIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SelectDropdown from "react-native-select-dropdown";
import GroupsCollections from "../components/GroupsCollection";

export default function Group() {

  const [groupType, setGroupType] = useState("public"); // State for group type, defaulting to "public"

  // NAVIGATION
  const navigation = useNavigation();

  //CREATE GROUP
  const [modalVisible, setModalVisible] = useState(false);
  const [groupName, setGroupName] = useState(""); // State to hold group name
  const [isPublic, setIsPublic] = useState(true); // State for the switch

  const handleGroupCreatePress = () => {
    console.log("handleGroupCreatePress called");
    setModalVisible(true);
  };


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
          Platform.OS === "ios" ? "localhost" : "10.0.2.2"
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
          Platform.OS === "ios" ? "localhost" : "10.0.2.2"
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
     setModalVisible(true);
    // const info = await AsyncStorage.getItem("sessionId");
    // axios
    //   .post(
    //     `http://${
    //       Platform.OS === "ios" ? "localhost" : "10.0.2.2"
    //     }:8000/recipes/group/`,
    //     // { name: "demoGroup103", privacy: "PRIVATE" },
    //     {
    //       withCredentials: true,
    //       headers: { Coookie: info.split(";")[0].replace(/"/g, "") },
    //     } // Assuming you want to send the 'group' data in the request
    //   )
    //   .then((response) => {
    //     getUserGroups();
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching data: ", error.response.data);
    //   });
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

            // <Button
            //   title={searchText ? "Cancel search" : "Create Group"}
            //   color={searchText ? "red" : "#88B361"}
            //   onPress={searchText ? cancelSearch : createGroup}
            //   style={styles.createButton}
            // />
            <Button
              title="Create Group"
              color={searchText ? "red" : "#88B361"}
              onPress={handleGroupCreatePress}
              style={styles.createButton}
            />

          )}

          {searchText ? (
            <GroupsCollections
              groups={searchedGroups}
              showbtn={true}
              updateUserGroups={getUserGroups}
            />
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
                <GroupsCollections
                  groups={recommendedGroups}
                  showbtn={true}
                  updateUserGroups={getUserGroups}
                />
              ) : (
                <GroupsCollections
                  groups={userGroups}
                  showbtn={false}
                  updateUserGroups={getUserGroups}
                />
              )}
            </View>
          )}
        </View>
        <BottomNav />
        
        {/* MODAL VIEW */}
        <ModalView modalVisible={modalVisible} close={setModalVisible} userGroups={getUserGroups}></ModalView>

        {/* <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Create Group</Text>
            <TextInput
              style={styles.groupInput}
              placeholder="Group Title"
              
            />
            <View style={styles.groupTypeContainer}>
              <TouchableOpacity
                style={[
                  styles.groupTypeButton,
                  groupType === "public" && styles.groupTypeButtonSelected,
                ]}
                onPress={() => setGroupType("public")}
              >
                <Text style={styles.groupTypeButtonText}>Public</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.groupTypeButton,
                  groupType === "private" && styles.groupTypeButtonSelected,
                ]}
                onPress={() => setGroupType("private")}
              >
                <Text style={styles.groupTypeButtonText}>Private</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.modalButtons}>
              <Button
                title="Cancel"
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              />
              <Button
                title="Create"
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              />
            </View>
          </View>
        </Modal> */}

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

  //MODAL
  modalView: {
    margin: 20,
    marginTop: 100,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: 24,
    marginBottom: 15,
    textAlign: "center",
  },
  groupInput: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  
  groupTypeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  groupTypeText: {
    fontSize: 18,
    marginLeft: 10,
  },

  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 20,
  },

  radioButtons: {
    flexDirection: "row",
    marginBottom: 10,
  },
  radioButton: {
    borderWidth: 1,
    borderColor: "#888",
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  radioButtonSelected: {
    backgroundColor: "#888",
  },
  radioButtonText: {
    color: "#888",
  },
  
  groupTypeContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  groupTypeButton: {
    borderWidth: 1,
    borderColor: "#888",
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  groupTypeButtonSelected: {
    backgroundColor: "#88B361",
  },
  groupTypeButtonText: {
    color: "black",
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
