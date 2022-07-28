import React, { useState } from 'react';
import { View, Modal, FlatList, Text, Pressable, TouchableOpacity, Image, StyleSheet, ScrollView} from 'react-native';

import { Colors } from "../../../theme/Colors";
import { FontSizes } from "../../../theme/FontSize";
import Chips from '../form-elements/chips/Chips';
import CheckBox from '@react-native-community/checkbox';
import SearchBar from '../form-elements/searchBar/SearchBar';
import AddUserModal from './AddUserModal';

import global from '../../../global';

const Modals = ({open, setOpen, list, setData, traveler, title, type}) => {
  const [addUserOpen, setAddUserOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const Item = ({ data }) => (
    <View style={style.modal__item}>
      
        {data.location ?
          <Pressable onPress={() => {setData(data);  setOpen(!open);}}>
            <Text style={style.model__itemText}>{data.location}</Text>
            {/* <View style={global.divider} /> */}
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
      animationType="slide"
      transparent={true}
      visible={open}
      onRequestClose={() => {
        // setOpen(!open);
      }}
    > 
    <AddUserModal open={addUserOpen} setOpen={setAddUserOpen} setData={addUserHandler} title="New Traveler"/>
    <View style={style.modal}>
      {/* <ActionBar /> */}
      <View style={style.modal__header}>
        <TouchableOpacity onPress={() => setOpen(!open)}>
          <Image 
            style={style.modal__backBtn}
            source={require("../../../assets/icon/previous.png")}/>
        </TouchableOpacity>
        <Text style={style.modal__title}>{title}</Text>
        <TouchableOpacity onPress={() => setAddUserOpen(true)}>
          <Text style={style.modal__addBtn}>Add</Text>
        </TouchableOpacity>
      </View> 
      <SearchBar name={"query"} value={query} onChangeText={(e) => setQuery(e)} placeholder={`Search ${type}`} />
      {/* {
        (title === "Traveler" || title === "Guests") &&
        <View style={{width: "100%"}} >
          <Text style={{marginBottom: 5}}>Selected</Text>
          <View style={style.modal__chip}>
            <ScrollView horizontal={true}>
              {traveler.map((item , index) => (
                <Chips title={item.name} onDelete={delUserHandler} id={item.id}/>
              ))}
            </ScrollView>
          </View>
        </View>
      } */}
      <View style={{width: "100%"}} >
      {query === ""
      ?
      <>
        <Text>Recent</Text>
        <View style={global.divider} />      
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
      <Text>Results</Text>
      <View style={global.divider} />      
        {/* <View style={style.modal__content}>
          <FlatList
            data={list}
            renderItem={renderItem}
            keyExtractor={item => item.name}
          />
       </View> */}
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
    flexDirection: "column",
    flex: 1,
    paddingLeft: 12,
    paddingRight: 10,
    backgroundColor: Colors.background,
    alignItems: "center",
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
    width: "100%",
    height: "100%",
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