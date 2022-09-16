import { View, Text, Pressable, StyleSheet, Image } from 'react-native'
import React from 'react'

const Customupload = ({onPress, type, source}) => {
  return (
    <View style={[styles.cont, styles[`cont_${type}`]]}>
      <Image source={source} style={styles.imgCont} />
    <Pressable onPress={onPress}>
    <Text style={styles.addbtn}>+</Text>
    </Pressable>
</View>
  )
}
const styles = StyleSheet.create({
   cont:{
        backgroundColor:'#f6f6f6',
        borderRadius:10,
        elevation:0.5,
        marginVertical:5,
        justifyContent:'center',
        alignItems:'center',
        height:100
    },
    cont_PRIMARY:{
        height:200
    },
    addbtn:{
       fontWeight:'700',
       color:'#828282',
       fontSize:30
    },
    imgCont:{

    }
})

export default Customupload