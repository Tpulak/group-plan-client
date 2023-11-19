import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GroupCard from "../components/groupCard";
import UserGroupCard from "../components/userGroupsCard";

export default function GroupsCollections(props) {
  return (
    <ScrollView style={styles.topContainer}>
      {props.groups.map((group) => {
        if (props.showbtn) {
          console.log(group);
          return (
            <GroupCard
              key={group.pk}
              group={group}
              updateUserGroups={props.updateUserGroups}
            />
          );
        } else {
          return <UserGroupCard group={group} key={group.pk} />;
        }
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    marginTop: 10,
  },

  title: {
    fontSize: 30,
    color: "black",
    fontWeight: "bold",
  },
  join_button: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#88B361",
    marginLeft: "auto",
    width: "auto",
    height: 30,
  },
});

// navigation.navigate("DetailedGroupPage", { group: group });
