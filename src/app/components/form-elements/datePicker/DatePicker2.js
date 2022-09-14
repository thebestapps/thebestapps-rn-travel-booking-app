import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import CalendarPicker from 'react-native-calendar-picker';
import RBSheet from "react-native-raw-bottom-sheet";
import Modal from "react-native-modal";
import { Colors } from '../../../../theme/Colors';
import { FontSizes } from '../../../../theme/FontSize';
import global from '../../../../global';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DatePicker2 = ({startDefaultValue, endDefaultValue, value, onChange, name, type}) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [StartDate, setStartDate] = useState(null);
  const [EndDate, setEndDate] = useState(null);

  const onDateChange = (date, e) => {
    if (e === 'END_DATE') {
      setEndDate(date.toString()?.slice(0, 15));
      setTimeout(() => {
        setOpen(!open);
    }, 2000);
      
    } else {
      setEndDate((type == "cars") ? "" : null);
      setStartDate(date.toString()?.slice(0, 15));
    }
  };

  useEffect(() => {
    if(StartDate !== null && EndDate !== null){
      let temp = (new Date()).toString()
      // console.log(temp)
      if(temp.slice(11, 15) === StartDate.slice(11, 15)) setStartDate(StartDate.slice(0, 10))
      if(temp.slice(11, 15) === EndDate.slice(11, 15)) setEndDate(EndDate.slice(0, 10))
      onChange({ departure: StartDate, return: EndDate}, name)
    }
  },[StartDate, EndDate])
  return (
    <TouchableOpacity onPress={() => setOpen(true)}>
      <View style={{ ...style.datePicker, minWidth: (type === "cars") ? "50%" : "100%" }}>
        <Image 
          style={style.datePicker__Img}
          source={require("../../../../assets/icon/calender.png")} />
          {
            (value.departure === "")
            ?
              <Text style={style.datePicker__title}>{startDefaultValue}</Text>
            :
              <Text style={{ ...style.datePicker__title, color: Colors.blackText }}>{value.departure}</Text>
          }
          { (type !== "cars") &&
              ((value.return === "")
              ?
                <Text style={style.datePicker__title}>{" "}{endDefaultValue}</Text>
              :
                <Text style={{ ...style.datePicker__title, color: Colors.blackText }}>{" - "}{value.return}</Text>)
          }
      </View>
      {open && 
        <Modal avoidKeyboard={true} animationInTiming={750} isVisible={open} style={{justifyContent:"center", alignSelf:"center"}} backdropOpacity={0.8} useNativeDriver={true}>
          <View style={{backgroundColor:"white", height: 350, paddingTop: 20, borderRadius: 15}}>
            <CalendarPicker
                startFromMonday={true}
                allowRangeSelection={type === "cars" ? false : true}
                minDate={new Date()}
                maxDate={new Date(2023, 9, 12)}
                previousComponent={
                  <Ionicons name="arrow-back-circle" size={35} color="#006EE6" />
                }
                nextComponent={
                  <Ionicons name="arrow-forward-circle" size={35} color="#006EE6" />
                }
                yearTitleStyle={{
                  fontWeight:"bold"
                }}
                previousTitle="Previous"
                nextTitle="Next"
                selectedDayColor="#006EE6"
                selectedDayTextColor="white"
                width={370}
                selectedDayStyle={{
                  color:"white"
                }}
                minRangeDuration={1}
                textStyle={{
                    fontFamily: 'Cochin',
                    color: '#000000',
                }}
                onDateChange={onDateChange}
            />
          </View>
         </Modal>
        }
    </TouchableOpacity>
      
    
)}

const style = StyleSheet.create({
  datePicker: {
    height: 50,
    ...global.flexRowCenter
  },
  datePicker__title: {
    color: Colors.subText,
    fontSize: FontSizes.fontSize_md,
    fontWeight: "600",
  },   
  datePicker__Date: {
    color: Colors.blackText,
    fontSize: FontSizes.fontSize_lg,
    fontWeight: "600",
  },
  datePicker__Img: {
    width: 25,
    height: 25, 
    marginRight: 10
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,

  },
  modalView: {
    width:"95%",
    backgroundColor:"white"
  },
  findBtn: {
    width: 470,
    ...global.flexColCenterCenter,
    position: "absolute",
    bottom: 25,
    left: 0,
    right: 0,
    xIndex: 1000
  },
})

export default DatePicker2;