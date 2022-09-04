import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Pressable} from 'react-native';
import ActionBar from '../../components/actionBar/ActionBar';

import { PanGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring
} from 'react-native-reanimated';

import Flights from './flights/Flights';
import Hotels from './hotels/Hotels';
import Cars from './cars/Cars';
import Trains from './trains/Trains';

import global from '../../../global';
import { Colors } from '../../../theme/Colors';
import { Spacing } from '../../../theme/Spacing';

const SearchPage = ({navigation}) => {
  const [mode, setMode] = useState(0);
  const [title, setTitle] = useState("Flights");

  const X = useSharedValue(0);
  const Y = useSharedValue(-27);

  //////////////////////////////////////////////////////
  const animatedGestureHandler = useAnimatedGestureHandler({
    onActive:(e) => {
      X.value = e.translationX;
    },
    onEnd: () => {
      if(X.value < 70){
        X.value = withSpring(0);
      }else if(X.value > 70){
        X.value = withSpring(180)
      }
    }
  });

  const AnimatedStyles = {
    swipeable:useAnimatedStyle(() => {
      return {
        transform: [{translateX: X.value}],
      };
    }),
  };

  ///////////////////////////////////////////////////////
  const animatedGestureHandler2 = useAnimatedGestureHandler({
    onActive:(e) => {
      Y.value = e.translationX;
    },
    onEnd: () => {
      if(Y.value < 45){
        Y.value = withSpring(-27);
      }else if(Y.value > 45 && Y.value < 135){
        Y.value = withSpring(69);
      }else if(Y.value > 135 && Y.value < 225){
        Y.value = withSpring(165);
      }else{
        Y.value = withSpring(261);
      }
    }
  });

  const AnimatedStyles2 = {
    swipeable:useAnimatedStyle(() => {
      return {
        transform: [{translateX: Y.value}],
      };
    }),
  };

  useEffect(() => {
    if(mode === 0){
      setTitle("Flights")
    }else if(mode === 1){
      setTitle("Hotels")
    }else if(mode === 2){
      setTitle("Cars")
    }else{
      setTitle("Trains")
    }
  },[mode]);

  return (
    <View style={{ ...global.background, paddingLeft: 0, paddingRight: 0}}>
      <View style={{ paddingLeft: Spacing.paddingLeft, paddingRight: Spacing.paddingRight}}>
        <ActionBar navigation={navigation} title={title}/>
        <GestureHandlerRootView>
          <View style={style.switcher}>
            <PanGestureHandler onGestureEvent={animatedGestureHandler}>
              <Animated.View style={[style.swipBtn, AnimatedStyles.swipeable]} />
            </PanGestureHandler>
            <Text style={style.subtext2} onPress={() => X.value = withSpring(0, {damping: 20, stiffness: 500})}>Business</Text>
            <Text style={style.subtext2} onPress={() => X.value = withSpring(180, {damping: 20, stiffness: 500})}>Personal</Text>
          </View>
        </GestureHandlerRootView>
          
        <GestureHandlerRootView>
          <View style={style.modeSwitcher }>
            <PanGestureHandler onGestureEvent={animatedGestureHandler2}>
              <Animated.View style={[style.swipBtn2, AnimatedStyles2.swipeable]} />
            </PanGestureHandler>
            <Pressable onPress={() => {Y.value = withSpring(-27, {damping: 20, stiffness: 500}); setMode(0)}}>
              <Image 
                style={[style.modeImg, {transform: [{ rotate: '45deg'}], opacity: (mode === 0) ? 1 : 0.4}]}
                source={require("../../../assets/icon/flight2.png")} />
            </Pressable>
            <Pressable  onPress={() => {Y.value = withSpring(69, {damping: 20, stiffness: 500}); setMode(1)}}>
              <Image
                style={{...style.modeImg, opacity: (mode === 1) ? 1 : 0.4}}
                source={require("../../../assets/icon/hotel2.png")} />
            </Pressable>
            <Pressable  onPress={() => {Y.value = withSpring(165, {damping: 20, stiffness: 500}); setMode(2)}}>
              <Image 
                style={{...style.modeImg, opacity: (mode === 2) ? 1 : 0.4}}
                source={require("../../../assets/icon/taxi2.png")} />
            </Pressable>   
            <Pressable  onPress={() => {Y.value = withSpring(261, {damping: 20, stiffness: 500}); setMode(3)}}>
              <Image 
                style={{...style.modeImg, opacity: (mode === 3) ? 1 : 0.4}}
                source={require("../../../assets/icon/train2.png")} />
            </Pressable>    
          </View>
        </GestureHandlerRootView>
      </View>
      {/*  form */}
      {
        (mode === 0)
        ?
          <Flights />
        :
          (mode === 1)
          ?
            <Hotels />
          : 
            (mode === 2)
            ?
              <Cars />
            :
              <Trains />

      }
    </View>
  )
}

const style = StyleSheet.create({
  switcher: {
    width: "100%",
    height: 50,
    ...global.flexRowCenterSB,
    backgroundColor: "#adadad",
    borderRadius: 25,
    paddingLeft: 50,
    paddingRight: 50,
  },
  swipBtn: {
    position: "absolute",
    left: 0,
    top: 0,
    zIndex: -1,
    width: 180,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#000000",
  },
  swipBtn2: {
    position: "absolute",
    left: 14 ,
    top: -9,
    zIndex: 100,
    backgroundColor: "#00000000",
    borderStyle: "solid",
    borderWidth: 1.2,
    borderColor: Colors.blackColor,
    width: 50,
    borderRadius: 12,
    height: 45,
  },
  subtext2: {
    fontSize: 18,
    fontWeight: "600",
    color: "#ffffff",
  },
  modeSwitcher: {
    ...global.flexRow_SB,
    margin: 20
  },  
  modeImg: {
    width: 25,
    height: 25
  },
})

export default SearchPage;