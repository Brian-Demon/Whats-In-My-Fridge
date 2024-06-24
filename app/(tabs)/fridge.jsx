import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Colors } from "../../constants/Colors";

const background = Colors.dark.background;
const font = "font-lufga";
const textColor = Colors.dark.text;

export default Fridge = () => {
  return (
    <View className={`${background} w-full h-full items-center justify-center`}>
      <Text className={`${textColor} ${font} text-6xl`}>
        Fridge
      </Text>
      <Text className={`${textColor} ${font} text-6xl`}>
        Inventory
      </Text>

      <View className={`flex justify-center pt-5 flex-row gap-2`}>
        <Link
          href="/"
          className={`text-lg ${textColor} ${font}`}
        >
          Home
        </Link>
      </View>

    </View>
  )
}
