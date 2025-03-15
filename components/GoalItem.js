import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GoalItem = (props) => {
  return (
    <View style={styles.listItem}>
      <Text>{props.title}</Text>
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
export default GoalItem;
