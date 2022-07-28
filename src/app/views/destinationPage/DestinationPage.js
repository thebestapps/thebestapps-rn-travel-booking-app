import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import styles from "./styles.scss";

export default function DestinationPage({nav}) {
    return (
    <View style={styles.destPageContainer}>
       <View style={styles.destPageNavbar}>
         <TouchableOpacity onPress={() => nav.navigate("Search")}>
           <Image
             style={styles.destPageBack}
             source={require("../../../assets/icon/backBtn.png")} />
         </TouchableOpacity>
       </View>
     </View>
    )
}