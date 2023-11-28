import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { GroupCardStyles } from "../../styles";

export default function GroupCard(props) {
  // NAVIGATION
  const handleJoin = async (groupId) => {
    // const groupId = await x._dispatchInstances.memoizedProps.testID;
    const userId = await AsyncStorage.getItem("userId");
    const info = await AsyncStorage.getItem("sessionId");
    axios
      .post(
        `http://${
          Platform.OS === "ios" ? "192.168.1.75" : "10.0.2.2"
        }:8000/recipes/group/add`,
        {
          user_id: userId,
          group_id: groupId,
        },
        {
          withCredentials: true,
          headers: { Coookie: info.split(";")[0].replace(/"/g, "") },
        } // Assuming you want to send the 'group' data in the request
      )
      .then(() => {
        props.updateUserGroups();
      });
  };
  return (
    <View style={GroupCardStyles.GroupContainer}>
      <View style={GroupCardStyles.GroupNameContainer}>
        <Text style={GroupCardStyles.GroupName}>{props.group.fields.name}</Text>
      </View>

      <TouchableOpacity style={GroupCardStyles.GroupBtn}>
        {props.group.fields.privacy === "PUBLIC" ? (
          <Text style={{ textAlign: "center" }}>Join</Text>
        ) : (
          <Text style={{ textAlign: "center" }}>Request</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}
