import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import CustomGuestProfile from '../../Components/CustomGuestProfile';



const GuestProfile = () => {
    return (

        <ScrollView >
            <Image source={require('../HostProfile/assets/Rectangle.png')} resizeMode='cover' style={{ width: '100%', height: 300 }} />
            <View style={styles.mainCont}>
                <View>
                    <Text style={styles.textConts}>
                        Kalyan,37
                    </Text>
                    <Text style={styles.textContss}>
                        Joined in 2015
                    </Text>
                </View>
                <View style={{ marginTop: -40 }}>
                    <CustomGuestProfile type='TERTIARY' />
                </View>
                <View style={{ paddingVertical: 20 }}>
                    <Text style={styles.textCont}>Host details</Text>
                    <View style={styles.screenCont}>
                        <CustomGuestProfile source={require('../HostProfile/assets/Verified.png')} text={'Email Address'} onPress={() => console.log('pressed')} />
                        <CustomGuestProfile source={require('../HostProfile/assets/Verified.png')} text={'Phone Number'} onPress={() => console.log('pressed')} />
                        <CustomGuestProfile source={require('../HostProfile/assets/Warning.png')} text={'Address'} onPress={() => console.log('pressed')} />
                        <CustomGuestProfile source={require('../HostProfile/assets/Warning.png')} text={'Identity Verification'} onPress={() => console.log('pressed')} />
                        <CustomGuestProfile source={require('../HostProfile/assets/Warning.png')} text={'Emergency Contact'} onPress={() => console.log('pressed')} type='TERTIARY' />
                    </View>
                </View>


                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.textCont}>Visit as Guest</Text>
                    <View style={styles.numConst}>
                        <View>
                            <Text style={{ color: '#000', fontWeight: '500', fontSize: 25, }}>0</Text>
                            <View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: -30 }}>
                    <CustomGuestProfile type='TERTIARY' />
                </View>
                <View style={{ padding: 50 }}>

                </View>




            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({


    mainCont: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems:'flex-end'
        padding: 25,


    },
    textCont: {
        fontSize: 25,
        color: '#000',
        fontWeight: '400',
        textDecorationLine: 'underline',
    },
    textConts: {
        fontSize: 40,
        color: '#000',
        fontWeight: '400',

    },
    screenCont: {
        paddingVertical: 15,

    },
    numConst: {


    },

})

export default GuestProfile
