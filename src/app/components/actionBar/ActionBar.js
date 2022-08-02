import React from 'react';
import { Image, View, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import global from '../../../global';

const ActionBar = ({navigation, title}) => {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <View style={global.actionBar}>
          <Ionicons name="chevron-back-sharp" size={30} color="black"  style={global.actionBar__backBtnIcon}/>
          <Text style={global.actionBar__title}>{title}</Text>
      </View>
    </TouchableOpacity>   
  )
}

export default ActionBar