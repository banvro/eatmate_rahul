import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native'
import React, {useState} from 'react'


const CustomProfileHost = ({onPress,text,source, type= "PRIMARY"}) => {
  return (
    <View style={[styles.cardCont, styles[`cardCont_${type}`]]}>
            <Image source={source}  style={styles.imgcont}/>
           <TouchableOpacity onPress={onPress}><Text style={styles.textCont}>{text}</Text></TouchableOpacity>
    </View>

  )
}
 const styles=StyleSheet.create({
    cardCont:{
        flexDirection:'row',
         alignItems:'center',
          padding:10,
         //  borderRadius:10,
    },
    cardCont_TERTIARY:{
      borderBottomColor:"#B3B3B3",
      borderBottomWidth:1,
    },
 
    imgcont:{
        width:33,
        height:33,
        marginHorizontal:12,
    },
    textCont:{
       fontWeight:'500', 
       fontSize:17,
       color:'#000',
       letterSpacing:0.05,
    },
 })

export default CustomProfileHost