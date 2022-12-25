import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { COLORS, FONT_SIZES, METRICS } from '../../Configration';
import NavHeader from '../../ReuableComponent/NavHeader';
const History = () => {

    return (
        <View style={styles.container}>
            <NavHeader title={'History'} />
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: COLORS.BLACK }}>My History</Text>
            </View>
        </View>
    )
}

export default (History);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: COLORS.GREEN,
    },
    heading: {
        fontSize: FONT_SIZES.H1,
        color: COLORS.WHITE,
        textAlign: 'center',
    },

})
