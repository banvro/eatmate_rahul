import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const PaymentMode = ({navigation}) => {
    return (
        <ScrollView style={styles.mainConst}>
            <View style={styles.imageConst}>
                <TouchableOpacity onPress={() => navigation.goBack()}><Image source={require('../PaymentMode/assets/Back.png')} style={{ height: 32, width: 32 }} /></TouchableOpacity>
                <Text style={{ color: '#000', fontSize: 20, fontWeight: '400' }}>Pay With</Text>
            </View>
            <View style={styles.backConst}>
                <View >
                <View style={styles.rowConst}>
                    <TouchableOpacity><Text style={styles.txtxConst}>Credit Card </Text></TouchableOpacity>
                    <Text style={styles.txtxxConst}>/</Text>
                    <TouchableOpacity><Text style={styles.txtxxConst}> Debit Card</Text></TouchableOpacity>
                </View >
                </View> 
                <View style={{ flexDirection: 'row', padding: 15 }}>
                    <TouchableOpacity><Text style={styles.txtConst}>Your Payments</Text></TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default PaymentMode

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
    backConst: {
        backgroundColor: '#ECECEC',
        borderRadius: 15,
        marginVertical: 10,
    marginVertical:40,
        width:"100%",
        
    },
    rowConst: {
        flexDirection: 'row',
        borderBottomColor: '#B3B3B3',
        borderBottomWidth: 1,
        padding: 15,
    },
    txtxConst:{
        color:'#000',
        marginLeft:80,

    },
    txtConst:{
        color:'#000',
        marginLeft:95,
      
    },
    txtxxConst:{
        color:'#000'
    }
    

})