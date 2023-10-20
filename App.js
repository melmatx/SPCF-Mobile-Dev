import { SelectProvider } from "@mobile-reality/react-native-select-pro";
import { NavigationContainer } from "@react-navigation/native";

import { UserDataProvider } from "./contexts/UserDataContext";
import MainNavigation from "./navigation/MainNavigation";

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
