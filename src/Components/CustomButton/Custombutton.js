import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
// import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'

const Custombutton = ({text, onPress, type= "PRIMARY"}) => {
  return (
    <Pressable style={[styles.container, styles[`container_${type}`]]} onPress={onPress}>
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container:{
        borderRadius:12,
        padding: 15,
        marginVertical: 5,
    },
    container_PRIMARY:{
      backgroundColor: '#187498',
      elevation:1,
      alignItems:'center',
    },
    container_TERTIARY:{
      flexDirection:"row",
      justifyContent:'flex-end'
    },
    text:{
        fontSize:16,
        fontWeight:'600',
        color:'#fff'
    },
    text_TERTIARY:{
      color:'#7F8184'
    }
})
export default Custombutton