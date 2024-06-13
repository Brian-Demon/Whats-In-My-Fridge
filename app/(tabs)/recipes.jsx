import { View, Text } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";

export default Recipse = () => {

  const textFont = "font-lufga";

  return (
    <View className={`${Colors.dark.background} w-full h-full items-center justify-center`}>
      <Text className={`${Colors.dark.text} ${textFont} text-6xl`}>
        Recipe
      </Text>
      <Text className={`${Colors.dark.text} ${textFont} text-6xl`}>
        Roulette
      </Text>
    </View>
  )
}
