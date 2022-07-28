import React, {useState} from 'react';
import { View, Text, Platform, TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import global from '../../../../global';

const DatePicker1 = ({defaultValue, value, onChange, name, pastDate }) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const onChangeHandler = (event, selectedDate) => {
    setOpen(!open)
    const currentDate = selectedDate || date;
    setDate(currentDate)

    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
    onChange(fDate, name);
  }

  return (
    <TouchableOpacity onPress={() => setOpen(true)}>
      <View style={global.datePicker}>
        {/* <Image 
          style={styles.datePickerImg}
          source={require("../../../../assets/icon/calender.png")} /> */}
        <Text style={global.datePicker__title}>{defaultValue}</Text>
        <Text style={global.datePicker__Date}>{value}</Text>
        {open && 
          <DateTimePicker
            testID='dateTimePicker'
            value={date}
            display='default'
            minimumDate={pastDate ? new Date("1977-03-28") : new Date()}
            onChange={onChangeHandler}
          />
        }
      </View>
    </TouchableOpacity>
  )
}

export default DatePicker1;