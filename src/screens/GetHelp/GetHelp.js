import { ScrollView , StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'

const GetHelp = ({navigation}) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  return (
    <View style={styles.root}>
      
    <ScrollView styles={styles.mainConst}>

      <View style={styles.imageConst}>
        <TouchableOpacity onPress={() => navigation.goBack()}><Image source={require('../GetHelp/assets/Back.png')} style={{ height: 32, width: 32 }} /></TouchableOpacity>
        <Text style={{ color: '#000', fontSize: 18, fontWeight: '400', margin: 3 }}>Recieve hosting requests</Text>
      </View>
      <View style={styles.headConst}>
        <Image source={require('../GetHelp/assets/Headset.png')} style={{ height: 100, width: 100, }} />
      </View>
      <View>
        <Text style={{ color: '#000', fontSize: 25, fontWeight: '400', textAlign: 'center' }}>
          How can we help you?
        </Text>
      </View>
      <View style={styles.ticketConst}>
        <Text style={{ color: '#000', fontSize: 18, fontWeight: '400', margin: 3 }}>Raise a ticket</Text>
        <TouchableOpacity><Image source={require('../GetHelp/assets/Right.png')} style={{ height: 32, width: 32 }} /></TouchableOpacity>
      </View>
      <View style={styles.roundConst}>

        <View style={{
          backgroundColor: 'rgba(24, 116, 152, 0.32)', borderRadius: 90, height: 90, width: 90,
          justifyContent: 'center', alignItems: 'center'
        }} >
          <Image source={require('../GetHelp/assets/Mail.png')} style={{ height: 50, width: 50, }} /></View>
          <View>
        <Text style={{ color: '#797979', fontSize: 16, fontWeight: '400', textAlign: 'center' }}>
          Send us an email:
        </Text>
        <Text style={{ color: '#000', fontSize: 16, fontWeight: '600', textAlign: 'center' }}>
          abc@gmauil.com
        </Text>
      </View>
      </View>

   

    </ScrollView>
    
    </View>
  )
}

export default GetHelp

const styles = StyleSheet.create({
  root:{
backgroundColor:'#fff',
flex:1,
padding:10
  },
  mainConst:{
    flex:1,
    backgroundColor:'#fff',

  },
  imageConst: {
    flexDirection: 'row',
    padding: 20,

  },
  headConst: {
    marginVertical: 35,
    margin: 150
  },
  ticketConst: {
    padding: 15,
    backgroundColor: '#E5E5E5',
    borderRadius: 15,
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 20,
  },
  roundConst: {
    alignItems: 'center',
    marginVertical:50

  }

})