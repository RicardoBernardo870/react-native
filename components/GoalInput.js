import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(text) {
    setEnteredGoalText(text);
  }

  function onAddGoalHandler() {
    if (enteredGoalText == "") return;
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder='Your course goal!'
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <Button
            title='Cancel'
            onPress={props.onCancel}
            color='#f31282'
          />
          <Button
            title='Add Goal'
            onPress={onAddGoalHandler}
            color='#b180f0'
          />
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    width: "100%",
    marginRight: 8,
    padding: 8,
    borderRadius: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 19,
    justifyContent: "center",
    width: "100%",
    marginTop: 17,
  },
});
