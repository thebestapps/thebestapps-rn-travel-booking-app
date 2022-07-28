import React, { useState } from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import Modals from '../../modals/Modals';

import { Colors } from '../../../../theme/Colors';
import { FontSizes } from '../../../../theme/FontSize';
import global from '../../../../global';
import { Spacing } from '../../../../theme/Spacing';

const LocationPicker2 = ({destination, onSwitch, onChange, list, type}) => {
  const [openModal , setOpenModal] = useState(false);
  const [mode, setMode] = useState(-1);
  
  const switchHandler = () => {onSwitch()}

  const setLocation = (e) => {
    if(mode === 1){
      onChange(e, "destination")
    }else{
      onChange(e, "source")
    }
    setOpenModal(!openModal);
    setMode(-1);
  }

  return (
    <View style={style.locPicker}>
      <Modals 
        open={openModal} 
        setOpen={setOpenModal} 
        list={list} 
        type={type}
        traveler={[]}
        setData={setLocation} 
        title={mode === 0 ? "Source" : "Destination"}/>
      <Pressable 
        style={style.locPicker__side} 
        onPress={() => {
          setOpenModal(true);
          setMode(1);
        }}>
        <View style={{...global.flexRowCenter, alignItems: "flex-start"}}>
          <Image 
            style={style.locPicker__Img}
            source={require("../../../../assets/icon/location.png")}/>
          {(destination.location === "")
            ?
              <Text style={style.locPicker__title}>Where?</Text>
            :
              <Text style={{...style.locPicker__title, color: Colors.blackText}}>{destination.location}</Text>
          }
        </View>
        {/* <Text style={style.locPicker__Name}>{destination.location}</Text> */}
      </Pressable>
    </View>
  )
}

const style = StyleSheet.create({
  locPicker: {
    width: "100%",
    paddingRight: Spacing.paddingRight,
    ...global.flexRowCenterSB
  },
  locPicker__side: {
    width: "44.5%",
    height: 70,
    backgroundColor: Colors.whiteColor,
  },
  locPicker__title: {
    color: Colors.subText,
    fontSize: FontSizes.fontSize_lg,
    fontWeight: "600",
  },
  locPicker__Img: {
    width: 25,
    height: 25,
    marginRight: 10
  },
  locPicker__Name: {
    color: Colors.blackText,
    fontSize: FontSizes.fontSize_md,
    fontWeight: "600",
    maxHeight: 22
  },
  locPicker__Swap: {
    marginTop: "auto",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: "auto",
    width: 32,
    height: 32,
  }
})

export default LocationPicker2;