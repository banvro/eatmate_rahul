import React, { Component, useState } from "react"
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, TouchableOpacity } from "react-native"
import Custombutton from "../../../Components/CustomButton/Custombutton"
import RnOtpTimer from "rn-otp-timer"
import { TextInput } from "react-native"
import axios from "axios"

const AddOtpscreen = ({ route, navigation, props }) => {



    // const { phoneno, message } = route.params;
    // const [number, setNumber] = useState(phoneno);
    const [code, setCode] = useState("");
    const [numbId, setNumbId] = useState("");
    const [show, setShow] = useState(false)
    const [isValidOtp, setIsValidOtp] = useState(false)

    // console.log("from number input", number)
    // console.log(`code get ${code}`)
    // console.log(`props ${props}`)
    // const data = {
    //     number,
    //     code
    // }
    // console.log(typeof (code))
    const verCode = () => {

        const url = "https://eatmates.herokuapp.com/verify"
        axios.post(url, data)
            .then(function (response) {
                console.log("ethe rakh0", response);
                console.log("ethe rakh0", response.status);
                setNumbId(response);
                const value = response.data.value;

                if (response.status == 201) {
                    setNumbId(response);

                    console.log("this is numb id", numbId)
                    const uniId = response.data.data._id
                    console.log("id", response.data.data._id)
                    // navigation.navigate("Setlanguage", {
                    //     number,
                    //     uniId,
                    //    value
                    // })
                }
                else if (response.status == 200) {
                    console.log(response.data.userdetail);
                    const last = response.data.userdetail.lastname;
                    const first = response.data.userdetail.firstname;
                    const selfie = response.data.userdetail.selfie;
                    navigation.navigate("WelcomeScreen", {
                        last, first, selfie
                    })
                }
            })
            .catch(function (error) {
                console.log(error)
                alert("Enter Valid OTP");
            });
    }
    const resendCode = () => {
        const url = "http://eatmates.herokuapp.com/login"
        axios.post(url, data)
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
        // navigation.navigate('VerifyCode', {
        //     phoneno: number,

        // });
    }

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: "#fff" }}>
           
           <View style={{marginLeft:10}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../../../assets/Back.png')} style={{ height: 32, width: 32 }} />
                </TouchableOpacity>
            </View>

            <View style={styles.root}>
                
                <View style={{ marginTop: 15, }}>
                    <Text style={{ fontSize: 30, fontWeight: "400", color: "#187498" }}>Add an OTP  </Text>
                    <Text style={{ color: "#97999B", marginLeft: 5 ,marginTop:30}}>Receive Otp from Guest and Add here to Complete the Event</Text>
                    
                </View>
                <View style={{ flexDirection: "row", alignSelf: "center", margin: 10, paddingVertical: 10 }}>
                    <TextInput
                        maxLength={6}
                        keyboardType='number-pad'
                        placeholder="Enter Otp"
                        style={{
                            fontWeight: '600',
                            alignSelf: 'center',
                            padding: 10,
                            fontSize: 14,
                            height: 60,
                            width: "100%",
                            borderWidth: 1,
                            borderBottomColor: "#E4E3E3",
                            borderTopColor: "#E4E3E3",
                            borderRightColor: "#E4E3E3",
                            borderLeftColor: "#E4E3E3",
                            borderRadius:18,
                            backgroundColor:"#F7F7F7"
                        
                        }}
                        value={code}
                        onChangeText={(text) => setCode(text)}
                    />
                </View>
                <View style={styles.CODE}>
                    <Text style={{ color: '#999999' }}>
                        Didn't received a code?
                    </Text>
                    <View>
                    <TouchableOpacity>
                        <Text style={styles.Code}>
                            
                            <RnOtpTimer
                            minutes={0}
                            seconds={30}
                            resendButtonStyle={styles.button}
                            resendButtonTextStyle={styles.buttonText}
                            resendButtonAction={resendCode}
                        /></Text>
                    </TouchableOpacity>
                    </View>

                </View>
                 
                 <View style={styles.contbtn}>
                <View style={{ width: "75%", }}>
                    <Custombutton text="Continue" onPress={verCode}  />
                </View>
                </View>
            </View>
        </ScrollView>)
}
const styles = StyleSheet.create({
    root: {

        padding: 30,
        paddingHorizontal: 20,
        flex: 1,
    },
    timConst: {
        alignSelf: 'flex-start',
        marginLeft: 50,

    },
    codeConst: {
        flexDirection: 'row',
        marginLeft: 60,
    },
    CODE: {
        flexDirection: 'row',
        marginLeft: 45,
        // marginTop: 10
    },
    Code: {
        color: '#545F74',
        fontSize: 15,
        marginLeft: 5,
    },
    contbtn:{
        alignItems:"center"
    },
    
})

export default AddOtpscreen