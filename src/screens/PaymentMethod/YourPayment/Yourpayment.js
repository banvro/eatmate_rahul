import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Yourpayment = ({navigation}) => {
  return (
    <ScrollView style={styles.mainConst}>
      <View style={styles.imageConst}>
        <TouchableOpacity onPress={() => navigation.goBack()}><Image source={require('../YourPayment/assets/Back.png')} style={{ height: 32, width: 32 }} /></TouchableOpacity>
        <Text style={{ color: '#000', fontSize: 20, fontWeight: '400', margin: 1, }}>Your payments</Text>
      </View>
      <View style={{ paddingVertical: 20 }}>
        <Text style={styles.textCont}>Completed</Text>
      </View>
      <View>
        <Text style={{ fontSize: 23 }}>2019</Text>
      </View>
      <View style={{ paddingVertical: 20 }}>
        <View style={styles.divConst}>
          <View>
            <Image source={require('../YourPayment/assets/Rectangle2851.png')} style={{ height: 100, width: 100, borderTopLeftRadius: 15, borderBottomLeftRadius: 15, }} />
          </View>
          <View style={styles.elveConst}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: "#000", fontSize: 20 }}>Panner lababdar</Text>
              <Text style={{ color: '#454545', marginVertical: 5, marginHorizontal: 10, color: '#454545' }}>1 Qty</Text>
            </View>
            <Text style={{ color: '#454545' }}>by Visa ******5013</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 18, paddingTop: 18, color: '#454545' }}>Nov-15</Text>
              <Text style={{ fontSize: 19, paddingTop: 18, color: '#DB4437', marginHorizontal: 10 }}>-$47.50</Text>
            </View>
          </View>
        </View>
        <View style={{ paddingVertical: 15 }}>
          <View style={styles.divConst}>
            <View >
              <Image source={require('../YourPayment/assets/Rectangle.png')} style={{ height: 100, width: 100, borderTopLeftRadius: 15, borderBottomLeftRadius: 15, }} />
            </View>
            <View style={styles.elveConst}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                <Text style={{ color: "#000", fontSize: 20 }}>Butter Chicken</Text>
                <Text style={{ color: '#454545', marginVertical: 5, marginHorizontal: 10 }}>2 Qty</Text>
              </View>
              <Text style={{ color: '#454545' }}>by Visa ******5013</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 18, paddingTop: 18, color: '#454545' }}>Nov-2</Text>
                <Text style={{ fontSize: 19, paddingTop: 18, color: '#4C953A', marginHorizontal: 10 }}>$109.58</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={{ paddingVertical: 15 }}>
        <Text style={styles.textCont}>Pending</Text>
      </View>
      <View>
        <Text style={{ fontSize: 23 }}>2020</Text>
      </View>
      <View style={{ paddingVertical: 15 }}>
        <View style={styles.divConst}>
          <View >
            <Image source={require('../YourPayment/assets/React.png')} style={{ height: 100, width: 100, elevation: 5, borderTopLeftRadius: 15, borderBottomLeftRadius: 15, }} />
          </View>
          <View style={styles.elveConst}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
              <Text style={{ color: "#000", fontSize: 20 }}>Kadhai Chicken</Text>
              <Text style={{ color: '#454545', marginVertical: 5, marginHorizontal: 10 }}>2 Qty</Text>
            </View>
            <Text style={{ color: '#454545' }}>by Visa ******5013</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 18, paddingTop: 18, color: '#454545' }}>May-3</Text>
              <Text style={{ fontSize: 19, paddingTop: 18, color: '#4C953A', marginHorizontal: 10 }}>$140</Text>
            </View>
          </View>
        </View>
      </View>



    </ScrollView>
  )
}

export default Yourpayment

const styles = StyleSheet.create({
  mainConst: {
    flex: 1,
    padding: 20,
    backgroundColor:'#fff'
  },
  imageConst: {
    flexDirection: 'row',
  },
  textCont: {
    fontSize: 25,
    color: '#000',
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
  divConst: {
    flexDirection: 'row',
    shadowRadius: 3,
    shadowColor: '#52006A',
  },
  elveConst: {
    padding: 2,
    backgroundColor: "white",
    width: "70%",
    elevation: 8,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    width:220



  },
})