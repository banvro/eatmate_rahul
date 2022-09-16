import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react'

const ShowProfile = ({navigation}) => {
    return (
        <ScrollView style={styles.mainConst}>
            <View style={styles.imageConst}>
                <TouchableOpacity onPress={() => navigation.goBack()}><Image source={require('../ShowProfile/assets/Back.png')} style={{ height: 32, width: 32 }} /></TouchableOpacity>
                <Text style={{ color: '#000', fontSize: 18, fontWeight: '500', margin: 2, }}>Edit personal info</Text>
            </View>
            <View style={{ marginVertical: 14, }}>
                <View style={styles.divConst}>
                    <Text style={styles.finput}>First Name</Text>
                    <Text style={styles.input}>Kalyan</Text>
                </View>
                <View style={styles.divConst}>
                    <Text style={styles.finput}>Last Name</Text>
                    <Text style={styles.input}>Singh</Text>
                </View>
                <View style={styles.divConst}>
                    <Text style={styles.finput}>Gender</Text>
                    <Text style={styles.input}>Male</Text>
                </View>
                <View style={styles.divConst}>
                    <Text style={styles.finput}>Date Of birth</Text>
                    <Text style={styles.input}>16 Dec 1983</Text>
                </View>                
            </View>
            <View style={styles.brConst}>
            </View>
            <View style={{paddingVertical:14,}}>
            <View style={styles.lastConst}>
                <Text style={styles.rightConst}>Email</Text>
                <TouchableOpacity><Text style={styles.txtConst}>Edit</Text></TouchableOpacity>
            </View>
            <View>
                <Text>
                Kalyansus@gmail.com
                </Text>
                </View>
                <View style={styles.lastConst}>
                <Text style={styles.rightConst}>Phone numbers</Text>
                <TouchableOpacity><Text style={styles.txtConst}>Edit</Text></TouchableOpacity>
            </View>
            <View>
                <Text>
               +919876543210
                </Text>
                </View>
                <View style={styles.lastConst}>
                <Text style={styles.rightConst}>Government ID</Text>
                <TouchableOpacity><Text style={styles.txtConst}>Edit</Text></TouchableOpacity>
            </View>
            <View>
                <Text>
               Not Provided
                </Text>
                </View>
                <View style={styles.lastConst}>
                <Text style={styles.rightConst}>Emergency Contact</Text>
                <TouchableOpacity><Text style={styles.txtConst}>Edit</Text></TouchableOpacity>
            </View>
            <View>
                <Text>
                Not Provided
                </Text>
                </View>
                </View>
        </ScrollView>
    )
}



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
    divConst: {
        backgroundColor: '#F6F6F6',
        borderRadius: 15,
        padding: 10,
        marginVertical:5,

    },
    finput: {
        fontSize: 12,
    },
    input: {
       fontSize:18,
       fontWeight:'500',
        color: '#000',
        
    },
    brConst:{
        borderBottomColor:'#969696',
        borderBottomWidth: 1,
    },
    lastConst:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:10,
        
    },
    rightConst:{
        color: '#000', 
        fontSize: 16, 
        fontWeight: '500',
         margin: 2,
    },
    txtConst:{
        color: '#000', 
        fontSize: 16, 
        fontWeight: '500', 
        margin: 2,
        textDecorationLine: 'underline',
        
    }
})



export default ShowProfile