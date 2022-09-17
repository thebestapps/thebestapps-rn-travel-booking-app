import React from "react";
import { Image, View, Dimensions, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, SafeAreaView } from "react-native";
import ToggleSwitch from 'toggle-switch-react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Modal from "react-native-modal";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Searchbar } from 'react-native-paper';
import DatePicker from 'react-native-modern-datepicker';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class PaymentMethod extends React.Component {
    constructor(props) {
        super(props);    
        this.state = {
            cardNumber: "",
            cardNickname:"",
            cardExpiration:"",
            cardSecurity: "",
            defaultToggle: true,
            optionSelected: false,
            selectedOptionValue: "",
            firstName: "Calvin",
            lastName: "Brown",
            billingStreet:"",
            billingApt:"",
            billingCity:"",
            billingState:"",
            billingZip:"",
            country:"United States",
            optionsModal: false,
            yearPickerModal: false,
            datePicker: false,
            currentDate: new Date(),
            searchView: false,
            searchQuery: null,
            date: null
        };
    }
    openOptionsModal = async () => {
        this.setState({
            optionsModal: true
        })
    }
    closeOptionsModal = async (data) => {
        this.setState({
            optionsModal: false,
            optionSelected: true,
            selectedOptionValue: data
        })
    }
    onChangeDate = (event, selectedDate) => {
        let currentDate = selectedDate;
        this.setState({
            currentDate: currentDate,
            datePicker: false
        })
        console.log(currentDate)
    };
    cancelButton = async (data) => {
        this.setState({
            optionsModal: false,
        })
    }
    render(){
        return(
            <SafeAreaView style={{flex: 1}}>
                <Modal animationInTiming={800} isVisible={this.state.optionsModal} style={{height:windowHeight, flex: 1, width: "100%", justifyContent: "flex-end", alignSelf:"center"}} backdropOpacity={0.8} useNativeDriver={true}>
                    <View>
                        <View style={{height:155, width: "90%", backgroundColor: '#fff', alignItems:"center", alignSelf:"center", borderRadius: 15}}>
                            <TouchableOpacity onPress={() => this.closeOptionsModal("This is my personal card")}>
                                <View style={{width:"100%", alignItems:"center", alignSelf:"center", justifyContent:"center", marginTop:"10%", marginBottom:"5%"}}>
                                    <Text style={{fontSize: 15, color:"#006EE6"}}>This is my personal card</Text>
                                </View>
                            </TouchableOpacity>
                            <View
                                style={{
                                    borderBottomColor: '#D9D9D9',
                                    borderBottomWidth: 1.2,
                                    alignSelf:"center",
                                    width:"100%",
                                    marginTop:"1.3%",
                                    marginBottom:"1.3%"
                                }}
                            />
                            <TouchableOpacity onPress={() => this.closeOptionsModal("This is my company's card")}>
                                <View style={{width:"100%", alignItems:"center", alignSelf:"center", justifyContent:"center",  marginTop:"5%", marginBottom:"10%"}}>
                                    <Text style={{fontSize: 15, color:"#006EE6"}}>This is my company's card</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={() => this.cancelButton()}>
                            <View style={{backgroundColor:"black", height: 55, width: 170, borderRadius: 100, alignItems:"center", alignSelf:"center", marginTop: "8%", justifyContent:"center", borderWidth: 0.3, borderColor:"white"}}>
                                <Text style={{color:"white", textAlign:"center", fontSize: 15, fontWeight:"bold"}}>Cancel</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </Modal>
                <Modal animationInTiming={800} isVisible={this.state.yearPickerModal} style={{height:windowHeight, flex: 1, width: "100%", justifyContent:"center", alignSelf:"center"}} backdropOpacity={0.8} useNativeDriver={true}>
                    <View style={{width: "90%", backgroundColor: '#fff', alignItems:"center", alignSelf:"center", borderRadius: 15}}>
                        <DatePicker
                            mode="monthYear"
                            options={{
                                backgroundColor: '#fff',
                                textHeaderColor: '#006EE6',
                                textDefaultColor: '#000',
                                selectedTextColor: '#fff',
                                mainColor: '#006EE6',
                                textSecondaryColor: '#D6C7A1',
                                borderColor: 'rgba(122, 146, 165, 0.1)',
                            }}
                            selectorStartingYear={2022}
                            onMonthYearChange={selectedDate => this.setState({date: selectedDate, yearPickerModal: false})}
                        />
                    </View>
                </Modal>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {
                        this.state.searchView ?
                            <View style={{}}>
                                <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                                    <TouchableOpacity onPress={() => this.setState({searchView: false})}>
                                        <Ionicons name="arrow-back" size={35} color="#006EE6" />
                                    </TouchableOpacity>
                                    <Text style={{color:"black", fontWeight:"bold", marginLeft: -45}}>Billing Address</Text>
                                    <View/>
                                </View>
                                <Searchbar
                                    placeholder="Search address"
                                    onChangeText={(searchtext) => this.onChangeSearch(searchtext)}
                                    value={this.state.searchQuery}
                                    style={{
                                        marginLeft:"2.5%",
                                        width:"95%",
                                        marginTop: 15,
                                        marginBottom: 20,
                                        borderRadius: 10,
                                        fontSize: 14,
                                        backgroundColor:"#D9D9D9",
                                        color:"#737373",
                                        textTransform: 'capitalize'
                                    }}
                                />
                            </View>

                        :
                            <View style={{padding: "4.5%"}}>
                                
                                <TextInput
                                    underlineColorAndroid ='transparent'
                                    style={{marginTop: "10%", outlineWidth: 0, fontSize: 15}}
                                    onChangeText={(text) => this.setState({cardNumber: text})}
                                    value={this.state.cardNumber}
                                    placeholder="Card number"
                                    keyboardType="numeric"
                                />
                                <TextInput
                                    underlineColorAndroid ='transparent'
                                    style={{outlineWidth: 0, fontSize: 15}}
                                    onChangeText={(text) => this.setState({cardNickname: text})}
                                    value={this.state.cardNickname}
                                    placeholder="Card nickname"
                                />
                                <TouchableOpacity onPress={() => this.setState({yearPickerModal: true})}>
                                        {this.state.date == null ?
                                            <Text style={{fontSize: 14.5, color:"black", paddingLeft: 1, marginTop: 4, marginBottom: 4}}>2022 06</Text>
                                            :
                                            <Text style={{fontSize: 14.5, color:"black", paddingLeft: 1, marginTop: 4, marginBottom: 4}}>{this.state.date}</Text>
                                        }
                                </TouchableOpacity>
                                <TextInput
                                    underlineColorAndroid ='transparent'
                                    style={{outlineWidth: 0, fontSize: 15}}
                                    onChangeText={(text) => this.setState({cardExpiration: text})}
                                    value={this.state.cardExpiration}
                                    placeholder="Card expiration"
                                />
                                <TextInput
                                    underlineColorAndroid ='transparent'
                                    style={{outlineWidth: 0, fontSize: 15}}
                                    onChangeText={(text) => this.setState({cardSecurity: text})}
                                    value={this.state.cardSecurity}
                                    placeholder="Card security"
                                    keyboardType={"numeric"}
                                    maxLength={3}
                                />
                                <View style={{marginTop:"3%", flexDirection:"row", alignItems:"center", justifyContent:"flex-end"}}>
                                    <Text style={{marginRight: 10, color: "#C9CACA"}}>Default Method?</Text>
                                    <ToggleSwitch
                                        isOn={this.state.defaultToggle}
                                        onColor="#006EE6"
                                        offColor="#C9CACA"
                                        size="medium"
                                        onToggle={() => this.setState({defaultToggle: !this.state.defaultToggle})}
                                    />
                                </View>
                                {
                                    this.state.optionSelected ?
                                        <TouchableOpacity onPress={() => this.openOptionsModal()}>
                                            <View style={{marginTop:"7%"}}>
                                                <Text style={{color: "#006EE6"}}>{this.state.selectedOptionValue}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    :
                                        <TouchableOpacity onPress={() => this.openOptionsModal()}>
                                            <View style={{marginTop:"7%", flexDirection:"row", alignItems:"center", justifyContent:"space-evenly"}}>
                                                <Text style={{color: "#006EE6"}}>Specify what kind of card is this?</Text>
                                                <Entypo name="plus" size={27} color="#006EE6" style={{marginTop: 5}} />
                                            </View>
                                        </TouchableOpacity>
                                }
                                
                                <View style={{flexDirection:"row", justifyContent:"space-around", marginTop:"7%",}}>
                                    <TextInput
                                        underlineColorAndroid ='transparent'
                                        style={{outlineWidth: 0, fontSize: 15, width:"47%", marginRight:"1.5%"}}
                                        onChangeText={(text) => this.setState({firstName: text})}
                                        value={this.state.firstName}
                                        placeholder="First name"
                                    />
                                    <TextInput
                                        underlineColorAndroid ='transparent'
                                        style={{outlineWidth: 0, fontSize: 15, width:"47%", marginLeft:"1.5%"}}
                                        onChangeText={(text) => this.setState({lastName: text})}
                                        value={this.state.lastName}
                                        placeholder="Last name"
                                    />
                                </View>
                                <View style={{marginTop:"1.5%", marginBottom: "1.5%", flexDirection:"row", alignItems:"center", justifyContent:"space-between", paddingLeft: "1%", paddingRight:"1%"}}>
                                    <Text>Billing street</Text>
                                    <TouchableOpacity onPress={() => this.setState({searchView: true})}>
                                        <Fontisto name="search" size={22} color="black" />
                                    </TouchableOpacity>
                                </View>
                                <TextInput
                                    underlineColorAndroid ='transparent'
                                    style={{outlineWidth: 0, fontSize: 15,}}
                                    onChangeText={(text) => this.setState({billingApt: text})}
                                    value={this.state.billingApt}
                                    placeholder="Billing apt/suite"
                                />
                                <TextInput
                                    underlineColorAndroid ='transparent'
                                    style={{outlineWidth: 0, fontSize: 15}}
                                    onChangeText={(text) => this.setState({billingCity: text})}
                                    value={this.state.billingCity}
                                    placeholder="Billing city"
                                />
                                <TextInput
                                    underlineColorAndroid ='transparent'
                                    style={{outlineWidth: 0, fontSize: 15}}
                                    onChangeText={(text) => this.setState({billingState: text})}
                                    value={this.state.billingState}
                                    placeholder="Billing state/province/region"
                                />
                                <TextInput
                                    underlineColorAndroid ='transparent'
                                    style={{outlineWidth: 0, fontSize: 15}}
                                    onChangeText={(text) => this.setState({billingZip: text})}
                                    value={this.state.billingZip}
                                    placeholder="Billing zip/postal code"
                                />
                                <TextInput
                                    underlineColorAndroid ='transparent'
                                    style={{outlineWidth: 0, fontSize: 15}}
                                    onChangeText={(text) => this.setState({country: text})}
                                    value={this.state.country}
                                    placeholder="Country"
                                />
                                <TouchableOpacity>
                                    <View style={{backgroundColor:"#006EE6", height: 55, width: "85%", borderRadius: 10, alignItems:"center", alignSelf:"center", marginTop: "10%", marginBottom:"5%", justifyContent:"center"}}>
                                        <Text style={{color:"white", textAlign:"center", fontSize: 15, fontWeight:"bold"}}>Save Payment Method</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                    }
                </ScrollView>
            </SafeAreaView>
        );
    }
}