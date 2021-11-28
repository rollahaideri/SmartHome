import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Items from "./components/Items";
import { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.container}>
      {/* The main title of SmartHome app section*/}
      <View style={styles.titleContainer}>
        <Image
          style={styles.HouseImage}
          source={require("./assets/house.png")}
        />
        <Text style={styles.titelText}>SmartHome</Text>
      </View>

      {/* The Rooms section*/}
      <View style={{ flex: 1.6, flexDirection: "column" }}>
        <Text
          style={{ fontSize: 25, fontWeight: "bold", marginHorizontal: 30 }}
        >
          Rooms
        </Text>
        <View style={styles.rooms}>
          <View style={styles.imagesContainer}>
            <Image
              style={styles.images}
              source={require("./assets/living-room.png")}
            />
            <Text style={{ textAlign: "center" }}>Living Room</Text>
          </View>
          <View style={styles.imagesContainer}>
            <Image style={styles.images} source={require("./assets/bed.png")} />
            <Text style={{ textAlign: "center" }}>Bedroom</Text>
          </View>
          <View style={styles.imagesContainer}>
            <Image
              style={styles.images}
              source={require("./assets/kitchen.png")}
            />
            <Text style={{ textAlign: "center" }}>Kitchen</Text>
          </View>
        </View>
      </View>

      {/* The Devices section*/}
      <View style={{ flex: 4 }}>
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Devices</Text>

          <View style={styles.items1}>
            <Items text={"Living Room lamp"} />
            <Items text={"Heater"} />
            <Items text={"TV"} />
          </View>
          <View>
            <Text style={styles.sectionTitle}>
              Total Devices On: {counter}{" "}
            </Text>
          </View>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBEBEB",
  },

  titleContainer: {
    flex: 0.9,
    flexDirection: "row",
  },

  HouseImage: {
    width: 59,
    height: 59,
    marginHorizontal: 30,
    marginVertical: 50,
  },

  titelText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#568988",
    marginHorizontal: 30,
    marginVertical: 50,
  },

  rooms: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 30,
    marginVertical: 10,
  },

  imagesContainer: {
    width: 110,
    height: 150,
    backgroundColor: "#65B8B8",
    borderColor: "#C0C0C0",
    borderWidth: 1,
    borderRadius: 10,
  },

  images: {
    width: 90,
    height: 90,
    marginHorizontal: 10,
    marginVertical: 8,
  },

  tasksWrapper: {
    paddingTop: 10,
    paddingHorizontal: 30,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },

  items1: {
    marginTop: 30,
  },
});
