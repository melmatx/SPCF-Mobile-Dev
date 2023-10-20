import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import Routes from "../navigation/Routes";
import Colors from "../styles/Colors";

const MainGoal = () => {
  const navigation = useNavigation();

  const goals = [
    {
      title: "Get Fit",
      icon: "barbell-outline",
      onPress: () => navigation.navigate(Routes.WORKOUT),
    },
    {
      title: "Nutrition",
      icon: "nutrition-outline",
      onPress: () => navigation.navigate(Routes.NUTRITION),
    },
  ];

  return (
    <View style={{ padding: 20, flexDirection: "row" }}>
      {goals.map((goal, index) => (
        <Pressable
          onPress={goal.onPress}
          key={index}
          style={({ pressed }) => [style.button, pressed && { opacity: 0.5 }]}
        >
          <Ionicons name={goal.icon} size={30} />
          <Text>{goal.title}</Text>
        </Pressable>
      ))}
    </View>
  );
};

const style = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.gray,
    paddingVertical: 40,
    paddingHorizontal: 20,
    borderRadius: 20,
    rowGap: 10,
    margin: 10,
  },
});

export default MainGoal;
