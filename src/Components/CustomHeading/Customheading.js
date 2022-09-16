import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const CustomHeading = ({ text, type = 'PRIMARY' }) => {
  return (
    <View>
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: "#187498",
    fontSize: 30,
    fontWeight: '700',
  },
  text_TERTIARY: {
    color: '#97999B',
    fontSize: 12.5,
    fontWeight: '600',
  },
  text_SECONDARY: {
    color: '#97999B',
    fontSize: 10,
    fontWeight: '400',
    textAlign:'center'
  }
})
export default CustomHeading