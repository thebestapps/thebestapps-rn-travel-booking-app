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
import { FontFamily, FontWeight } from "../../../theme/FontFamily";
import { FontSizes } from "../../../theme/FontSize";
import { flightList } from "../../../constants/texts";
import {
  flightListData,
  flightListFilter,
} from "../../../constants/static_data";
import dayjs from "dayjs";
import FlightListActionBar from "../../components/actionBar/FlightListActionBar";
import ChipList from "../../components/chip-lists/ChipList";
import FlightListItem from "../../components/flights/FlightListItem";

import AppContext from "../../context/AppContext";

const FlightListReturnPage = ({ navigation }) => {

const {firstTrip, secondTrip, isOneWay} = useContext(AppContext)

  const dispatch = useDispatch();

  return (
    <View style={style.main__container}>
      <FlightListActionBar
        navigation={navigation}
        source={"JKF"}
        destination={"BOS"}
        avgPrice={"297"}
        selectedDate={Date.now()}
      />
      <ChipList chipListData={flightListFilter} />
      <View>
        <View>
          <FlatList
            data={flightListData}
            style={{ paddingTop: 20, paddingBottom: 30 }}
            renderItem={({ item, index }) => {
              return <FlightListItem item={item} index={index} />;
            }}
            ItemSeparatorComponent={(_, index) => {
              return <View style={style.flight__divider} />;
            }}
          />
        </View>
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

export default FlightListReturnPage;
