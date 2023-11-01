import { Card, Icon } from "react-native-elements";
import { Button, Text, Platform, TouchableOpacity } from "react-native";
import React from "react";

export default function HomeMealCard(props) {
  return (
    <Card>
      <Card.Title>{props.name}</Card.Title>
      <Card.Divider />
      <Card.Image source={{ uri: props.image }} />
      <Text style={{ marginBottom: 10 }}>
        The idea with React Native Elements is more about component structure
        than actual design.
      </Text>
      {Platform.OS === "ios" ? (
        <TouchableOpacity
          style={{
            backgroundColor: "#88B361",
            borderRadius: 5,
            height: 30,
            flex: 1,
            justifyContent: "center",
          }}
        >
          <Text style={{ textAlign: "center", color: "#fff" }}>VIEW NOW</Text>
        </TouchableOpacity>
      ) : (
        <Button
          icon={<Icon name="code" color="#ffffff" />}
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="VIEW NOW"
          color="#88B361"
        />
      )}
    </Card>
  );
}
