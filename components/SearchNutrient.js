import React, { useState } from "react";
import axios from "axios";
import { View, Text, TextInput } from "react-native";

const config = {
  headers: {
    "x-app-id": "0b0cda94",
    "x-app-key": "283d765c489fec4b03695ed475851520",
  },
};

const baseUrl = "https://trackapi.nutritionix.com/v2/natural/nutrients";

const SearchNutrient = () => {
  const [food, setFood] = useState(null);
  console.log("test");
  axios
    .post(
      baseUrl,
      {
        query: "chicken",
      },
      config
    )
    .then((response) => {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

  return (
    <View>
      <TextInput
        value={food}
        style={{ marginTop: 20, padding: 20, borderWidth: 1 }}
      />
    </View>
  );
};

export default SearchNutrient;
