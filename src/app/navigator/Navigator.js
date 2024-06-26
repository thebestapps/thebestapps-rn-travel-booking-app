import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch, useSelector } from 'react-redux';
import { fetchToken } from '../redux/actions/authActions';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

//Views
import Map from '../views/mapPage/Map';
import Auth from '../views/authPage/Auth';
import HomePage from '../views/homePage/HomePage';
import SearchPage from '../views/searchPage/SearchPage';
import DestinationPage from '../views/destinationPage/DestinationPage';
import LocationTab from '../views/destinationPage/locationTab/LocationTab';
import SavedTab from '../views/destinationPage/savedTab/SavedTab';
import DestinationTab from '../views/destinationPage/destinationsTab/DestinationTab';
import NavDrawer from '../views/navDrawerPage/NavDrawer';

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

const Tabs = ({navigation}) => {
  return (
    <>
    <DestinationPage nav={navigation}/>
      <Tab.Navigator
        initialRouteName='Loction'
        tabBarPosition='top'
        screenOptions={{
          tabBarLabelStyle: { fontSize: 12, fontWeight: "600"},
          tabBarStyle: { backgroundColor: 'white' },
        }}
      >
        <Tab.Screen 
          name="Location"
          component={LocationTab}
          options={{tabBarLabel: 'Location'}}
        />

        <Tab.Screen 
          name="Destination"
          component={DestinationTab}
          options={{tabBarLabel: 'Destinations'}}
        />

        <Tab.Screen 
          name="Saved"
          component={SavedTab}
          options={{tabBarLabel: 'Saved'}}
        />
      </Tab.Navigator>
    </>
  )
}

const PrivateStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomePage} options={{headerShown: false}}/>
      <Stack.Screen name="Search" component={SearchPage} options={{headerShown: false}}/>
      <Stack.Screen name="Map" component={Map} />
      <Stack.Screen name="Destination" component={Tabs} options={{headerShown: false}}/>
      <Stack.Screen name="Drawer" component={NavDrawer} options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}

const AuthStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Auth" component={Auth} options={{headerShown: false}} />
    </Stack.Navigator>
  )
}

const RootNavigation = () => {
  const { isAuthenticated, userData} = useSelector(state => state.auth);
  // const token = userData?.data?.access_token?.token;

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(fetchToken(setLoading));
  },[])

  useEffect(() => {
    // dispatch(fetchToken(setLoading));
  },[isAuthenticated])

  return (
    <NavigationContainer>
      {isAuthenticated
      ?
        <PrivateStack />
      :
        <AuthStack />
      }
      
    </NavigationContainer>
  )
}

export default RootNavigation;