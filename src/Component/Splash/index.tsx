import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Constant from  '../../Constant';
const {MAIN, LOGIN} = Constant.SCREENS
const Splash = (props: any) => {
const {navigation} = props
    useEffect(() => {
        getUserData();
    }, []);

    const getUserData = async () => {
        try {
            let data = await AsyncStorage.getItem('user');
            const userData = JSON.parse(data);
            if (userData) {
                navigation.navigate(MAIN);
            } else {
                navigation.navigate(LOGIN);
            }
        } catch (error) {
            navigation.navigate(LOGIN);
        }
    };
    return <View style={styles.container} />;
};

export default Splash;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
    },
});
