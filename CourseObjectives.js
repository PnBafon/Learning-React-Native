import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
} from "react-native";
import { ScrollView } from "react-native";
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
        renderItem={(itemData) => (
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
      />
    </View>
  );
}

const Todo = ({ goal, index, drop }) => {
  return (
    <View style={styles.listItem}>
      <Text style={{ color: "black" }}>{goal}</Text>
      <Button title="remove" />
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 3,
    paddingHorizontal: 8,
    paddingVertical: 12,
  },
});
