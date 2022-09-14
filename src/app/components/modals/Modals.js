import React, { useState } from 'react';
import { View, Dimensions, FlatList, Text, Pressable, TouchableOpacity, Image, StyleSheet, ScrollView} from 'react-native';
import Modal from "react-native-modal";
import { Colors } from "../../../theme/Colors";
import { FontSizes } from "../../../theme/FontSize";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import CheckBox from '@react-native-community/checkbox';
import SearchBar from '../form-elements/searchBar/SearchBar';
import AddUserModal from './AddUserModal';

import global from '../../../global';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Modals = ({open, setOpen, list, setData, traveler, title, type}) => {
  const [addUserOpen, setAddUserOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const Item = ({ data }) => (
    <View style={style.modal__item}>
      
        {data.location ?
          <Pressable onPress={() => {setData(data);  setOpen(!open);}}>
            <Text style={style.model__itemText}>{data.location}</Text>
          </Pressable>
        :
        <Pressable onPress={() => {data.selected = !data.selected; setData(data);}}>
          <View style={global.flexRowCenter}>
            <CheckBox
              disabled={false}
              value={data.selected}
              onValueChange={(newValue) => {
                data.selected = newValue
                setData(data);
              }
              }
            />
            <View style={{marginLeft: 10}}>
              <Text style={style.model__itemText}>{data.name}</Text>
              <Text style={style.model__itemText2}>{data.email}</Text>
            </View>
          </View>
        </Pressable>
         }  
      
    </View>
  );
  
  const renderItem = ({ item }) => (
    <Item data={item} />
  );

  const addUserHandler = () => {

  }

  const delUserHandler = (id) => {
    setData({}, id, "del")
  }

  return (
    <Modal
      animationInTiming={800}
      isVisible={open} style={{height:windowHeight, width: "94%", justifyContent:"center", alignSelf:"center"}} backdropOpacity={0.8} useNativeDriver={true}
    > 
    <AddUserModal open={addUserOpen} setOpen={setAddUserOpen} setData={addUserHandler} title="New Traveler"/>
    <View style={style.modal}>
      <View style={style.modal__header}>
        <TouchableOpacity onPress={() => setOpen(!open)}>
          <Ionicons name="arrow-back" size={33} color="#006EE6" />
        </TouchableOpacity>
        <Text style={style.modal__title}>{title}</Text>
        <TouchableOpacity onPress={() => setAddUserOpen(true)}>
          <View style={{flexDirection:"row", alignItems:"center"}}>
            <Text style={style.modal__addBtn}>Traveler</Text>
            <Entypo name="plus" size={22} color="#006EE6" />
          </View>
        </TouchableOpacity>
      </View> 
      <SearchBar name={"query"} value={query} onChangeText={(e) => setQuery(e)} placeholder={`Search ${type}`} />
      <View style={{width: "100%"}} >
      {query === ""
      ?
      <>
        <Text style={{marginTop:"5%", marginLeft: 10, marginBottom: "2%"}}>Recent</Text>  
        <View style={style.modal__content}>
          <FlatList
            data={list}
            renderItem={renderItem}
            keyExtractor={item => item.name}
          />
        </View>
      </>
      : 
      <>
      <Text >Results</Text>
      <View style={global.divider} />
      </>
      }
        </View>
      </View>
    </Modal>
  )
}

const style = StyleSheet.create({
  modal: {
    display: "flex",
    flex: 1,
    height: "60%",
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: "center",
    backgroundColor:"#fff",
    borderRadius: 20
  },
  modal__header: {
    width:"100%",
    flexDirection:"row",
    marginBottom: 25,
    marginTop: 20,
    justifyContent:"space-between"
  },
  modal__backBtn: {
    width: 32,
    height: 32,
  },
  modal__title: {
    fontSize: 17,
    fontWeight:"bold",
    color:"#000", 
    marginLeft: 35
  },
  modal__addBtn: {
    fontSize: 17,
    fontWeight:"bold",
    color:"#006EE6"
  },  
  modal__content: {
    backgroundColor: Colors.whiteColor,
    width: "100%",
    alignItems: "center",
  }, 
  modal__item: {
    backgroundColor: Colors.whiteColor,
    width: 370,
    borderRadius: 1,
    padding: 10,
    marginBottom: 8,
    elevation: 1
  },
  model__itemText: {
    fontSize: FontSizes.fontSize_md,
    fontWeight: "600",
    color: Colors.blackText,
  },
  model__itemText2: {

  },
  modal__chip:{
    width: "100%",
    height: 40,
  }

})

export default Modals;