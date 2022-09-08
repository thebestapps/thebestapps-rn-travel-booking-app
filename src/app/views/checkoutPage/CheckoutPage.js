import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Button,
  TextInput,
} from "react-native";
import { Colors } from "../../../theme/Colors";
import Modal from "react-native-modal";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
const CheckoutPage = ({ navigation }) => {
  const [isTripinfo, setisTripinfo] = useState(true);
  const [Tripname, SetTripname] = useState("Boston Trip");
  const [TempTripname, SetTempTripname] = useState("Boston Trip");
  const [isPasssengerinfo, setisPasssengerinfo] = useState(false);
  const [isflight, setFlight] = useState(false);
  const [isSummary, setSummary] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const CheckoutItemTitle = ({ index, title, isActive }) => {
    return (
      <View style={isActive ? { opacity: 1 } : { opacity: 0.3 }}>
        <View style={style.checkoutItemsTitle}>
          <View style={style.checkoutItemsTitleIndex}>
            <Text style={{ color: "#fff", fontSize: 14, fontWeight: "bold" }}>
              {index}
            </Text>
          </View>
          <Text style={style.checkoutItemsTitletext}>{title}</Text>
        </View>
      </View>
    );
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  //   onChangeTripname = (text) => {
  //     SetTempTripname(text)
  //  }

  return (
    <View style={style.main__container}>
      <Modal
        isVisible={isModalVisible}
        style={{
          flex: 1,
          justifyContent: "flex-end",
          backgroundColor: "transparent",
          margin: 0,
          padding: 0,
        }}
      >
        <Pressable style={{ flex: 1 }} onPress={toggleModal}></Pressable>
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(256,256,256,1)",
            margin: 0,
            padding: 10,
            borderTopEndRadius: 20,
            borderTopStartRadius: 20,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                flexDirection: "row",
                color: Colors.blueColor,
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              Cancel
            </Text>
            <Text
              style={{
                flex: 1,
                fontSize: 18,
                color: Colors.blackText,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Trip Name
            </Text>
            <Text
              onPress={toggleModal}
              style={{
                flexDirection: "row",
                color: Colors.blueColor,
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              Done
            </Text>
          </View>
          <View
            style={{
              borderWidth: 2,
              borderColor: Colors.blueColor,
              borderRadius: 10,
              padding: 5,
              marginVertical: 10,
              flexDirection: "row",
            }}
          >
            <Image
              style={{ width: 30, height: 30, margin: 0, padding: 0 }}
              source={require("../../../assets/icon/search.png")}
            />
            <TextInput
              placeholder={Tripname}
              placeholderTextColor="#aaa"
              // onChangeText={onChangeTripname}
              style={{
                flex: 1,
                fontSize: 18,
                marginVertical: 0,
                marginHorizontal: 10,
                padding: 0,
                color: "#111",
              }}
            />
          </View>
        </View>
      </Modal>

      <View style={style.header}>
        <TouchableOpacity
          style={style.header_backBtn}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={style.header_backBtnImage}
            source={require("../../../assets/icon/arrowRight.png")}
          />
        </TouchableOpacity>

        <Text style={style.headerTitle}>Flight</Text>
      </View>

      <View style={style.title_Area}>
        <Text
          style={{ fontSize: 35, color: "#000", fontWeight: "bold", flex: 1 }}
        >
          Checkout
        </Text>
        <TouchableOpacity style={style.header_backBtn}>
          <Image
            style={style.header_downBtnImage}
            source={require("../../../assets/icon/arrowRight.png")}
          />
        </TouchableOpacity>
      </View>

      <ScrollView style={{ flex: 1 }}>
        <View style={style.CheckoutItem}>
          <CheckoutItemTitle
            index="1"
            title="Trip info"
            isActive={isTripinfo}
          />
          {isTripinfo ? (
            <View style={style.CheckoutitemContent}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    alignItems: "flex-start",
                    marginLeft: 40,
                    marginVertical: 20,
                    flex: 1,
                  }}
                >
                  <Text
                    style={{
                      flex: 1,
                      fontSize: 12,
                      color: Colors.blackText,
                      fontWeight: "bold",
                      textAlign: "center",
                      backgroundColor: "#90ee90",
                      paddingHorizontal: 10,
                      paddingVertical: 2,
                    }}
                  >
                    New
                  </Text>
                  <Text
                    style={{
                      flex: 1,
                      fontSize: 18,
                      color: Colors.blackText,
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    Boston Trip
                  </Text>
                  <Text
                    style={{
                      flex: 1,
                      fontSize: 14,
                      color: Colors.greyColor1,
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    Fri, JUl29- Wed, Aug 3
                  </Text>
                </View>
                <TouchableOpacity  onPress={toggleModal}>
                <Image
                  style={{width:30, height:30}}
                  source={require("../../../assets/icon/add.png")}
                />
                </TouchableOpacity>
              </View>
              <Button title="Add Trip" onPress={()=>
                  navigation.navigate("CheckoutPageInfoPage")} />
            </View>
          ) : (
            <></>
          )}
        </View>

        <View style={style.CheckoutItem}>
          <CheckoutItemTitle
            index="2"
            title="Flight details and policy"
            isActive={isflight}
          />
          {isflight ? (
            <View style={{}}>
              <Text>Hello</Text>
            </View>
          ) : (
            <></>
          )}
        </View>
        <View style={style.CheckoutItem}>
          <CheckoutItemTitle
            index="3"
            title="Passenger info and more"
            isActive={isPasssengerinfo}
          />
          {isPasssengerinfo ? (
            <View style={{}}>
              <Text>Hello</Text>
            </View>
          ) : (
            <></>
          )}
        </View>
        <View style={style.CheckoutItem}>
          <CheckoutItemTitle
            index="4"
            title="Summary of charges"
            isActive={isSummary}
          />
          {isSummary ? (
            <View style={{}}>
              <Text>Hello</Text>
            </View>
          ) : (
            <></>
          )}
        </View>
      </ScrollView>
      {/* <Text>First Trip Selected: {firstTrip}</Text>
      <Text>Second Trip Selected: {secondTrip}</Text> */}
      <View></View>
    </View>
  );
};

const style = StyleSheet.create({
  main__container: { backgroundColor: Colors.whiteColor, flex: 1, padding: 10 },
  flight__divider: {
    borderWidth: 1,
    borderColor: Colors.blackColor,
    opacity: 0.1,
    width: "100%",
    marginVertical: 15,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    flex: 1,
    color: "#006EE6",
    fontWeight: "600",
    fontSize: 24,
  },
  header_backBtn: {
    marginRight: 10,
  },

  header_backBtnImage: {
    backgroundColor: "#006EE6",
    padding: 5,
    width: 50,
    height: 50,
    borderRadius: 30,
    transform: [{ rotate: "180deg" }],
  },

  title_Area: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "baseline",
  },
  header_downBtnImage: {
    width: 30,
    height: 30,
    transform: [{ rotate: "90deg" }],
  },
  CheckoutItem: {
    marginVertical: 15,
  },
  checkoutItemsTitle: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkoutItemsTitleIndex: {
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    width: 24,
    borderRadius: 12,
    marginRight: 5,
    height: 24,
  },
  checkoutItemsTitletext: {
    fontSize: 16,
    color: "#111",
    fontWeight: "bold",
  },
  CheckoutitemContent: {
    margin: 10,
  },
});

export default CheckoutPage;
