import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Pressable, ScrollView} from 'react-native';

import SwitchToggle from "react-native-switch-toggle";
import EncryptedStorage from 'react-native-encrypted-storage';
import LocationPicker from '../../../components/form-elements/locationPicker/LocationPicker';
import DatePicker2 from '../../../components/form-elements/datePicker/DatePicker2';
import Button3 from '../../../components/form-elements/button/Button3';
import LinearGradient from 'react-native-linear-gradient';

import { LocationData, cTraveler } from '../Data';

import { Colors } from '../../../../theme/Colors';
import Modals from '../../../components/modals/Modals';
import { FontSizes } from '../../../../theme/FontSize';
import global from '../../../../global';
import { Spacing } from '../../../../theme/Spacing';
import TimePicker from '../../../components/form-elements/timePicker/TimePicker';

const Data = {
  destination: {
    location: "",
    code: "",
    content: false,
  },
  source: {
    location: "",
    code: "",
    content: false,
  },
  dates: {
    departure: "",
    return: ""
  },
  travelers: cTraveler,
  time: "",
  travelerName: "",
}

const Cars = () => {
  const [formData, setFormData] = useState(Data);
  const [mode, setMode] = useState(1); 
  const [on, off] = useState(false);
  const [travelerOpen, setTravlerOpen] = useState(false);

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

  const setData = (value, name) => {
    setFormData({ ...formData, [name]: value})
  }

  const locationChange = async () => {
    setFormData({...formData, source: formData.destination, destination: formData.source})
  }

  return (
    <View style={style.cars}>
       <ScrollView>
      {/* Location Picker */}
      <LocationPicker 
        destination={formData.destination}
        source={formData.source}
        onChange={setData}
        list={LocationData}
        type="Location"
        cat="cars"
        onSwitch={locationChange}/>
      <View style={global.divider} />
      {/* Date Picker */}
      <View style={global.flexRowCenter} >
        <DatePicker2
          startName="departure"
          startDefaultValue="Departure" 
          endName="return"
          endDefaultValue="Return" 
          name="dates"
          type="cars"
          value={formData.dates}
          onChange={setData}/>
        <TimePicker 
          defaultValue="Time"
          value={formData.time} 
          name="time"
          onChange={setData}
          />
      </View>
      <View style={global.divider} /> 
       {/* Travelers */}
       <View style={{marginBottom: 20}}>
        <Pressable onPress={() => setTravlerOpen(true)} >
          <View style={global.flexRowCenterSB}>
            <Text style={{...style.subHeading, marginTop: 0, marginBottom: 20}}>Travelers</Text>
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
            list={cTraveler}
            title="Traveler"/>
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
          <Text style={style.privacyTxt}>My car policy</Text>
        </View>
      </View>
      </ScrollView>
      {/* find cars btn */}
      <LinearGradient 
        start={{x: 0, y: 0}} end={{x: 0, y: 0.4}}
        colors={['#ffffff44', '#e4e4e4ff']} 
        style={style.findBtn}>
          <Button3  title="Find Cars"/>
      </LinearGradient>
    </View>
  )
}

const style = StyleSheet.create({
  cars:{
    width: "100%",
    flex: 1,
    backgroundColor: Colors.whiteColor,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 20,
    paddingLeft: Spacing.paddingLeft,
    paddingRight: Spacing.paddingRight,
    paddingBottom: 50
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
  subHeading: {
    color: Colors.subText,
    fontSize: FontSizes.fontSize_md,
    fontWeight: "600",
    marginTop: 15,
    marginBottom: 15
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

export default Cars;