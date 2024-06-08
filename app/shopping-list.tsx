import { StyleSheet, Text, View } from 'react-native'

const ShoppingList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>
        Shopping List Goes Here
      </Text>
    </View>
  )
}

export default ShoppingList

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
});