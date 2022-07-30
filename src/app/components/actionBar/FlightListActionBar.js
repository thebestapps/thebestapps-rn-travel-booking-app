import React from "react";
import { Image, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Colors } from "../../../theme/Colors";
import { Images } from "../../../constants/images";
import { FontFamily, FontWeight } from "../../../theme/FontFamily";
import { FontSizes } from "../../../theme/FontSize";
import { flightList } from "../../../constants/texts";
import dayjs from "dayjs";

const FlightListActionBar = ({
  navigation,
  source,
  destination,
  avgPrice,
  selectedDate,
}) => {
  return (
    <View>
      <View
        style={{
          backgroundColor: Colors.blackColor,
          height: 70,
          width: "100%",
          justifyContent: "center",
        }}
      >
        <View style={style.main_titleWrapper}>
          <Text style={style.main__title}>{source}</Text>
          <Image
            style={{ height: 8, width: 8, marginHorizontal: 5 }}
            source={Images.flightIcon}
          />
          <Text style={style.main__title}>{destination}</Text>
        </View>
        <View style={style.main__subTitleWrapper}>
          <TouchableOpacity
            style={{ width: "10%" }}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={{ height: 15, width: 17 }}
              source={Images.arrowLeft}
            />
          </TouchableOpacity>
          <View
            style={{
              width: "80%",
              justifyContent: "center",
            }}
          >
            <Text style={style.main__subTitle}>
              {dayjs(selectedDate).format("ddd, MMM DD")}
            </Text>
          </View>
          <View style={{ width: "10%" }} />
        </View>
        <View style={[style.main_titleWrapper, { marginBottom: 10 }]}>
          <Image
            style={{ height: 12, width: 12, marginRight: 7 }}
            source={Images.briefcaseIcon}
          />
          <Text
            style={style.budget__title}
          >{`${flightList.budgetTxt}${avgPrice}`}</Text>
        </View>
      </View>
    </View>
  );
};

export default FlightListActionBar;

const style = StyleSheet.create({
  main_titleWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
  main__title: {
    fontSize: FontSizes.fontSize_sm,
    fontFamily: FontFamily.fontFamily_regular,
    fontWeight: FontWeight.fontWeight_500,
    color: Colors.whiteColor,
  },
  main__subTitleWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 15,
  },
  main__subTitle: {
    fontSize: FontSizes.fontSize_sm,
    fontFamily: FontFamily.fontFamily_regular,
    fontWeight: FontWeight.fontWeight_300,
    color: Colors.whiteColor,
    textAlign: "center",
  },
  budget__title: {
    fontSize: FontSizes.fontSize_xxs,
    fontFamily: FontFamily.fontFamily_regular,
    fontWeight: FontWeight.fontWeight_400,
    color: Colors.whiteColor,
  },
});
