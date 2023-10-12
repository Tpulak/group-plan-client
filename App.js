import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import {useEffect, useState} from 'react';
import { AppLoading } from 'expo'; 
import Navigator from './routes/homeStack';

//testing
import Login from './screens/login';
import Signup from './screens/signup';
import Home from './screens/home';
import Group from './screens/group';


export default function App() {
  return (

  //splash screen

  //navigation
   //<Navigator />

  //testing
   <Login /> 
   //<Signup />
   //<Home />
   //<Group />

  );
}

