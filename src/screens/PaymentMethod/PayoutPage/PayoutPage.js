import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'

const PayoutPage = ({navigation}) => {
    return (
        <ScrollView style={styles.mainConst}>
            <View style={styles.imageConst}>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity onPress={() => navigation.goBack()}><Image source={require('../PayoutPage/assets/Back.png')} style={{ height: 32, width: 32 }} /></TouchableOpacity>
                    <Text style={{ color: '#000', fontSize: 18, fontWeight: '400', margin: 2, }}>Payout Method</Text>
                </View>
                <View>
                    <TouchableOpacity  onPress={() => navigation.navigate('AddAddress')}>
                        <Text style={styles.bnConst}>
                            Add
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.txtConst}>
                <Text style={{textAlign:'center', color:'#000', fontSize:18,fontWeight:'400'}}>
                    No Payout Method Available
                </Text>
                <Text style={{textAlign:'center', color:'#000',fontSize:18, fontWeight:'400'}}>
                    Add One To Continue
                </Text>
            </View>
        </ScrollView>
    )
}

export default PayoutPage

const styles = StyleSheet.create({
    mainConst: {
        flex: 1,
        padding: 20,
        backgroundColor:'#fff',
        marginVertical:15

    },
    imageConst: {
        flexDirection: 'row',
        justifyContent:'space-between'
    },
bnConst:{
    backgroundColor: '#187498',
    borderRadius: 20,
    width: 80,
    padding: 7,
    color: 'white',
    textAlign: 'center',
},
txtConst:{
   marginVertical:300
}
})