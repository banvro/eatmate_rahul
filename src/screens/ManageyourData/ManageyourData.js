import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const ManageyourData = ({ navigation }) => {
    return (
        <View style={styles.mainCont}>
            <View style={{ flexDirection: 'row', alignContent: 'center' }}>
                <View><TouchableOpacity onPress={() => navigation.goBack()}><Image source={require('../PrivacyScreen/assets/R.png')} style={{ height: 23, width: 23, paddingVertical: 15 }} /></TouchableOpacity></View>
                <View><Text style={styles.textCont1}>Manage your data</Text></View>
            </View>
            
            <View style={{marginVertical:30}}>
            <View style={styles.cardsConst}>
                    <Text style={styles.textCont}>Download your personal data</Text>
                    <TouchableOpacity><Image source={require('../PrivacyScreen/assets/Back.png')} style={styles.imgeConst} /></TouchableOpacity> 
            </View>
            <Text style={styles.tryConst}>
            Download your personal data, request to deactivate or delete your account.
            </Text>
            
            <View style={styles.borderConst}>
            </View>
            <View>
            <View style={styles.cardsConst}>
                    <Text style={styles.textCont}>Deactivate your account</Text>
                    <TouchableOpacity><Image source={require('../PrivacyScreen/assets/Back.png')} style={styles.imgeConst} /></TouchableOpacity> 
            </View>
            <Text style={styles.tryConst}>
            Request the temporary closure of your account. You can no longer log into your account while its deactivated
            </Text>
            </View>
            <View style={styles.borderConst}>
            </View>
            <View>
            <View style={styles.cardsConst}>
                    <Text style={styles.textCont}>How to delete your account</Text>
                    <TouchableOpacity><Image source={require('../PrivacyScreen/assets/Back.png')} style={styles.imgeConst} /></TouchableOpacity> 
            </View>
            <Text style={styles.tryConst}>
            Request the permanent closure of your account. With this option you can no longer log in and your personal data will be deleted in accordance with applicable law
            </Text>
            </View>
            <View style={styles.borderConst}>
            </View>
            </View>
            <View style={styles.borConst}>
            <View style={styles.cardsConst}>
            <Image source={require('../ManageyourData/assets/Warning.png')} style={styles.imgesConst} />
            <View>
            <Text style={styles.textsCont}>We take data protction seriously</Text>
            <Text style={styles.trysConst}>
            Eatmates is commited to protecting your data. Further information on this topic can  be found in our privacy policy.
            </Text>
            </View>
            </View></View>

        </View>
    )
}

export default ManageyourData

const styles = StyleSheet.create({

    mainCont: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
        marginVertical:13

    },
    textCont1: {
        fontSize: 16,
        color: '#000',
        fontWeight: '600',
        margin:2,
        marginHorizontal:10
    },
    textCont: {
        fontSize: 15,
        color: '#000',
        fontWeight: '500',
    },
    cardsConst: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding:10
    },
    imgeConst: {
        height: 30,
        width: 30,
    },
    borderConst: {
        borderBottomColor: "#000",
        borderBottomWidth: 1,
        width: 300,
        marginHorizontal: 5,
        marginVertical:10
    },
    tryConst: {
        fontSize: 15,
        marginHorizontal:10,
        color:'#969696',
        fontWeight:'400'
    },
    textsCont:{
        fontSize:16,
        color:'#000',
        marginHorizontal:20,
        fontWeight:'500'
    },
    trysConst:{
        fontSize:13,
        padding:20,
        color:'#000'
    },
    imgesConst:{
        height:40,
        width:40
    },
    borConst:{
        backgroundColor:'#F6F6F6',
        borderRadius:15,
        marginVertical:120
    }


})