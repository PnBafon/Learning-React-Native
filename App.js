import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  return (
    <View style={{ paddingTop: 45, paddingHorizontal: 18}}>
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
            width: '80%'
          }}
        />
        <Button title="ADD" />
      </View>
      <View></View>
      <StatusBar style="auto" />
    </View>
  );
}
