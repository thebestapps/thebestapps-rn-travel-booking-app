import React, {useState} from "react";
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { Colors } from "../../../theme/Colors";
import { Images } from "../../../constants/images";
import { FontFamily, FontWeight } from "../../../theme/FontFamily";
import { FontSizes } from "../../../theme/FontSize";
import { flightList } from "../../../constants/texts";
import FlightSubListItem from '../../components/flights/FlightSubListItem'

import dayjs from "dayjs";
import { TouchableHighlight } from "react-native-gesture-handler";

const FlightListItem = ({ navigation, item, index, onPress }) => {
  // const ft = dayjs(`2000-01-01 ${item.start_time}`);
  // const tt = dayjs(`2000-01-01 ${item.end_time}`);
  // const mins = tt.diff(ft, "minutes", true);
  // const totalHours = parseInt(mins / 60);
  // const totalMins = dayjs().minute(mins).$m;

  // console.log(totalHours, totalMins);

  const [expanded, isExpanded] = useState(false)

  return (
    <TouchableOpacity style={{ marginHorizontal: 15 }} onPress={() => expanded ?  isExpanded(false) :  isExpanded(true)}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: index === 1 || index === 4 ? 25 : 40,
            width: 40,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={item.airline_logo}
            style={{
              width: "100%",
              height: "100%",
              alignSelf: "center",
            }}
            resizeMode={"contain"}
          />
        </View>
        <Text
          style={style.airline__text}
        >{`${item.airline_name}. 1h 43m`}</Text>
      </View>
      <View style={{ alignItems: "flex-end", marginRight: 15 }}>
        <Text style={style.airline__from}>{flightList.from}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingBottom: 10,
          paddingHorizontal: 15,
        }}
      >
        <View
          style={{
            width: "68%",
            height: "100%",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "35%",
              height: "100%",
            }}
          >
            <Text style={style.airline__time}>{item.start_time}</Text>
            <Text style={style.airline__places}>{item.boarding_point}</Text>
          </View>
          <View
            style={{
              width: "30%",
              height: "100%",
            }}
          ></View>
          <View
            style={{
              width: "35%",
              height: "100%",
            }}
          >
            <Text style={style.airline__time}>{item.end_time}</Text>
            <Text style={style.airline__places}>{item.boarding_point}</Text>
          </View>
        </View>
        <View
          style={{
            width: "32%",
            height: "100%",
            alignItems: "flex-end",
          }}
        >
          <Text style={style.airline__time}>{item.price}</Text>
          <Text style={style.airline__policy}>
            {item.is_under_policy ? flightList.outPolicy : ""}
          </Text>
        </View>
      </View>
      {expanded && 
        <View>
          <FlightSubListItem item={item} navigation={navigation} />
          <FlightSubListItem item={item} navigation={navigation}  />
          <FlightSubListItem item={item} navigation={navigation}  />
        </View>
      }
    </TouchableOpacity>
  );
};

export default FlightListItem;

const style = StyleSheet.create({
  airline__text: {
    fontSize: FontSizes.fontSize_s,
    fontFamily: FontFamily.fontFamily_regular,
    fontWeight: FontWeight.fontWeight_400,
    color: Colors.greyColor1,
    marginLeft: 7,
  },
  airline__time: {
    fontSize: FontSizes.fontSize_lg,
    fontFamily: FontFamily.fontFamily_regular,
    fontWeight: FontWeight.fontWeight_500,
    color: Colors.blackColor,
  },
  airline__places: {
    fontSize: FontSizes.fontSize_s,
    fontFamily: FontFamily.fontFamily_regular,
    fontWeight: FontWeight.fontWeight_400,
    color: Colors.greyColor1,
  },
  airline__from: {
    fontSize: FontSizes.fontSize_xxs,
    fontFamily: FontFamily.fontFamily_regular,
    fontWeight: FontWeight.fontWeight_400,
    color: Colors.greyColor1,
  },
  airline__policy: {
    fontSize: FontSizes.fontSize_xxs,
    fontFamily: FontFamily.fontFamily_regular,
    fontWeight: FontWeight.fontWeight_300,
    color: Colors.redColor,
  },
});
