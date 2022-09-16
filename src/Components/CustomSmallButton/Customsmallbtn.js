import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'

const Customsmallbtn = ({onPress, text, type='PRIMARY'}) => {
  return (
    <TouchableOpacity style={[styles.container, styles[`container_${type}`]]} onPress={onPress}>
    <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
  </TouchableOpacity>
)
}

const styles = StyleSheet.create({
  container:{
    minWidth:100,
    padding: 12,
    paddingHorizontal: 30,
    borderRadius: 6,
  },
  container_PRIMARY:{
    backgroundColor: '#187498',
    elevation:5,
    color: "#fff"
  },
  container_TERTIARY:{
    color: "#fff",
  },
  container_SECONDARY:{
    color: "#fff",
    backgroundColor: '#808080',
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
export default Customsmallbtn