import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useDispatch } from "react-redux";
import { Images } from "../../../constants/images";

import styles from "../../../global";
import { Colors } from "../../../theme/Colors";
import {
  flightListData,
  flightListFilter,
} from "../../../constants/static_data";
import dayjs from "dayjs";
import FlightListActionBar from "../../components/actionBar/FlightListActionBar";
import ChipList from "../../components/chip-lists/ChipList";

import AppContext from "../../context/AppContext";

const CheckoutPage = ({ navigation }) => {

const {firstTrip, secondTrip} = useContext(AppContext)

  const dispatch = useDispatch();

  return (
    <View style={style.main__container}>
     
      <Text style={{fontSize: 35}}>Checkout</Text>
      <Text>First Trip Selected: {firstTrip}</Text>
      <Text>Second Trip Selected: {secondTrip}</Text>
      <View>
        
      </View>
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
});

export default CheckoutPage;
