import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import { Colors } from "../../../theme/Colors";
import Modal from "react-native-modal";

export default function CheckoutPageInfoPage({ navigation }) {
  const [isBillableModalVisible, setBillableModalVisible] = useState(false);
  const [isSpecialRateModalVisible, setSpecialRateModalVisible] = useState(false);
  const [editpurpose, setEditpurpose] = useState(false);
  const [purposeText, setPurposeText] = useState("Customer visit");
  const [editProject, setEditProject] = useState(false);
  const [ProjectText, setProjectText] = useState("EV project");
  const [isbillabe, setisbillable] = useState("");
  const [isRate, setisRate] = useState("");

 
  function toggleBillableModal(e){
    setisbillable(e);
    setBillableModalVisible(!isBillableModalVisible);
  };


  function toggleSpecialRateModal(e) {
    setisRate(e)
    setSpecialRateModalVisible(!isSpecialRateModalVisible);
  };

  return (
    <View style={style.main__container}>
      <Modal
        isVisible={isBillableModalVisible}
        style={{
          flex: 1,
          justifyContent: "flex-end",
          backgroundColor: "transparent",
          margin: 0,
          padding: 0,
        }}
      >
        <TouchableOpacity
          style={{ flex: 1, backgroundColor: "transparent" }}
          onPress={()=>toggleBillableModal(isRate)}
        ></TouchableOpacity>
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(256,256,256,1)",
            margin: 0,
            padding: 20,
            borderTopEndRadius: 20,
            borderTopStartRadius: 20,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                flexDirection: "row",
                color: Colors.blueColor,
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              Cancel
            </Text>
            <Text
              style={{
                flex: 1,
                fontSize: 18,
                color: Colors.blackText,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Is it Billable
            </Text>
            <Text
              onPress={()=>toggleBillableModal(isRate)}
              style={{
                flexDirection: "row",
                color: Colors.blueColor,
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              Done
            </Text>
          </View>

          <View style={{ marginVertical: 30 }}>
            <TouchableOpacity
              style={{
                backgroundColor: Colors.blueColor,
                borderRadius: 10,
                padding: 15,
                alignItems: "center",
                marginVertical: 20,
              }}
              onPress={()=>toggleBillableModal("Yes")}
            >
              <Text style={{ color: Colors.whiteColor, fontWeight: "bold" }}>
                YES
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: Colors.greyColor,
                borderRadius: 10,
                padding: 15,
                alignItems: "center",
              }}
              onPress={()=> toggleBillableModal("No")}
            >
              <Text style={{ color: Colors.blackColor, fontWeight: "bold" }}>
                NO
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flex:1,alignItems:'flex-start', marginVertical:30}}>
          
          </View>
          
        </View>
      </Modal>

      <Modal
        isVisible={isSpecialRateModalVisible}
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
          onPress={()=> toggleSpecialRateModal(isRate)}
        ></TouchableOpacity>
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(256,256,256,1)",
            margin: 0,
            padding: 20,
            borderTopEndRadius: 20,
            borderTopStartRadius: 20,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                flexDirection: "row",
                color: Colors.blueColor,
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              Cancel
            </Text>
            <Text
              style={{
                flex: 1,
                fontSize: 18,
                color: Colors.blackText,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Enter Special rate code
            </Text>
            <Text
              onPress={()=> toggleSpecialRateModal(isRate)}
              style={{
                flexDirection: "row",
                color: Colors.blueColor,
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              Done
            </Text>
          </View>

          <View style={{ marginVertical: 30 }}>
            <TouchableOpacity
              style={{
                backgroundColor: Colors.greyColor,
                borderRadius: 10,
                padding: 15,
                alignItems: "center",
              }}
              onPress={()=> toggleSpecialRateModal("IT")}
            >
              <Text style={{ color: Colors.blackColor, fontWeight: "bold" }}>
                IT
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: Colors.greyColor,
                borderRadius: 10,
                marginVertical: 20,
                padding: 15,
                alignItems: "center",
              }}
              onPress={()=> toggleSpecialRateModal("Accounting")}
            >
              <Text style={{ color: Colors.blackColor, fontWeight: "bold" }}>
                Accounting
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: Colors.greyColor,
                borderRadius: 10,
                padding: 15,
                alignItems: "center",
              }}
              onPress={()=> toggleSpecialRateModal("Production")}
            >
              <Text style={{ color: Colors.blackColor, fontWeight: "bold" }}>
                Production
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <ScrollView>
    
      <ImageBackground
        style={{ width: "100%", height: 240, position: "relative" }}
        source={require("../../../assets/icon/TripBackground.png")}
      >
        <View style={{ backgroundColor: "rgba(0,0,0,0.5)", flex: 1 }}></View>
        <Text
          style={{
            fontSize: 36,
            color: "#fff",
            position: "absolute",
            bottom: 20,
            left: 20,
            fontWeight: "bold",
          }}
        >
          Boston Trip
        </Text>

        <Text
          style={{
            fontSize: 18,
            backgroundColor: "rgba(0,0,0,0.6)",
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 40,
            color: "#fff",
            position: "absolute",
            top: 20,
            right: 20,
            fontWeight: "bold",
          }}
        >
          Rename
        </Text>
      </ImageBackground>

      <View style={style.header}>
        <Image
          style={style.header_backBtnImage}
          source={require("../../../assets/icon/getHelp.png")}
        />
        <Text style={style.headerTitle}>
          Add Details to help your company identify and track expenses.
        </Text>
        <TouchableOpacity
          style={style.header_backBtn}
          onPress={() => navigation.goBack()}
        ></TouchableOpacity>
      </View>

      <View style={{ margin: 20 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 10,
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 14, color: "#aaa" }}>Purpose</Text>

            {editpurpose ? (
              <View style={{flexDirection:'row', alignItems:'center'}}>
                <TextInput
                  value={purposeText} 
                  placeholderTextColor="#aaa"
                  onChangeText={e => setPurposeText(e)}
                  style={{
                    flex: 1,
                    borderWidth: 2,
                    fontSize: 18,
                    marginVertical: 10,
                    borderColor:Colors.blueColor,
                    paddingHorizontal: 10,
                    paddingVertical:5,
                    borderRadius:10,
                    color: "#111",
                  }}
                />
                <TouchableOpacity
                  style={{ width: 30 }}
                  onPress={() => setEditpurpose(false)}
                >
                  <Image
                     style={{width:30, height:30}}
                    source={require("../../../assets/icon/policy.png")}
                  />
                </TouchableOpacity>
              </View>
            ) : (
              <View style={{flexDirection:'row', alignItems:'center'}}>
                <Text
                  style={{ flex:1, fontSize: 18, color: "#111", fontWeight: "bold" }}
                >
                  {purposeText}
                </Text>
                <TouchableOpacity
                  style={{ width: 30 }}
                  onPress={() => setEditpurpose(true)}
                >
                  <Image
                     style={{width:30, height:30}}
                    source={require("../../../assets/icon/resource.png")}
                  />
                </TouchableOpacity>
              </View>
            )}

          </View>
        </View>


        { isbillabe=="" ? (
            <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginVertical: 10,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                color: Colors.blueColor,
                fontWeight: "bold",
                flex: 1,
              }}
            >
              Is it Billable
            </Text>
  
            <TouchableOpacity
              style={{width:30, height:30}}
              onPress={()=>toggleBillableModal("")}
            >
              <Image
                style={{ width: 30, height: 30 }}
                source={require("../../../assets/icon/add.png")}
              />
            </TouchableOpacity>
          </View>
        ) :
        
        (
          <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 10,
          }}
        >
          <View style={{flex:1}}>
          <Text
            style={{
              fontSize: 18,
              color: Colors.blackColor,
              fontWeight: "bold",
            }}
          >
            Is it Billable
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: Colors.greyColor,
              fontWeight: "bold",
            }}
          >
            {isbillabe}
          </Text>
          </View>
          <TouchableOpacity
            style={{width:30, height:30}}
            onPress={()=> toggleBillableModal(isRate)}
          >
            <Image
              style={{ width: 30, height: 30 }}
              source={require("../../../assets/icon/resource.png")}
            />
          </TouchableOpacity>
        </View>
        ) 
        }
       




        {isRate=="" ?

        (
          <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 10,
          }}
        >
          
          <Text
            style={{
              fontSize: 18,
              color: Colors.blueColor,
              fontWeight: "bold",
              flex: 1,
            }}
          >
            Enter Special rate code
          </Text>

          <TouchableOpacity
            style={{width:30, height:30}}
            onPress={()=> toggleSpecialRateModal(isRate)}
          >
            <Image
              style={{ width: 30, height: 30 }}
              source={require("../../../assets/icon/add.png")}
            />
          </TouchableOpacity>
        </View>
        ) :
        (

          <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 10,
          }}
        >
         <View style={{flex:1}}>
          <Text
            style={{
              fontSize: 18,
              color: Colors.blackColor,
              fontWeight: "bold",
            }}
          >
            Enter Special rate code
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: Colors.greyColor,
              fontWeight: "bold",
            }}
          >
            {isRate}
          </Text>
          </View>

          <TouchableOpacity
            style={{width:30, height:30}}
            onPress={()=> toggleSpecialRateModal(isRate)}
          >
            <Image
              style={{ width: 30, height: 30 }}
              source={require("../../../assets/icon/resource.png")}
            />
          </TouchableOpacity>
        </View>
        )

        }



        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 10,
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 14, color: "#aaa" }}>Purpose</Text>

            {editProject ? (
              <View style={{flexDirection:'row', alignItems:'center'}}>
                <TextInput
                  value={ProjectText} 
                  placeholderTextColor="#aaa"
                  onChangeText={e => setProjectText(e)}
                  style={{
                    flex: 1,
                    borderWidth: 2,
                    fontSize: 18,
                    marginVertical: 10,
                    borderColor:Colors.blueColor,
                    paddingHorizontal: 10,
                    paddingVertical:5,
                    borderRadius:10,
                    color: "#111",
                  }}
                />
                <TouchableOpacity
                  style={{ width: 30 }}
                  onPress={() => setEditProject(false)}
                >
                  <Image
                     style={{width:30, height:30}}
                    source={require("../../../assets/icon/policy.png")}
                  />
                </TouchableOpacity>
              </View>
            ) : (
              <View style={{flexDirection:'row', alignItems:'center'}}>
                <Text
                  style={{ flex:1, fontSize: 18, color: "#111", fontWeight: "bold" }}
                >
                  {ProjectText}
                </Text>
                <TouchableOpacity
                  style={{ width: 30 }}
                  onPress={() => setEditProject(true)}
                >
                  <Image
                     style={{width:30, height:30}}
                    source={require("../../../assets/icon/resource.png")}
                  />
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
       
      </View>

      <TouchableOpacity
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <Text
          style={{
            borderRadius: 40,
            margin: 20,
            paddingVertical: 20,
            paddingHorizontal: 50,
            backgroundColor: "#111",
            color: "#fff",
            fontWeight: "bold",
            textTransform: "uppercase",
            fontSize: 18,
          }}
        >
          Continue
        </Text>
      </TouchableOpacity>

      </ScrollView>


    </View>
  );
}

const style = StyleSheet.create({
  main__container: { backgroundColor: Colors.whiteColor, flex: 1 },

  header: {
    padding: 10,
    flexDirection: "row",
    backgroundColor: "#E4F6EF",
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    flex: 1,
    color: "#111",

    fontSize: 16,
  },
  header_backBtn: {
    marginRight: 10,
  },

  header_backBtnImage: {
    width: 30,
    marginRight: 10,
    height: 30,
    opacity: 0.3,
  },
});
