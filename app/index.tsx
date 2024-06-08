import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>
        What's In My Fridge
      </Text>
      <StatusBar style="auto" />
      <Link href="/shopping-list" style={styles.linkText}>
        Go to Shopping List
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  mainText: {
    color: "white",
  },
  linkText: {
    color: "blue",
    fontWeight: "bold",
  }
});