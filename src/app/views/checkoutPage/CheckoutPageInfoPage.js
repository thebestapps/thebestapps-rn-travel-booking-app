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
import { FontFamily, FontWeight } from "../../../theme/FontFamily";

export default function CheckoutPageInfoPage({ navigation }) {
  const [isBillableModalVisible, setBillableModalVisible] = useState(false);
  const [isSpecialRateModalVisible, setSpecialRateModalVisible] = useState(false);
  const [editpurpose, setEditpurpose] = useState(false);
  const [purposeText, setPurposeText] = useState("Customer visit");
  const [editProject, setEditProject] = useState(false);
  const [ProjectText, setProjectText] = useState("EV project");
  const [isbillabe, setisbillable] = useState("");
  const [isRate, setisRate] = useState("");


  function toggleBillableModal(e) {
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
          onPress={() => toggleBillableModal(isRate)}
        ></TouchableOpacity>
        <View
          style={{

            backgroundColor: "rgba(256,256,256,1)",
            margin: 0,
            paddingHorizontal: 20,
            paddingVertical: 40,
            borderTopEndRadius: 20,
            borderTopStartRadius: 20,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text
             onPress={() => toggleBillableModal(isbillabe)}
              style={{
                flexDirection: "row",
                color: '#006EE6',
                fontWeight:FontWeight.fontWeight_500,
                flex: 1,
                fontSize: 20,
              }}
            >
              Cancel
            </Text>

            <Text
              onPress={() => toggleBillableModal(isbillabe)}
              style={{
                flexDirection: "row",
                color: '#006EE6',
                fontWeight:FontWeight.fontWeight_500,
                fontSize: 24,
              }}
            >
              +
            </Text>
          </View>

          <View style={{ marginVertical: 30 }}>
            <TouchableOpacity
              style={{
                borderRadius: 10,
                padding: 15,
                alignItems: "center",
                flexDirection: 'row',

              }}
              onPress={() => toggleBillableModal("NO")}
            >
              <View style={isbillabe == "NO" ? { padding: 10, borderWidth: 2, borderColor: "#ccc", backgroundColor: '#006EE6', borderRadius: 10, marginRight: 10, } : { padding: 10, borderWidth: 2, borderColor: "#ccc", borderRadius: 10, marginRight: 10, }}></View>
              <Text style={{ color: Colors.blackColor, fontSize: 20 }}>
                NO
              </Text>
            </TouchableOpacity>

            <View style={{ backgroundColor: "#eee", padding: 1 }}></View>

            <TouchableOpacity
              style={{
                borderRadius: 10,
                padding: 15,
                alignItems: "center",
                flexDirection: 'row',

              }}
              onPress={() => toggleBillableModal("YES")}
            >
              <View style={isbillabe == "YES" ? { padding: 10, borderWidth: 2, borderColor: "#ccc", backgroundColor: '#006EE6', borderRadius: 10, marginRight: 10, } : { padding: 10, borderWidth: 2, borderColor: "#ccc", borderRadius: 10, marginRight: 10, }}></View>
              <Text style={{ color: Colors.blackColor, fontSize: 20 }}>
                YES
              </Text>
            </TouchableOpacity>

          </View>
          <View style={{ flex: 1, alignItems: 'flex-start', marginVertical: 30 }}>

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
          onPress={() => toggleSpecialRateModal(isRate)}
        ></TouchableOpacity>
        <View
          style={{

            backgroundColor: "rgba(256,256,256,1)",
            margin: 0,
            paddingHorizontal: 20,
            paddingVertical: 40,
            borderTopEndRadius: 10,
            borderTopStartRadius: 10,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text
             onPress={() => toggleSpecialRateModal(isRate)}
              style={{
                
                flexDirection: "row",
                color: '#006EE6',
                fontWeight:FontWeight.fontWeight_500,
                fontSize: 20,
                flex: 1
              }}
            >
              Cancel
            </Text>

            <Text
              onPress={() => toggleSpecialRateModal(isRate)}
              style={{
                flexDirection: "row",
                color: '#006EE6',
                color: '#006EE6',
                fontSize: 22,
              }}
            >
              +
            </Text>
          </View>

          <View style={{ marginVertical: 30 }}>


            <TouchableOpacity
              style={{
                borderRadius: 10,
                padding: 15,
                alignItems: "center",
                flexDirection: 'row',

              }}
              onPress={() => toggleSpecialRateModal("IT")}
            >
              <View style={isRate == "IT" ? { padding: 10, borderWidth: 2, borderColor: "#ccc", backgroundColor: '#006EE6', borderRadius: 10, marginRight: 10, } : { padding: 10, borderWidth: 2, borderColor: "#ccc", borderRadius: 10, marginRight: 10, }}></View>
              <Text style={{ color: Colors.blackColor, fontSize: 20 }}>
                IT
              </Text>
            </TouchableOpacity>


            <View style={{ backgroundColor: "#eee", padding: 1 }}></View>


            <TouchableOpacity
              style={{
                borderRadius: 10,
                padding: 15,
                alignItems: "center",
                flexDirection: 'row',

              }}
              onPress={() => toggleSpecialRateModal("ACCOUNTING")}
            >
              <View style={isRate == "ACCOUNTING" ? { padding: 10, borderWidth: 2, borderColor: "#ccc", backgroundColor: '#006EE6', borderRadius: 10, marginRight: 10, } : { padding: 10, borderWidth: 2, borderColor: "#ccc", borderRadius: 10, marginRight: 10, }}></View>
              <Text style={{ color: Colors.blackColor, fontSize: 20 }}>
                ACCOUNTING
              </Text>
            </TouchableOpacity>

            <View style={{ backgroundColor: "#eee", padding: 1 }}></View>

            <TouchableOpacity
              style={{
                borderRadius: 10,
                padding: 15,
                alignItems: "center",
                flexDirection: 'row',

              }}
              onPress={() => toggleSpecialRateModal("PRODUCTION")}
            >
              <View style={isRate == "PRODUCTION" ? { padding: 10, borderWidth: 2, borderColor: "#ccc", backgroundColor: '#006EE6', borderRadius: 10, marginRight: 10, } : { padding: 10, borderWidth: 2, borderColor: "#ccc", borderRadius: 10, marginRight: 10, }}></View>
              <Text style={{ color: Colors.blackColor, fontSize: 20 }}>
                PRODUCTION
              </Text>
            </TouchableOpacity>


          </View>
        </View>
      </Modal>

      <ScrollView showsVerticalScrollIndicator={false}>

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
              fontWeight:FontWeight.fontWeight_500,
            }}
          >
            Boston Trip
          </Text>

          <Text
            style={{
              fontSize: 18,

              borderRadius: 40,
              color: "#fff",
              position: "absolute",
              top: 20,
              right: 20,
              fontWeight:FontWeight.fontWeight_500,
            }}
          >
            Rename
          </Text>
        </ImageBackground>

        <View style={style.header}>
          <View style={{

            backgroundColor: "transparent",
            justifyContent: "center",
            alignItems: "center",
            width: 24,
            borderRadius: 12,
            marginRight: 20,
            borderWidth: 2,
            height: 24,
            borderColor: '#aaa'
          }}>
            <Text style={{ fontSize: 15, color: '#aaa', fontWeight:FontWeight.fontWeight_500 }}>
              i
            </Text>
          </View>
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
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <TextInput
                    autoFocus={true}
                    value={purposeText}
                    placeholderTextColor="#aaa"
                    onChangeText={e => setPurposeText(e)}
                    style={{
                      flex: 1,
                      margin: 0,
                      padding: 0,
                      fontSize: 18,
                      color: "#111",
                    }}
                  />



                  <TouchableOpacity onPress={() => setEditpurpose(false)}>
                    <Text style={{ fontWeight:FontWeight.fontWeight_500, fontSize: 22, color: '#006EE6' }}>✓</Text>
                  </TouchableOpacity>


                </View>
              ) : (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text
                    style={{ flex: 1, fontSize: 18, color: "#111", fontWeight:FontWeight.fontWeight_500 }}
                  >
                    {purposeText}
                  </Text>
                  <TouchableOpacity
                    style={{ width: 30 }}
                    onPress={() => setEditpurpose(true)}
                  >
                    <Image
                      style={{ width: 30, height: 30 }}
                      source={require("../../../assets/icon/edit.png")}
                    />
                  </TouchableOpacity>
                </View>
              )}

            </View>
          </View>


          {isbillabe == "" ? (
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
                  color: '#006EE6',
                  fontWeight:FontWeight.fontWeight_500,
                  flex: 1,
                }}
              >
                Is it Billable
              </Text>


              <TouchableOpacity onPress={() => toggleBillableModal(isbillabe)}>
                <Text style={{ fontWeight:FontWeight.fontWeight_500, fontSize: 22, color: '#006EE6' }}>+</Text>
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
                <View style={{ flex: 1 }}>
                  <Text
                    style={{

                      fontSize: 14,
                      color: Colors.greyColor,
                      fontWeight:FontWeight.fontWeight_500,


                    }}
                  >
                    Is it Billable
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      color: Colors.blackColor,
                      fontWeight:FontWeight.fontWeight_500,
                    }}
                  >
                    {isbillabe}
                  </Text>
                </View>
                <TouchableOpacity
                  style={{ width: 30, height: 30 }}
                  onPress={() => toggleBillableModal(isbillabe)}
                >
                  <Image
                    style={{ width: 30, height: 30 }}
                    source={require("../../../assets/icon/edit.png")}
                  />
                </TouchableOpacity>
              </View>
            )
          }





          {isRate == "" ?

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
                    color: '#006EE6',
                    fontWeight:FontWeight.fontWeight_500,
                    flex: 1,
                  }}
                >
                  Enter Special rate code
                </Text>

                <TouchableOpacity onPress={() => toggleSpecialRateModal(isRate)}>
                  <Text style={{ fontWeight:FontWeight.fontWeight_500, fontSize: 22, color: '#006EE6' }}>+</Text>
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
                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      fontSize: 14,
                      color: Colors.greyColor,
                      fontWeight:FontWeight.fontWeight_500,
                    }}
                  >
                    Enter Special rate code
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      color: Colors.blackColor,
                      fontWeight:FontWeight.fontWeight_500,

                    }}
                  >
                    {isRate}
                  </Text>
                </View>

                <TouchableOpacity
                  style={{ width: 30, height: 30 }}
                  onPress={() => toggleSpecialRateModal(isRate)}
                >
                  <Image
                    style={{ width: 30, height: 30 }}
                    source={require("../../../assets/icon/edit.png")}
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
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <TextInput
                    value={ProjectText}
                    placeholderTextColor="#aaa"
                    autoFocus={true}
                    onChangeText={e => setProjectText(e)}
                    style={{
                      flex: 1,
                      margin: 0,
                      padding: 0,
                      fontSize: 18,
                      color: "#111",
                    }}
                  />


                  <TouchableOpacity onPress={() => setEditProject(false)}>
                    <Text style={{ fontWeight:FontWeight.fontWeight_500, fontSize: 22, color: '#006EE6' }}>✓</Text>
                  </TouchableOpacity>


                </View>
              ) : (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text
                    style={{ flex: 1, fontSize: 18, color: "#111", fontWeight:FontWeight.fontWeight_500 }}
                  >
                    {ProjectText}
                  </Text>
                  <TouchableOpacity
                    style={{ width: 30 }}
                    onPress={() => setEditProject(true)}
                  >
                    <Image
                      style={{ width: 30, height: 30 }}
                      source={require("../../../assets/icon/edit.png")}
                    />
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>

        </View>



      </ScrollView>

      <TouchableOpacity
        onPress={() => navigation.navigate('CheckuoutFlightDetails')}
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
            fontWeight:FontWeight.fontWeight_500,
            textTransform: "uppercase",
            fontSize: 18,
          }}
        >
          Continue
        </Text>
      </TouchableOpacity>
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
