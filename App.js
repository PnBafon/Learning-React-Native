import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import Day1 from "./day1/day1";

export default function App() {
  return (
    <View style={{ padding: 16, paddingTop: 40 }}>
      <Day1 />
      <StatusBar style="auto" />
    </View>
  );
}
