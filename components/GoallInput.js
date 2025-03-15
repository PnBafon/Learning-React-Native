import React, { useState } from "react";
import { TextInput, View, Button, StyleSheet } from "react-native";
const GoallInput = ({ handleUpdateGoals }) => {
  const [inputGoal, setInputGoal] = useState("");
  const handleInputGoal = (enteredText) => {
    setInputGoal(enteredText);
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course goals"
        style={styles.input}
        value={inputGoal}
        onChangeText={handleInputGoal}
      />
      <Button title="ADD" onPress={() => handleUpdateGoals(inputGoal)} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
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
