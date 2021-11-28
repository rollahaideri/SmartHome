import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { useState } from "react";

const Items = (props) => {
  const [isOn, setIsOn] = useState("red");

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={[styles.square, { backgroundColor: isOn }]}></View>
        <Text style={styles.textWrap}>{props.text}</Text>
      </View>
      <View style={styles.button}>
        <Button color="#5690F7" title="On" onPress={() => setIsOn("green")} />
        <Button color="#5690F7" title="Off" onPress={() => setIsOn("red")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    height: 94,
    backgroundColor: "white",
    borderColor: "#C0C0C0",
    borderWidth: 1,
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  square: {
    width: 24,
    height: 24,

    borderRadius: 5,
    marginRight: 15,
  },
  button: {
    backgroundColor: "lightgrey",
    flexDirection: "column",
    justifyContent: "center",
  },

  textWrap: {
    fontSize: 20,
  },
});

export default Items;
