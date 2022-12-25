import React, { useEffect, useState, useRef } from "react";
import {
    Text,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    View,
    StyleSheet,
    Alert,
    ImageBackground,
    Platform,
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLORS, FONT_SIZES, METRICS } from "../../../Configration";
import withConnect from "./withConnect";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as Constant from "../../../Constant";
import NavHeader from "../../../ReuableComponent/NavHeader";
import { ResponseModel } from "../../../Model";
import Loader from "../../../ReuableComponent/Loader";
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
const { MAIN, REGISTER } = Constant.SCREENS;
const Login = (props: any) => {
    const { navigation, loginAction, user, loading } = props;
    const [userid, setUserId] = useState("");
    const [isSecure, setSecure] = useState(true);
    const [pin, setPin] = useState("");
    const [userData, setUserData] = useState<ResponseModel>(user)

    var userRef = useRef();
    var pinRef = useRef();

    // useEffect(() => {
    //     setUserData(user)
    // }, [user])

    // useEffect(() => {
    //     Alert.alert(JSON.stringify(userData?.name))
    // }, [userData])

    const userLogin = () => {
        const body = {
            "name": "morpheus",
            "job": "leader"
        };
        // loginAction(body)

        AsyncStorage.setItem('user', JSON.stringify(body))
        navigation.navigate(MAIN)
    };
    const register = () => {
        navigation.navigate(REGISTER)
    };

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView>
                <NavHeader isBackHide bc={'transparent'} />
                <View style={styles.container} />
                <View style={styles.bottomView}>

                    <Text style={styles.headingText}>{`Login`}</Text>

                    <TextInput
                        style={[styles.textInput, { marginTop: METRICS.MAR_32 }]}
                        placeholder={"Please Enter Your Mobile Number"}
                        placeholderTextColor={COLORS.BLACK}
                        keyboardType={"phone-pad"}
                        onChangeText={setUserId}
                    />

                    <View style={styles.secureView}>
                        <TextInput
                            style={styles.secureInput}
                            placeholder={"Please Enter Your Password"}
                            placeholderTextColor={COLORS.BLACK}
                            secureTextEntry={isSecure}
                            onChangeText={setPin}
                        />
                    </View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => userLogin()}
                    >
                        <Text style={styles.buttonText}>{`Login`}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => register()}
                    >
                        <Text style={styles.buttonText}>{`Register`}</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>
            {loading && <Loader />}
        </View>
    );
};

export default withConnect(Login);

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    bottomView: {
        flex: 0,
        marginHorizontal: METRICS.MAR_55,
        marginBottom: METRICS.MAR_29,
    },
    headingText: {
        fontSize: responsiveFontSize(3),
        color: COLORS.BLACK,
        textAlign: "center",
        marginTop: 200,
        marginHorizontal: METRICS.MAR_55,
        // fontFamily: FONT_FAMILIES.Segoe_UI_Semibold
    },
    itallicText: {
        fontSize: responsiveFontSize(2.5),
        color: COLORS.BLACK,
        textAlign: "center",

        marginVertical: METRICS.MAR_11,
        // fontFamily: FONT_FAMILIES.Segoe_UI_Light_Italic
    },

    textInput: {
        // marginVertical: METRICS.MAR_15,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: COLORS.BLACK,
        paddingHorizontal: METRICS.MAR_12,
        color: COLORS.BLACK,
        height: METRICS.MAR_50,
        // fontFamily: FONT_FAMILIES.Segoe_UI,
        fontSize: responsiveFontSize(2),
    },
    button: {
        borderRadius: 20,
        padding: METRICS.MAR_10,
        // borderWidth: 1,
        backgroundColor: COLORS.BLACK,
        marginTop: METRICS.MAR_45,
    },
    buttonText: {
        fontSize: responsiveFontSize(2),
        color: COLORS.WHITE,
        textAlign: "center",
        // fontFamily: FONT_FAMILIES.Segoe_UI
    },
    footerText: {
        fontSize: responsiveFontSize(1.5),
        color: COLORS.WHITE,
        textAlign: "center",
        marginTop: METRICS.MAR_19,
        // fontFamily: FONT_FAMILIES.Segoe_UI,
        marginBottom: METRICS.MAR_19,
    },
    secureView: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: COLORS.BLACK,
        height: METRICS.MAR_50,
        marginTop: METRICS.MAR_32,
    },
    secureInput: {
        paddingLeft: METRICS.MAR_12,
        paddingRight: METRICS.MAR_35,
        color: COLORS.BLACK,
        // fontFamily: FONT_FAMILIES.Segoe_UI,
        fontSize: 16,
        height: METRICS.MAR_50,
    },
});
