import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Text>Making Meal prepping Easier</Text>

      <View style={styles.input}>
        <TextInput placeholder="Email/Username" />
      </View>

      <View style={styles.input}>
        <TextInput placeholder="Password" />
      </View>

      <View style={styles.Login_button}>
        <Button
          title="Login" />
      </View>

      <Text> Don't have an account? Sign Up</Text>


    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9DC183',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: 'white',
    margin: 10,
    borderWidth: 1,
    padding: 16,
    width: 210,

  },

  Login_button: {
    backgroundColor: 'white',
    alignItems: 'center',
  },

});
