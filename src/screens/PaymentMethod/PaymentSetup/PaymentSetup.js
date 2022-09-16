import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react'
import Custombutton from '../../../Components/CustomButton/Custombutton'
const PaymentSetup = ({navigation}) => {
    return (
        <ScrollView style={styles.mainConst}>
            <View style={styles.imageConst}>
                <TouchableOpacity onPress={() => navigation.goBack()}><Image source={require('../PaymentSetup/assets/Back.png')} style={{ height: 32, width: 32 }} /></TouchableOpacity>
                <Text style={{ color: '#000', fontSize: 15, margin: 5, fontWeight: '400' }}>Setup Payment method</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
                <Image source={require('../PaymentSetup/assets/Payment.png')} style={{ height: 370, width: 370 }} />
            </View>
           <View>
            <Text style={styles.text}>
            Use your payment methods to make purchases on eatmates.<TouchableOpacity><Text style={{color:'#187498'}}>Learn more</Text></TouchableOpacity>
            </Text>
           </View>
            <View style={{marginVertical:50}}>
            <Custombutton style={{ fontWeight:100}} text="Add Payment methods" onPress={() => navigation.navigate('PaymentMode')}/>
            </View>
        </ScrollView>
    )
}

export default PaymentSetup

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
    text:{
        color:'#000',
        fontSize:18,
        fontWeight:'500'
    }
})