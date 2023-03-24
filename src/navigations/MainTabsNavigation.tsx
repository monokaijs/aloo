import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useAppTheme} from '@configs/theme/theme.config';
import {CustomTabBar} from '@components/layouts/TabBar';
import HomeTab from "@screens/tabs/Home";

const Tab = createBottomTabNavigator();

export const MainTabsNavigation = () => {
  const {colors} = useAppTheme();
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={() => ({
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={HomeTab} />
      <Tab.Screen name="Lottery" component={HomeTab} />
      <Tab.Screen name="Preferences" component={HomeTab} />
    </Tab.Navigator>
  );
};
