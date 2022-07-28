import React from 'react';
import { View, TextInput, Image, StyleSheet } from 'react-native';

import { Colors } from '../../../../theme/Colors';
import { FontSizes } from '../../../../theme/FontSize';

const SearchBar = ({name, value, onChangeText, placeholder}) => {
  return (
    <View style={style.searchBar}>
      <Image
        style={style.searchBar__icon}
        source={require("../../../../assets/icon/search.png")} />
      <TextInput
        style={style.searchBar__input}
        name={name}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        />
    </View>
  )
}

const style = StyleSheet.create({
    searchBar: {
        width: "100%",
        height: 50,
        backgroundColor: Colors.whiteColor,
        borderRadius: 25,
        marginBottom: 10,
        paddingLeft: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        elevation: 8,
    },
    searchBar__icon: {
        width: 28,
        height: 28,
        color: Colors.blackColor
    },
    searchBar__input: {
        fontSize: FontSizes.fontSize_lg,
        fontWeight: "600",
        width: "100%"
    }
})

export default SearchBar;