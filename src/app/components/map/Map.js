import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import MapView from 'react-native-maps';
import { enableLatestRenderer, Marker } from 'react-native-maps';

import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/actions/authActions';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

//AIzaSyA8oMbDEX74kIWyeC9GNrFg2IujYPuhXZU

//default location of the map
const center = { lat: 48.8584, lng: 2.2945 }

const Map = () => {
  enableLatestRenderer();

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false); 
  const [query, setQuery] = useState('')
  const [coordinate, setCoordinate] = useState({
    latitude: 48.8584,
    longitude: 2.2945
  })

  const onLogoutHandler = () => {
    dispatch(logOut(setLoading))
  }
  
  return (
    <View style={styles.main}>
      {/* <View style={styles.topPanel}>
        <Button 
          title="Log out" 
          color="black"
          onPress={onLogoutHandler}>
        </Button>
        <TextInput1
          name={"query"}
          placeholder={'query'}
          value={query}
          onChangeText={(e) => setQuery(e)}
        />
      </View> */}
      <GooglePlacesAutocomplete
        placeholder='Search'
        onPress={(data, details = null) => {
          console.log(data, details);
        }}
        query={{
          key: 'AIzaSyCA4fBbpHVWjMfd2QfbcT2CxWdIpvtsjIk',
          language: 'en',
        }}
      />
      <MapView
        style={{width: '100%', height: '100%'}}
        initialRegion={{
          latitude: 48.8584,
          longitude: 2.2945,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        >
          <Marker draggable={true}
            coordinate={coordinate}
            title={"paris"} 
            onDragEnd={(e) => setCoordinate({ ...coordinate, latitude: e.nativeEvent.coordinate.latitude, longitude: e.nativeEvent.coordinate.longitude})}
            />
        </MapView>
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

export default Map;