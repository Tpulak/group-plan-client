import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform
} from "react-native";

import { Picker } from '@react-native-picker/picker';
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import BottomNav from "../components/bottomNav";
import { Platform } from "react-native";
import axios from 'axios';

export default function Group() {
  // NAVIGATION
  const navigation = useNavigation();

  //PICKER 
  const [selectedValue, setSelectedValue] = useState("My Group");

  //Groups is an empty array, this will hold data from api & setgroups will fetch data from backend
  const [group, setGroups] = useState([]);

  //empty string that later on holds text enterted by user input
  const [SearchText, setSearchText] = useState("");


  //------------------FOR DISPLAYING PUBLIC/PRIVATE GROUPS -------------------------------------------------------------------------
  //fetch data from backend api
  useEffect(() => {

    // axios.get('api for backend')
    //   .then(response => {
    axios
      .post(
        `http://${Platform.OS === "ios" ? "localhost" : "10.0.2.2"}:8000/users/login/`,
        { data: group } // Assuming you want to send the 'group' data in the request
      )
      .then(response => {
        setGroups(response.data.group); // stores data into group state
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  const handleSearchTextChange = (test) => {
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
            {currentGroup.type === 'public' ? (
              <Button title="Join"
                onPress={() => handleJoin(currentGroup.id)}
              />) : (
                <Button
                  title="Request"
                  onPress={() => handleRequest(currentGroup.id)}
                />)
            }
          </View>
        );
      }
    }
    return renderedGroups; //returns the array 

  };
  //------------------FOR DISPLAYING PUBLIC/PRIVATE GROUPS -------------------------------------------------------------------------

  return (
    <View style={styles.container}>


      {/* TOP */}
      <View style={styles.topContainer}>
        <Text style={styles.title}>Group Plan</Text>
      </View>

      {/* MIDDLE */}
      <View style={styles.middleContainer}>
        {/* <TextInput
          style={styles.searchInput}
          placeholder="Search public and private groups..."
        // onChangeText={handleTextChange}
        // value={searchText}
        /> */}
        <Button
          title="Create Group"
          color="#88B361"
          onPress={() => { }}
          style={styles.createButton}
        />
      </View>

      {/* DROP DOWN MENU FOR MY GROUPS & RECOMMENDED GROUPS  */}
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedValue}
          style={styles.dropdown}
          onValueChange={(itemValue => setSelectedValue(itemValue)}
        >
          <Picker.Item label="My Group" value="mygroup" />
          <Picker.Item label="Recommended Groups" value="recommendedgroups" />
        </Picker>
      </View>

      {selectedValue === "My Group" ? renderUserGroups() : selectedValue === "Recommended Groups" ? renderRecommendedGroups() : null}



      {/* BOTTOM */}
      <BottomNav />


    </View >
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  topContainer: {
    padding: 25,
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    color: "black",
    fontWeight: "bold",
  },
  middleContainer: {
    backgroundColor: "white",
    padding: 20,
  },
  searchInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
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
    // flex: 1,

  },


});


// Apply platform-specific styles
if (Platform.OS === 'ios') {
  styles.pickerContainer = {
    marginTop: 1,
    flex: 1,
    backgroundColor: "white",// Adjust this value to control the space between the button and the Picker for iOS
  };
} else if (Platform.OS === 'android') {
  styles.pickerContainer = {
    marginTop: 20,
    flex: 1,
    backgroundColor: "white",// Adjust this value to control the space between the button and the Picker for Android
  };
}