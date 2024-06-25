import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View } from "react-native";
import { Link, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../constants/Colors";
import Button from "../components/Button";

const LinkClassName = "underline text-blue-600 hover:text-blue-800 visited:text-purple-600";
const background = Colors.dark.background;
const font = "font-lufga";
const textColor = Colors.dark.text;
  
export default function App() {

  const router = useRouter();

  return (
    <SafeAreaView className={`${background} h-full`}>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center h-full px-4">
          <Text className={`${textColor} text-6xl ${font}`}>
            What's In
          </Text>
          <Text className={`${textColor} text-6xl mb-10 ${font}`}>
            My Fridge
          </Text>
          <Button
            title="Log In"
            handlePress={() => {router.push("/(auth)/sign-in")}}
            additionalContainerClass="w-[90%] p-3 mt-3"
          />
          <Button
            title="Sign Up"
            handlePress={() => {router.push("/(auth)/sign-up")}}
            additionalContainerClass="w-[90%] p-3 mt-6"
          />
          <Link className={`${textColor} text-4xl mt-6`} href="/lists">
            LISTS
          </Link>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="bg-red-600" style="auto" />
    </SafeAreaView>
  );
}
