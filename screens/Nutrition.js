import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";

import NutritionItem from "../components/NutritionItem";
import nutritionData from "../data/nutritionData";
import Colors from "../styles/Colors";

const Nutrition = () => {
  const [data, setData] = useState([]);

  useEffect(() => {}, []);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.gray }}>
      <View style={{ padding: 20, alignItems: "center" }}>
        <Text
          style={{
            fontSize: 30,
            marginLeft: 10,
            marginVertical: 15,
          }}
        >
          Find the nutrition for food
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          borderTopStartRadius: 50,
          borderTopEndRadius: 50,
          backgroundColor: "white",
        }}
      >
        <Searchbar
          style={{ marginTop: 35, marginBottom: 15, marginHorizontal: 25 }}
          iconColor="white"
          theme={{
            colors: {
              elevation: { level3: Colors.green },
              onSurfaceVariant: Colors.gray,
            },
          }}
        />
        <FlatList
          data={nutritionData}
          renderItem={({ item }) => <NutritionItem item={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default Nutrition;
