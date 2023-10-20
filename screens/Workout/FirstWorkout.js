import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Text,
  FlatList,
  ScrollView,
  StyleSheet,
  Pressable,
  Keyboard,
} from "react-native";

  const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Running',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Core Training',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const FirstWorkout = () => {
  const [userText, setUserText] = useState("");
  const [userMessages, setUserMessages] = useState([]);
  const [otherUserMessages, setOtherUserMessages] = useState([]);
  const [combinedMessages, setCombinedMessages] = useState([]);

  const Item = ({title}) => (
  <View style={styles.item}>
    <Pressable onPress={handleClick}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  </View>
  )
  console.log(DATA)

  const handleClick = () => {
    console.log('test')
  }

  return (
    <View style={styles.container}>
        <FlatList
            numColumns={2}
            data={DATA}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
               
              <Pressable
                onPress={handleClick}
                style={({ pressed }) => [
                  styles.item,
                  pressed && { opacity: 0.5, borderColor: "#8883F0", },
                ]}
              >
                {/* <View style={styles.item}> */}
                <Text style={styles.title}>{item.title}</Text>
                {/* </View> */}
              </Pressable>
              
            )}
          />
        <Pressable style={styles.enterButton}>
          <Text style={styles.enterButtonText}>Start</Text>
        </Pressable>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flex: 1,
    shadowColor: "black",
    shadowOffset: {
      width: 20,
      height: 20
    },
    shadowOpacity: 100,
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 4,
    borderRadius: 20,
    padding: 40,
    marginVertical: 8,
    marginBottom: 40,
    marginHorizontal: 16,

  },
  title: {
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center"
  },
  enterButton: {
    backgroundColor: "#8883F0",
    padding: 12,
    margin: 40,
    marginEnd: 65,
    marginStart: 65,
    borderRadius: 25,
  },
    enterButtonText: {
    textAlign: "center",
    fontSize: 17,
    margin: 1,
    color: "white",
  },

});

export default FirstWorkout;
