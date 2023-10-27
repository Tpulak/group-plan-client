import { ScrollView, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import HomeMealCard from "../components/HomeMealCard";
import TopNav from "../components/topNav";
import BottomNav from "../components/bottomNav";

export default function Home() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://www.themealdb.com/api/json/v1/1/filter.php?a=American&c=Pasta"
      )
      .then((response) => {
        const meals = response.data.meals;

        console.log(meals[0].strMeal);
        setMeals(meals);
        console.log(meals);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
