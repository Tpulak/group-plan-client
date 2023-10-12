import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';

export default function Signup() {
    return (
        <View style={styles.container}>

        <Text style={styles.title}>Sign Up for Group Plan</Text>

        <Text style={styles.text}>First Name</Text>

        <View style={styles.input}>
          <TextInput placeholder="First Name" />
        </View>
  
        <Text style={styles.text}>Last Name</Text>

        <View style={styles.input}>
          <TextInput placeholder="Last Name" />
        </View>
  
        <Text style={styles.text}>Email</Text>

        <View style={styles.input}>
          <TextInput placeholder="Email" />
        </View>  

        <Text style={styles.text}>Username</Text>

        <View style={styles.input}>
          <TextInput placeholder="Username" />
        </View> 

        <Text style={styles.text}>Password</Text>

        <View style={styles.input}>
          <TextInput placeholder="Password" />
        </View> 
  
        <View style={styles.Login_button}>
          <Button
            title="Sign Up" />
        </View>
  
  
      </View >
    )

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
      marginTop: 25,
    },

    title: {
        fontSize: 30,
    },
    text: {
        marginTop: 25,
    }
  
  });
  