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
import GoallInput from "../components/GoallInput";

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
      <GoallInput
        handleInputGoal={handleInputGoal}
        handleUpdateGoals={handleUpdateGoals}
        inputGoal={inputGoal}
      />

      <FlatList
        keyExtractor={(item, index) => item.id}
        data={goals}
        renderItem={(itemData) => <GoalItem title={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
