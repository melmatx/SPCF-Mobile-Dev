import { Select } from "@mobile-reality/react-native-select-pro";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

import { useUserData } from "../contexts/UserDataContext";

const genderOptions = [
  {
    label: "Male",
    value: "male",
  },
  {
    label: "Female",
    value: "female",
  },
];

const PersonalInfo = () => {
  const { age, setAge } = useUserData();
  const { setGender } = useUserData();
  const { weight, setWeight } = useUserData();

  return (
    <View style={{ flex: 1 }}>
      <View style={style.container}>
        <View style={{ marginHorizontal: 12 }}>
          <TextInput
            value={age}
            placeholder="Select"
            keyboardType="numeric"
            onChangeText={setAge}
            style={style.text}
          />
        </View>

        <Text style={style.text}>Your Age</Text>
      </View>

      <View style={style.container}>
        <Select
          options={genderOptions}
          placeholderText="Select"
          styles={{
            select: {
              container: {
                width: 150,
                borderWidth: 0,
              },
              text: {
                textAlign: "left",
                fontSize: 20,
              },
            },
          }}
          onSelect={(option) => setGender(option)}
        />
        <Text style={style.text}>Your Gender</Text>
      </View>

      <View style={style.container}>
        <View style={{ marginHorizontal: 12 }}>
          <TextInput
            value={weight}
            placeholder="Select"
            keyboardType="numeric"
            onChangeText={setWeight}
            style={style.text}
          />
        </View>
        <Text style={style.text}>Your Weight</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    marginHorizontal: 20,
    marginVertical: 15,
    borderRadius: 20,
    shadowOpacity: 0.1,
    shadowOffset: {
      height: 1,
      width: 0,
    },
    backgroundColor: "white",
  },
  text: {
    fontSize: 20,
  },
});

export default PersonalInfo;
