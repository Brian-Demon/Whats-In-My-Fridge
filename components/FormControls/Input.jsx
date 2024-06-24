import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useState } from "react";
import { Colors } from "../../constants/Colors";
import Icons from "../../constants/Icons";

export default Input = ({
  title,
  value,
  placeholder,
  handleOnChange,
  additionalViewClasses = "",
  additionalTextClasses = "",
  textColor = "text-white",
  textFont = "font-clashGrotesk",
  ...props
}) => {
  const [showPassword, setshowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${additionalViewClasses}`}>
      <Text className={`text-base ${textColor} ${textFont} font-pmedium`}>
        {title}
      </Text>
      
        <View className={`border-2 rounded-2xl focus:${Colors.dark.inputFieldFocusedBorderColor} w-full h-16 px-4 ${Colors.dark.inputFieldBackground} items-center flex flex-row`}>
          <TextInput
            className={`flex-1 ${textColor} ${textFont} text-base w-full`}
            value={value}
            placeholder={placeholder}
            placeholderTextColor={Colors.dark.placeHolderColor}
            onChangeText={handleOnChange}
            secureTextEntry={title === "Password" && !showPassword}
          />

          {title === "Password" && (
            <TouchableOpacity onPress={() => setshowPassword(!showPassword)}>
              <Image
                className={`w-6 h-6`}
                source={!showPassword ? Icons.eyeOpen : Icons.eyeClosed}
                resizeMode="contain"
              />
            </TouchableOpacity>
          )}
        </View>
    </View>
  )
}
