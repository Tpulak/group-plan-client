import {
  StyleSheet,
  View,
  Modal,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
  Alert,
} from "react-native";
import React, { useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CreateGroupModal(props) {
  const [groupType, setGroupType] = useState("PUBLIC");
  const [groupName, setGroupName] = useState("");

  const createGroup = async () => {
    const info = await AsyncStorage.getItem("sessionId");
    axios
      .post(
        `http://${
          Platform.OS === "ios" ? "192.168.1.75" : "10.0.2.2"
        }:8000/recipes/group/`,
        { name: groupName, privacy: groupType },
        {
          withCredentials: true,
          headers: { Coookie: info.split(";")[0].replace(/"/g, "") },
        } // Assuming you want to send the 'group' data in the request
      )
      .then((response) => {
        props.close(!props.modalVisible);
        props.userGroups();
        setGroupName("");
      })
      .catch((error) => {
        Alert.alert("Group Creation error", error.response.data.message, [
          {
            text: "OK",
            onPress: () => {
              // do something
            },
          },
        ]);
      });
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={() => {
        props.close(!props.modalVisible);
      }}
    >
      <View style={styles.modalView}>
        <Text style={styles.modalText}>Create Group</Text>
        <TextInput
          style={styles.groupInput}
          placeholder="Group Title"
          value={groupName}
          onChangeText={(groupNameInput) => {
            setGroupName(groupNameInput);
          }}
          // Add appropriate onChangeText and value props here
        />
        <View style={styles.groupTypeContainer}>
          <TouchableOpacity
            style={[
              styles.groupTypeButton,
              groupType === "PUBLIC" && styles.groupTypeButtonSelected,
            ]}
            onPress={() => setGroupType("PUBLIC")}
          >
            <Text style={styles.groupTypeButtonText}>Public</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.groupTypeButton,
              groupType === "PRIVATE" && styles.groupTypeButtonSelected,
            ]}
            onPress={() => setGroupType("PRIVATE")}
          >
            <Text style={styles.groupTypeButtonText}>Private</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.modalButtons}>
          <TouchableOpacity
            style={{
              backgroundColor: "#88B361",
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => {
              props.close(!props.modalVisible);
            }}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontSize: 16,
                padding: 6,
              }}
            >
              Cancel
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#88B361",
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={createGroup}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontSize: 16,
                padding: 6,
              }}
            >
              Create
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
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
