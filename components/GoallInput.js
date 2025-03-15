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
        <View style={styles.buttonContainer}>
          <View style={styles.buttonCancel}>
            <Button title="CANCEL" color="white" onPress={onCancle} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
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
  buttonContainer: {
    marginTop: 6,
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: "55%",
    backgroundColor: "skyblue",
    borderRadius: 4,
  },
  buttonCancel: {
    width: "40%",
    backgroundColor: "red",
    borderRadius: 4,
  },
});

export default GoallInput;
