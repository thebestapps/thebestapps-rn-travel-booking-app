import React, { useState, useEffect } from "react";
import {
  View,
  Modal,
  FlatList,
  Text,
  Pressable,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  ActivityIndicator,
} from "react-native";

import { Colors } from "../../../theme/Colors";
import { FontSizes } from "../../../theme/FontSize";
const { height, width } = Dimensions.get("window");
import AntDesign from 'react-native-vector-icons/AntDesign';
import global from "../../../global";
import { FontFamily } from "../../../theme/FontFamily";
import { Images } from "../../../constants/images";
import { searchFlight } from "../../../constants/texts";

const SearchFlightModal = ({ open, setOpen, isLoading, data }) => {
  const [destination, setDestination] = useState("");
  const [source, setSource] = useState("");
  useEffect(() => {
    async function fetchData() {
      console.log(data)
    }
  }, []);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={open}
      onRequestClose={() => {
        // setOpen(!open);
      }}
    >
      <View style={style.modal}>
        <View style={style.modal__childContainer}>
          <TouchableOpacity onPress={() => setOpen(!open)}>
            <AntDesign name="close" size={21} color="white" style={{left:"90%", top: 10}}/>
          </TouchableOpacity>
          <Text style={style.modal__title}>{searchFlight.titleText}</Text>
          <Image
            style={style.modal__mainImage}
            source={Images.flightSearch}
            resizeMode={"contain"}
          />
          <View style={{flexDirection:"row", justifyContent:"space-between", marginLeft: "9%", marginRight: "10%", marginTop: -15, marginBottom: 25}}>
            <Text style={{color:"white", fontSize: 15, fontWeight:"bold"}}>JFK</Text>
            <Text style={{color:"white", fontSize: 15, fontWeight:"bold"}}>BOS</Text>
          </View>
          <View style={style.modal__content}>
            {isLoading && (
              <ActivityIndicator
                size={"large"}
                color={Colors.blueColor}
                style={style.modal__indicator}
              />
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

const style = StyleSheet.create({
  modal: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    paddingLeft: 12,
    paddingRight: 10,
    backgroundColor: Colors.blueColor1Opa10,
    alignItems: "center",
    justifyContent: "center",
  },
  modal__mainImage: {
    height: 100,
    width: "80%",
    alignSelf: "center",
  },
  modal__title: {
    color: Colors.whiteColor,
    size: FontSizes.fontSize_sm,
    fontFamily: FontFamily.fontFamily_regular,
    fontWeight: FontFamily.fontWeight_500,
    alignSelf: "center",
    textAlign: "center",
    marginTop: 7,
    marginBottom: 20,
  },
  modal__childContainer: {
    backgroundColor: Colors.blueColor,
    width: (width / 100) * 80,
    borderRadius: 15,
  },
  modal__content: {
    backgroundColor: Colors.whiteColor,
    width: "100%",
    height: 100,
    alignItems: "center",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  modal__iconClose: {
    color: Colors.whiteColor,
    size: FontSizes.fontSize_xxxxl,
    fontFamily: FontFamily.fontFamily_regular,
    fontWeight: FontFamily.fontWeight_400,
    alignSelf: "flex-end",
    marginRight: 15,
    marginTop: 10,
  },
  modal__indicator: {
    alignSelf: "center",
  },
});

export default SearchFlightModal;
