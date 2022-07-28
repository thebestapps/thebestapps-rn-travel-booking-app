import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Pressable, TouchableOpacity, ScrollView } from 'react-native'; 
import SwitchToggle from "react-native-switch-toggle";
import LocationPicker2 from '../../../components/form-elements/locationPicker/LocationPicker2';
import DatePicker2 from '../../../components/form-elements/datePicker/DatePicker2';
import EncryptedStorage from 'react-native-encrypted-storage';
import LinearGradient from 'react-native-linear-gradient';
import Button3 from '../../../components/form-elements/button/Button3';
import { LocationData, hotelLocations, Rooms, Trip, hTraveler } from '../Data';

import { Colors } from '../../../../theme/Colors';
import Modals from '../../../components/modals/Modals';
import { FontSizes } from '../../../../theme/FontSize';
import global from '../../../../global';
import { Spacing } from '../../../../theme/Spacing';


const Data = {
  destination: {
    location: "",
    code: "",
    content: false,
  },
  dates: {
    departure: "",
    return: ""
  },
  travelers: hTraveler,
  rooms: 1,
  individuals: "",
  travelerName: ""
}

const Hotels = () => {
  const [formData, setFormData] = useState(Data);
  const [travelerOpen, setTravlerOpen] = useState(false);
  const [rooms, setRooms] = useState(1);
  const [on, off] = useState(false);
  const [individualOpen, setIndividualOpen] = useState(false);

  const setData = (value, name) => {
    setFormData({ ...formData, [name]: value})
  }

  const locationChange = () => {
    setFormData({...formData, source: formData.destination, destination: formData.source})
  }

  useEffect(() => {
    async function fetchData() {
      try{
        var info = await EncryptedStorage.getItem("employee_info");
        info = JSON.parse(info)
        let arr = formData.travelers
        // arr[1] = {name: info.DisplayName, id: 1, selected: true, email: "surya.acco360@gmail.com"}
        setFormData({...formData, travelers: arr})
        console.log(JSON.parse(info))
      }catch(error){}
    }
    fetchData();
  },[])

  return (
    <View style={style.hotels}>
      <ScrollView>
      {/* Location Picker */}
      <LocationPicker2 
        destination={formData.destination}
        onChange={setData}
        list={hotelLocations}
        type="Location"
        onSwitch={locationChange}/>
      <View style={global.divider} />
      {/* Date Picker */}
      <DatePicker2
        startName="departure"
        startDefaultValue="Check - In" 
        endName="return"
        endDefaultValue="Check - Out" 
        name="dates"
        value={formData.dates}
        onChange={setData}/>
      <View style={global.divider} />  
      {/* Rooms */}
      <View style={global.flexRowCenterSB}>
        <Text style={{ ...style.subHeading, color: Colors.blackText}}>{rooms} Rooms</Text>
        <View style={global.flexRowCenterSB}>
          <TouchableOpacity onPress={() => (rooms !== 1) && setRooms(rooms - 1)}>
            <Image 
              style={{ ...style.privacyImg, marginRight: 15, opacity: (rooms === 1) ? 0.4 : 1}}
              source={require("../../../../assets/icon/subtract.png")} />
          </TouchableOpacity>   
          <Text style={{ ...style.subHeading, color: Colors.blackText}}>{rooms}</Text>
          <TouchableOpacity onPress={() => setRooms(rooms + 1)}>
            <Image
              style={{ ...style.privacyImg, marginLeft: 15}}
              source={require("../../../../assets/icon/add.png")} />
          </TouchableOpacity>   
        </View>
        
      </View>
      <View style={global.divider} />
      {/* More Options */}
      <View style={global.flexRowCenterSB}>
        <Text style={style.subHeading}>More options</Text>
        <Image 
          style={{ ...style.privacyImg, marginRight: -9}}
          source={require("../../../../assets/icon/arrowRight.png")} />
      </View>
      <View style={global.divider} />
      {/* Guests */}
      <View style={{marginBottom: 20}}>
        <Pressable onPress={() => setTravlerOpen(true)} >
          <View style={global.flexRowCenterSB}>
            <Text style={{...style.subHeading, marginTop: 0, marginBottom: 20}}>Guests</Text>
            <Image 
              style={{ ...style.privacyImg, marginRight: -9}}
              source={require("../../../../assets/icon/arrowRight.png")} />
          </View>
          <Modals 
            open={travelerOpen} 
            setOpen={setTravlerOpen}
            type="Users"
            setData={(data, id, type) => {
              if( type === "del"){
                let index = formData.travelers.findIndex(p => p.id == id);
                let arr = formData.travelers
                arr[index] = {...arr[index], selected: false}
                setFormData({ ...formData, travelers: arr})
              }else{
                let index = formData.travelers.findIndex(p => p.id == id);
                let arr = formData.travelers;
                arr[index] = {...arr[index], selected: true}
                setFormData({ ...formData, travelers: arr})
              }
            }} 
            traveler={formData.travelers}
            list={hTraveler}
            title="Guest"/>
        </Pressable>
        {formData.travelers.map((item, index) => (
          (item.selected === true) && 
          <View style={style.traveler__item}>
            <View>
              <Text style={style.traveler__name}>{item?.name}</Text>
              <Text style={style.traveler__email}>{item?.email}</Text>
            </View>
            <Pressable onPress={() => {
              let i = formData.travelers.findIndex(t => t.id === item.id);
              let arr = formData.travelers;
              arr[i] = {...arr[i], selected: false}
              setFormData({ ...formData, travelers: arr})
            }}>
              <Image 
                style={{ ...style.privacyImg, marginRight: -15}}
                source={require("../../../../assets/icon/close.png")} />
            </Pressable>
          </View>
          ))}
      </View>
      <View style={global.divider} />
      {/* Bill to Client */}
      <View style={global.flexRowCenterSB}>
        <View style={{display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 40}}>
            <SwitchToggle
              switchOn={on}
              onPress={() => off(!on)}
              containerStyle={{
                marginRight: 10,
                width: 45,
                height: 22,
                borderRadius: 25,
                padding: 4,
              }}
              circleStyle={{
                width: 15,
                height: 15,
                borderRadius: 20,
              }}
            />
          <Text style={style.privacyTxt}>Bill to Client</Text>
        </View>
        <View style={{display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 40}}>
          <Image style={style.privacyImg}
            source={require("../../../../assets/icon/policy.png")} />
          <Text style={style.privacyTxt}>My hotel policy</Text>
        </View>
      </View>
      </ScrollView>
      <LinearGradient 
        start={{x: 0, y: 0}} end={{x: 0, y: 0.4}}
        colors={['#ffffff44', '#e4e4e4ff']} 
        style={style.findBtn}>
          <Button3  title="Find Hotels"/>
      </LinearGradient>
    </View>
  )
}
const style = StyleSheet.create({
  hotels: {
    width: "100%",
    flex: 1,
    backgroundColor: Colors.whiteColor,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    paddingBottom: 50
  }, 
  subHeading: {
    color: Colors.subText,
    fontSize: FontSizes.fontSize_md,
    fontWeight: "600",
    marginTop: 15,
    marginBottom: 15
  },
  findBtn: {
    width: 400,
    paddingBottom: 25,
    ...global.flexColCenterCenter,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    xIndex: 1000,
  },
  traveler__item: {
    ...global.flexRowCenterSB,
    width: "100%", 
    borderWidth: 1.2,
    padding: 5,
    paddingRight: 20,
    borderRadius: 10,
    marginBottom: 5,
    marginLeft: "auto",
    marginRight: "auto"

  },
  traveler__name: {
    fontSize: FontSizes.fontSize_md,
    fontWeight: "600"
    
  },
  traveler__email: {
    fontSize: FontSizes.fontSize_xs,
    fontWeight: "600"
  },
  privacyTxt: {
    color: Colors.subText,
    fontWeight: "600"
  },  
  privacyImg: {
    width: 25,
    height: 25,
    marginRight: 10
  }
})

export default Hotels;