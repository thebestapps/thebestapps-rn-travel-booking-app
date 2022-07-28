import React, { useState } from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import Modals from '../../modals/Modals';

import { Colors } from '../../../../theme/Colors';
import { FontSizes } from '../../../../theme/FontSize';
import global from '../../../../global';
import { Spacing } from '../../../../theme/Spacing';

const LocationPicker = ({destination, source, onSwitch, onChange, list, type, cat}) => {
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
          setMode(0);
        }}>
        <View style={global.flexRowCenter}>
          { type === "flights" &&
            <Image 
              style={style.locPicker__Img}
              source={require("../../../../assets/icon/takeOff.png")}/>
          }
          {(source.location === "")
            ?
              <Text style={style.locPicker__title}>{cat === "cars" ? "Pick-up" : "From"}</Text>
            :
              <Text style={{...style.locPicker__title, color: Colors.blackText}}>{source.code}</Text>
          }
        </View>
        <Text style={style.locPicker__Name}>{source.location}</Text>
      </Pressable>
      { cat === "cars" ?
      <View style={style.locPicker__Swap}></View>
      :
      <Pressable onPress={switchHandler}>
        <Image
          style={style.locPicker__Swap}
          source={require("../../../../assets/icon/swap2.png")} />
      </Pressable>
      }
      <Pressable 
        style={{ ...style.locPicker__side, alignItems: "flex-end"}}
        onPress={() => {
          setOpenModal(true);
          setMode(1);
        }}>
        <View style={global.flexRowCenter}>
          {type === "flights" &&
            <Image 
              style={style.locPicker__Img}
              source={require("../../../../assets/icon/landing.png")}/>
          }
          {(destination.location === "")
            ?
              <Text style={style.locPicker__title}>{cat === "cars" ? "Drop-off" : "To"}</Text>
            :
              <Text style={{...style.locPicker__title, color: Colors.blackText}}>{destination.code}</Text>
          }
        </View>
        <Text style={style.locPicker__Name}>{destination.location}</Text>
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
    height: 50,
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

export default LocationPicker;