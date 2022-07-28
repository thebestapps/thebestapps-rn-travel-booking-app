import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import * as actionTypes from "../../redux/actionTypes";
import EncryptedStorage from 'react-native-encrypted-storage';
import Button3 from '../../components/form-elements/button/Button3';
import ActionBar2 from '../../components/actionBar/ActionBar2';

import styles from '../../../global';

const HomePage = ({navigation}) => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    navigation.navigate('Search')
  }

  const onLogoutHandler = async () => {
    try{
      await EncryptedStorage.clear();
      dispatch({type: actionTypes.LOG_OUT});
    }catch (error){ 
      console.log(error)
    }
  }

  return (
    <View style={[styles.background, style.home]}>
      <View>
      <ActionBar2 navigation={navigation} title={""}/>
      <Text style={styles.heading}>Hi Surya, what brings you to Getout Travel today?</Text>
      </View>
      <View style={style.home__myTrips}>
        <Text style={[styles.heading, {marginTop: 20, marginLeft: 20 , position: 'absolute', top: 0, left: 0}]}>My Trips</Text>
        <Button3 title="Start new" onPress={onClickHandler} />
        <Button3 title="Existing" onPress={onLogoutHandler} />
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  home: {
    display: "flex",
    justifyContent: "space-between"
  },
  home__myTrips: {
    width: "100%",
    height: "65%",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 30,
    backgroundColor: "#ffffff",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    elevation: 4,

    marginBottom: 80
},
})



export default HomePage;