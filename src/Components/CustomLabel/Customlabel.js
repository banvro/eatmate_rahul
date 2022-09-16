import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Customlabel = ({text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        textAlign: 'left'
    },
    text:{
        color: '#000000',
        fontSize: 14,
        fontWeight:'600'
    }
})

export default Customlabel