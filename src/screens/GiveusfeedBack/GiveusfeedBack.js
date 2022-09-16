import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput, placeholder, Button } from 'react-native'
import React, { useState } from 'react'


const GiveusfeedBack = ({navigation}) => {
    return (
        <ScrollView style={styles.mainConst}>
            <View style={styles.imageConst}>
                <TouchableOpacity onPress={() => navigation.goBack()}><Image source={require('../GiveusfeedBack/assets/Back.png')} style={{ height: 32, width: 32 }} /></TouchableOpacity>
                <Text style={{ color: '#000', fontSize: 18, fontWeight: '400', margin: 3 }}>Give us Feed back</Text>
            </View>

            <View >
                <Text style={styles.headConst}>
                    Share how you feel about us
                </Text>
            </View>
            <View style={styles.borConst}>
                <TextInput
                    style={styles.input}
                    placeholder="Title"
                    placeholderTextColor="#969696"
                />
            </View>

            <View style={styles.borsConst}>
                <TextInput
                    style={styles.inputs}
                    placeholder="Feedback"
                    placeholderTextColor="#969696"

                />
            </View>
            <View style={styles.fixToText}>
            <TouchableOpacity>
               <Text style={{color:'#fff'}}>
                Submit
                </Text> 
            </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default GiveusfeedBack

const styles = StyleSheet.create({
    mainConst: {
        flex: 1,
        padding: 20,
        backgroundColor:'#fff'


    },
    imageConst: {
        flexDirection: 'row',
        marginVertical: 30,
    },
    headConst: {
        fontSize: 28,
        fontWeight: '400',
    },
    borConst: {
        backgroundColor: '#ECECEC',
        borderRadius: 15,
        marginVertical: 20,

    },
    input: {
        fontSize: 14,
        padding: 10,
        marginLeft: 5,

    },
    inputs: {
        fontSize: 14,
        padding: 10,
        marginLeft: 5,
    },
    borsConst: {
        backgroundColor: '#ECECEC',
        borderRadius: 15,
        marginVertical: 10,
        height: 250,

    },
    fixToText: {
    justifyContent: 'center',
     backgroundColor:'#187498',
     padding:10,
     borderRadius:10,
    alignSelf:'center',
    },
})