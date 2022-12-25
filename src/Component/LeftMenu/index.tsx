import React, {
    useState,
    useRef,
    useCallback,
    useEffect,
    useReducer,
} from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Alert,
} from 'react-native';
import { Avatar, Divider, Icon, Image, ListItem } from 'react-native-elements';
import { COLORS, FONT_FAMILIES, METRICS } from "../../Configration";
import { Images } from '../../Assets';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Constant from '../../Constant';
import { showMessage } from 'react-native-flash-message';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';
const {
    MAIN,
    LOGIN
} = Constant.SCREENS;

const menuArray = [
    {
        name: 'Home',
        image: Images.home1,
        isActive: true,
        screen: MAIN,
    },
    {
        name: `Account`,
        image: Images.user,
        isActive: true,
        screen: MAIN,
    },
    {
        name: 'Settings',
        image: Images.setting,
        isActive: true,
        screen: MAIN,
    },
    {
        name: 'Logout',
        image: Images.logout,
        isActive: true,
        screen: LOGIN,
    },

];

const LeftMenu = (props: any) => {
    const { navigation, setRouteValues, logout } = props;
    const [userImage, setUserImage] = useState('');
    const [userName, setUserName] = useState('');
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        // const unsubscribe = navigation.addListener('focus', () => {
        //     //@ts-ignore`
        //     let userData = SharedManager.getInstance().getUserDetails()
        //     setUserImage(userData.image)
        //     setUserName(userData.first_name + " " + userData.last_name)
        // });

    }, []);

    const logoutApi = () => {
        AsyncStorage.removeItem("user")
        navigation.navigate(LOGIN)
    }

    const onSelectMenu = (data: any) => {
        const { screen, name } = data;
        navigation.closeDrawer();
        //============ Logout ===============//
        if (name === 'Logout') {
            const actions = [
                {
                    text: 'No', onPress: () =>
                        console.log('cancel Pressed')
                },
                {
                    text: 'Yes',
                    onPress: () => {
                        logoutApi()
                    }
                }
            ];
            Alert.alert('Logout', Constant.VALIDATE_FORM.LOGOUT, actions, { cancelable: false });
        } else {
            navigation.navigate(screen);
        }

    };

    const renderProfile = () => {
        return (<View
            style={styles.profile}
        // onPress={() => [navigation.closeDrawer(), navigation.navigate(SCREENS.EDIT_PROFILE, { showBack: true })]}>
        >

            <Image source={Images.dummy} style={styles.profileImage} />
            {/* <ListItem.Content> */}
            <Text style={styles.title}>{"Joey"}</Text>

            {/* </ListItem.Content> */}

        </View>)
    }

    const renderMenu = (item: any) => {
        const { image, name } = item.item;
        return (
            <TouchableOpacity
                key={name}
                onPress={() => onSelectMenu(item.item)}
                style={styles.menuItem}>
                <ListItem containerStyle={{ backgroundColor: 'transparent' }}>
                    <Image source={image} style={styles.menuIcon} />
                    <ListItem.Title style={{ color: 'white', fontSize: responsiveFontSize(2) }}> {name}</ListItem.Title>
                </ListItem>
                <ListItem.Chevron color={'white'} style={{ right: 0 }} />

            </TouchableOpacity>
        );
    };

    const renderSeprator = () => {
        return <Divider style={styles.divider} orientation={'horizontal'} color={'#000000'} />
    }
    return (
        <View style={styles.container}>
            {renderProfile()}
            <FlatList
                style={styles.list}
                data={menuArray} renderItem={renderMenu}
                showsVerticalScrollIndicator={false}
                // ListHeaderComponent={renderProfile}
                ItemSeparatorComponent={renderSeprator}
            />
            {/* ListHeaderComponent={renderProfile} */}
            {/* {isLoading && <QLoader />} */}
        </View>
    );
};
export default LeftMenu;
//==========================
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingTop: 16,
        backgroundColor: COLORS.BLACK,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 8,
    },
    menuIcon: {
        height: 25,
        width: 25,
    },
    profileImage: {
        height: 80,
        borderRadius: 80,
        borderColor: COLORS.WHITE,
        borderWidth: 1,
        width: 80,
        resizeMode: 'cover',
    },
    title: {
        marginTop: METRICS.MAR_10,
        color: COLORS.WHITE,
        fontSize: responsiveFontSize(2)
    },
    subtitle: {
        color: COLORS.WHITE,
    },
    list: {
        // marginTop: responsiveHeight(5)
    },
    divider: {},
    profile: {
        backgroundColor: COLORS.BLACK,
        // marginVertical: METRICS.MAR_10,
        alignItems: 'center',
        paddingTop: METRICS.MAR_50,
        paddingBottom: METRICS.MAR_20,
    }
});
