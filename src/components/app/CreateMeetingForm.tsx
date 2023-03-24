import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { useAppTheme } from "@configs/theme/theme.config";
import { getSize } from "@utils/reponsive.utils";

export const CreateMeetingForm = () => {
  const {colors} = useAppTheme();
  const styles = useStyles(colors);

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

const useStyles = (colors) => {
  return StyleSheet.create({
    outer: {
      padding: getSize.m(16)
    },
    title: {
      fontSize: getSize.m(32),
      fontWeight: '800',
    }
  })
}
