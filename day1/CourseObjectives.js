import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
} from "react-native";

import GoalItem from "../components/GoalItem";

export default function CourseObjectives() {
  const [inputGoal, setInputGoal] = useState("");
  const [goals, setGoals] = useState([]);

  const handleInputGoal = (enteredText) => {
    setInputGoal(enteredText);
  };

  const handleUpdateGoals = () => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { id: (Math.random() * 1032).toString(), value: inputGoal },
    ]);
    setInputGoal("");
  };

  const dropGoal = (index) => {
    setGoals((goals) =>
      goals.filter((goal, index) => console.log(goal, index))
    );
  };
  return (
    <View style={{ paddingTop: 45, paddingHorizontal: 18 }}>
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
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={goals}
        renderItem={(itemData) => <GoalItem title={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
