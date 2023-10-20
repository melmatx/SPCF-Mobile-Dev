import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { ProgressBar } from "react-native-paper";

const PersonalInfoScreen = () => {
  return (
    <View style={styles.container}> 
      <ProgressBar progress={0.7} theme={{ colors: { primary: "green" } }} />
      <Text>Test</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue"
  }
})

export default PersonalInfoScreen;
