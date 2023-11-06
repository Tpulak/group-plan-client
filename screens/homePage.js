import {
  ScrollView,
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import TopNav from "../components/topNav";
import BottomNav from "../components/bottomNav";
import HomeMealCard from "../components/homeMealCard";

export default function HomePage() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://www.themealdb.com/api/json/v1/1/filter.php?a=American&c=Pasta"
      )
      .then((response) => {
        const meals = response.data.meals;

        setMeals(meals);
      })
      .catch((error) => console.log(error));
    console.log;
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="default" />
      <View style={styles.container}>
        {/* TOP */}
        <TopNav />

        {/* MIDDLE */}
        <ScrollView>
          {meals.map((element) => {
            return (
              <HomeMealCard
                name={element.strMeal}
                id={element.idMeal}
                key={element.idMeal}
                image={element.strMealThumb}
              />
            );
          })}
        </ScrollView>

        {/* BOTTOM */}
        <BottomNav />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
