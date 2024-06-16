import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Routes from "./Routes";
import Landing from "../screens/Landing";
import Nutrition from "../screens/Nutrition";
import NutritionDetails from "../screens/NutritionDetails";
import Workout from "../screens/Workout";
import WorkoutDetails from "../screens/WorkoutDetails";

const Stack = createNativeStackNavigator();

const MainNavigation = () => (
  <Stack.Navigator>
    <Stack.Group screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Routes.LANDING} component={Landing} />

      <Stack.Group
        screenOptions={{
          headerShown: true,
          headerTransparent: true,
          headerTintColor: "#00BA88",
        }}
      >
        <Stack.Screen name={Routes.WORKOUT} component={Workout} />
        <Stack.Screen name={Routes.NUTRITION} component={Nutrition} />
        <Stack.Screen
          name={Routes.NUTRITION_DETAILS}
          component={NutritionDetails}
          options={{ headerTitle: "", headerBackTitle: "Back" }}
        />
        <Stack.Screen
          name={Routes.WORKOUT_DETAILS}
          component={WorkoutDetails}
          options={{ headerTitle: "", headerBackTitle: "Back" }}
        />
      </Stack.Group>
    </Stack.Group>
  </Stack.Navigator>
);

export default MainNavigation;
