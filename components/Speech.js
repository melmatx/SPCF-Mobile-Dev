import Ionicons from "@expo/vector-icons/Ionicons";
import Voice from "@react-native-voice/voice";
import { BlurView } from "expo-blur";
import React, { useEffect, useRef, useState } from "react";
import { ActivityIndicator } from "react-native";

import Button from "../components/Button";

const Speech = ({ onClose, onResultFinished }) => {
  const [isRecognizing, setIsRecognizing] = useState(false);

  const timeoutRef = useRef(null);

  const onSpeechResults = (event) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      stopRecognizing();
    }, 2000);

    onResultFinished(event.value);
    console.log(event.value);
  };

  const startRecognizing = async () => {
    timeoutRef.current = setTimeout(() => {
      stopRecognizing();
    }, 2000);

    setIsRecognizing(true);
    try {
      await Voice.start("en-US");
    } catch (e) {
      console.error(e);
    }
  };

  const stopRecognizing = async () => {
    setIsRecognizing(false);
    try {
      await Voice.stop();
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    Voice.onSpeechResults = onSpeechResults;
    startRecognizing();

    return () => {
      onClose();
      stopRecognizing();
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  return (
    <BlurView
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: "auto",
        paddingTop: 20,
        paddingBottom: 60,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
        overflow: "hidden",
      }}
    >
      <Ionicons
        name="close"
        size={30}
        color="rgba(0,0,0,0.5)"
        style={{ alignSelf: "flex-end", paddingRight: 20 }}
        onPress={onClose}
      />
      {/*{results?.map((result, index) => (*/}
      {/*  <Text key={index}>*/}
      {/*    {result}*/}
      {/*    {isRecognizing && "..."}*/}
      {/*  </Text>*/}
      {/*))}*/}
      {isRecognizing && <ActivityIndicator style={{ marginVertical: 10 }} />}
      <Button onPress={isRecognizing ? stopRecognizing : startRecognizing}>
        {isRecognizing ? "Stop" : "Recognize"}
      </Button>
    </BlurView>
  );
};

export default Speech;
