import { ScrollView, StyleSheet, Text, View,TouchableOpacity, Image, Pressable } from 'react-native'
import React, { useState } from 'react'


const TranstionHistory = ({navigation}) => {

    const [show, setShow] = useState(true)
  return (
    <ScrollView style={styles.mainConst}>
    <View style={styles.imageConst}>
        <View style={{flexDirection:'row'}}>
            <TouchableOpacity onPress={() => navigation.goBack()}><Image source={require('../PayoutPage/assets/Back.png')} style={{ height: 32, width: 32 }} /></TouchableOpacity>
            <Text style={{ color: '#000', fontSize: 18, fontWeight: '400', margin: 2, }}>Transaction History</Text>
        </View>
    </View>
    <Pressable onPress={()=> setShow(!show)}>
    <View style={{marginVertical:50}}>
        {show ?(
        <View style={{flexDirection:'row', justifyContent:'space-around'}}>
        <View style={{backgroundColor:'#187498',borderRadius:25}}><Text style={{padding:10, paddingHorizontal:30,color:'#Fff', fontWeight:'600' }}>Completed</Text></View>
        <View><Text style={{padding:10, paddingHorizontal:30, fontWeight:'600',color:'#000'}}>Inprocess</Text></View>
        </View>
        ):(
            <View style={{flexDirection:'row', justifyContent:'space-around'}}>
            <View><Text style={{padding:10, paddingHorizontal:30, fontWeight:'600', color:'#000' }}>Completed</Text></View>
        <View style={{backgroundColor:'#187498',borderRadius:25}}><Text style={{padding:10, paddingHorizontal:30,color:'#Fff', fontWeight:'600' }}>Inprocess</Text></View>
        </View>
        )}
    </View>
    </Pressable>

    <View style={styles.txtConst}>
        <Text style={{textAlign:'center', color:'#000', fontSize:18,fontWeight:'400'}}>
            No Completed transactions
        </Text>
    </View>
</ScrollView>
)
}

export default TranstionHistory
    const styles = StyleSheet.create({
        mainConst: {
            flex: 1,
            padding: 20,
            backgroundColor:'#fff',
            marginVertical:10
    
        },
        imageConst: {
            flexDirection: 'row',
            justifyContent:'space-between'
        },
        txtConst:{
            marginVertical:250
         }
    
})