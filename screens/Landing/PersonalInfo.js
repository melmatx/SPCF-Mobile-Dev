import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import { ProgressBar } from "react-native-paper";

const PersonalInfoScreen = () => {
  return (
    <View>
      <ProgressBar progress={0.7} theme={{ colors: { primary: "green" } }} />
      <Text>Test</Text>
    </View>
  );
};

export default PersonalInfoScreen;
