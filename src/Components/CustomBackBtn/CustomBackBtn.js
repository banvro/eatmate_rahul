import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomBackBtn = ({navigation}) => {
  return (
    <View style={styles.mainConst}>
     <TouchableOpacity onPress={() => navigation.goBack()} ><Image source={require('../CustomBackBtn/assets/R.png')} style={styles.imgeConst}/>
     </TouchableOpacity>
    </View>
  )
}

export default CustomBackBtn

const styles = StyleSheet.create({

    mainConst:{
        // flex:1,
        // position:'absolute', 
    },
    imgeConst:{
        marginTop:10,
        height:22,
        width:22,
    
    },
})