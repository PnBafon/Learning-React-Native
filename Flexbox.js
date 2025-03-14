import { View, Text } from "react-native";

const Flexbox = () => {
  return (
    <View style={{flexDirection: 'row-reverse'}}>
      <View
        style={{
          height: 80,
          width: 80,
          backgroundColor: "red",
          justifyContent: "center",
          alignItems:"center",
      }}
      >
        <Text style={{ color: "white" }}>1</Text>
      </View>
      <View
        style={{
          height: 80,
          width: 80,
          backgroundColor: "blue",
          justifyContent: "center",
          alignItems:"center",
      }}
      >
        <Text style={{ color: "white" }}>2</Text>
      </View>
      <View
        style={{
          height: 80,
          width: 80,
          backgroundColor: "green",
          justifyContent: "center",
          alignItems:"center",
      }}
      >
        <Text style={{ color: "white" }}>3</Text>
      </View>
    </View>
  );
};

export default Flexbox;
