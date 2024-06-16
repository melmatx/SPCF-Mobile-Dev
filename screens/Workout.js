import React from "react";
import { FlatList, Pressable, SafeAreaView, Text, View } from "react-native";

import Routes from "../navigation/Routes";
import Colors from "../styles/Colors";

const excerciseTypes = [
  {
    id: 1,
    label: "cardio",
    title: "Cardio",
    color: Colors.green,
  },
  {
    id: 2,
    label: "plyometrics",
    title: "Plyometrics",
    color: Colors.violet,
  },
  {
    id: 3,
    label: "strength",
    title: "Strength",
    color: Colors.orange,
  },
  {
    id: 4,
    label: "stretching",
    title: "Stretching",
    color: Colors.red,
  },
  {
    id: 5,
    label: "strongman",
    title: "Strongman",
    color: Colors.blue,
  },
];

const Workout = ({ navigation }) => {
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
          Exercise List
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          borderTopStartRadius: 50,
          borderTopEndRadius: 50,
          backgroundColor: "white",
          paddingTop: 20,
          paddingHorizontal: 20,
        }}
      >
        <FlatList
          data={excerciseTypes}
          numColumns={2}
          renderItem={({ item }) => (
            <Pressable
              onPress={() =>
                navigation.navigate(Routes.WORKOUT_DETAILS, {
                  type: item.label,
                })
              }
              style={({ pressed }) => [
                {
                  backgroundColor: item.color,
                  flex: 1,
                  margin: 15,
                  paddingHorizontal: 20,
                  paddingVertical: 40,
                  borderRadius: 20,
                },
                pressed && { opacity: 0.5 },
              ]}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: 20,
                  fontWeight: "500",
                }}
              >
                {item.title}
              </Text>
            </Pressable>
          )}
          ListEmptyComponent={
            <Text
              style={{
                textAlign: "center",
                padding: 20,
                fontSize: 18,
              }}
            >
              Find an exercise
            </Text>
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default Workout;
