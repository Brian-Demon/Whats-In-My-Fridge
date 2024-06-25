import { TouchableOpacity, Text } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";

// const buttonColor = "g-gradient-to-r from-indigo-500 via-purple-500 to-pink-500";
const defaultButtonColor = "bg-emerald-600";
const defaultFont = "font-clashGrotesk";

export default Button = ({
  title,
  buttonBackgroundColor = defaultButtonColor,
  font = defaultFont,
  handlePress,
  opacity,
  textColor = "text-black",
  additionalContainerClass,
  additionalTextClass,
  isLoading,
  ...children
}) => {
  return (
    <TouchableOpacity
      className={`rounded-xl min-h-[62px] justify-center items-center ${buttonBackgroundColor} ${isLoading ? "opacity-50" : ""} ${additionalContainerClass}`}
      disabled={isLoading}
      onPress={handlePress}
      opacity={opacity ? opacity : 0.7}
    >
      <Text className={`text-lg font-bold ${textColor} ${font} ${additionalTextClass}`}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

