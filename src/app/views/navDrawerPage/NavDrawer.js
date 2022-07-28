import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import EncryptedStorage from 'react-native-encrypted-storage';
import ImagePicker from 'react-native-image-crop-picker';

import global from '../../../global';
import { Colors } from '../../../theme/Colors';
import { FontSizes } from '../../../theme/FontSize';
import { Spacing } from '../../../theme/Spacing';

const NavDrawer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
      async function fetchData() {
        try{
          var info = await EncryptedStorage.getItem("employee_info");
          info = JSON.parse(info)
          setName(info.DisplayName);
          setEmail(info.Email);
        }catch(error){console.log(error)}
      }
      fetchData();
  },[])

  const openCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
  }

  return (
    <View style={style.drawer}>
      <View style={{ ...global.flexColCenterCenter, margin: 50}} >
        <View style={{ ...global.flexColCenterCenter, width: 100, height: 100, backgroundColor: Colors.greyColor, borderRadius: 50}}>
            <Text style={{ color: Colors.blackText, fontWeight: "400", fontSize: 40}}>
                SN
            </Text>
        </View>
        <Text style={{ color: Colors.blackText, fontWeight: "600", fontSize: FontSizes.fontSize_xl}}>{name}</Text>
        <Text style={{  fontWeight: "300", fontSize: FontSizes.fontSize_xs}}>{email}</Text>

      </View>
      <View>   
        <View style={{ ...global.flexRowCenter, width: "100%"}}>
          <Image 
            style={style.menuImg}
            source={require("../../../assets/icon/person.png")} />
          <Text style={style.subHeading}>Personal Info</Text>
          <Image 
            style={{ ...style.privacyImg, marginRight: -9}}
            source={require("../../../assets/icon/arrowRight.png")} />
        </View>
        <View style={global.divider} />
        <View style={{ ...global.flexRowCenter, width: "100%"}}>
          <Image 
            style={style.menuImg}
            source={require("../../../assets/icon/loyalty.png")} />
          <Text style={style.subHeading}>Loyalty clubs</Text>
          <Image 
            style={{ ...style.privacyImg, marginRight: -9}}
            source={require("../../../assets/icon/arrowRight.png")} />
        </View>
        <View style={global.divider} />
        <View style={{ ...global.flexRowCenter, width: "100%"}}>
          <Image 
            style={style.menuImg}
            source={require("../../../assets/icon/payment.png")} />
          <Text style={style.subHeading}>Payment methods</Text>
          <Image 
            style={{ ...style.privacyImg, marginRight: -9}}
            source={require("../../../assets/icon/arrowRight.png")} />
        </View>
        <View style={global.divider} />
        <View style={{ ...global.flexRowCenter, width: "100%"}}>
          <Image 
            style={style.menuImg}
            source={require("../../../assets/icon/getHelp.png")} />
          <Text style={style.subHeading}>Get help now</Text>
          <Image 
            style={{ ...style.privacyImg, marginRight: -9}}
            source={require("../../../assets/icon/arrowRight.png")} />
        </View>
        <View style={global.divider} />
        <View style={{ ...global.flexRowCenter, width: "100%"}}>
          <Image 
            style={style.menuImg}
            source={require("../../../assets/icon/send_feedback.png")} />
          <Text style={style.subHeading}>Send feedback</Text>
          {/* <Image 
            style={{ ...style.privacyImg, marginRight: -9}}
            source={require("../../../assets/icon/arrowRight.png")} /> */}
        </View>
        <View style={global.divider} />
        <View style={{ ...global.flexRowCenter, width: "100%"}}>
          <Image 
            style={style.menuImg}
            source={require("../../../assets/icon/resource.png")} />
          <Text style={style.subHeading}>Resources</Text>
          <Image 
            style={{ ...style.privacyImg, marginRight: -9}}
            source={require("../../../assets/icon/arrowRight.png")} />
        </View>
        <View style={global.divider} />
        <View style={{ ...global.flexRowCenter, width: "100%"}}>
          <Image 
            style={style.menuImg}
            source={require("../../../assets/icon/settings.png")} />
          <Text style={style.subHeading}>Settings</Text>
          <Image 
            style={{ ...style.privacyImg, marginRight: -9}}
            source={require("../../../assets/icon/arrowRight.png")} />
        </View>
        <View style={global.divider} />
        
        
      </View>
    </View>
  )
}

const style = StyleSheet.create({
    drawer:{
        width: "100%",
        flex: 1,
        backgroundColor: Colors.whiteColor,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingLeft: Spacing.paddingLeft,
        paddingRight: Spacing.paddingRight,
        paddingBottom: 50
      },
    subHeading: {
        color: Colors.blackText,
        fontSize: FontSizes.fontSize_lg,
        fontWeight: "4500",
        marginTop: 10,
        marginBottom: 10
      },
      menuImg: {
        width: 25,
        height: 25,
        marginRight: 10
      },
      privacyImg: {
        width: 25,
        height: 25,
        marginLeft: "auto"
      }
})

export default NavDrawer;