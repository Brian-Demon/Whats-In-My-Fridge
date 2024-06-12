import { TouchableOpacity, Text } from "react-native";
import React from "react";

// const buttonColor = "g-gradient-to-r from-indigo-500 via-purple-500 to-pink-500";
const defaultButtonColor = "bg-emerald-600";
const defaultButtonTextColor = "bg-gradient-to-r from-cyan-500 to-blue-500";
const defaultFont = "font-clashGrotesk";

const Button = ({
  title,
  buttonBackgroundColor = defaultButtonColor,
  buttonTextColor = defaultButtonTextColor,
  font = defaultFont,
  handlePress,
  opacity,
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
      <Text className={`text-lg font-bold ${font} ${buttonTextColor} ${additionalTextClass}`}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default Button
