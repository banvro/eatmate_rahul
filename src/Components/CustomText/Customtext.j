import { View, Text, StyleSheet } from 'react-native'
import React from 'react'


export default  CustomText = ({text}) => {
  return (
    <View>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    text:{
        fontSize: 10,
        fontWeight:'600',
        color: '#97999B'
    }


})