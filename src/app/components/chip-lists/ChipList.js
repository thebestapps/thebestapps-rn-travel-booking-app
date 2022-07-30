import React from "react";
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { Colors } from "../../../theme/Colors";
import { Images } from "../../../constants/images";
import { FontFamily, FontWeight } from "../../../theme/FontFamily";
import { FontSizes } from "../../../theme/FontSize";

const ChipList = ({ navigation, chipListData, onPress }) => {
  return (
    <View>
      <FlatList
        style={{ marginTop: 10 }}
        data={chipListData}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              key={`filter chip ${index}`}
              style={{ marginBottom: 10, marginHorizontal: 7 }}
              onPress={onPress}
            >
              <View style={style.chip__wrapper(index)}>
                <Text style={style.chip__text}>{item.text}</Text>
                {index === 0 && (
                  <Image
                    source={Images.arrowDown}
                    style={{ width: 10, height: 12, marginLeft: 5 }}
                  />
                )}
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default ChipList;

const style = StyleSheet.create({
  chip__wrapper: (index) => ({
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 0.8,
    borderColor: Colors.greyColor1,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: index === 0 ? 15 : 0,
  }),
  chip__text: {
    fontSize: FontSizes.fontSize_s,
    fontFamily: FontFamily.fontFamily_regular,
    fontWeight: FontWeight.fontWeight_400,
    color: Colors.greyColor1,
  },
});
