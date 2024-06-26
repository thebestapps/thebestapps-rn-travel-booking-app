import React, { useState, useEffect} from 'react';
import { View, Text, StyleSheet, Image, Pressable, ScrollView} from 'react-native';
import { PanGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring
} from 'react-native-reanimated';
import SwitchToggle from "react-native-switch-toggle";
import EncryptedStorage from 'react-native-encrypted-storage';
import LocationPicker from '../../../components/form-elements/locationPicker/LocationPicker';
import DatePicker2 from '../../../components/form-elements/datePicker/DatePicker2';
import Button3 from '../../../components/form-elements/button/Button3';
import LinearGradient from 'react-native-linear-gradient';
import Avatar from '../../../components/avatar/Avatar';
import { LocationData, tTraveler } from '../Data';

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
  source: {
    location: "",
    code: "",
    content: false,
  },
  dates: {
    departure: "",
    return: ""
  },
  trip: "",
  travelers: tTraveler, 
  travelerName: "",
}


const Trains = () => {
  const [formData, setFormData] = useState(Data);
  const [mode, setMode] = useState(1); 
  const [on, off] = useState(false);
  const [travelerOpen, setTravlerOpen] = useState(false);
  const Z = useSharedValue(172);

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

  /////////////////////////////////////////////////////////////////////////////
  const animatedGestureHandler = useAnimatedGestureHandler({
    onActive:(e) => {
      Z.value = e.translationX;
    },
    onEnd: () => {
      if(Z.value < 100){
        Z.value = withSpring(60);
      }else{
        Z.value = withSpring(172)
      }
    }
  });

  const AnimatedStyles = {
    swipeable:useAnimatedStyle(() => {
      return {
        transform: [{translateX: Z.value}],
      };
    }),
  };


  return (
    <View style={style.trains}>
      <ScrollView>
      <GestureHandlerRootView>
        <PanGestureHandler onGestureEvent={animatedGestureHandler}>
          <Animated.View style={[style.trains__swipBtn, AnimatedStyles.swipeable]} />
        </PanGestureHandler>
        <View style={[style.trains__modeSwitcher, {marginTop: 20}]}>
          <Text 
            style={{color: (mode === 0) ? Colors.blackText : Colors.subText }} 
            onPress={() => {Z.value = withSpring(60, {damping: 20, stiffness: 500}); setMode(0)}}>
              One-way
          </Text>
          <Text 
            style={{color: (mode === 1) ? Colors.blackText : Colors.subText }} 
            onPress={() => {Z.value = withSpring(172, {damping: 20, stiffness: 500}); setMode(1)}}>
              Round trip
          </Text>
        </View>
      </GestureHandlerRootView>
       {/* Location Picker */}
       <LocationPicker 
        destination={formData.destination}
        source={formData.source}
        onChange={setData}
        list={LocationData}
        type="trains"
        onSwitch={locationChange}/>
      <View style={global.divider} />
      {/* Date Picker */}
      <DatePicker2
        startName="departure"
        startDefaultValue="Departure" 
        endName="return"
        endDefaultValue="Return" 
        name="dates"
        value={formData.dates}
        onChange={setData}/>
      <View style={global.divider} />
      {/* More options */}
      <View style={global.flexRowCenterSB}>
        <Text style={style.subHeading}>Select Train Card</Text>
        <Image 
          style={{ ...style.privacyImg, marginRight: -9}}
          source={require("../../../../assets/icon/arrowRight.png")} />
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
            list={tTraveler}
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
          <Text style={style.privacyTxt}>My train policy</Text>
        </View>
      </View>
      </ScrollView>
      {/* find flights btn */}
      <LinearGradient 
        start={{x: 0, y: 0}} end={{x: 0, y: 0.4}}
        colors={['#ffffff44', '#e4e4e4ff']} 
        style={style.findBtn}>
          <Button3  title="Find Trains"/>
      </LinearGradient>
    </View>
  )
}

const style = StyleSheet.create({
  trains:{
    width: "100%",
    flex: 1,
    backgroundColor: Colors.whiteColor,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingLeft: Spacing.paddingLeft,
    paddingRight: Spacing.paddingRight,
    paddingBottom: 50
  },
  trains__swipBtn: {
    position: "absolute",
    left: 8,
    top: 10,
    zIndex: 100,
    backgroundColor: "#00000000",
    borderStyle: "solid",
    borderWidth: 1.2,
    borderColor: Colors.blackColor,
    width: 80,
    borderRadius: 10,
    height: 40,
  },
  trains__modeSwitcher: {
    ...global.flexRow_SB,
    paddingLeft: 80,
    paddingRight: 80,
    marginRight: 20,
    marginBottom: 20
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

export default Trains;