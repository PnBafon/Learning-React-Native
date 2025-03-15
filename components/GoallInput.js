import React, { useState } from "react";
import { TextInput, View, Button, StyleSheet, Modal } from "react-native";
const GoallInput = ({ handleUpdateGoals, visible }) => {
  const [inputGoal, setInputGoal] = useState("");
  const handleInputGoal = (enteredText) => {
    setInputGoal(enteredText);
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
        <Button title="ADD" onPress={() => handleUpdateGoals(inputGoal)} />
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
});

export default GoallInput;
