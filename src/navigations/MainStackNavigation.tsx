import {
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import React from "react";
import { MainTabsNavigation } from "@navigations/MainTabsNavigation";

export type RootStackParamList = {
  Main: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const MainStackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={"Main"}>
      <Stack.Screen
        name="Main"
        component={MainTabsNavigation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
