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
  Image,
  ImageBackground
  
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
import { Avatar, Button, Card, } from 'react-native-paper';
const SecondWorkout = () => {

  console.log(DATA)

  const handleClick = () => {
    console.log('test')
  }

  return (
    <View style={styles.container}>
      <Image style={{position: "absolute",}} source={require("../Workout/workout.png")}/>
        
      <View style={{padding: 0, flex: 1, }}></View>
      <View style={styles.white}>
        <Text style={styles.whiteTitle}>Core Training</Text>
        <Text style={styles.whiteProgram}>
          Program
        </Text>
      </View>
      
        
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "column",
    
  },
  white: {
    backgroundColor: "white", 
    flex: 1, 
    paddingTop: 250,
    borderTopStartRadius: 70
  },
  whiteTitle: {
    // flex: 1,
    // padding: 40,
    // paddingTop: 40,
    marginBottom: 100,
    paddingLeft: 40,
    fontSize: 20,
    fontWeight: "bold",
  },
  whiteProgram: {paddingTop: 100, paddingLeft: 40, fontSize: 17, fontWeight: "bold"},
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

export default SecondWorkout;
