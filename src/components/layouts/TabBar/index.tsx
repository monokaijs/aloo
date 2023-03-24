import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Route } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import useStyles from "./styles";
import { useAppTheme } from "@configs/theme/theme.config";
import { Text } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { getSize } from "@utils/reponsive.utils";

// @ts-ignore
import AlooIcon from "@assets/icons/aloo.svg";
// @ts-ignore
import AlooGreyedIcon from "@assets/icons/aloo_greyed.svg";
// @ts-ignore
import Lott from "@assets/icons/lott.svg";
// @ts-ignore
import LottGreyed from "@assets/icons/lott_greyed.svg";
// @ts-ignore
import Preferences from "@assets/icons/preferences.svg";
// @ts-ignore
import PreferencesGreyed from "@assets/icons/preferences_greyed.svg";


export const CustomTabBar = ({ state, descriptors, navigation }: any) => {
  const { bottom } = useSafeAreaInsets();
  const { colors } = useAppTheme();
  const styles = useStyles(colors);
  return (
    <View
      style={[
        styles.contentBottomTab,
        { paddingBottom: bottom || getSize.m(16) }
      ]}>
      {state.routes.map((route: Route<any>, index: number) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = async () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({
              name: route.name,
              merge: true
            });
          }
        };

        const color = isFocused ? colors.primary : colors.text;
        let icon = <AlooIcon width={24} height={24} />;
        switch (route.name) {
          case "Home":
            icon = isFocused ?
              <AlooIcon width={24} height={24} /> :
              <AlooGreyedIcon width={24} height={24} />;
            break;
          case "Lottery":
            icon = isFocused ?
              <Lott width={24} height={24} /> :
              <LottGreyed width={24} height={24} />;
            break;
          case "Preferences":
            icon = isFocused ?
              <Preferences width={24} height={24} /> :
              <PreferencesGreyed width={24} height={24} />;
            break;
        }
        return <TouchableOpacity
          key={index}
          activeOpacity={0.8}
          accessibilityRole="button"
          accessibilityState={isFocused ? { selected: true } : {}}
          accessibilityLabel={options.tabBarAccessibilityLabel}
          testID={options.tabBarTestID}
          onPress={onPress}
          style={styles.itemTab}
        >
          {icon}
          <Text
            style={{
              color,
              fontSize: 11,
              marginTop: 4,
              fontWeight: isFocused ? "800" : "500"
            }}
          >
            {route.name}
          </Text>
        </TouchableOpacity>;
      })}
    </View>
  );
};
