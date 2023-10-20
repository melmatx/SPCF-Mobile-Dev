import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useRef, useState } from "react";
import {
  Pressable,
  SafeAreaView,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import * as Progress from "react-native-progress";

import LandingItem from "../components/LandingItem";
import MainGoal from "../components/MainGoal";
import PersonalInfo from "../components/PersonalInfo";
import Slider from "../components/Slider";
import Colors from "../styles/Colors";

const landingItems = [
  {
    id: 1,
    title: "Tell me more about yourself",
    Component: PersonalInfo,
  },
  {
    id: 2,
    title: "What is your main goal?",
    Component: MainGoal,
  },
];

const Landing = () => {
  const [index, setIndex] = useState(0);
  const { width } = useWindowDimensions();
  const endReached = index === landingItems.length - 1;

  const sliderRef = useRef(null);

  const handleNextButtonClick = () => {
    if (endReached) {
      return;
    }
    sliderRef.current.scrollToIndex({ index: index + 1, animated: true });
  };

  const handlePrevButtonClick = () => {
    sliderRef.current.scrollToIndex({
      index: index - 1,
      animated: true,
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 20,
          paddingHorizontal: 30,
        }}
      >
        {index > 0 && (
          <Ionicons
            name="arrow-back-outline"
            size={30}
            onPress={handlePrevButtonClick}
          />
        )}
        <Progress.Bar
          progress={index}
          color={Colors.gray}
          unfilledColor={Colors.lightgray}
          borderWidth={0}
          width={null}
          style={{ flex: 1, marginHorizontal: 40 }}
        />
        {/*<Pressable*/}
        {/*  style={({ pressed }) => [*/}
        {/*    { padding: 10, borderRadius: 10 },*/}
        {/*    pressed && { backgroundColor: Colors.gray },*/}
        {/*  ]}*/}
        {/*>*/}
        {/*  <Text>Skip</Text>*/}
        {/*</Pressable>*/}
      </View>

      <Slider
        ref={sliderRef}
        data={landingItems}
        index={index}
        onIndexChange={setIndex}
        width={width}
        renderItem={({ item }) => <LandingItem {...item} />}
      />

      {!endReached && (
        <Pressable
          onPress={handleNextButtonClick}
          style={({ pressed }) => [
            {
              marginHorizontal: 30,
              marginVertical: 35,
              padding: 20,
              backgroundColor: Colors.gray,
              borderRadius: 20,
              alignItems: "center",
            },
            pressed && { opacity: 0.5 },
          ]}
        >
          <Text style={{ fontSize: 20 }}>Next</Text>
        </Pressable>
      )}
    </SafeAreaView>
  );
};

export default Landing;
