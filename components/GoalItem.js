import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalStyle}>
      <Pressable
        android_ripple={{ color: "#cccccc" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalItem}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalStyle: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#cccccc",
    marginBottom: 10,
    borderRadius: 6,
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalItem: {
    padding: 10,
  },
});
