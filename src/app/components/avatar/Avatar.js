import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Colors } from '../../../theme/Colors';
import { FontSizes } from '../../../theme/FontSize';

const Avatar = ({name, key}) => {

  const getFirstLetter = (name) => {
    return name[0]?.toUpperCase();
  }

  return (
    (name !== "" )
    ?
    <View style={style.avatar} key={key}>
      <View style={style.avatar__image}>
        <Text style={style.avatar__first}>{getFirstLetter(name)}</Text>
      </View>
      <Text style={style.avatar__name}>{name}</Text>
    </View>
    :
    <></>
  )
}

const style = StyleSheet.create({
  avatar: {
    width: 50,
    display: "flex",
    alignItems: "center",
    marginRight: 10
  },  
  avatar__image:{
    width: 35,
    height: 35,
    borderRadius: 50,
    backgroundColor: "#bdbdbd"
  },
  avatar__first: {
      position: "absolute",
      top: 4,
      left: 12,
      zIndex: 10,
      color: Colors.blackText,
      fontSize: FontSizes.fontSize_xl,
      fontWeight: "400"
  },
  avatar__name: {
      textAlign: "center",
      fontSize: FontSizes.fontSize_xs,
      color: Colors.blackText,
      fontWeight: "600"
  }
})

export default Avatar;