import React from 'react';
import { Button, StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';



export default function Login() {
  const navigation = useNavigation();

  //NAV: Signup -> Signup Page
  const handleSignUpPress = () => {
    navigation.navigate('signup'); // 'SignUp' should be the name of your sign-up screen
  };

  //NAV: Login -> Homepage
  const handleLogInPress = () => {
    navigation.navigate('Home'); 
  };

  return (

    <View style={styles.container}>

      <View style={{ alignItems: 'flex-start' }}>
        <Text> GROUP PLAN </Text>
      </View>


      <Image
        source={require('../assets/icons/logoPH.png')}
        style={{ width: 100, height: 100 }}
      />


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
          onPress={handleLogInPress}
          // onPress={() => Alert.alert('Button pressed')}
        />
      </View>

      <Text>Forgot Password?</Text>

      <View>
        <Text>
          Don't have an account?{' '}
          <TouchableOpacity onPress={handleSignUpPress}>
            <Text style={{ textDecorationLine: 'underline' }}>Sign Up</Text>
          </TouchableOpacity>
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

