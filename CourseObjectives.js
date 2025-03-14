import { useState } from 'react';
import {View, Text, TextInput, Button} from 'react-native'
export default function CourseObjectives(){
  const [inputGoal, setInputGoal] = useState('')
  const [goals, setGoals] = useState([])

  const handleInputGoal = (enteredText) =>{
    setInputGoal(enteredText)
  }

  const handleUpdateGoals = ()=>{
    setGoals((currentGoals) => [...currentGoals, inputGoal]);
    setInputGoal('')
  }

  const dropGoal = (index) =>{
    setGoals((goals) => goals.filter((goal,index) => console.log(goal,index)))
  }
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
        <View>
          {goals.map((goal, index) => {return (
            <Todo goal={goal} index={index}  key={index} />
          );}
            
          )}
        </View>
      </View>
    );
}

const Todo = ({ goal, index, drop }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 8,
      }}
    >
      <Text>{goal}</Text>

      <Button title="remove" />
    </View>
  );
};