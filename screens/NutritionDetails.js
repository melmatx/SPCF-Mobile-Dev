import React from "react";
import { ImageBackground, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Colors from "../styles/Colors";

const NutritionDetails = ({ route }) => {
  const { item } = route.params;
  const insets = useSafeAreaInsets();

  const capitalizedFoodName =
    item.food_name[0].toUpperCase() + item.food_name.slice(1);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <ImageBackground
          source={{ uri: item.photo.highres }}
          style={{
            padding: 20,
            paddingTop: insets.top + 60,
            height: 200,
            justifyContent: "center",
            shadowOpacity: 0.5,
            shadowOffset: { height: 1, width: 0 },
            backgroundColor: "white",
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 35,
              marginLeft: 10,
              marginVertical: 15,
              shadowOpacity: 0.8,
              shadowOffset: {
                height: 1,
                width: 0,
              },
            }}
          >
            {capitalizedFoodName}
          </Text>
        </ImageBackground>
        <View
          style={{
            margin: 20,
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: Colors.gray,
            marginHorizontal: 20,
            borderRadius: 20,
            height: 250,
            padding: 20,
            columnGap: 20,
          }}
        >
          <View style={{ rowGap: 20 }}>
            <View style={{ flexDirection: "row", columnGap: 40 }}>
              <View>
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>120g</Text>
                <Text>Calories</Text>
              </View>
              <View>
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>120g</Text>
                <Text>Total Fat</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", columnGap: 40 }}>
              <View>
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>120g</Text>
                <Text>Saturated Fat</Text>
              </View>
              <View>
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>120g</Text>
                <Text>Cholesterol</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default NutritionDetails;
