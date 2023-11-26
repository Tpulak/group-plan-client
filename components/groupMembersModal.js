import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";

export default function MealDetailsModal(props) {
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
