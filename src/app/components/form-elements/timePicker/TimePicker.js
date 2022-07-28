import React, {useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import global from '../../../../global';
import { Colors } from '../../../../theme/Colors';
import { FontSizes } from '../../../../theme/FontSize';


const TimePicker = ({defaultValue, value, onChange, name}) => {
  const [time, setTime] = useState(new Date());
  const [open, setOpen] = useState(false);

  const onChangeHandler = (event, selectedTime) => {
    setOpen(!open)
    const currentTime = selectedTime || time;
    setTime(currentTime)

    let tempTime = new Date(currentTime);
    let med = "am";
    console.log(tempTime.toString()[16], tempTime.toString()[17])
    if(tempTime.toString()[16] >= "1" && tempTime.toString()[17] >= "2" ){
        med = "pm";
    }
    let fTime = (tempTime.getHours()%12) + ':' + tempTime.getMinutes() + ' ' + med;
    onChange(fTime, name);
  }

  return (
    <TouchableOpacity onPress={() => setOpen(true)}>
      <View style={style.datePicker}>
        <Image 
          style={style.datePicker__Img}
          source={require("../../../../assets/icon/time.png")} />
        {
            (value === "")
            ?
                <Text style={style.datePicker__title}>{defaultValue}</Text>
            :
                <Text style={style.datePicker__Date}>{value}</Text>
        }
        {open && 
          <DateTimePicker
            testID='dateTimePicker'
            value={time}
            display='default'
            mode={'time'}
            is24Hour={false}
            minuteInterval={5}
            onChange={onChangeHandler}
          />
        }
      </View>
    </TouchableOpacity>
  )
}

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
  })

export default TimePicker;