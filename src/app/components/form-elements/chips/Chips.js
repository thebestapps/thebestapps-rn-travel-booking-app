import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import global from '../../../../global';
import { Colors } from '../../../../theme/Colors';

const Chips = ({title, onDelete, id}) => {
  return (
    id !== 0 &&
    <View style={style.chip}>
      <Text style={style.chip__Text}>{title}</Text>
      { id !== 1 &&
      <TouchableOpacity onPress={() => onDelete(id)}>
        <Image
            style={style.chip__Image} 
            source={require("../../../../assets/icon/close.png")} />
      </TouchableOpacity>
      }
    </View>
  )
}

const style = StyleSheet.create({
    chip: {
      height: 40,
      borderRadius: 20,
      padding: 10,
      marginRight: 10,
      backgroundColor: Colors.greyColor,
      ...global.flexRowCenterSB
    },
    chip__Text:{
      color: Colors.blackText
    },
    chip__Image: {
      width: 20,
      height: 20,
      marginLeft: 10
    }
})

export default Chips;