// Navigation.js
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginPage from "./screens/loginPage";
import SignUpPage from "./screens/signupPage";
import HomePage from "./screens/homePage";
import GroupPage from "./screens/groupPage";
import MealPage from "./screens/mealPage";
import SettingsPage from "./screens/settingsPage";
import ShopPage from "./screens/shopPage";
import CreateMealPage from "./screens/createMealPage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DetailedGroupPage from "./screens/detailedGroupPage";
import { useNavigation } from "@react-navigation/native";
const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={
            AsyncStorage.getItem("sessionId") === "" ? HomePage : LoginPage
          }
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="signup"
          component={SignUpPage}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Group"
          component={GroupPage}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Meal"
          component={MealPage}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Settings"
          component={SettingsPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Shop"
          component={ShopPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetailedGroupPage"
          component={DetailedGroupPage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
