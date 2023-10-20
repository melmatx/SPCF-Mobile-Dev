import React, { useState } from "react";
import axios from "axios";
import { View, Text, TextInput } from "react-native";

const config = {
  headers: {
    "X-Api-Key": "PtsipzlaNRb9BVDM17r5SQ==ILmaJ1QKB09VqgaD",
  },
};

// const baseUrl = "https://api.api-ninjas.com/v1/exercises?muscle=biceps";
// const baseUrl = "https://api.api-ninjas.com/v1/exercises?type=cardio";

const WorkoutAPI = () => {
  const [food, setFood] = useState(null);
  console.log("test");
  axios
    .get(
      baseUrl,
      config
    )
    .then((response) => {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  // console.log(food);
  // const onChangeFood = () => {
  //   return;
  // };

  return (
    <View>
      <TextInput
        value={food}
        style={{ marginTop: 20, padding: 20, borderWidth: 1 }}
        onChangeText={setFood}
      />
    </View>
  );
};

export default WorkoutAPI;
