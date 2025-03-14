import { View, Text, StyleSheet } from "react-native";

const Flexbox = () => {
  return (
    <View style={{flexDirection: 'row', width: '90%', height: 300, alignItems: 'center',}}>
      <View
        style={{
          backgroundColor: "red",
          justifyContent: "center",
          alignItems:"center",
          flex: 1
      }}
      >
        <Text style={{ color: "white" }}>1 First box</Text>
      </View>
      <View
        style={{
          backgroundColor: "blue",
          justifyContent: "center",
          alignItems:"center",
          flex:2
      }}
      >
        <Text style={{ color: "white" }}>2</Text>
      </View>
      <View
        style={{
          backgroundColor: "green",
          justifyContent: "center",
          alignItems:"center",
          flex:1
      }}
      >
        <Text style={{ color: "white" }}>3</Text>
      </View>
    </View>
  );
};


const style = StyleSheet.create({
  screen: {

  }
})

export default Flexbox;
