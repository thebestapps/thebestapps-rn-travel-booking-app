import React from 'react';
import { View, Image, ScrollView } from 'react-native';
import DestinationButton from '../../../components/form-elements/button/DestButton';

import styles from "./styles.scss";

const LocationTab = () => {


  const onPressHandler = () => {

  }

  return (
    <ScrollView style={styles.locTabContainer}>
      <View style={styles.locTabTop}>
        <Image 
          style={styles.locTabTopImg}
          source={require("../../../../assets/images/Top1.jpg")}/>
        <View style={styles.locTabTopBtn}>
          <DestinationButton 
            title="Berlin" 
            subTitle="Destination guide" 
            onPress={onPressHandler}
            transparent={false} />
        </View>
      </View>
      <View style={styles.locTabBottom}>
        <View style={styles.locTabBottomRow}>
          <Image 
            style={styles.locTabBottomImg}
            source={require("../../../../assets/images/Top1.jpg")}/>
          <Image 
            style={styles.locTabBottomImg}
            source={require("../../../../assets/images/Top1.jpg")}/>
        </View>
        <View style={styles.locTabBottomRow}>
          <Image 
            style={styles.locTabBottomImg}
            source={require("../../../../assets/images/Top1.jpg")}/>
          <Image 
            style={styles.locTabBottomImg}
            source={require("../../../../assets/images/Top1.jpg")}/>
          
        </View>
      </View>
    </ScrollView>
  )
}

export default LocationTab