import React from "react";
import { Image, View, Dimensions, Text } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Profile extends React.Component {
    constructor(props) {
        super(props);    
        this.state = {
            userData: {},
        };
    }
    render(){
        return(
            <View
              style={{
                flex: 1,
                paddingTop: "12%",
              }}>
                <View style={{alignItems: "center",}}>
                  <View
                    style={{
                      backgroundColor:"#777983",
                      height: 90,
                      width: 90,
                      borderRadius: 90/2,
                      alignItems: "center",
                      justifyContent:"center"}}>
                    <Text style={{fontSize: 30, fontWeight:"bold"}}>CB</Text>
                  </View>
                  <View
                    style={{
                      backgroundColor:"#30cfff",
                      height: 27,
                      width: 27,
                      borderRadius: 90/2,
                      alignItems: "center",
                      position:"absoulte",
                      marginTop: -30,
                      left: 35,
                      justifyContent:"center"}}>
                      <MaterialCommunityIcons name="camera-plus-outline" size={17.5} color="black"/>
                  </View>
                  <Text style={{fontSize: 20, marginTop: 10}}>Calvin Brown</Text>
                  <Text style={{fontSize: 14, opacity: 0.6}}>calvin@example.com</Text>
                </View>
                <View style={{paddingLeft: 15, paddingRight: 15, marginTop: "15%"}}>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                  <MaterialIcons name="person-outline" size={27} color="#777983" />
                  <Text style={{color:"black", fontSize: 17, marginLeft: 10}}>Personal Info</Text>
                </View>
                <View
                  style={{
                      borderBottomColor: '#777983',
                      borderBottomWidth: 0.3,
                      alignSelf:"center",
                      width:windowWidth,
                      marginTop:"5%",
                      marginBottom:"5%",
                      opacity: 0.4
                  }}
                />
                <View style={{flexDirection:"row", alignItems:"center"}}>
                  <Entypo name="star" size={27} color="#777983" />
                  <Text style={{color:"black", fontSize: 17, marginLeft: 10}}>Loyalty Clubs</Text>
                </View>
                <View
                  style={{
                      borderBottomColor: '#777983',
                      borderBottomWidth: 0.3,
                      alignSelf:"center",
                      width:windowWidth,
                      marginTop:"5%",
                      marginBottom:"5%",
                      opacity: 0.4
                  }}
                />
                <View style={{flexDirection:"row", alignItems:"center"}}>
                  <Octicons name="credit-card" size={27} color="#777983" style={{marginTop: 5}} />
                  <Text style={{color:"black", fontSize: 17, marginLeft: 10}}>Payment Methods</Text>
                </View>
                <View
                  style={{
                      borderBottomColor: '#777983',
                      borderBottomWidth: 0.3,
                      alignSelf:"center",
                      width:windowWidth,
                      marginTop:"5%",
                      marginBottom:"5%",
                      opacity: 0.4
                  }}
                />
                <View style={{flexDirection:"row", alignItems:"center"}}>
                  <MaterialIcons name="chat-bubble-outline" size={27} color="#777983" style={{marginTop: 5}} />
                  <Text style={{color:"black", fontSize: 17, marginLeft: 10}}>Get Help</Text>
                </View>
                <View
                  style={{
                      borderBottomColor: '#777983',
                      borderBottomWidth: 0.3,
                      alignSelf:"center",
                      width:windowWidth,
                      marginTop:"5%",
                      marginBottom:"5%",
                      opacity: 0.4
                  }}
                />
                <View style={{flexDirection:"row", alignItems:"center"}}>
                  <MaterialCommunityIcons name="comment-alert-outline" size={27} color="#777983" style={{marginTop: 5}} />
                  <Text style={{color:"black", fontSize: 17, marginLeft: 10}}>Send Feedback</Text>
                </View>
                <View
                  style={{
                      borderBottomColor: '#777983',
                      borderBottomWidth: 0.3,
                      alignSelf:"center",
                      width:windowWidth,
                      marginTop:"5%",
                      marginBottom:"5%",
                      opacity: 0.4
                  }}
                />
                <View style={{flexDirection:"row", alignItems:"center"}}>
                  <Entypo name="dots-three-horizontal" size={27} color="#777983" style={{marginTop: 5}} />
                  <Text style={{color:"black", fontSize: 17, marginLeft: 10}}>Resources</Text>
                </View>
                <View
                  style={{
                      borderBottomColor: '#777983',
                      borderBottomWidth: 0.3,
                      alignSelf:"center",
                      width:windowWidth,
                      marginTop:"5%",
                      marginBottom:"5%",
                      opacity: 0.4
                  }}
                />
                <View style={{flexDirection:"row", alignItems:"center"}}>
                  <Ionicons name="settings-outline" size={27} color="#777983" style={{marginTop: 5}} />
                  <Text style={{color:"black", fontSize: 17, marginLeft: 10}}>Settings</Text>
                </View>
                <View
                  style={{
                      borderBottomColor: '#777983',
                      borderBottomWidth: 0.3,
                      alignSelf:"center",
                      width:windowWidth,
                      marginTop:"5%",
                      marginBottom:"5%",
                      opacity: 0.4
                  }}
                />
              </View>
            </View>
        );
    }
}