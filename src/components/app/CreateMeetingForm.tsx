import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { useAppTheme } from "@configs/theme/theme.config";
import { getSize } from "@utils/reponsive.utils";
import {useSafeAreaInsets} from "react-native-safe-area-context";

export const CreateMeetingForm = () => {
  const {colors} = useAppTheme();
  const insets = useSafeAreaInsets();
  const styles = useStyles(colors, insets);

  return (
    <View style={styles.outer}>
      <Text
        style={styles.title}
      >
        Đối tượng
      </Text>
    </View>
  )
};

const useStyles = (colors, insets) => {
  return StyleSheet.create({
    outer: {
      padding: getSize.m(16),
      paddingBottom: getSize.m(16) + insets.bottom,
    },
    title: {
      fontSize: getSize.m(32),
      fontWeight: '800',
    }
  })
}
