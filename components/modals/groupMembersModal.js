import { Text, View, Modal, TouchableOpacity, StyleSheet } from "react-native";
import { MembersModalStyles } from "../../styles";
import { useEffect, useState } from "react";
import axios from "axios";

export default function GroupMembersModal(props) {
  const [members, setMembers] = useState([]);
  const [owner, setOwner] = useState("");
  const getMembers = () => {
    axios
      .get(
        `http://${
          Platform.OS === "ios" ? "192.168.1.75" : "10.0.2.2"
        }:8000/recipes/group/members/${props.groupID}`
      )
      .then((response) => {
        setMembers(response.data.filter((member) => member.pk != props.owner));
        setOwner(
          response.data.filter((member) => member.pk === props.owner)[0]
        );
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getMembers();
  }, []);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.show}
      onRequestClose={() => {
        props.close(false);
      }}
    >
      <View style={MembersModalStyles.modalView}>
        <TouchableOpacity
          onPress={() => {
            props.close(false);
          }}
        >
          <Text style={{ fontWeight: "bold", marginBottom: 10, fontSize: 18 }}>
            Owner:{" "}
            <Text style={{ fontWeight: "normal" }}>{owner.username}</Text>
          </Text>

          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>Members</Text>
          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />
          {members.map((member) => {
            return (
              <Text key={member.username} style={{ fontSize: 18 }}>
                {member.username}
              </Text>
            );
          })}
          {/* Buttons */}
          <View style={MembersModalStyles.buttonContainer}>
            {/* CLOSE BUTTON */}
            <TouchableOpacity
              onPress={() => {
                props.close(false);
              }}
              style={MembersModalStyles.closeButton}
            >
              <Text style={MembersModalStyles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
