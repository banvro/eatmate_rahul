import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, TextInput} from 'react-native'
import React, { useState } from 'react'

const GuestWishlist = ({navigation}) => {
  return (
    <ScrollView style={styles.mainConst}>
    <View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('../assets/Back.png')} style={styles.image} />
        </TouchableOpacity>
        <Text style={styles.txtConst}>Make your food Wishlist</Text>
    </View>
    <View>
        <Image source={require('../assets/image.png')} style={styles.imageConst} />
    </View>
    <View>
        <Text style={styles.text1}>
           Let your future guests know what you can cook best. List out any 3 dishes that can create guilty pleasure
        </Text>
    </View>
<View>
    <Text style={styles.listConst}>
      Wishlist 1  
    </Text>
    <View style={styles.borConst}>
    <TextInput
    style={styles.input}
    placeholder="E.g. Butter paneer"
    placeholderTextColor="#969696"
  /> 
</View>
</View>
<View>
    <Text style={styles.listConst}>
      Wishlist 2 
    </Text>
    <View style={styles.borConst}>
    <TextInput
    style={styles.input}
    placeholder="E.g. Chicken curry"
    placeholderTextColor="#969696"
  /> 
</View>
</View>
<View>
    <Text style={styles.listConst}>
      Wishlist 3  
    </Text>
    <View style={styles.borConst}>
    <TextInput
    style={styles.input}
    placeholder="E.g. Mango lassi"
    placeholderTextColor="#969696"
  /> 
</View>
</View>



<View style={styles.finalConst}>
<TouchableOpacity>
    <Text style={{ fontSize: 15, fontWeight: '400', marginTop: 8 }}>
        Back
    </Text>
</TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate('GuestExpertise')}>
    <View style={styles.bnConst}>
        <Text style={{ color: '#fff', fontSize: 15 }}>
            Next
        </Text>
    </View>
</TouchableOpacity>
</View>

</ScrollView>

  )
}

export default GuestWishlist

const styles = StyleSheet.create({
    mainConst: {
        flex: 1,
        padding: 20,
        backgroundColor:'#FFF'
    },
    txtConst: {
        color: '#187498',
        fontSize: 40,
        fontWeight: '700',
        margin:10
    },
    image: {
        height: 35,
        width: 35
    },
    imageConst: {
        width: 350,
        height: 350,
        borderRadius:20
    },
    text1:{
        textAlign:'center',
        color:'#969696',
        fontSize:14,
        fontWeight:'600',
        marginVertical:15
        
    },
    finalConst:{
        padding:10,
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:20,
        marginVertical:40
      },
      bnConst:{
        backgroundColor:'#187498',
        width:80,
        height:40,
        borderRadius:10,
        positionposition: 'absolute', 
        justifyContent: 'center', 
        alignItems: 'center'
        
      },
      borConst:{
        backgroundColor:'#F6F6F6',
        borderRadius:15,
        marginVertical:5,
        padding:10
      },
      listConst:{
        color:'#000',
        fontSize:20,
        fontWeight:'600'
      }
})