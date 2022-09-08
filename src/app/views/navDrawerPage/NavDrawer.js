import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from "react-native";
import EncryptedStorage from "react-native-encrypted-storage";
import ImagePicker from "react-native-image-crop-picker";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from "../../../theme/Colors";
import { FontSizes } from "../../../theme/FontSize";
import { Spacing } from "../../../theme/Spacing";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const NavDrawer = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profileImage, setImage] = useState("");
  const [imageAvailable, setImageAvailabe] = useState(false);
  useEffect(() => {
    async function fetchData() {
      try {
        var info = await EncryptedStorage.getItem("employee_info");
        info = JSON.parse(info);
        setName(info?.DisplayName);
        setEmail(info?.Email);
        console.log("Profile Image =====>", profileImage)
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const openCamera = async () => {
    ImagePicker.openPicker({
      width: 400,
      height: 400,
      cropping: true
    }).then(image => {
      setImage(image.path)
      setImageAvailabe(true)
      console.log("Profile Image Set ====>", profileImage);
    });
  };
  const onClickProfileHandler = () => {
    navigation.navigate("Profile Edit");
  };
  const onClickPaymentHandler = () => {
    navigation.navigate("Payment Method");
  };
  return (
    <View style={style.drawer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{alignItems: "center", paddingTop: "12%",}}>
          {
            imageAvailable ?
              <View
                style={{
                  backgroundColor: Colors.greyColor,
                  height: 102,
                  width: 102,
                  borderRadius: 102/2,
                  alignItems: "center",
                  justifyContent:"center"}}>
                    <Image
                      style={{
                        height: 100,
                        width: 100,
                        borderRadius: 100/2
                      }}
                      source={{uri: profileImage}}
                    />
              </View>
            :
              <View
                style={{
                  backgroundColor: Colors.greyColor,
                  height: 100,
                  width: 100,
                  borderRadius: 100/2,
                  alignItems: "center",
                  justifyContent:"center"}}>
                <Text style={{fontSize: 30, fontWeight:"bold"}}>CB</Text>
              </View>
          }
          
          <TouchableOpacity onPress={openCamera}>
            <View
              style={{
                backgroundColor:"#30cfff",
                height: 30,
                width: 30,
                borderRadius: 30/2,
                alignItems: "center",
                justifyContent:"center",
                marginTop: -30,
                left: 35,
                }}>
              <MaterialCommunityIcons name="camera-plus-outline" size={21} color="black"/>
            </View>
          </TouchableOpacity>
          <Text style={{fontSize: 20, marginTop: 10}}>Calvin Brown</Text>
          <Text style={{fontSize: 14, opacity: 0.6}}>calvin@example.com</Text>
        </View>
        <View style={{paddingLeft: 7, paddingRight: 15, marginTop: "15%"}}>
          <TouchableOpacity onPress={onClickProfileHandler}>
            <View style={style.screenTab}>
              <View style={{flexDirection:"row", alignItems:"center"}}>
                <MaterialIcons name="person-outline" size={27} color="black" />
                <Text style={{color:"black", fontSize: 17, marginLeft: 15}}>Personal Info</Text>
              </View>
              <Image
                style={style.menuImg}
                source={require("../../../assets/icon/arrowRight.png")}
              />
            </View>
          </TouchableOpacity>
          <View style={style.divider}/>
          <TouchableOpacity>
            <View style={style.screenTab}>
              <View style={{flexDirection:"row", alignItems:"center"}}>
                <Entypo name="star" size={27} color="black" />
                <Text style={{color:"black", fontSize: 17, marginLeft: 15}}>Loyalty Clubs</Text>
              </View>
              <Image
                style={style.menuImg}
                source={require("../../../assets/icon/arrowRight.png")}
              />
            </View>
          </TouchableOpacity>
          <View style={style.divider}/>
          <TouchableOpacity onPress={onClickPaymentHandler}>
            <View style={style.screenTab}>
              <View style={{flexDirection:"row", alignItems:"center"}}>
                <Image
                  style={style.menuImg}
                  source={require("../../../assets/icon/payment.png")}
                />
                <Text style={{color:"black", fontSize: 17, marginLeft: 5.5}}>Payment Methods</Text>
              </View>
              <Image
                style={style.menuImg}
                source={require("../../../assets/icon/arrowRight.png")}
              />
            </View>
          </TouchableOpacity>
          <View style={style.divider}/>
          <TouchableOpacity>
            <View style={style.screenTab}>
              <View style={{flexDirection:"row", alignItems:"center"}}>
                <Image
                  style={style.menuImg}
                  source={require("../../../assets/icon/getHelp.png")}
                />
                <Text style={{color:"black", fontSize: 17, marginLeft: 5.5}}>Get Help</Text>
              </View>
              <Image
                style={style.menuImg}
                source={require("../../../assets/icon/arrowRight.png")}
              />
            </View>
          </TouchableOpacity>
          <View style={style.divider}/>
          <TouchableOpacity>
            <View style={style.screenTab}>
              <View style={{flexDirection:"row", alignItems:"center"}}>
                <Image
                  style={style.menuImg}
                  source={require("../../../assets/icon/send_feedback.png")}
                />
                <Text style={{color:"black", fontSize: 17, marginLeft: 5.5}}>Send Feedback</Text>
              </View>
              <Image
                style={style.menuImg}
                source={require("../../../assets/icon/arrowRight.png")}
              />
            </View>
          </TouchableOpacity>
          <View style={style.divider}/>
          <TouchableOpacity>
            <View style={style.screenTab}>
              <View style={{flexDirection:"row", alignItems:"center"}}>
                <Entypo name="dots-three-horizontal" size={27} color="black" style={{marginTop: 5}} />
                <Text style={{color:"black", fontSize: 17, marginLeft: 15}}>Resources</Text>
              </View>
              <Image
                style={style.menuImg}
                source={require("../../../assets/icon/arrowRight.png")}
              />
            </View>
          </TouchableOpacity>
          <View style={style.divider}/>
          <TouchableOpacity>
            <View style={style.screenTab}>
              <View style={{flexDirection:"row", alignItems:"center"}}>
                <Ionicons name="settings-outline" size={27} color="black" style={{marginTop: 5}} />
                <Text style={{color:"black", fontSize: 17, marginLeft: 15}}>Settings</Text>
              </View>
              <Image
                style={style.menuImg}
                source={require("../../../assets/icon/arrowRight.png")}
              />
            </View>
          </TouchableOpacity>
          <View style={style.divider}/>
          <TouchableOpacity>
            <View style={style.screenTab}>
              <View style={{flexDirection:"row", alignItems:"center"}}>
                <SimpleLineIcons name="chart" size={24} color="black" style={{marginTop: 5}} />
                <Text style={{color:"black", fontSize: 17, marginLeft: 15}}>Admin Dashboard</Text>
              </View>
              <Image
                style={style.menuImg}
                source={require("../../../assets/icon/arrowRight.png")}
              />
            </View>
          </TouchableOpacity>
          <View style={style.divider}/>
        </View>
        <View style={style.editProfileButton}>
          <Text style={{color:"#fff", fontSize: 15, fontWeight:"bold",}}>Edit Personal Info</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  drawer: {
    width: "100%",
    flex: 1,
    backgroundColor: Colors.whiteColor,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  screenTab:{
    paddingLeft: Spacing.paddingLeft,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
  },
  subHeading: {
    color: Colors.blackText,
    fontSize: FontSizes.fontSize_lg,
    fontWeight: "4500",
    marginTop: 10,
    marginBottom: 10,
  },
  menuImg: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  privacyImg: {
    width: 25,
    height: 25,
    marginLeft: "auto",
  },
  divider: {
    borderBottomColor: '#777983',
    borderBottomWidth: 0.3,
    alignSelf:"center",
    width:windowWidth,
    marginTop:"5%",
    marginBottom:"5%",
    opacity: 0.6
  },
  editProfileButton:{
    width:160,
    backgroundColor:"black",
    height: 55,
    justifyContent:"center",
    alignItems:"center",
    alignSelf:"center",
    margin: 25,
    marginBottom: 35,
    borderRadius: 160/2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  }
});

export default NavDrawer;
