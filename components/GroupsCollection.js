import React from "react";
import { Button, StyleSheet, Text, View, ScrollView } from "react-native";

export default function GroupsCollections(props) {
  return (
    <ScrollView>
      {props.groups.map((group) => {
        return (
          <View
            style={{
              flexDirection: "row",
              alignContent: "center",
              width: "100%",
              justifyContent: "space-around",
              height: 50,
            }}
          >
            {/* displays name of current group*/}
            <Text style={{ fontSize: 18, textAlign: "center" }}>
              {group.fields.name}
            </Text>
            {group.fields.privacy === "PUBLIC" ? (
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
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },

  title: {
    fontSize: 30,
    color: "black",
    fontWeight: "bold",
  },
});
