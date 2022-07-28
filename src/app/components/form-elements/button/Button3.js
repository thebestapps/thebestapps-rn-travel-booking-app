import React from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';

import global from '../../../../global';

const Button3 = ({title, onPress}) => {
  return (
    <Pressable 
      style={global.button3}
      onPress={onPress}
    >
      <Text style={global.button3__Text}>{title}</Text>
    </Pressable>
  )
}

export default Button3;