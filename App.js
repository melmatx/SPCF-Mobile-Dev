import { SelectProvider } from "@mobile-reality/react-native-select-pro";
import { NavigationContainer } from "@react-navigation/native";

import { UserDataProvider } from "./contexts/UserDataContext";
import MainNavigation from "./navigation/MainNavigation";

const App = () => {
  return (
    <UserDataProvider>
      <SelectProvider>
        <NavigationContainer>
          <MainNavigation />
        </NavigationContainer>
      </SelectProvider>
    </UserDataProvider>
  );
};

export default App;
