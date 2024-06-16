import React from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";

import Colors from "../styles/Colors";

const NutritionDetails = ({ route }) => {
  const { item } = route.params;

  const capitalizedFoodName =
    item.food_name[0].toUpperCase() + item.food_name.slice(1);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.gray }}>
      <ScrollView>
        <Text
          style={{
            color: Colors.green,
            textAlign: "center",
            fontSize: 35,
            marginVertical: 15,
            fontWeight: "500",
          }}
        >
          {capitalizedFoodName}
        </Text>
        <View
          style={{
            height: 2,
            backgroundColor: Colors.green,
            marginBottom: 40,
            marginHorizontal: 20,
            borderRadius: 5,
          }}
        />
        <Image
          source={{ uri: item.photo.highres }}
          style={{
            padding: 20,
            height: 400,
            width: 350,
            borderRadius: 20,
            alignSelf: "center",
            shadowOpacity: 0.8,
            shadowOffset: { height: 5, width: 5 },
            shadowRadius: 5,
          }}
        />
        <View
          style={{
            marginBottom: 20,
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 20,
            borderRadius: 20,
            height: 250,
            padding: 20,
            columnGap: 20,
          }}
        >
          <View style={{ rowGap: 20, flex: 1 }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View>
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                  {item.nf_protein}g
                </Text>
                <Text>Protein</Text>
              </View>
              <View>
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                  {item.nf_calories}g
                </Text>
                <Text>Calories</Text>
              </View>
              <View>
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                  {item.nf_total_carbohydrate}g
                </Text>
                <Text>Carbohydrates</Text>
              </View>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View>
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                  {item.nf_sodium}g
                </Text>
                <Text>Sodium</Text>
              </View>
              <View>
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                  {item.nf_total_fat}g
                </Text>
                <Text>Total Fat</Text>
              </View>
              <View>
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                  {item.nf_saturated_fat}g
                </Text>
                <Text>Saturated Fat</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NutritionDetails;
