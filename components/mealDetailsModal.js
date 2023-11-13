import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
  Modal,
  Platform,
  TouchableOpacity,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

export default function MealDetailsModal(props) {
  // NAVIGATION
  const navigation = useNavigation();

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.show}
      onRequestClose={() => {
        props.close(false);
      }}
    >
      <View style={styles.modalView}></View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalButton: {
    padding: 10,
    backgroundColor: "#88B631",
    borderRadius: 5,
    width: 100,
  },
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
