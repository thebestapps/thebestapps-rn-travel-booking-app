import React from 'react';
import { Image, View, Text, TouchableOpacity} from 'react-native';

import global from '../../../global';

const ActionBar = ({navigation, title}) => {
  return (
    <View style={global.actionBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image 
            style={global.actionBar__backBtn}
            source={require("../../../assets/icon/previous.png")}/>
        </TouchableOpacity>
        <Text style={global.actionBar__title}>{title}</Text>
    </View>
  )
}

export default ActionBar