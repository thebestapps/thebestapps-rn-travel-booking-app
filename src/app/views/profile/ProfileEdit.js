import React from "react";
import { Image, View, Dimensions, Text, TextInput, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const d = new Date();
let month = d.getMonth()+1;
const reportDate = d.getFullYear() + "-" + month + "-" + d.getDate();

export default class ProfileEdit extends React.Component {
    constructor(props) {
        super(props);    
        this.state = {
            name: "Calvin Brown",
            phone: "8794803021",
            open: true,
            workEmail: "calvin@example.com",
            personalEmail: "not set",
            knownPhone: null,
            assistance: "not set",
            currentDate: new Date(),
            datePicker: false,
            edit: false,
            seat: "Aisle",
            gender: "Male"
        };
    }
    onChangeDate = (event, selectedDate) => {
        let currentDate = selectedDate;
        this.setState({
            currentDate: currentDate,
            datePicker: false
        })
        console.log(currentDate)
    };
    render(){
        return(
            <View
              style={{
                flex: 1,
                paddingTop: "10%",
                backgroundColor:"#fff"
              }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <TouchableOpacity>
                        <View style={style.screenTab}>
                            <View style={{flexDirection:"row", alignItems:"center"}}>
                                <Image
                                style={{ height: 33, resizeMode:"contain"}}
                                source={require("../../../assets/icon/passport.png")}
                                />
                                <Text style={{color:"black", fontSize: 22, marginLeft: 15}}>Passport</Text>
                            </View>
                            <Image
                                style={style.menuImg}
                                source={require("../../../assets/icon/arrowRight.png")}
                            />
                        </View>
                    </TouchableOpacity>
                    <Text style={{fontSize: 17, marginTop: 35, paddingLeft: 25, color:"#00000080"}}>PASSENGER</Text>
                    <Text style={{fontSize: 15, marginTop: 20, paddingLeft: 25, color:"#00000080"}}>NAME</Text>
                    <TextInput
                        underlineColorAndroid ='transparent'
                        style={{paddingLeft: 25, marginTop: 7, outlineWidth: 0, fontSize: 14.5}}
                        onChangeText={(text) => this.setState({name: text})}
                        value={this.state.name}
                        placeholder="Full Name"
                        editable={this.state.edit}
                    />
                    <View style={style.divider}/>
                    <Text style={{fontSize: 14.5, paddingLeft: 25, color:"#777983", opacity: 0.6, marginTop: 17,}}>Date of birth</Text>
                    <View style={{width:"95%", backgroundColor:"white",}}>
                        <TouchableOpacity onPress={() => this.setState({datePicker: true})}>
                            <Text style={{fontSize: 14.5, paddingLeft: 25, color:"#777983", opacity: 0.6, marginTop: 17,}}>20th July, 2022</Text>
                        </TouchableOpacity>
                        {
                            this.state.datePicker ?
                                <DateTimePicker
                                    testID="dateTimePicker"
                                    value={this.state.currentDate}
                                    mode="date"
                                    onChange={this.onChangeDate}
                                />
                            :
                                <></>
                        }
                    </View>
                    <View style={style.divider}/>
                    <Text style={{fontSize: 14.5, paddingLeft: 25, color:"#777983", opacity: 0.6, marginTop: 17,}}>Gender</Text>
                    <Picker
                        selectedValue={this.state.gender}
                        style={{
                        width: "95%",
                        color: "#222",
                        marginLeft: "2.5%",
                        marginRight: "2.5%",
                        }}
                        enabled={this.state.edit}
                        onValueChange={(itemValue, itemIndex) =>
                        this.setState({ gender: itemValue })
                        }
                    >
                        <Picker.Item label="Male" value="Male" />
                        <Picker.Item label="Female" value="Female" />
                        <Picker.Item label="Prefer not to say" value="Prefer not to say" />
                    </Picker>
                    <View style={style.divider}/>
                    <Text style={{fontSize: 14, paddingLeft: 25, color:"#777983" }}>Contact</Text>
                    <Text style={{fontSize: 14.5, paddingLeft: 25, color:"#777983", opacity: 0.6, marginTop: 17,}}>Phone No</Text>
                    <TextInput
                        underlineColorAndroid ='transparent'
                        style={{paddingLeft: 25, marginTop: 5, outlineWidth: 0, fontSize: 14.5}}
                        onChangeText={(text) => this.setState({phone: text})}
                        value={this.state.phone}
                        placeholder="Mobile Number"
                        keyboardType="numeric"
                        editable={this.state.edit}
                    />
                    <View style={style.divider}/>
                    <Text style={{fontSize: 14.5, paddingLeft: 25, color:"#777983", opacity: 0.6, marginTop: 17,}}>Work Email</Text>
                    <TextInput
                        underlineColorAndroid ='transparent'
                        style={{paddingLeft: 25, marginTop: 5, outlineWidth: 0, fontSize: 14.5}}
                        onChangeText={(text) => this.setState({workEmail: text})}
                        value={this.state.workEmail}
                        placeholder="Work/Offie Email"
                        editable={this.state.edit}
                    />
                    <View style={style.divider}/>
                    <Text style={{fontSize: 14.5, paddingLeft: 25, color:"#777983", opacity: 0.6, marginTop: 17,}}>Personal Email</Text>
                    <TextInput
                        underlineColorAndroid ='transparent'
                        style={{paddingLeft: 25, marginTop: 5, outlineWidth: 0}}
                        onChangeText={(text) => this.setState({personalEmail: text})}
                        value={this.state.personalEmail}
                        placeholder="Required*"
                        editable={this.state.edit}
                    />
                    <View style={style.divider}/>
                    <Text style={{fontSize: 17, paddingLeft: 25, color:"#777983", opacity: 0.8, marginTop: 7}}>TRAVEL INFORMATION</Text>
                    <Text style={{fontSize: 14.5, paddingLeft: 25, color:"#777983", opacity: 0.6, marginTop: 17,}}>Known Traveler Number</Text>
                    <TextInput
                        underlineColorAndroid ='transparent'
                        style={{paddingLeft: 25, marginTop: 5, outlineWidth: 0}}
                        onChangeText={(text) => this.setState({knownPhone: text})}
                        value={this.state.knownPhone}
                        placeholder="Required*"
                        editable={this.state.edit}
                    />
                    <View style={style.divider}/>
                    <Text style={{fontSize: 14.5, paddingLeft: 25, color:"#777983", opacity: 0.6, marginTop: 17,}}>Seat Preference</Text>
                    <Picker
                        selectedValue={this.state.seat}
                        enabled={this.state.edit}
                        style={{
                        width: "95%",
                        color: "#222",
                        marginLeft: "2.5%",
                        marginRight: "2.5%",
                        }}
                        onValueChange={(itemValue, itemIndex) =>
                        this.setState({ seat: itemValue })
                        }
                    >
                        <Picker.Item label="Aisle" value="Aisle" />
                        <Picker.Item label="Middle" value="Middle" />
                        <Picker.Item label="Window" value="Window" />
                    </Picker>
                    <View style={style.divider}/>
                    <Text style={{fontSize: 14.5, paddingLeft: 25, color:"#777983", opacity: 0.6, marginTop: 17,}}>Special assistance</Text>
                    <TextInput
                        underlineColorAndroid ='transparent'
                        style={{paddingLeft: 25, marginTop: 5, outlineWidth: 0}}
                        onChangeText={(text) => this.setState({assistance: text})}
                        value={this.state.assistance}
                        placeholder="Required*"
                        editable={this.state.edit}
                    />
                    <View style={style.divider}/>
                    {
                        this.state.edit ?
                        <TouchableOpacity onPress={() => this.setState({edit: !this.state.edit})}>
                            <View style={style.editProfileButton}>
                                <Text style={{color:"#fff", fontSize: 15, fontWeight:"bold",}}>Save Changes</Text>
                            </View>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity onPress={() => this.setState({edit: !this.state.edit})}>
                            <View style={style.editProfileButton}>
                                <Text style={{color:"#fff", fontSize: 15, fontWeight:"bold",}}>Edit Personal Info</Text>
                            </View>
                        </TouchableOpacity>
                    }
                </ScrollView>
                
            </View>
        );
    }
};
const style = StyleSheet.create({
      screenTab:{
        paddingLeft: 15,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
      },
      menuImg: {
        width: 25,
        height: 25,
        marginRight: 10,
      },
      divider: {
        borderBottomColor: '#777983',
        borderBottomWidth: 0.3,
        alignSelf:"center",
        width:windowWidth,
        marginTop:"3.5%",
        marginBottom:"3.5%",
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
})