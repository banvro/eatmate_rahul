import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

const PaymentPayout = ({navigation}) => {
    return (
        <ScrollView style={styles.mainConst}>
           <View style={styles.imageConst}>
                <TouchableOpacity onPress={() => navigation.goBack()}><Image source={require('../PaymentSetup/assets/Back.png')} style={{ height: 32, width: 32 }} /></TouchableOpacity>
                <Text style={{ color: '#000', fontSize: 15, margin: 5, fontWeight: '400' }}>Setup Payment method</Text>
            </View>
            
            <View style={styles.backConst}>
                <View style={styles.rowConst}>
                    <Text style={styles.txtxConst}>As a Guest</Text>
                </View >
                <View style={styles.rowConst}>
                    <Image source={require('../PaymentPayout/assets/Rupee.png')}style={{height:35, width:35}} />
                    <TouchableOpacity onPress={() => navigation.navigate('PaymentSetup')}>
                        <Text style={styles.txtConst}>Payment Method</Text>
                        </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row', padding:5}}>
                    <Image source={require('../PaymentPayout/assets/Lang.png')}style={{height:35, width:35}} />
                <TouchableOpacity onPress={() => navigation.navigate('Yourpayment')}>
                    <Text style={styles.txtConst}>Your Payments</Text></TouchableOpacity>
                </View>
            </View>
            
            <View style={styles.backConst}>
                <View style={styles.rowConst}>
                    <Text style={styles.txtxConst}>As a Host</Text>
                </View >
                <View style={styles.rowConst}>
                    <Image source={require('../PaymentPayout/assets/Rupee.png')}style={{height:35, width:35}} />
           <TouchableOpacity onPress={() => navigation.navigate('PayoutPage')}>
            <Text style={styles.txtConst}>Payout Methods</Text></TouchableOpacity>
                </View>
                <View style={{flexDirection:'row', padding:5}}>
                    <Image source={require('../PaymentPayout/assets/Lang.png')}style={{height:35, width:35}} />
        <TouchableOpacity onPress={() => navigation.navigate('TranstionHistory')}>
            <Text style={styles.txtConst}>Trnsaction history</Text>
            </TouchableOpacity>
                </View>
            </View>

        </ScrollView>
    )
}

export default PaymentPayout

const styles = StyleSheet.create({
    mainConst: {
        flex: 1,
        padding: 20,
        backgroundColor:'#fff',
        marginVertical:10
    },
    imageConst: {
        flexDirection: 'row',
    },
    backConst:{
backgroundColor:'#ECECEC',
borderRadius:15,
marginVertical:10
    },
    rowConst: {
        flexDirection: 'row',
        borderBottomColor: '#B3B3B3',
        borderBottomWidth: 1,
        padding:5
    },
    txtxConst: {
        color: '#000',
        margin: 10,
        fontWeight: '500',
        fontSize: 18,
    },
    txtConst: {
        margin: 10,
        color:'#000'

    },

})