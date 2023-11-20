import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";

export default function MealDetailsModal(props) {

  //CONVERTING INGREDIENTS TO AN ARRAY
  const ingredientsString = (props.meal && props.meal.fields && props.meal.fields.ingredients) || '';
  const ingredientsArray = ingredientsString
    .replace('[', '') 
    .replace(']', '') 
    .split(',')        

  //CONVERTING INSTRUCTIONS TO AN ARRAY
  const instructionsString = (props.meal && props.meal.fields && props.meal.fields.instructions) || '';
  const instructionsArray = instructionsString
    .replace('[', '') 
    .replace(']', '') 
    .split(',')     

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
          {/* NAME */}
          <Text style={{ fontSize: 30, textAlign: 'center', fontWeight: 'bold' }}>{props.meal?.fields.name}</Text>
          
          <View>
            {/* INGREDIENTS */}
            <Text style={styles.sectionHeader}>INGREDIENTS:</Text>
            <Text style={styles.sectionContent}>
              {ingredientsArray.join(', ')}
            </Text>


            {/* INSTRUCTIONS */}
            <Text style={styles.sectionHeader}>INSTRUCTIONS:</Text>
            <View>
              {instructionsArray.map((instruction, index) => (
                <View key={index} style={{ flexDirection: 'row', marginBottom: 5 }}>
                  <Text style={{ marginRight: 5 }}>{index + 1}.</Text>
                  <Text>{instruction}</Text>
                </View>
              ))}
            </View>

          </View>

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

          {/* EXPORT BUTTON */}
          <TouchableOpacity
            onPress={() => {
              // EXPORT BUTTON LOGIC TO BE ADDED
              console.log("Export button pressed");
            }}
            style={styles.exportButton}
          >
            <Text style={styles.buttonText}>Export</Text>
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
    fontWeight: 'bold',
    textAlign: 'left',
  },
  sectionContent: {
    textAlign: 'left',
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  closeButton: {
    padding: 10,
    backgroundColor: "#888",
    borderRadius: 5,
    width: '48%',
    alignItems: 'center',
  },
  exportButton: {
    padding: 10,
    backgroundColor: "#88B631",
    borderRadius: 5,
    width: '48%', 
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },

});