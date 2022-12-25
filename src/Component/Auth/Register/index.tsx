import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
// import { COLORS, FONT_SIZES, METRICS, FONT_FAMILIES } from '../../../configration';
import { COLORS, FONT_SIZES, METRICS } from "../../../Configration";
import withConnect from "./withConnect";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import NavHeader from "../../../ReuableComponent/NavHeader";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import * as Constant from "../../../Constant";
const { LOGIN } = Constant.SCREENS;
const Register = (props: any) => {
  const { navigation, loginAction } = props;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [pin, setPin] = useState("");
  const [isSecure, setSecure] = useState(true);
  const [isLoading, setloading] = useState(false);

  const userRegister = () => {
    const body = {
      password: pin,
      phone: phone,
      name: name,
    };
    // loginAction(body)
    navigation.navigate(LOGIN);
  };

  return (

    <KeyboardAwareScrollView>
      <NavHeader isBack title={'Register'} />
      <View style={styles.container} />

      <View style={styles.bottomView}>
        <Text style={styles.headingText}>{`Register`}</Text>

        <TextInput
          style={[styles.textInput, { marginTop: METRICS.MAR_32 }]}
          placeholder={"Please Enter Your Full Name"}
          placeholderTextColor={COLORS.BLACK}
          onChangeText={setName}
        />
        <TextInput
          style={[styles.textInput, { marginTop: METRICS.MAR_32 }]}
          placeholder={"Please Enter Your Mobile Number"}
          placeholderTextColor={COLORS.BLACK}
          keyboardType={"phone-pad"}
          onChangeText={setPhone}
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
          onPress={() => userRegister()}
        >
          <Text style={styles.buttonText}>{`Submit`}</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>


  );
};

export default withConnect(Register);

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
    marginTop: 200,
    textAlign: "center",

    // fontFamily: FONT_FAMILIES.Segoe_UI_Semibold
  },
  itallicText: {
    fontSize: responsiveFontSize(2.5),
    color: COLORS.BLACK,

    textAlign: "center",

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
    marginTop: METRICS.MAR_50,
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
