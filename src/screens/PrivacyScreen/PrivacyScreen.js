import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const PrivacyScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.mainCont}>
      <View style={{ flexDirection: 'row', alignContent: 'center' }}>
        <View><TouchableOpacity onPress={() => navigation.goBack()}><Image source={require('../PrivacyScreen/assets/R.png')} style={{ height: 23, width: 23, paddingVertical: 15 }} /></TouchableOpacity></View>
        <View><Text style={styles.textCont}>  Privacy and sharing</Text></View>
      </View>
      <View style={styles.cardsConst}>
        <View>
          <Text style={styles.textCont}>Manage your data</Text>
          <Text style={styles.tryConst}>Download your personal data,request to </Text>
          <Text style={styles.tryConst}>deactivateor delete your account</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('ManageyourData')}>
            <Image source={require('../PrivacyScreen/assets/Back.png')} style={styles.imgeConst} />
            </TouchableOpacity>
        </View>
      </View>
      <View style={styles.borderConst}>
      </View>
      <View style={styles.cardsConst}>
        <View>
          <Text style={styles.textCont}>Third-party tools</Text>
          <Text style={styles.tryConst}>Choose how Airbnb shares your information</Text>
          <Text style={styles.tryConst}>with third parties</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('PartyTools')}>
            <Image source={require('../PrivacyScreen/assets/Back.png')} style={styles.imgeConst} />
            </TouchableOpacity>
        </View>
      </View>
      <View style={styles.borderConst}>
      </View>
      <View style={styles.cardsConst}>
        <View>
          <Text style={styles.textCont}>sharing</Text>
          <Text style={styles.tryConst}>Decide how your profile and activity are</Text>
          <Text style={styles.tryConst}>shown to others</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Sharing')}>
            <Image source={require('../PrivacyScreen/assets/Back.png')} style={styles.imgeConst} />
            </TouchableOpacity>
        </View>
      </View>
      <View style={styles.borderConst}>
      </View>

    </ScrollView>
  )
}

export default PrivacyScreen

const styles = StyleSheet.create({

  mainCont: {
    flex: 1,
    padding: 20,
    backgroundColor:'#fff',
    marginVertical:20
    
  },
  textCont: {
    fontSize: 20,
    color: '#000',
    fontWeight: '400',
  },
  cardsConst: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
   marginVertical:15,
  },
  imgeConst: {
    height: 30,
    width: 30,
  },
  borderConst: {
    borderBottomColor: "#000",
    borderBottomWidth: 1,  
  },
  tryConst:{
    fontSize:12
  }
})