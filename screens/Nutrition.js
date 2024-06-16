import Ionicons from "@expo/vector-icons/Ionicons";
import axios from "axios";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Modal,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import { Searchbar } from "react-native-paper";

import NutritionItem from "../components/NutritionItem";
import Speech from "../components/Speech";
import Colors from "../styles/Colors";

const config = {
  headers: {
    "x-app-id": "0b0cda94",
    "x-app-key": "283d765c489fec4b03695ed475851520",
  },
};

const baseUrl = "https://trackapi.nutritionix.com/v2/natural/nutrients";

const Nutrition = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [speechMode, setSpeechMode] = useState(false);

  const search = async () => {
    if (!query) {
      return;
    }
    if (isLoading) {
      return;
    }
    setIsLoading(true);

    try {
      const response = await axios.post(baseUrl, { query }, config);
      setData(response.data.foods);
    } catch (error) {
      console.log(error);
      Alert.alert("No results found");
    } finally {
      setIsLoading(false);
    }
  };

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
          value={query}
          onChangeText={setQuery}
          onClearIconPress={() => setData([])}
          onSubmitEditing={() => search()}
          theme={{
            colors: {
              elevation: { level3: Colors.green },
              onSurfaceVariant: Colors.gray,
            },
          }}
        />
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => <NutritionItem item={item} />}
            ListEmptyComponent={
              <Text
                style={{
                  textAlign: "center",
                  padding: 20,
                  fontSize: 18,
                }}
              >
                Type a food you like!
              </Text>
            }
          />
        )}
        {!isLoading && (
          <View
            style={{
              margin: 20,
              flexDirection: "row",
              justifyContent: "center",
              marginBottom: 25,
            }}
          >
            <Pressable
              onPress={() => setSpeechMode(true)}
              style={({ pressed }) => [
                {
                  backgroundColor: "steelblue",
                  borderRadius: 40,
                  padding: 20,
                  position: "absolute",
                  bottom: 0,
                },
                pressed && { opacity: 0.5 },
              ]}
            >
              <Ionicons name="mic" size={30} color="white" />
            </Pressable>
          </View>
        )}
      </View>
      <Modal visible={speechMode} transparent>
        <Pressable style={{ flex: 1 }} onPress={() => setSpeechMode(false)}>
          <Speech
            onClose={() => setSpeechMode(false)}
            onResultFinished={(result) => setQuery(result[0])}
          />
        </Pressable>
      </Modal>
    </SafeAreaView>
  );
};

export default Nutrition;
