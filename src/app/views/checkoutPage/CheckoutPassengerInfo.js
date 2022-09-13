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
import SwitchToggle from "react-native-switch-toggle";
import AntDesign from 'react-native-vector-icons/AntDesign';
import AppContext from "../../context/AppContext";

import Modal from "react-native-modal";
import PaymentMethod from "../../components/payment/PaymentMethod";
export default function CheckoutPassengerInfo({ navigation }) {

    const { firstTrip, secondTrip } = useContext(AppContext)


    const [isTripinfo, setisTripinfo] = useState(false);
    const [Tripname, SetTripname] = useState("Boston Trip");
    const [TempTripname, SetTempTripname] = useState("Boston Trip");
    const [reason, setReason] = useState("")
    const [isPasssengerinfo, setisPasssengerinfo] = useState(true);
    const [isflight, setFlight] = useState(false);
    const [isSummary, setSummary] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false);
    const [isSeatModalVisible, setSeatModalVisible] = useState(false);
    const [isPaymentModalVisible, setPaymentModalVisible] = useState(false);
    const [isSwitch, setisSwitch] = useState(true);
    const [isSwitch2, setisSwitch2] = useState(true);
    const [showMore , setShowMore] = useState(false)
   

    function toggleExpand(index) {
        if (index == "1") {

            setisTripinfo(!isTripinfo)
        }
        else if (index == "2") {
            setFlight(!isflight);
        }
    }


    const CheckoutItemTitle = ({ index, title, isActive, isDone }) => {
        return (
            <View style={{marginVertical:20}}>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                }}>


                    {
                        isDone ? (
                            <View style={{

                                backgroundColor: "transparent",
                                justifyContent: "center",
                                alignItems: "center",
                                width: 24,
                                borderRadius: 12,
                                marginRight: 20,
                                borderWidth: 2,
                                height: 24,
                                borderColor: '#21D363'
                            }}>
                                <Text style={{ fontSize: 12, color: '#21D363' }}>
                                    ✓
                                </Text>
                            </View>
                        ) : (
                            <View style={
                                isActive ? {
                                    backgroundColor: "#000",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: 22,
                                    borderRadius: 11,
                                    marginRight: 5,
                                    height: 22,
                                } : {
                                    backgroundColor: "transparent",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: 24,
                                    borderRadius: 12,
                                    marginRight: 20,
                                    height: 24,
                                }}>
                                <Text style={isActive ? { fontSize: 14, fontWeight:FontWeight.fontWeight_500, color: '#fff' } : { fontSize: 16, color: '#aaa' }}>
                                    {index}
                                </Text>
                            </View>
                        )
                    }



                    <Text style={

                        isActive ? {
                            fontSize: 24,
                            color: "#111",
                            fontWeight:FontWeight.fontWeight_500,
                            flex: 1,
                        } : {
                            fontSize: 16,
                            color: "#aaa",
                            flex: 1
                        }
                    }>{title}</Text>

                    <TouchableOpacity onPress={() => toggleExpand(index)} style={style.header_backBtn}>
                        <Image
                            style={
                                isActive ? {
                                    width: 25,
                                    height: 25,
                                    
                                    transform: [{ rotate: "-90deg" }],
                                } : {
                                    width: 25,
                                    height: 25,
                                    opacity:0.5,
                                    transform: [{ rotate: "90deg" }],
                                }
                            }
                            source={require("../../../assets/icon/arrowRight.png")}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    };



    const toggleModal = () => {
        setModalVisible(!isModalVisible);
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
                    onPress={toggleModal}
                ></TouchableOpacity>
                <View
                    style={{
                        flex: 2,
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
                            style={{
                                flexDirection: "row",
                                color: '#006EE6',
                                fontWeight:FontWeight.fontWeight_500,
                                fontSize: 20,
                            }}
                        >
                            Cancel
                        </Text>
                        <Text
                            style={{
                                flex: 1,
                                fontSize: 22,
                                color: Colors.blackText,
                                fontWeight:FontWeight.fontWeight_500,
                                textAlign: "center",
                            }}
                        >
                            Reason
                        </Text>
                        <Text
                            onPress={() => toggleModal(reason)}
                            style={{
                                flexDirection: "row",
                                color: '#006EE6',
                                fontWeight:FontWeight.fontWeight_500,
                                fontSize: 20,
                            }}
                        >
                            Done
                        </Text>
                    </View>

                    <View style={{ padding: 1, backgroundColor: "#e2e2e2", marginTop: 10 }}></View>

                    <TextInput
                        value={reason}
                        autoFocus={true}
                        placeholderTextColor="#aaa"
                        onChangeText={e => setReason(e)}
                        style={{

                            fontSize: 22,
                            margin: 20,

                            padding: 0,
                            color: "#111",
                        }}
                    />


                </View>
            </Modal>



            <Modal
                isVisible={isPaymentModalVisible}
                style={{
                    flex: 1,
                    justifyContent: "flex-end",
                    backgroundColor: "transparent",
                    margin: 0,
                    padding: 0,
                }}

            >
                <View style={{flex:0.8, backgroundColor:'#fff',  margin: 0,
                        
                        paddingVertical: 40,
                        borderTopEndRadius: 10,
                        borderTopStartRadius: 10,}}>
                                        <View style={{ flexDirection:"row", justifyContent:"space-between", marginHorizontal:10}}>
                                            <TouchableOpacity onPress={()=> setPaymentModalVisible(!isPaymentModalVisible)}>
                                                <Text style={{color: "#006EE6", marginLeft: 5}}>Cancel</Text>
                                            </TouchableOpacity>
                                            <Text style={{color:"black", fontWeight:"bold", marginLeft: -45}}>New Payment Method</Text>
                                            <View/>
                                        </View>
                <PaymentMethod/>

                </View>
            
            </Modal>




            <Modal
                isVisible={isSeatModalVisible}
                style={{
                    flex: 1,
                    justifyContent: "flex-end",
                    backgroundColor: "#fff",
                    margin: 0,
                    padding: 0,
                }}

            >
              <Text>HEllo</Text>
            
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

            <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, padding: 10 }}>
                <View style={style.CheckoutItem}>
                    <CheckoutItemTitle
                        index="1"
                        title="Trip info"
                        isDone={true}
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
                                <Image
                                    style={{ width: 80, height: 80, borderRadius: 15 }}
                                    source={require("../../../assets/icon/TripBackground.png")}
                                />

                                <View
                                    style={{
                                        alignItems: "flex-start",
                                        margin: 15,
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
                                            marginVertical: 5
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
                                <TouchableOpacity onPress={() => navigation.navigate('CheckoutPageInfoPage')}>
                                    <Image
                                        style={{ width: 30, height: 30 }}
                                        source={require("../../../assets/icon/edit.png")}
                                    />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity
                                style={{ backgroundColor: '#006EE6', borderRadius: 10, padding: 10, alignItems: 'center', marginTop: 20, marginBottom: 40 }}
                                onPress={() => navigation.navigate('CheckoutPageInfoPage')}
                            >
                                <Text style={{ color: Colors.whiteColor, fontSize: 16 }}>Add Trip Details</Text>
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
                        isDone={true}
                        isActive={isflight}
                    />
                    {isflight ? (
                        <View style={{ marginVertical: 20 }}>
                            <Text style={{ marginVertical: 10, color: '#111', fontWeight:FontWeight.fontWeight_500, fontSize: 20, }} >Flight details</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#aaa' }}>Departure:</Text><Text style={{ color: '#111' }}>Fri,Jul29</Text>

                            </View>
                            <View style={{ flexDirection: 'row', marginVertical: 20 }}>
                                <Image
                                    style={{ width: 30, height: 30, margin: 10, padding: 0 }}
                                    source={require("../../../assets/icon/flight_detail.png")}
                                />
                                <View style={{ flex: 1, marginHorizontal: 10 }}>
                                    <Text style={{ color: '#111', fontWeight:FontWeight.fontWeight_500, fontSize: 20, }} >8:05am</Text>
                                    <Text style={{ color: '#111', fontSize: 14, }} >{firstTrip.substring(0, 3)}</Text>
                                </View>
                                <View style={{ flex: 1, marginHorizontal: 10 }}>
                                    <Text style={{ color: '#111', fontWeight:FontWeight.fontWeight_500, fontSize: 20, }} >9:55am</Text>
                                    <Text style={{ color: '#111', fontSize: 14, }} >{secondTrip.substring(0, 3)}</Text>
                                </View>


                            </View>



                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#aaa' }}>Fare type:</Text><Text style={{ color: '#111' }}>Main Cabin(S)</Text>

                            </View>


                            <Text style={{ fontWeight:FontWeight.fontWeight_500, fontSize: 16, color: '#006EE6', marginVertical: 20 }}>Change departure flight</Text>




                            <View style={{ flexDirection: 'row' }}>

                                <Text style={{ color: '#aaa' }}>Return:</Text><Text style={{ color: '#111' }}>Wed, Aug 3</Text>

                            </View>



                            <View style={{ flexDirection: 'row', marginVertical: 20 }}>
                                <Image
                                    style={{ width: 30, height: 30, margin: 10, padding: 0 }}
                                    source={require("../../../assets/icon/flight_detail.png")}
                                />
                                <View style={{ flex: 1, marginHorizontal: 10 }}>
                                    <Text style={{ color: '#111', fontWeight:FontWeight.fontWeight_500, fontSize: 20, }} >5:35pm </Text>
                                    <Text style={{ color: '#111', fontSize: 14, }} >{secondTrip.substring(0, 3)}</Text>
                                </View>
                                <View style={{ flex: 1, marginHorizontal: 10 }}>
                                    <Text style={{ color: '#111', fontWeight:FontWeight.fontWeight_500, fontSize: 20, }} >7:05am</Text>
                                    <Text style={{ color: '#111', fontSize: 14, }} >{firstTrip.substring(0, 3)}</Text>
                                </View>


                            </View>


                            <Text style={{ fontWeight:FontWeight.fontWeight_500, fontSize: 16, color: '#006EE6', }}>Change Return flight</Text>

                            <Text style={{ marginTop: 20, color: '#111', fontWeight:FontWeight.fontWeight_500, fontSize: 20, }} >Flight Cancellation and change policy</Text>

                            <View style={{ paddingLeft: 20, borderColor: "#21D363", borderLeftWidth: 1, marginVertical: 20, position: 'relative', marginHorizontal: 10, }}>
                                <View style={{ padding: 4, borderWidth: 6, borderColor: "#21D363", backgroundColor: "#fff", position: 'absolute', left: -10, borderRadius: 10 }}></View>
                                <Text style={{ margin: 0, color: '#111', fontWeight:FontWeight.fontWeight_500, fontSize: 16, }} >Flight Cancellation and change policy</Text>
                                <Text style={{ marginVertical: 5, color: '#111', fontSize: 16, lineHeight:23 }} >Get a full refund if canceled within 24
                                    hours. no flight change available during this
                                    period</Text>


                            </View>


                            <View style={{ paddingLeft: 20, marginVertical: 10, position: 'relative', marginHorizontal: 10, }}>
                                <View style={{ padding: 4, borderWidth: 6, borderColor: "#ED135B", backgroundColor: "#fff", position: 'absolute', left: -10, borderRadius: 10 }}></View>
                                <Text style={{ margin: 0, color: '#111', fontWeight:FontWeight.fontWeight_500, fontSize: 16, }} >Non refundable after July 25 11:21 PM
                                    (PDT)</Text>
                                <Text style={{ marginVertical: 5, color: '#111', fontSize: 16, lineHeight:23 }} >If Cancelled, no airline credit or refund Will
                                    be issued. $0 Change fee.</Text>


                            </View>

                            <Text style={{ fontWeight:FontWeight.fontWeight_500, fontSize: 22, color: '#ED135B', marginVertical: 10, }}>Out of Company policy</Text>



                            <View style={{ paddingLeft: 20, marginVertical: 20, position: 'relative', marginHorizontal: 10, }}>
                                <View style={{ width: 20, height: 20, backgroundColor: "#ED135B", position: 'absolute', alignItems: 'center', justifyContent: 'center', left: -10, borderRadius: 10 }}>
                                    <Text style={{ color: "#fff", fontSize: 12 }}>X</Text>
                                </View>
                                <Text style={{ margin: 0, color: '#111', fontWeight:FontWeight.fontWeight_500, fontSize: 16, }} >Booked Within 7 days prior to trip</Text>
                                <Text style={{ marginVertical: 5, color: '#111', fontSize: 16,  lineHeight:23 }} >Is last , minute(Within 7 days of When
                                    trip starts)</Text>


                            </View>

                            <View style={{ padding: 1, backgroundColor: "#e2e2e2" }}></View>



                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    padding: 20,
                                    marginVertical: 10,
                                }}
                            >
                                <View style={{ flex: 1 }}>
                                    <Text
                                        style={{
                                            flex: 1,
                                            fontSize: 16,
                                            color: "#006EE6",
                                            fontWeight:FontWeight.fontWeight_500,
                                            marginVertical: 5
                                        }}
                                    >
                                        Give your manager a reason
                                    </Text>
                                    <Text style={{ fontSize: 16, margin: 0, padding: 0, color: Colors.blackColor, }}>{reason}</Text>
                                </View>

                                {reason == "" ? (
                                    <TouchableOpacity onPress={() => toggleModal(reason)}>
                                        <Text style={{ fontSize: 24, margin: 0, padding: 0, color: "#006EE6", fontWeight:FontWeight.fontWeight_500, }}>+</Text>
                                    </TouchableOpacity>
                                ) : (
                                    <TouchableOpacity onPress={() => toggleModal(reason)}>
                                        <Image
                                            style={{ width: 30, height: 30 }}
                                            source={require("../../../assets/icon/edit.png")}
                                        />
                                    </TouchableOpacity>
                                )
                                }
                            </View>



                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>




                                <SwitchToggle
                                    switchOn={isSwitch}
                                    onPress={() => setisSwitch(!isSwitch)}
                                    circleColorOff='#fff'
                                    circleColorOn='#fff'
                                    backgroundColorOn='#006EE6'
                                    backgroundColorOff='#C4C4C4'
                                />

                                <Text
                                    style={{
                                        flex: 1,
                                        fontSize: 16,
                                        color: Colors.blackText,
                                        marginHorizontal: 20,
                                        lineHeight:23
                                    }}
                                >
                                    I understand that my manager can reject my booking
                                </Text>
                                <Text style={{ fontSize: 16, margin: 0, padding: 0, color: Colors.blackColor, }}>{reason}</Text>
                            </View>

                            <TouchableOpacity
                                style={{ borderWidth: 2, padding: 18, borderColor: "#ddd", alignItems: 'center', marginVertical: 30, borderRadius: 15 }}
                                onPress={() => navigation.navigate('CheckoutPageInfoPage')}
                            >
                                <Text style={{ color: "#006EE6", fontSize: 20, fontWeight:FontWeight.fontWeight_500 }}>Change  Date</Text>
                            </TouchableOpacity>


                            <TouchableOpacity
                                style={{ borderWidth: 2, padding: 15, backgroundColor: '#006EE6', borderColor: "#e2e2e2", alignItems: 'center', borderRadius: 15 }}
                                onPress={() => navigation.navigate('CheckoutPageInfoPage')}
                            >
                                <Text style={{ color: "#fff", fontSize: 20, fontWeight:FontWeight.fontWeight_500 }}>Continue</Text>
                            </TouchableOpacity>

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
                        <View style={{ marginVertical: 10 }}>
                            <Text style={{ marginVertical: 10, color: '#111', fontWeight:FontWeight.fontWeight_500, fontSize: 20, }} >Share my info with airline</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ flex: 1, marginVertical: 10, color: '#111', fontSize: 16, }} >Why share my info?</Text>
                                <Text onPress={()=> setShowMore(!showMore)} style={{ marginVertical: 10, color: '#006EE6', fontWeight:FontWeight.fontWeight_500, fontSize: 16, }} >{showMore ? "show less" : " Show more"}</Text>
                            </View>

                            {showMore ? <Text style={{
                                marginVertical: 10, fontSize: 16,
                                color: Colors.blackText,
                                lineHeight:23
                            }}>

                                Airlines ask that we provide them with your
                                contact information so that they can  contact
                                you directly about any COVID-19 testing
                                requirements needed to fly or any other travel
                                restriction. your information  also may be used
                                for COVID-19 contact tracing.Failure to provide
                                your information to the airlines may delay your
                                trip. Unchecking the box will not affect your trip
                                update notifications from TripActions.

                            </Text> : <></>}
                            
                            <View style={{ flex: 1, marginVertical: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>




                                <SwitchToggle
                                    switchOn={isSwitch2}
                                    onPress={() => setisSwitch2(!isSwitch2)}
                                    circleColorOff='#fff'
                                    circleColorOn='#fff'
                                    backgroundColorOn='#006EE6'
                                    backgroundColorOff='#C4C4C4'
                                />

                                <Text
                                    style={{
                                        flex: 1,
                                        fontSize: 16,
                                        color: Colors.blackText,
                                        marginHorizontal: 20,
                                    }}
                                >
                                    Getout
                                    may share my contact info
                                    with the airline.
                                </Text>
                            </View>



                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginVertical: 20
                                }}
                            >
                                <Image
                                    style={{ width: 30, height: 30, }}
                                    source={require("../../../assets/icon/email.png")}
                                />

                                <View
                                    style={{
                                        alignItems: "flex-start",
                                        marginHorizontal: 15,
                                        flex: 1,
                                    }}
                                >

                                    <Text
                                        style={{
                                            flex: 1,
                                            fontSize: 16,
                                            color: Colors.blackText,
                                            fontWeight:FontWeight.fontWeight_500,
                                            textAlign: "center",
                                            marginVertical: 5
                                        }}
                                    >
                                        Phone number
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
                                        +14044137830
                                    </Text>
                                </View>
                                <TouchableOpacity onPress={() => navigation.navigate('CheckoutPageInfoPage')}>
                                    <Image
                                        style={{ width: 30, height: 30 }}
                                        source={require("../../../assets/icon/edit.png")}
                                    />
                                </TouchableOpacity>
                            </View>


                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginVertical: 10
                                }}
                            >
                                <Image
                                    style={{ width: 30, height: 30, borderRadius: 15 }}
                                    source={require("../../../assets/icon/phone.png")}
                                />

                                <View
                                    style={{
                                        alignItems: "flex-start",
                                        marginHorizontal: 15,
                                        flex: 1,
                                    }}
                                >

                                    <Text
                                        style={{
                                            flex: 1,
                                            fontSize: 16,
                                            color: Colors.blackText,
                                            fontWeight:FontWeight.fontWeight_500,
                                            textAlign: "center",
                                            marginVertical: 5
                                        }}
                                    >
                                        Email
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
                                        Calvin@acco360.com
                                    </Text>
                                </View>
                                <TouchableOpacity onPress={() => navigation.navigate('CheckoutPageInfoPage')}>
                                    <Image
                                        style={{ width: 30, height: 30 }}
                                        source={require("../../../assets/icon/edit.png")}
                                    />
                                </TouchableOpacity>
                            </View>

                            <Text style={{ marginVertical: 20, color: '#111', fontWeight:FontWeight.fontWeight_500, fontSize: 20, }} >Payment method</Text>




                            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10, }}>
                                <Text style={{ color: '#006EE6', fontWeight:FontWeight.fontWeight_500, fontSize: 16, flex: 1 }} >Add Payment method</Text>
                                <TouchableOpacity onPress={()=> setPaymentModalVisible(!isPaymentModalVisible)}>

                                <Text  style={{ color: '#006EE6', fontWeight:FontWeight.fontWeight_500, fontSize: 28, }} >+</Text>
                                </TouchableOpacity>
                            </View>






                            <Text style={{ marginVertical: 20, color: '#111', fontWeight:FontWeight.fontWeight_500, fontSize: 20, }} >Passenger info</Text>

                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginVertical: 10
                                }}
                            >
                                <Image
                                    style={{ width: 50, height: 50, borderRadius: 25, backgroundColor:'#aaa'}}
                                    source={require("../../../assets/icon/person.png")}
                                />

                                <View
                                    style={{
                                        alignItems: "flex-start",
                                        marginHorizontal: 15,
                                        flex: 1,
                                    }}
                                >


                                    <Text
                                        style={{
                                            flex: 1,
                                            fontSize: 16,
                                            color: Colors.blackText,
                                            fontWeight:FontWeight.fontWeight_500,
                                            textAlign: "center",
                                            marginVertical: 5
                                        }}
                                    >
                                        Email
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
                                        Calvin@acco360.com
                                    </Text>
                                </View>
                                <TouchableOpacity onPress={() => navigation.navigate('CheckoutPageInfoPage')}>
                                    <Image
                                        style={{ width: 30, height: 30 }}
                                        source={require("../../../assets/icon/arrowRight.png")}
                                    />
                                </TouchableOpacity>
                            </View>



                            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10, }}>
                                <Text style={{ color: '#006EE6', fontWeight:FontWeight.fontWeight_500, fontSize: 16, flex: 1 }} >Add American Airlines Rewards</Text>
                                <Text style={{ color: '#006EE6', fontWeight:FontWeight.fontWeight_500, fontSize: 28, }} >+</Text>
                            </View>



                            <View style={{ flexDirection: 'row', marginVertical: 20 }}>

                                <View style={{ flex: 1, alignItems:'center'}}>
                                    <Text style={{ color: Colors.blackColor, fontWeight:FontWeight.fontWeight_500, fontSize: 16, flex: 1  }} >Seats</Text>
                                    <Image
                                        style={{ width: 20, height: 20 }}
                                        source={require("../../../assets/icon/seat.png")}
                                    />
                                </View>

                                <View style={{ flex: 1, borderLeftWidth:2,  paddingHorizontal:10, borderColor:"#bbb" }}>
                                    <Text style={{ fontSize: 16, flex: 1 }} >{firstTrip.substring(0,3)} - {secondTrip.substring(0,3)}</Text>
                                    <Text style={{ fontSize: 16, flex: 1 }} >Not</Text>

                                </View>

                                <View style={{ flex: 1,  borderLeftWidth:2,  paddingHorizontal:10, borderColor:"#bbb" }}>
                                    <Text style={{ fontSize: 16, flex: 1 }} >{secondTrip.substring(0,3)} - {firstTrip.substring(0,3)}</Text>
                                    <Text style={{ fontSize: 16, flex: 1 }} >Not</Text>
                                </View>

                                <TouchableOpacity onPress={() => setSeatModalVisible(!isSeatModalVisible)} style={{flex:1, borderLeftWidth:2,alignItems:'center', paddingHorizontal:5, borderColor:"#bbb"}}>
                                    <Image
                    
                                        style={{ width: 30, height: 30 }}
                                        source={require("../../../assets/icon/edit.png")}
                                    />
                                </TouchableOpacity>

                            </View>




                            <View style={{ flexDirection: 'row', width: '100%', padding: 10, borderRadius: 5, backgroundColor: '#E4F6EF', marginVertical:10 }}>


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
                                    <Text style={{ fontSize: 15, color: '#aaa', fontWeight:'bold' }}>
                                        i
                                    </Text>
                                </View>


                                <Text style={{ fontSize: 16, flex: 1, marginRight: 60 }} >Add your loyalty Programs before
                                    selecting seats.</Text>

                            </View>

                            <TouchableOpacity
                                style={{ borderWidth: 2, padding: 18, borderColor: "#ddd", alignItems: 'center', marginVertical: 30, borderRadius: 15 }}
                                onPress={() => navigation.navigate('CheckoutPageInfoPage')}
                            >
                                <Text style={{ color: "#006EE6", fontSize: 20, fontWeight:FontWeight.fontWeight_500 }}>Add Later</Text>
                            </TouchableOpacity>


                            <TouchableOpacity
                                style={{ borderWidth: 2, padding: 15, backgroundColor: '#006EE6', borderColor: "#e2e2e2", alignItems: 'center', borderRadius: 15 }}
                                onPress={() => navigation.navigate('CheckoutPageInfoPage')}
                            >
                                <Text style={{ color: "#fff", fontSize: 20, fontWeight:FontWeight.fontWeight_500 }}>Continue</Text>
                            </TouchableOpacity>


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
    main__container: { padding:10, backgroundColor: Colors.whiteColor, flex: 1, fontFamily: FontFamily.fontFamily_regular },

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
    header_backBtn: {
        marginRight: 20,
    },

    header_backBtnImage: {
        backgroundColor: "#006EE6",

        width: 50,
        height: 50,
        borderRadius: 25,
        transform: [{ rotate: "180deg" }],
    },

    title_Area: {
        margin: 20,
        marginRight: 0,
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

