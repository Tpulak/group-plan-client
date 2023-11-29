import React from "react";
import BottomNav from "../components/BottomNav";
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  StatusBar,
  Text,
} from "react-native";
import { PollPageStyles } from "../styles";

export default function PollPage() {
  return (
    <SafeAreaView style={PollPageStyles.container}>
      <StatusBar barStyle="default" />
      <View style={PollPageStyles.container}>
        <View style={PollPageStyles.pollPageBtnContainer}>
          <TouchableOpacity style={PollPageStyles.pollPageBtn}>
            <Text style={PollPageStyles.pollPageBtnText}>Add Recipe</Text>
          </TouchableOpacity>
        </View>
        <View style={PollPageStyles.pollPageBtnContainer}>
          <TouchableOpacity style={PollPageStyles.pollPageBtn}>
            <Text style={PollPageStyles.pollPageBtnText}>Add Recipe</Text>
          </TouchableOpacity>
        </View>

        <BottomNav />
      </View>
    </SafeAreaView>
  );
}
