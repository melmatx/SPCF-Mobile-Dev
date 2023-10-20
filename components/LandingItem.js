import React, { Text, useWindowDimensions, View } from "react-native";

const LandingItem = ({ title, Component }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={{ width, flex: 1 }}>
      <View style={{ paddingBottom: 15, paddingTop: 8 }}>
        <Text style={{ fontWeight: "bold", fontSize: 20, textAlign: "center" }}>
          {title}
        </Text>
      </View>
      <Component />
    </View>
  );
};

export default LandingItem;
