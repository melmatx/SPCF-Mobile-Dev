import React, { useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  Text
} from "react-native";

import SearchComponent from "../../components/SearchComponent";
import {doctors} from "../../constants/doctors";

const FirstNutrition = () => {
     <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <StatusBar />
      {/* <SearchComponent doctors={doctors} /> */}
      <SearchComponent doctors={doctors}/>
      <Text>Tet</Text>
    </SafeAreaView>
}

export default FirstNutrition;
