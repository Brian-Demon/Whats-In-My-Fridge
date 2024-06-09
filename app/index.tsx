import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Link } from "expo-router";

const LinkClassName = "underline text-blue-600 hover:text-blue-800 visited:text-purple-600";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <Text className="text-3xl text-white">
        What's In My Fridge
      </Text>
      <StatusBar style="auto" />
      <Link className={LinkClassName} href="/shopping-list" >
        Go to Shopping List
      </Link>
    </View>
  );
}
