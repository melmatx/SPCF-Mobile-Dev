import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";

import Routes from "../navigation/Routes";
import Colors from "../styles/Colors";

const NutritionItem = ({ item }) => {
  const { food_name, nf_calories, serving_qty, serving_unit, photo } = item;

  const capitalizedFoodName = food_name[0].toUpperCase() + food_name.slice(1);

  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate(Routes.NUTRITION_DETAILS, { item })}
      style={({ pressed }) => [
        {
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: Colors.gray,
          margin: 20,
          borderRadius: 20,
          justifyContent: "space-between",
        },
        pressed && { backgroundColor: Colors.lightgray },
      ]}
    >
      <View style={{ rowGap: 5, padding: 20 }}>
        <Text style={{ fontSize: 25 }}>{capitalizedFoodName}</Text>
        <Text style={{ color: Colors.green, fontSize: 18 }}>
          {serving_qty} {serving_unit}
        </Text>
        <Text style={{ color: Colors.orange, fontSize: 15 }}>
          {nf_calories} cal
        </Text>
      </View>
      <Image
        source={{ uri: photo.thumb }}
        style={{ height: 80, width: 80, borderRadius: 10, marginRight: 12 }}
      />
    </Pressable>
  );
};

export default NutritionItem;
