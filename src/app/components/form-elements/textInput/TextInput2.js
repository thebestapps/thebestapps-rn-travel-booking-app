import React, {useState, useEffect} from 'react';
import { View, StyleSheet, TextInput, Text, Pressable } from 'react-native';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring
} from 'react-native-reanimated';
import { Colors } from '../../../../theme/Colors';
import { FontSizes } from '../../../../theme/FontSize';
import DatePicker1 from '../datePicker/DatePicker';

const TextInput2 = ({ name, placeholder, value, onChangeText, date, pastDate, errors}) => {
  const X = useSharedValue(0);
  const [focused, setFocused] = useState(false);


  const AnimatedStyles = {
    swipeable:useAnimatedStyle(() => {
      return {
        fontSize: (focused) ? FontSizes.fontSize_xs : FontSizes.fontSize_lg,
        transform: [{translateY: X.value}],
      };
    }),
  };

  useEffect(() => {
    if(value !== "") {setFocused(true); X.value = withSpring(-20 , {damping: 20, stiffness: 500})}
  },[value])

  return (
    <View style={styles.input_container} >
      <Animated.Text style={[styles.input_label, AnimatedStyles.swipeable]}>{placeholder}</Animated.Text>
      {date
      ?
        <Pressable onPress={() => {setFocused(true), X.value = withSpring(-20 , {damping: 20, stiffness: 500})}}>
          <View style={{...styles.dateInput, borderColor: (errors?.status) ? Colors.errorColor : (value !== "") ? Colors.successColor : Colors.greyColor}}>
            <DatePicker1 value={value} onChange={onChangeText} name={name} pastDate={pastDate}/>
          </View>
        </Pressable>
      : 
      <TextInput
        style={{...styles.input, borderColor: (errors?.status) ? Colors.errorColor : (value !== "") ? Colors.successColor : Colors.greyColor}}
        name={name}
        value={value}
        onChangeText={onChangeText}
        onFocus={() => {setFocused(true), X.value = withSpring(-20 , {damping: 20, stiffness: 500})}}
        onBlur={() => { if(value === "") {setFocused(false), X.value = withSpring(0 , {damping: 20, stiffness: 500})}}}
      />
      }
      { errors?.status === true &&
        <Text style={styles.errorText}>{errors?.error}</Text>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  input_container:{
    // height: 45,
    width: "100%",
    marginTop: 8,
    marginBottom: 10
  },  
  input: {
    height: 50,
    width: "100%",
    borderBottomWidth: 2,
    padding: 7,
    fontSize: FontSizes.fontSize_lg
  },
  dateInput: {
    height: 50,
    width: "100%",
    borderBottomWidth: 2,
    paddingLeft: 8,
    paddingBottom: 12,
    fontSize: FontSizes.fontSize_lg
  },
  input_label:{
    position: "absolute",
    left: 12,
    top: 13,
    fontSize: FontSizes.fontSize_lg
  },
  errorText: {
    color: Colors.errorColor,
  }
})

export default TextInput2;