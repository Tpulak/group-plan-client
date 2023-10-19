import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Signup() {

  //NAV
  const navigation = useNavigation();

  //NAV: SignUp -> Homepage
  const handleSignUpPress = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}> Create an account </Text>


      <View style={{ alignItems: 'flex-start' }}>
        <Text style={{ textAlign: 'left' }}>First Name</Text>
        <View style={styles.input}>
          <TextInput placeholder=" " />
        </View>
      </View>

      <View style={{ alignItems: 'flex-start' }}>
        <Text style={{ textAlign: 'left' }}> Last Name</Text>
        <View style={styles.input}>
          <TextInput placeholder=" " />
        </View>
      </View>

      <View style={{ alignItems: 'flex-start' }}>
        <Text style={{ textAlign: 'left' }}>Email</Text>
        <View style={styles.input}>
          <TextInput placeholder=" " />
        </View>
      </View>

      <View style={{ alignItems: 'flex-start' }}>
        <Text style={{ textAlign: 'left' }}>Username </Text>
        <View style={styles.input}>
          <TextInput placeholder=" " />
        </View>
      </View>

      <View style={{ alignItems: 'flex-start' }}>
        <Text style={{ textAlign: 'left' }}>Password </Text>
        <View style={styles.input}>
          <TextInput placeholder=" " />
        </View>
      </View>

      <View style={{ alignItems: 'flex-start' }}>
        <Text style={{ textAlign: 'left' }}>Confirm Password </Text>
        <View style={styles.input}>
          <TextInput placeholder=" " />
        </View>
      </View>


      <View style={styles.signup_button}>
        <Button
          title="Sign Up"
          color="green"
          onPress={handleSignUpPress}
        />
      </View>


    </View >
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // #9DC183
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    backgroundColor: 'ECECEC',
    margin: 10,
    borderWidth: 1,
    padding: 8,
    width: 210,

  },

  signup_button: {
    margin: 10,

  },

  title: {
    fontSize: 30,
  },
  text: {
    marginTop: 25,
  }

});
