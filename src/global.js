import { StyleSheet } from "react-native";
import { Colors } from "./theme/Colors";
import { FontSizes } from "./theme/FontSize";
import { Spacing } from "./theme/Spacing";

export default StyleSheet.create({
    //////////////////////// VIEWS ////////////////////////////
    background: {
        width: "100%", 
        flex: 1,
        // height: "100%", 
        backgroundColor: Colors.background,
        paddingLeft: Spacing.paddingLeft,
        paddingRight: Spacing.paddingRight,
    },
    heading: {
        fontSize: 26,
        fontWeight: "600",
        color: Colors.blackText,
        textAlign: "center"
    },
    divider:{
        borderWidth: 0.3,
        borderColor: Colors.greyColor,
        marginTop:10,
        marginBottom: 10,
    },

    // flex box
    flexRow_SB: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    flexRowCenter:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    flexRowCenterSB:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    flexColCenterCenter:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    flexColCenter: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },

    //////////////////////// COMPONENTS ////////////////////////////

    // ACTION_BAR
    actionBar: {
        width: "100%",
        height: 70,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        textAlign: "center"
    }, 
    actionBar__backBtn: {
        position: "absolute",
        width: 32,
        height: 32,
        top: -15,
        left: 0,
        zIndex: 10000
    },
    actionBar__backBtnIcon: {
        position: "absolute",
        width: 400,
        height: 150,
        top: 17,
        left: 0,
        zIndex: 10000
    },
    actionBar__title: {
        width: "100%",
        fontSize: FontSizes.fontSize_xl,
        fontWeight: "600",
        color: Colors.blackText,
        margin: "auto", 
        textAlign: "center"
    },

    // BUTTONS
    // --buttons3
    button3: {
        backgroundColor: Colors.blackColor,
        borderRadius: 30,
        height: 50,
        width: 170,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        elevation: 8,
    },
    button3__Text: {
        color: Colors.whiteText,
        fontSize: FontSizes.fontSize_lg,
        fontWeight: "600"
    },

    // DATE_PICKER
    datePicker: {
        width: 215,
        height: 60,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
    },
    datePicker__title: {
        color: Colors.subText,
        fontSize: FontSizes.fontSize_md,
        fontWeight: "600",
    },    
    datePicker__Date: {
        color: Colors.blackText,
        fontSize: FontSizes.fontSize_lg,
        fontWeight: "600",
    },

    // LOCATION_PICKER
})