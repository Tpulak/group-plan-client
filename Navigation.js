// Navigation.js
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import GroupsPage from "./pages/GroupsPage";
import RecipesPage from "./pages/RecipesPage";
import CreateRecipePage from "./pages/CreateRecipePage";
import AccountSettingsPage from "./pages/AccountSettingsPage";
import DetailedGroupPage from "./pages/DetailedGroupPage";
import CartPage from "./pages/CartPage";
import PollPage from "./pages/PollPage";
// import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createStackNavigator();

const Navigation = () => {
  // const info = await AsyncStorage.getItem("sessionId");
  // info = info.split(";")[0].replace(/"/g, "");
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LandingPage"
          component={LandingPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUpPage"
          component={SignUpPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GroupsPage"
          component={GroupsPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RecipesPage"
          component={RecipesPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Create Recipe Page"
          component={CreateRecipePage}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AccountSettingsPage"
          component={AccountSettingsPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetailedGroupPage"
          component={DetailedGroupPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CartPage"
          component={CartPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Poll Page"
          component={PollPage}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
