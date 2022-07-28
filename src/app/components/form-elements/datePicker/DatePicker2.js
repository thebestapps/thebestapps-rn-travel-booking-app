import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal } from "react-native";
import CalendarPicker from 'react-native-calendar-picker';

import { Colors } from '../../../../theme/Colors';
import { FontSizes } from '../../../../theme/FontSize';
import global from '../../../../global';
import Button3 from '../button/Button3';

const DatePicker2 = ({startName, startDefaultValue, endName, endDefaultValue, value, onChange, name, type}) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [StartDate, setStartDate] = useState(null);
  const [EndDate, setEndDate] = useState(null);

  const onDateChange = (date, e) => {
    if (e === 'END_DATE') {
      setEndDate(date.toString()?.slice(0, 15));
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
                <Text style={style.datePicker__title}>{" - "}{endDefaultValue}</Text>
              :
                <Text style={{ ...style.datePicker__title, color: Colors.blackText }}>{" - "}{value.return}</Text>)
          }
      </View>
      {open && 
        <Modal
          animationType="slide"
          transparent={true}
          visible={open}
          onRequestClose={() => {
            
          }}
        >
          <View style={style.centeredView}>
            <View style={style.modalView}>
              <Text style={style.datePicker__title}>Select Dates</Text>
              <View style={{marginTop: 100}}> 
              <CalendarPicker
                startFromMonday={true}
                allowRangeSelection={type === "cars" ? false : true}
                minDate={new Date()}
                maxDate={new Date(2050, 6, 3)}
                previousTitle="Previous"
                nextTitle="Next"
                todayBackgroundColor="#fcd6cc"
                selectedDayColor="#faa691"
                selectedDayTextColor="#000000"
                scaleFactor={375}
                textStyle={{
                    fontFamily: 'Cochin',
                    color: '#000000',
                }}
                onDateChange={onDateChange}
            />
            </View>
            <Text style={{marginTop: 50, color: Colors.blackText}}>{StartDate}{" - "}{EndDate}</Text>
              <View style={style.findBtn}>
                <Button3 title="Select Dates" onPress={() => setOpen(!open)}/>
              </View>
            </View>
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
    marginTop: 22
  },
  modalView: {
    margin: 20,
    height: "100%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
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