import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  withTiming,
  Extrapolate,
  withRepeat,
  withDelay,
  Easing
} from "react-native-reanimated";
import React, { useEffect } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { getSize } from "@utils/reponsive.utils";
import { Text } from "react-native-paper";
import { useAppTheme } from "@configs/theme/theme.config";

export const AlooButton = ({ repeat }) => {
  const animation = useSharedValue(0);
  const { colors } = useAppTheme();
  useEffect(() => {
    animation.value = withDelay(
      1000,
      withRepeat(
        withTiming(1, {
          duration: 2000,
          easing: Easing.linear
        }),
        repeat ? -1 : 1,
        false
      )
    );
  }, []);
  const animatedStyles = useAnimatedStyle(() => {
    const opacity = interpolate(
      animation.value,
      [0, 1],
      [0.6, 0],
      Extrapolate.CLAMP
    );
    return {
      opacity: opacity,
      transform: [{ scale: animation.value }]
    };
  });
  return <View style={{
    width: getSize.m(120),
    height: getSize.m(120),
    alignItems: "center",
    justifyContent: "center"
  }}>
    <Animated.View style={[styles.circle, animatedStyles]} />
    <View style={{
      position: "absolute",
      left: 0, right: 0, top: 0, bottom: 0, width: "100%", height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <TouchableOpacity
        style={{
          backgroundColor: colors.primary,
          width: getSize.m(120),
          height: getSize.m(120),
          alignItems: "center",
          justifyContent: "center",
          borderRadius: getSize.m(60),
          borderBottomRightRadius: getSize.m(30)
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "800"
          }}
        >
          Aloo
        </Text>
      </TouchableOpacity>
    </View>
  </View>;
};

const styles = StyleSheet.create({
  circle: {
    width: 300,
    borderRadius: 150,
    borderBottomRightRadius: 75,
    height: 300,
    position: "absolute",
    borderColor: "#e91e63",
    borderWidth: 4,
    backgroundColor: "#ff6090"
  },
});
