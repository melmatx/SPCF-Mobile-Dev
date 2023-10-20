import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Routes from "./Routes";

const Stack = createNativeStackNavigator();

const MainNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen name={Routes.PERSONAL_INFO} />
  </Stack.Navigator>
);

export default MainNavigation;
