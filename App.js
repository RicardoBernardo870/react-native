import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>New!</Text>
      </View>
      <Text style={styles.dummyText}>Hello World!</Text>
      <Button title="Tap Me" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  dummyText: {
    margin: 16,
    borderWidth: 1,
    borderColor: "black",
    padding: 16,
  },
});
