import React from "react";
import { TextInput, View, Button, StyleSheet } from "react-native";
const GoallInput = ({ handleInputGoal, handleUpdateGoals, inputGoal }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <TextInput
        placeholder="Course goals"
        style={{
          borderBottomColor: "black",
          borderBottomWidth: 1,
          marginBottom: 3,
          padding: 8,
          width: "80%",
        }}
        value={inputGoal}
        onChangeText={handleInputGoal}
      />
      <Button title="ADD" onPress={handleUpdateGoals} />
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
