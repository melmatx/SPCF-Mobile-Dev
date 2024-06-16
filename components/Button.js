import { Pressable, Text } from "react-native";

const Button = ({ children, onPress }) => (
  <Pressable
    style={({ pressed }) => [
      {
        alignItems: "center",
        backgroundColor: "#007BFF",
        width: 100,
        borderRadius: 20,
        padding: 10,
        marginVertical: 10,
      },
      pressed && { opacity: 0.5 },
    ]}
    onPress={onPress}
  >
    <Text style={{ color: "white" }}>{children}</Text>
  </Pressable>
);

export default Button;
