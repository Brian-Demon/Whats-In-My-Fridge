import { View, Text } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";

export default Fridge = () => {

  const textFont = "font-lufga";

  return (
    <View className={`${Colors.dark.background} w-full h-full items-center justify-center`}>
      <Text className={`${Colors.dark.text} ${textFont} text-6xl`}>
        Fridge
      </Text>
      <Text className={`${Colors.dark.text} ${textFont} text-6xl`}>
        Inventory
      </Text>
    </View>
  )
}
