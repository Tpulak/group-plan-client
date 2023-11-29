import React from "react";
import { Bar } from "react-native-progress";
import { Dimensions, Text } from "react-native";

export const placeholders = [
  <Bar
    progress={0}
    width={Dimensions.get("window").width * 0.94}
    height={35}
    animated={true}
    style={{ marginBottom: 15 }}
    color="#FFBA00"
    key={"PH1"}
  >
    <Text
      style={{
        position: "absolute",
        color: "#88B361",
        fontSize: 15,
        textAlign: "center",
        padding: 8,
      }}
    >
      N/A
    </Text>
  </Bar>,
  <Bar
    progress={0}
    width={Dimensions.get("window").width * 0.94}
    height={35}
    animated={true}
    style={{ marginBottom: 15 }}
    color="#FFBA00"
    key={"PH2"}
  >
    <Text
      style={{
        position: "absolute",
        color: "#88B361",
        fontSize: 15,
        textAlign: "center",
        padding: 8,
      }}
    >
      N/A
    </Text>
  </Bar>,
];
