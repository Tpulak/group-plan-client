import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { GroupCardStyles } from "../../styles";

export default function UserGroupCard(props) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={GroupCardStyles.UserGroupContainer}
      id="hi"
      onPress={(x) => {
        navigation.navigate("Detailed Group Page", { group: props.group });
      }}
    >
      <View style={GroupCardStyles.UserGroupImagePlaceholder}></View>
      <View style={GroupCardStyles.UserGroupNameContainer}>
        <Text style={GroupCardStyles.UserGroupName}>
          {props.group.fields.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
