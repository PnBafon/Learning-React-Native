import { StatusBar } from "expo-status-bar";
import {View} from 'react-native'
import CourseObjectives from "./CourseObjectives";
import Flexbox from "./Flexbox";

export default function App() {
  return (
    <View style={{padding: 16, paddingTop: 40}} >
      <CourseObjectives />
      {/* <Flexbox /> */}
      <StatusBar style="auto" />
    </View>
  );
}
  