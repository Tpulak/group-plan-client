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

export default function GroupsCollections(props) {
  const handleJoin = async (x) => {
    const groupId = await x._dispatchInstances.memoizedProps.testID;
    const userId = await AsyncStorage.getItem("userId");
    const info = await AsyncStorage.getItem("sessionId");
    axios
      .post(
        `http://${
          Platform.OS === "ios" ? "192.168.1.51" : "10.0.2.2"
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
  const driod = async (x) => {
    console.log(x._dispatchInstances.memoizedProps);
  };
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
              paddingRight: 40,
              paddingLeft: 40,
              marginTop: 20,
              borderWidth: 2,
              borderColor: "black",
              paddingVertical: Platform.OS === "ios" ? 10 : 0,
            }}
            key={group.fields.name}
          >
            {/* displays name of current group*/}
            <Text style={{ fontSize: 18, textAlign: "center" }}>
              {group.fields.name.charAt(0).toUpperCase() +
                group.fields.name.slice(1)}
            </Text>
            {Platform.OS === "ios" ? (
              group.fields.privacy === "PUBLIC" ? (
                props.showbtn ? (
                  <TouchableOpacity
                    onPress={handleJoin}
                    testID={group.pk}
                    style={styles.join_button}
                  >
                    <Text style={{ textAlign: "center", color: "#fff" }}>
                      Join
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <></>
                )
              ) : props.showbtn ? (
                <TouchableOpacity
                  onPress={handleJoin}
                  testID={group.pk}
                  style={styles.join_button}
                >
                  <Text style={{ textAlign: "center", color: "#fff" }}>
                    Request
                  </Text>
                </TouchableOpacity>
              ) : (
                <></>
              )
            ) : group.fields.privacy === "PUBLIC" ? (
              props.showbtn ? (
                <Button
                  title="Join"
                  onPress={handleJoin}
                  style={styles.join_button}
                  color="#88B361"
                  testID={`${group.pk}`}
                />
              ) : (
                <></>
              )
            ) : props.showbtn ? (
              <Button
                title="Request"
                onPress={handleJoin}
                color="#88B361"
                style={styles.join_button}
                testID={`${group.pk}`}
              />
            ) : (
              <></>
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
  join_button: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#88B361",
    marginLeft: "auto",
    width: "auto",
    height: 30,
  },
});
