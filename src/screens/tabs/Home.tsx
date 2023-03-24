import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import { useAppTheme } from "@configs/theme/theme.config";
import { getSize } from "@utils/reponsive.utils";
import { AlooButton } from "@components/app/AlooButton";



export default function HomeTab () {
  const {colors} = useAppTheme();
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <AlooButton repeat={true}/>
    </View>
  )
}
