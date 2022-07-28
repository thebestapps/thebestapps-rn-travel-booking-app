import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/actions/authActions';

import Map from '../../components/map/Map';

//AIzaSyA8oMbDEX74kIWyeC9GNrFg2IujYPuhXZU

const MapPage = ({ navigator }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false); 
  const [query, setQuery] = useState('')

  const onLogoutHandler = () => {
    dispatch(logOut(setLoading))
  }
  
  return (
    <View style={styles.main}>
      <Map />
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    width: '100%', 
    height: '100%'
  },
  topPanel: {
    width: '100%',
    margin:'auto', 
    backgroundColor: '#ffffff', 
    position: 'absolute',
    top: 20, 
    left: 0, 
    zIndex: 10
  },

})

export default MapPage;