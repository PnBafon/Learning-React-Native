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
  const [goals, setGoals] = useState([]);

  const handleUpdateGoals = (inputGoal) => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { id: (Math.random() * 1032).toString(), value: inputGoal },
    ]);
  };

  const dropGoal = (index) => {
    setGoals((goals) =>
      goals.filter((goal, index) => console.log(goal, index))
    );
  };
  return (
    <View style={{ paddingTop: 45, paddingHorizontal: 18 }}>
      <GoallInput handleUpdateGoals={handleUpdateGoals} />

      <FlatList
        keyExtractor={(item, index) => item.id}
        data={goals}
        renderItem={(itemData) => <GoalItem title={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
