import React, { useState } from "react";
import { TextInput, View, Button, StyleSheet, Modal } from "react-native";
const GoallInput = ({ handleUpdateGoals, visible, onCancle }) => {
  const [inputGoal, setInputGoal] = useState("");
  const handleInputGoal = (enteredText) => {
    setInputGoal(enteredText);
  };

  const addGoalHandler = () => {
    handleUpdateGoals(inputGoal);
    setInputGoal("");
  };
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course goals"
          style={styles.input}
          value={inputGoal}
          onChangeText={handleInputGoal}
        />
        <View style={styles.buttons}>
          <Button title="CANCEL" color="red" onPress={onCancle} />
          <Button title="ADD" onPress={addGoalHandler} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  input: {
    borderBottomWidth: 1,
    borderBlockColor: "gray",
    marginBottom: 3,
    padding: 8,
    width: "80%",
  },
  buttons: {
    marginTop: 6,
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default GoallInput;
