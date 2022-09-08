import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
} from "react-native";
import { Colors } from "../../../theme/Colors";

const CheckoutPageInfoPage = ({ navigation }) => {
  return (
    <View style={style.main__container}>
      <ImageBackground
        style={{ width: "100%", height: 240, position: "relative" }}
        source={{
          uri: "https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg",
        }}
      >
        <Text
          style={{
            fontSize: 36,
            color: "#fff",
            position: "absolute",
            bottom: 20,
            left: 20,
            fontWeight: "bold",
          }}
        >
          Boston Trip
        </Text>

        <Text
          style={{
            fontSize: 18,
            backgroundColor: "rgba(0,0,0,0.6)",
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 40,
            color: "#fff",
            position: "absolute",
            top: 20,
            right: 20,
            fontWeight: "bold",
          }}
        >
          Rename
        </Text>
      </ImageBackground>

      <View style={style.header}>
        <Image
          style={style.header_backBtnImage}
          source={require("../../../assets/icon/getHelp.png")}
        />
        <Text style={style.headerTitle}>
          Add Details to help your company identify and track expenses.
        </Text>
        <TouchableOpacity
          style={style.header_backBtn}
          onPress={() => navigation.goBack()}
        ></TouchableOpacity>
      </View>

      <ScrollView style={{ margin: 20 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 10,
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 14, color: "#aaa" }}>Purpose</Text>
            <Text style={{ fontSize: 18, color: "#111", fontWeight: "bold" }}>
              Customer visit
            </Text>
          </View>
          <TouchableOpacity
            style={{ width: 30 }}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={style.header_backBtnImage}
              source={require("../../../assets/icon/resource.png")}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 10,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: Colors.blueColor,
              fontWeight: "bold",
              flex: 1,
            }}
          >
            Is it Billable
          </Text>

          <TouchableOpacity
            style={style.header_backBtn}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={{ width: 30, height: 30 }}
              source={require("../../../assets/icon/add.png")}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 10,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: Colors.blueColor,
              fontWeight: "bold",
              flex: 1,
            }}
          >
            Enter Special rate code
          </Text>

          <TouchableOpacity
            style={style.header_backBtn}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={{ width: 30, height: 30 }}
              source={require("../../../assets/icon/add.png")}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 10,
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 14, color: "#aaa" }}>Projects</Text>
            <Text style={{ fontSize: 18, color: "#111", fontWeight: "bold" }}>
              EV project
            </Text>
          </View>
          <TouchableOpacity
            style={{ width: 30 }} 
            onPress={() => navigation.goBack()}
          >
            <Image
              style={style.header_backBtnImage}
              source={require("../../../assets/icon/resource.png")}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  main__container: { backgroundColor: Colors.whiteColor, flex: 1 },
  flight__divider: {
    borderWidth: 1,
    borderColor: Colors.blackColor,
    opacity: 0.1,
    width: "100%",
    marginVertical: 15,
  },
  header: {
    padding: 10,
    flexDirection: "row",
    backgroundColor: "#E4F6EF",
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    flex: 1,
    color: "#111",

    fontSize: 16,
  },
  header_backBtn: {
    marginRight: 10,
  },

  header_backBtnImage: {
    width: 30,
    marginRight: 10,
    height: 30,
    opacity: 0.3,
  },
});

export default CheckoutPageInfoPage;
