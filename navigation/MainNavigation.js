import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Routes from "./Routes";
import Landing from "../screens/Landing";
import Nutrition from "../screens/Nutrition";
import Workout from "../screens/Workout";

const Stack = createNativeStackNavigator();

const MainNavigation = () => (
  <Stack.Navigator>
    <Stack.Group screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Routes.LANDING} component={Landing} />
      <Stack.Screen name={Routes.WORKOUT} component={Workout} />
      <Stack.Screen name={Routes.NUTRITION} component={Nutrition} />
    </Stack.Group>
  </Stack.Navigator>
);

export default MainNavigation;
