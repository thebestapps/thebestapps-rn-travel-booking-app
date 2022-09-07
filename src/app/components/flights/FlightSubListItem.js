import React, {useContext, useState} from "react";
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
import dayjs from "dayjs";
import { useNavigation } from "@react-navigation/native";

import AppContext from "../../context/AppContext";

const FlightSubListItem = ({ item, index, onPress }) => {
  // const ft = dayjs(`2000-01-01 ${item.start_time}`);
  // const tt = dayjs(`2000-01-01 ${item.end_time}`);
  // const mins = tt.diff(ft, "minutes", true);
  // const totalHours = parseInt(mins / 60);
  // const totalMins = dayjs().minute(mins).$m;

  // console.log(totalHours, totalMins);
  const navigation = useNavigation();

  const {firstTrip, setFirstTrip, secondTrip, setSecondTrip, isOneWay} = useContext(AppContext);

  const setSelect = (d1, d2) =>{

    if(isOneWay){
      if(!firstTrip){
        setFirstTrip(d1 + " " + d2);
        navigation.navigate('Checkout')
      } 
    } else {
      if(!firstTrip){
        setFirstTrip(d1 + " " + d2);
        navigation.navigate('FlightListReturn')
      } else {
        setSecondTrip(d1 + " " + d2);
        navigation.navigate('Checkout')
      }
    }
  }


  return (
    <TouchableOpacity onPress={() => null}>
     
      
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingBottom: 10,
          paddingHorizontal: 15,
          borderTopColor: '#ccc',
          borderTopWidth: 1
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
              width: "15%",
              height: "100%",
            }}
          >
            <Image
            source={item.airline_logo}
            style={{
              width: 60,
              height: 90,
              alignSelf: "center",
            }}
          />
          </View>
         
          <View
            style={{
              width: "65%",
              height: "100%",
              paddingLeft: 20,
              paddingTop: 10,
            }}
          >
            
            <Text style={style.airline__places}>{item.boarding_point}</Text>
            <Text style={style.airline__time}>Main Cabin</Text>
            <View style={{flexDirection:'row'}}>
            <Image
            source={Images.b1}
            style={{
              width: 30,
              height: 20,
              alignSelf: "center",
            }}
          />
          <Image
            source={Images.b2}
            style={{
              width: 30,
              height: 20,
              alignSelf: "center",
            }}
          />
          <Image
            source={Images.b3}
            style={{
              width: 30,
              height: 20,
              alignSelf: "center",
            }}
          />
          <Image
            source={Images.b4}
            style={{
              width: 20,
              height:30,
              alignSelf: "center",
            }}
          />
          <Image
            source={Images.b5}
            style={{
              width: 20,
              height:30,
              alignSelf: "center",
            }}
          />
          <Image
            source={Images.b6}
            style={{
              width: 20,
              height:30,
              alignSelf: "center",
            }}
          />
            </View>
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
          <Text>{firstTrip}</Text>
          <TouchableOpacity onPress={() => setSelect(item.boarding_point, item.price)} style={{backgroundColor: '#0F3A99', paddingVertical: 5, paddingHorizontal:20, borderRadius:20, marginTop:10}}><Text style={{color: '#fff'}}>Select</Text></TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FlightSubListItem;

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
