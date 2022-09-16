import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import CustomProfileHost from '../../Components/CustomProfileHost/CustomProfileHost';



const HostProfile = () => {
    return (

        <ScrollView >
            
            <Image source={require('../HostProfile/assets/Rectangle.png')} resizeMode='cover' style={{ width: '100%', height: 350 }} />
            <View>
                <TouchableOpacity>
                    <Text style={styles.rvConst}>
                       Host
                    </Text>
                </TouchableOpacity>
            </View>
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
                    <CustomProfileHost type='TERTIARY' />
                </View>
                <View style={{ paddingVertical: 20 }}>
                    <Text style={styles.textCont}>Host details</Text>
                    <View style={styles.screenCont}>
                        <CustomProfileHost source={require('../HostProfile/assets/Verified.png')} text={'Email Address'} onPress={() => console.log('pressed')} />
                        <CustomProfileHost source={require('../HostProfile/assets/Verified.png')} text={'Phone Number'} onPress={() => console.log('pressed')} />
                        <CustomProfileHost source={require('../HostProfile/assets/Warning.png')} text={'Address'} onPress={() => console.log('pressed')} />
                        <CustomProfileHost source={require('../HostProfile/assets/Warning.png')} text={'Identity Verification'} onPress={() => console.log('pressed')} />
                        <CustomProfileHost source={require('../HostProfile/assets/Warning.png')} text={'Emergency Contact'} onPress={() => console.log('pressed')} type='TERTIARY' />
                    </View>
                </View>


                <View style={{ paddingVertical: 10 }}>
                    <Text style={styles.textCont}>History</Text>
                    <View style={styles.numConst}>
                        <View>
                            <Text style={{ color: '#000', fontWeight: '500', fontSize: 30, marginHorizontal: 35 }}>0</Text>
                            <TouchableOpacity><Text style={{ color: '#000' }}>Parties Hosted</Text></TouchableOpacity>
                        </View>
                        <View>
                            <Text style={{ color: '#000', fontWeight: '500', fontSize: 30, marginHorizontal: 35 }}>0</Text>
                            <TouchableOpacity><Text style={{ color: '#000' }}>Visit as Guest</Text></TouchableOpacity>
                            <View>
                            </View>
                        </View>
                    </View>

                </View>
                <View style={{ marginTop: -40 }}>
                    <CustomProfileHost type='TERTIARY' />
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
        fontSize: 26,
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
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingVertical: 10,

    },
    rvConst: {
        backgroundColor: '#187498',
        borderRadius: 15,
        width: 100,
        padding: 7,
        marginTop: -20,
        color: 'white',
        marginHorizontal: 250,
        textAlign: 'center',
    },




})

export default HostProfile
