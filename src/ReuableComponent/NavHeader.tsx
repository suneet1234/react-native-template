import React, { useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text, Platform } from 'react-native';
import { Header } from 'react-native-elements';
import { Images } from "../Assets";
import { useNavigation } from '@react-navigation/native';
import { COLORS, FONT_FAMILIES } from "../Configration";
import { responsiveHeight } from "react-native-responsive-dimensions";
const NavHeader = (props: any) => {
    const { bc, isBack, isBackHide, title, isRightAction, titleStyle, isSubTitle } = props;
    const navigation = useNavigation();

    useEffect(() => {

    }, [])


    const openDrawer = () => {
        if (isBack) {
            navigation.goBack()
            return;
        }
        navigation.openDrawer();
    };

    const goToScreen = (name: string) => {
        navigation.navigate(name);
    };

    const leftComponent = () => {
        if (isBack && !isBackHide) {
            return (
                <TouchableOpacity onPress={openDrawer} style={styles.leftComponent}>
                    <Image source={Images.back} style={[styles.menubar, { height: 30, width: 30 }]} />
                </TouchableOpacity>
            );
        } else if (isBackHide) {
            return null
        }
        else {
            return (
                <TouchableOpacity onPress={openDrawer} style={styles.leftComponent}>
                    <Image source={Images.menu} style={styles.menubar} />
                </TouchableOpacity>
            );
        }
    };

    const rightComponent = () => {
        if (isRightAction === undefined) {
            return (
                <View style={styles.rightComponent}>
                    <TouchableOpacity />
                </View>
            );
        }
        return (
            <View style={styles.rightComponent}>
                <TouchableOpacity>
                    <Image source={Images.notification} style={styles.menubar} />
                </TouchableOpacity>

            </View>
        );
    };


    const centerComponent = () => {
        return (<View style={{ height: 50, justifyContent: 'center' }}><Text style={[styles.text]}>{title}</Text>
        </View>)
    }
    return (
        <View style={{ marginTop: Platform.OS === 'ios' ? 0 : -20, }}>
            {/* @ts-ignore */}
            <Header
                statusBarProps={{ barStyle: 'light-content', translucent: true, backgroundColor: 'transparent' }}
                containerStyle={styles.container}
                placement={'center'}
                centerComponent={title ? centerComponent : null}
                leftComponent={leftComponent}
                rightComponent={rightComponent}
                backgroundColor={bc ? "transparent" : COLORS.BLACK} />
        </View>
    );
};
export default NavHeader;
const styles = StyleSheet.create({
    container: {
        borderBottomColor: 'transparent'
    },
    leftComponent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 50

    },

    centerComponent: {
        flex: 1,
    },
    menuImage: {
        height: 25,
        width: 25,
        resizeMode: 'contain',
    },
    profileImage: {
        height: 30,
        width: 40,
        borderRadius: 15,
        borderColor: 'white',
        borderWidth: 2,
        marginTop: 3,
    },
    backbar: {
        height: 40,
        width: 40,
        resizeMode: 'contain',
    },
    menubar: {
        height: 25,
        width: 25,
        resizeMode: 'contain',
    },
    text: {
        fontSize: 20,
        color: COLORS.WHITE,
        textAlign: 'center',
    },
    // button: { margin: 8, padding: 10 },
    rightComponent: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 50,
        width: 50

    },
    subTitle: {
        fontSize: responsiveHeight(1.5),
        color: COLORS.WHITE,
        textAlign: 'center',
    },

});

