import React, { Component, useState } from "react"
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, TouchableOpacity } from "react-native"
import Custombutton from "../../../Components/CustomButton/Custombutton";
import { TextInput } from "react-native"
import axios from "axios"

const Otpscreen = ({ route, navigation, props }) => {

    const [code, setCode] = useState("");
    

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: "#fff" }}>
            <View style={styles.root}>
                
                <View>
                <View>
                    <Text style={styles.text1}>One time passwords </Text>
                    <Text style={styles.text2}>Share the OTP with host after completion of  Event</Text>
                    
                </View>

                <View>
                <View style={styles.box}>

                  <View>
                  <Text style={styles.text3} value={code} >460562</Text>
                  </View>

                  <View style={styles.hostBtn}>

                  <View style={styles.leftBtn}>
                  <Text style={{color:"#fff", fontSize:15}}>Kalyan</Text>
                  </View>

                  <View style={styles.rightBtn}>
                  <Text style={{color:"#fff", fontSize:15}}>9:30 PM</Text>
                  </View>

                  </View>

                </View>

                {/* second OTP  */}

                <View style={styles.box}>
                  
                  <View>
                  <Text style={styles.text3} value={code} >460562</Text>
                  </View>

                  <View style={styles.hostBtn}>

                  <View style={styles.leftBtn}>
                  <Text style={{color:"#fff", fontSize:15}}>Kuldeep</Text>
                  </View>

                  <View style={styles.rightBtn}>
                  <Text style={{color:"#fff", fontSize:15}}>9:30 PM</Text>
                  </View>

                  </View>

                </View>

                </View>
                
                </View>
            </View>
        </ScrollView>
  )}


const styles = StyleSheet.create({
    root: {

        padding: 30,
        paddingHorizontal: 15,
        flex: 1,
    },
    text1: {
      fontSize: 30, 
      fontWeight: "400",
       color: "#187498" ,
       marginHorizontal:4,
    },
    text2: {
      color: "#97999B",
       marginLeft: 5 ,
       marginTop:20,
       fontSize:14,
    },
    box:{
     width:"100%",
     height:101,
     backgroundColor:"#F7F7F7",
     borderRadius:24,
     marginTop:20,
     flexDirection:"row",

    },
    text3:{
      fontWeight: '400',
      padding: 20,
      fontSize: 40,
      
    },
    hostBtn:{
      flexDirection:"row",
      alignItems:"center",
      marginTop:50
    },
    leftBtn:{
      height:22,
      width:75,
      borderBottomLeftRadius:24,
      borderTopLeftRadius:24,
      backgroundColor:"#187498",
      alignItems:"center",
      justifyContent:"center",
  
    },
    rightBtn:{
      height:22,
      width:75,
      borderBottomRightRadius:24,
      borderTopRightRadius:24,
      backgroundColor:"#187498",
      alignItems:"center",
      justifyContent:"center",
      marginLeft:3
  
    },
    
})

export default Otpscreen