import React from 'react';
import { Image, View, Text, TouchableOpacity} from 'react-native';

import global from '../../../global';

const ActionBar2 = ({navigation, title}) => {
  return (
    <View style={global.actionBar}>
        <TouchableOpacity onPress={() => navigation.navigate("Drawer")}>
        <Image 
            style={global.actionBar__backBtn}
            source={require("../../../assets/icon/menu.png")}/>
        </TouchableOpacity>
        {/* <Text style={global.actionBar__title}>{title}</Text> */}
    </View>
  )
}

export default ActionBar2