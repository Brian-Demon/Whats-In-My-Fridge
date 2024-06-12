import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View } from "react-native";
import { Link } from "expo-router";
import Button from "../components/FormControls/Button";
import { SafeAreaFrameContext, SafeAreaView } from "react-native-safe-area-context";

const LinkClassName = "underline text-blue-600 hover:text-blue-800 visited:text-purple-600";

export default function App() {  
  return (
    <SafeAreaView className="bg-black h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center h-full px-4">
          <Text className="text-3xl text-white font-lufga">
            What's In
          </Text>
          <Text className="text-3xl text-white mb-10 font-lufga">
            My Fridge
          </Text>
          <Button
            title="Log In"
            handlePress={() => {}}
            additionalContainerClass="w-[90%] p-3 mt-3"
          />
          <Button
            title="Sign Up"
            handlePress={() => {}}
            additionalContainerClass="w-[90%] p-3 mt-6"
          />
          <Link className="text-4xl mt-6" href="/lists" style={{ color: "blue" }}>
            LISTS
          </Link>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="bg-red-600" style="auto" />
    </SafeAreaView>
  );
}
