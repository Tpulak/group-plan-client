import { Button, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import React from 'react';


        

export default function Login() {
    return (
<View style={styles.container}>
          <Image
          source={require('../assets/icons/logoPH.png')}
          style={{ width: 100, height: 100 }}
          />

<View style={{ alignItems: 'flex-start' }}>
  <Text>SIGN IN </Text>
</View>

<View style={{ alignItems: 'flex-start' }}>
  <Text style={{ textAlign: 'left' }}>Email</Text>
  <View style={styles.input}>
    <TextInput placeholder=" " />
  </View>
</View>

<View style={{ alignItems: 'flex-start' }}>
  <Text style={{ textAlign: 'left' }}>Password</Text>
  <View style={styles.input}>
    <TextInput placeholder=" " />
  </View>
</View>


<View style={styles.Login_button}>
  <Button
    title="Login"
    color="green"
    onPress={() => Alert.alert('Button pressed')}
  />
</View>

<Text>Forgot Password?</Text>

<View>
  <Text>
    Don't have an account?{' '}
    <Text style={{ textDecorationLine: 'underline' }}>Sign Up</Text>
  </Text>
</View>

</View >
);
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



  Login_button: {
    margin: 10,
  },
}
);

