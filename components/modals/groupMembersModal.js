import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";

export default function GroupMembersModal(props) {
  //CONVERTING INGREDIENTS TO AN ARRAY

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.show}
      onRequestClose={() => {
        props.close(false);
      }}
    >
      <View style={styles.modalView}>
        <TouchableOpacity
          onPress={() => {
            props.close(false);
          }}
        >
          {/* Buttons */}
          <View style={styles.buttonContainer}>
            {/* CLOSE BUTTON */}
            <TouchableOpacity
              onPress={() => {
                props.close(false);
              }}
              style={styles.closeButton}
            >
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
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
  sectionHeader: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: "bold",
    textAlign: "left",
  },
  sectionContent: {
    textAlign: "left",
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  closeButton: {
    padding: 10,
    backgroundColor: "#888",
    borderRadius: 5,
    width: "48%",
    alignItems: "center",
  },
  exportButton: {
    padding: 10,
    backgroundColor: "#88B631",
    borderRadius: 5,
    width: "48%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
  },
});
