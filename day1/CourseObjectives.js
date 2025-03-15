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
  const [isAddMode, setIsAddMode] = useState(false);
  const handleUpdateGoals = (inputGoal) => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { id: (Math.random() * 1032).toString(), value: inputGoal },
    ]);
    setIsAddMode(false);
  };

  const handelDropGoal = (goalId) => {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={{ paddingTop: 45, paddingHorizontal: 12 }}>
      <View style={styles.button}>
        <Button
          title="Add New Goal"
          color="white"
          onPress={() => setIsAddMode(true)}
        />
      </View>
      <GoallInput
        handleUpdateGoals={handleUpdateGoals}
        visible={isAddMode}
        onCancle={cancelGoalAdditionHandler}
      />

      <FlatList
        keyExtractor={(item, index) => item.id}
        data={goals}
        renderItem={(itemData) => (
          <GoalItem
            onDelete={handelDropGoal}
            id={itemData.item.id}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    padding: 4,
  },
});
