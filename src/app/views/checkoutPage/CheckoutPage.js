import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Button,
  TextInput,
} from "react-native";
import { Colors } from "../../../theme/Colors";
import { FontFamily, FontWeight } from "../../../theme/FontFamily";
import AntDesign from 'react-native-vector-icons/AntDesign';
import AppContext from "../../context/AppContext";

import Modal from "react-native-modal";
const CheckoutPage = ({ navigation }) => {

  const {firstTrip, secondTrip} = useContext(AppContext)


  const [isTripinfo, setisTripinfo] = useState(true);
  const [Tripname, SetTripname] = useState("Boston Trip");
  const [TempTripname, SetTempTripname] = useState(Tripname);
  const [isPasssengerinfo, setisPasssengerinfo] = useState(false);
  const [isflight, setFlight] = useState(false);
  const [isSummary, setSummary] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);


  const CheckoutItemTitle = ({ index, title, isActive }) => {
    return (
      <View style={isActive ? { } : { marginVertical:20  }}>
        <View style={{
          flexDirection: "row",
          alignItems: "center",
        }}>
          <View style={
            isActive ? { backgroundColor: "#000",
            justifyContent: "center",
            alignItems: "center",
            width: 22,
            borderRadius: 11,
            marginRight: 5,
            height: 22, } : { backgroundColor: "transparent",
            justifyContent: "center",
            alignItems: "center",
            width: 24,
            borderRadius: 12,
            marginRight: 20,
            height: 24, }}>
            <Text style={isActive ? { fontSize:14, fontWeight:FontWeight.fontWeight_500, color:'#fff' } : { fontSize:16, color:'#aaa'  }}>
              {index}
            </Text>
          </View>
          <Text style={
          
            isActive ? { fontSize: 24,
              color: "#111",
              fontWeight:FontWeight.fontWeight_500,
              } : { fontSize: 16,
                color: "#aaa",
                }
            }>{title}</Text>
        </View>
      </View>
    );
  };

 


  return (
    <View style={style.main__container}>
      <Modal
        isVisible={isModalVisible}
        style={{
          flex: 1,
          justifyContent: "flex-end",
          backgroundColor: "transparent",
          margin: 0,
          padding: 0,
        }}
      >
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={()=> SetTripname(Tripname)}
        ></TouchableOpacity>
        <View
          style={{
            flex: 2,
            backgroundColor: "rgba(256,256,256,1)",
            margin: 0,
            paddingHorizontal: 20,
            paddingVertical:40,
            borderTopEndRadius: 10,
            borderTopStartRadius: 10,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={()=> setModalVisible(!isModalVisible) }>
            <Text
              style={{
                flexDirection: "row",
                color:'#006EE6',
                fontWeight:FontWeight.fontWeight_500,
                fontSize: 20,
              }}
            >
              Cancel
            </Text>
            </TouchableOpacity>
            <Text
              style={{
                flex: 1,
                fontSize: 18,
                color: Colors.blackText,
                fontWeight:FontWeight.fontWeight_500,
                textAlign: "center",
              }}
            >
              Trip Name
            </Text>
            <Text
              onPress={()=> SetTripname(TempTripname) || setModalVisible(!isModalVisible)}
              style={{
                flexDirection: "row",
                color:'#006EE6',
                fontWeight:FontWeight.fontWeight_500,
                fontSize: 20,
              }}
            >
              Done
            </Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#006EE6',
              borderRadius: 10,
              padding: 10,
              marginHorizontal: 10,
              marginVertical:25,
              flexDirection: "row",
              alignItems:'center'
            }}
          >
            <Image
              style={{ width: 25, height: 25, margin: 0, padding: 0 }}
              source={require("../../../assets/icon/search.png")}
            />
            <TextInput
             value={TempTripname}
              placeholderTextColor="#aaa"
              onChangeText={e => SetTempTripname(e)}
              style={{
                flex: 1,
                fontSize: 16,
                marginVertical: 0,
                marginHorizontal: 10,
                padding: 0,
                color: "#111",
              }}
            />
            <TouchableOpacity style={{ backgroundColor:'#ccc',borderRadius:15, height:25, width:25, justifyContent:'center', alignItems:'center' }}>
            <Text onPress={()=> SetTempTripname("")} style={{fontSize:18, margin:0, padding:0, color:"#fff", fontWeight:'bold', transform: [{ rotate: "45deg" }]}}>+</Text>
            </TouchableOpacity>
            
          </View>
        </View>
      </Modal>

      <View style={style.header}>
        <TouchableOpacity
          style={{ marginRight: 20,
            backgroundColor: "#006EE6",
          padding:10,
          borderRadius:30
          }}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="left" size={25} color="#fff"/>
        </TouchableOpacity>

        <Text style={style.headerTitle}>Flight</Text>
      </View>

      <View style={style.title_Area}>
        <Text
          style={{ fontSize: 35, color: "#000", fontWeight:FontWeight.fontWeight_500, flex: 1 }}
        >
          Checkout
        </Text>
       
      </View>

      <ScrollView style={{ flex: 1 }}>
        <View style={style.CheckoutItem}>
          <CheckoutItemTitle
            index="1"
            title="Trip info"
            isActive={isTripinfo}
          />
          {isTripinfo ? (
            <View style={style.CheckoutitemContent}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    alignItems: "flex-start",
                    marginLeft: 60,
                    marginVertical:15,
                    flex: 1,
                  }}
                >
                  <Text
                    style={{
                      flex: 1,
                      fontSize: 12,
                      color: Colors.blackText,
                      fontWeight:FontWeight.fontWeight_500,
                      textAlign: "center",
                      backgroundColor: "#E4F6EF",
                      paddingHorizontal: 5,
                      paddingVertical: 1,
                    }}
                  >
                    New trip
                  </Text>
                  <Text
                    style={{
                      flex: 1,
                      fontSize: 16,
                      color: Colors.blackText,
                      fontWeight:FontWeight.fontWeight_500,
                      textAlign: "center",
                      marginVertical:5  
                    }}
                  >
                    {Tripname}
                  </Text>
                  <Text
                    style={{
                      flex: 1,
                      fontSize: 16,
                      color: Colors.greyColor1,
                      fontWeight:FontWeight.fontWeight_500,
                      textAlign: "center",
                    }}
                  >
                    Fri, JUl29- Wed, Aug 3
                  </Text>
                </View>
                <TouchableOpacity onPress={()=> setModalVisible(!isModalVisible)}>
                 <Text style={{fontWeight:"bold", fontSize:22, color:'#006EE6'}}>+</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={{ backgroundColor: '#006EE6', borderRadius: 10, padding: 10, alignItems: 'center', marginVertical:10 }}
                onPress={() => navigation.navigate("CheckoutPageInfoPage")}>
                <Text style={{ color: Colors.whiteColor, fontSize:16}}>Add Trip Details</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <></>
          )}
        </View>

        <View style={style.CheckoutItem}>
          <CheckoutItemTitle
            index="2"
            title="Flight details and policy"
            isActive={isflight}
          />
          {isflight ? (
            <View style={{}}>
              <Text>Hello</Text>
            </View>
          ) : (
            <></>
          )}
        </View>
        <View style={style.CheckoutItem}>
          <CheckoutItemTitle
            index="3"
            title="Passenger info and more"
            isActive={isPasssengerinfo}
          />
          {isPasssengerinfo ? (
            <View style={{}}>
              <Text>Hello</Text>
            </View>
          ) : (
            <></>
          )}
        </View>
        <View style={style.CheckoutItem}>
          <CheckoutItemTitle
            index="4"
            title="Summary of charges"
            isActive={isSummary}
          />
          {isSummary ? (
            <View style={{}}>
              <Text>Hello</Text>
            </View>
          ) : (
            <></>
          )}
        </View>
      </ScrollView>
      {/* <Text>First Trip Selected: {firstTrip}</Text>
      <Text>Second Trip Selected: {secondTrip}</Text> */}
      <View></View>
    </View>
  );
};

const style = StyleSheet.create({
  main__container: { backgroundColor: Colors.whiteColor, flex: 1, padding: 20, fontFamily: FontFamily.fontFamily_regular,
    fontWeight: FontWeight.fontWeight_500,
   },

  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    flex: 1,
    color: "#006EE6",
    fontWeight: "600",
    fontSize: 28,
  },

  title_Area: {
    margin: 20,
    flexDirection: "row",
    alignItems: "baseline",
  },
  header_downBtnImage: {
    width: 30,
    height: 30,
    transform: [{ rotate: "90deg" }],
  },

  
  CheckoutitemContent: {
    margin: 10,
  },
});

export default CheckoutPage;
