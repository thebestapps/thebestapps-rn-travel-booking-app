import React, { useState } from 'react';
import { View, Modal, Text, Image, Pressable, FlatList} from 'react-native';

import styles from "./styles.scss";

const SelectInput = ({placeHolder, Name, value, onChange, list}) => {
  const [openModal, setOpenModal] = useState(false);

  const onChangeHandler = (name) => {
    onChange(name, Name);
    setOpenModal(!openModal);
  }

  const Item = ({ name }) => (
    <View style={styles.modalItem}>
      <Pressable onPress={() => onChangeHandler(name)}>
        <Text style={styles.modalItemText}>{name}</Text>
      </Pressable>
    </View>
  );
  
  const renderItem = ({ item }) => (
    <Item name={item.name} />
  );

  return (
    <View style={styles.modal}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={openModal}
        onRequestClose={() => {
          setOpenModal(!openModal);
        }}
      > 
        <View style={styles.centeredView} >
          <View style={styles.modalView}>
            <FlatList
              data={list}
              renderItem={renderItem}
              keyExtractor={item => item.name}
            />
          </View>
        </View>
      </Modal>
      <Pressable onPress={() => setOpenModal(true)}>
        <Text style={styles.modalText}>{(value === "") ? placeHolder : value}</Text>
      </Pressable>
      <Image 
        style={styles.modalDropDown}
        source={require("../../../../assets/icon/dropDown.png")} />
    </View>
  )
}

export default SelectInput;