import axios from "axios";
import React, { useEffect, useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";

import Colors from "../styles/Colors";

const config = {
  headers: {
    "X-Api-Key": "PtsipzlaNRb9BVDM17r5SQ==ILmaJ1QKB09VqgaD",
  },
};

const WorkoutDetails = ({ route }) => {
  const { type } = route.params;

  const [data, setData] = useState([]);

  const fetchWorkouts = async () => {
    try {
      const response = await axios.get(
        `https://api.api-ninjas.com/v1/exercises?type=${type}`,
        config,
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchWorkouts();
  }, []);

  return (
    <FlatList
      data={data}
      contentContainerStyle={{ paddingTop: 80 }}
      renderItem={({ item }) => (
        <Pressable
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
            <Text style={{ fontSize: 25 }}>{item.name}</Text>
            <Text style={{ color: Colors.green, fontSize: 18 }}>
              {item.type}
            </Text>
            <Text style={{ color: Colors.green, fontSize: 18 }}>
              {item.difficulty}
            </Text>
            <Text style={{ color: Colors.orange, fontSize: 15 }}>
              {item.muscle}
            </Text>
          </View>
        </Pressable>
      )}
    />
  );
};

export default WorkoutDetails;
