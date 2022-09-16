import { StyleSheet, Text, View,Image ,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'

const CustomNotificationList = ({onPress,text,source, type= "PRIMARY"}) => {
  return (
<View style={[styles.cardCont, styles[`cardCont_${type}`]]}>
    {/* <Image source={source}  style={styles.imgcont}/> */}
   <TouchableOpacity onPress={onPress}><Text style={styles.textCont}>{text}</Text></TouchableOpacity>
</View>
  )
}

export default CustomNotificationList

const styles = StyleSheet.create({
    cardCont:{
        //backgroundColor:'#f6f6f6',
        flexDirection:'row',
         alignItems:'center',
          // padding:10,
         //  borderRadius:10,
    },
    cardCont_TERTIARY:{
       borderBottomColor:"#B3B3B3",
       borderBottomWidth:1,
       paddingVertical:-15,
    },
 
    imgcont:{
        width:33,
        height:33,
        //marginHorizontal:12,
    },
    textCont:{
       fontWeight:'400', 
       fontSize:16.5,
       color:'#000',
       letterSpacing:0.05,
    },
})