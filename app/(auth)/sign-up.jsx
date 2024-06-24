import { View, Text, ScrollView } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../constants/Colors";
import { Link } from "expo-router";

const background = Colors.dark.background;
const font = "font-lufga";
const textColor = Colors.dark.text;


export default SignUp = () => {
  return (
    <SafeAreaView className={`${background} h-full`}>
      <ScrollView>
        <View
          className={`w-full flex justify-center h-full px-4 my-6`}
          // style={{
          //   minHeight: Dimensions.get("window").height - 100,
          // }}
        >

          <View className={`flex justify-center pt-5 flex-row gap-2`}>
            <Text className={`text-lg text-white font-pregular`}>
              Have an account already?
            </Text>
            <Link
              href="/sign-in"
              className={`text-lg ${textColor} ${font}`}
            >
              Log In
            </Link>
          </View>

          <View className={`flex justify-center pt-5 flex-row gap-2`}>
            <Link
              href="/"
              className={`text-lg ${textColor} ${font}`}
            >
              Home
            </Link>
          </View>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}