import React, { useState } from 'react';
import { View, Modal, Text, Pressable, TouchableOpacity, Image, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import global from '../../../global';

import { Colors } from "../../../theme/Colors";
import { FontSizes } from "../../../theme/FontSize";
import TextInput2 from '../form-elements/textInput/TextInput2';

const Data = {
  firstName: "",
  lastName: "",
  suffix: "",
  birthDate: "",
  gender: "",
  email: "",
  phone: "",
  // advanced options
  seatPreference: "",
  specialAssist: "",
  issuingCountry: "",
  countryOfCitizen: "",
  passportNum: "",
  issueDate: "",
  expDate: "",
  KTN: "",
  Redress: ""
}


const AddUserModal = ({open, setOpen, setData, title}) => {
  const [formData, setFormData] = useState(Data);
  const [openAdvanced, setOpenAdvanced] = useState(false);
  const [errors, setErrors] = useState({});

  const onChangeHandler = (name, value) => {
    setFormData({ ...formData, [name]: value})
  }

  const addUserHandler = () => { 
    let temp = {}
    setErrors({})
    if(formData.firstName === "" ) temp = {...temp, firstName: {status: true, error: "First name is required"}}
    if(formData.lastName === "" ) temp = {...temp, lastName: {status: true, error: "Last name is required"}}
    if(formData.birthDate === "" ) temp = {...temp, birthDate: {status: true, error: "Birth Date is required"}}
    if(formData.gender === "" ) temp = {...temp, gender: {status: true, error: "Gender is required"}}
    if(formData.email === "" ) temp = {...temp, email: {status: true, error: "Email is required"}}
    if(formData.phone === "" ) temp = {...temp, phone: {status: true, error: "Phone is required"}}
    setErrors(temp)
    if(Object.keys(errors).length === 0) console.log(formData) 
    
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      propagateSwipe={true}
      visible={open}
      onRequestClose={() => {
        setOpen(!open);
      }}
    > 
    <View style={style.modal}>
      {/* <ActionBar /> */}
      <View style={style.modal__header}>
        <TouchableOpacity onPress={() => setOpen(!open)}>
          <Image 
            style={style.modal__backBtn}
            source={require("../../../assets/icon/previous.png")}/>
        </TouchableOpacity>
        <Text style={style.modal__title}>{title}</Text>
        <TouchableOpacity onPress={addUserHandler}>
          <Text style={style.modal__addBtn}>Add</Text>
        </TouchableOpacity>
      </View> 
      {/* Add User Form */}
      <SafeAreaView>
        <ScrollView contentContainerStyle={style.modal__content}>
          <TextInput2 name={"firstName"} placeholder={"First Name *"} value={formData.firstName} onChangeText={(e) => onChangeHandler('firstName', e)} errors={errors.firstName}/>
          <TextInput2 name={"lastName"} placeholder={"Last Name *"} value={formData.lastName} onChangeText={(e) => onChangeHandler('lastName', e)} errors={errors.lastName}/>
          <TextInput2 name={"suffix"} placeholder={"Suffix"} value={formData.suffix} onChangeText={(e) => onChangeHandler('suffix', e)}/>
          <TextInput2 name={"birthDate"} placeholder={"Birth Date *"} value={formData.birthDate} onChangeText={(e) => onChangeHandler('birthDate', e)} date={true} pastDate={true} errors={errors.birthDate}/>
          <TextInput2 name={"gender"} placeholder={"Gender *"} value={formData.gender} onChangeText={(e) => onChangeHandler('gender', e)} errors={errors.gender}/>
          <TextInput2 name={"email"} placeholder={"Email *"} value={formData.email} onChangeText={(e) => onChangeHandler('email', e)} errors={errors.email}/>
          <TextInput2 name={"phone"} placeholder={"Phone *"} value={formData.phone} onChangeText={(e) => onChangeHandler('phone', e)} errors={errors.phone}/>
          {openAdvanced &&
            <>
              <Text style={style.modal__formText}>Preferences</Text>
              <TextInput2 name={"seatPreference"} placeholder={"Seat Preferences"} value={formData.seatPreference} onChangeText={(e) => onChangeHandler('seatPreference', e)}/>
              <TextInput2 name={"specialAssist"} placeholder={"special Assistance"} value={formData.specialAssist} onChangeText={(e) => onChangeHandler('specialAssist', e)}/>
              <Text style={style.modal__formText}>Passport Information</Text>
              <TextInput2 name={"issuingCountry"} placeholder={"Issuing Country"} value={formData.issuingCountry} onChangeText={(e) => onChangeHandler('issuingCountry', e)} />
              <TextInput2 name={"countryOfCitizen"} placeholder={"Country Of Citizenship"} value={formData.countryOfCitizen} onChangeText={(e) => onChangeHandler('countryOfCitizen', e)} />
              <TextInput2 name={"passportNum"} placeholder={"Passport Number"} value={formData.passportNum} onChangeText={(e) => onChangeHandler('passportNum', e)}/>
              <TextInput2 name={"issueDate"} placeholder={"Issue Date"} value={formData.issueDate} onChangeText={(e) => onChangeHandler('issueDate', e)} date={true} pastDate={true} />
              <TextInput2 name={"expDate"} placeholder={"Expiration Date"} value={formData.expDate} onChangeText={(e) => onChangeHandler('expDate', e)} date={true} pastDate={false} />
              <Text style={style.modal__formText}>Travel Information</Text>
              <TextInput2 name={"KTN"} placeholder={"KTN"} value={formData.KTN} onChangeText={(e) => onChangeHandler('KTN', e)}/>
              <TextInput2 name={"Redress"} placeholder={"Redress Number"} value={formData.Redress} onChangeText={(e) => onChangeHandler('Redress', e)}/>
            </>  
          }
          <Pressable onPress={() => setOpenAdvanced(!openAdvanced)}>
            <Text style={style.modal__formText}>{openAdvanced ? "Hide " : "Show " }advanced options</Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
      </View>
    </Modal>
  )
}

const style = StyleSheet.create({
  modal: {
    flex: 1,
    paddingLeft: 12,
    paddingRight: 10,
    backgroundColor: Colors.whiteColor,
    ...global.flexColCenter
  },
  modal__header: {
    width: "100%",
    height: 72,
    ...global.flexRowCenterSB
  },
  modal__backBtn: {
    width: 32,
    height: 32,
  },
  modal__title: {
    position: "absolute",
    top: 22,
    width: 380,
    left: 0,
    zIndex: -1,
    textAlign: "center",
    fontSize: FontSizes.fontSize_lg,
    fontWeight: "600",
    color: Colors.blackText,
    margin: "auto", 
  },
  modal__addBtn: {
    fontSize: FontSizes.fontSize_lg,
    fontWeight: "600",
    color: Colors.blackText,
    margin: "auto", 
  },  
  modal__content: {
    backgroundColor: Colors.whiteColor,
    width: 370,
    flexGrow: 1,
    paddingBottom: 150,
    alignItems: "center",
    justifyContent: "flex-start"
  }, 
  modal__item: {
    backgroundColor: Colors.greyColor,
    width: 370,
    borderRadius: 10,
    padding: 10,
    marginBottom: 8,
    elevation: 1
  },
  model__itemText: {
    fontSize: FontSizes.fontSize_md,
    fontWeight: "600",
    color: Colors.blackText,
  },
  modal__formText:{
    fontSize: FontSizes.fontSize_lg,
    color: Colors.blackText,
    marginRight: "auto",
    marginTop: 30,
  }

})

export default AddUserModal;