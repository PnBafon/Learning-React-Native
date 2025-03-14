
import {View, Text, TextInput, Button} from 'react-native'
export default function CourseObjectives(){
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
          />
          <Button title="ADD" />
        </View>
        <View></View>
      </View>
    );
}