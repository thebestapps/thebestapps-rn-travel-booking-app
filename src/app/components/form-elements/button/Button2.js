import React from 'react';
import { View, Text, Pressable } from 'react-native';

import styles from "./styles.scss";

const Button2 = ({title, icon, onPress}) => {
  return (
    <Pressable 
      style={styles.button2}
      onPress={onPress}
    > 
      {icon}
        <Text style={styles.button2Text}>{title}</Text>
    </Pressable>
  )
}

export default Button2;