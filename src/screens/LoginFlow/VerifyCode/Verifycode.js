import React, { Component, useState } from "react"
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, TouchableOpacity } from "react-native"
import Custombutton from "../../../Components/CustomButton/Custombutton"
import RnOtpTimer from "rn-otp-timer"
import { TextInput } from "react-native"
import axios from "axios"


const Verifycode = ({ route, navigation, props }) => {

    const { phoneno, message } = route.params;
    const [number, setNumber] = useState(phoneno);
    const [code, setCode] = useState("");
    const [numbId, setNumbId] = useState("");
    const [show, setShow] = useState(false)
    const [isValidOtp, setIsValidOtp] = useState(false)

    console.log("from number input", number)
    console.log(`code get ${code}`)
    console.log(`props ${props}`)
    const data = {
        number,
        code
    }
    console.log(typeof (code))
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
                    navigation.navigate("Setlanguage", {
                        number,
                        uniId,
                       value
                    })
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
        navigation.navigate('VerifyCode', {
            phoneno: number,

        });
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: "#fff" }}>

            <View style={styles.root}>
                <View style={{ backgroundColor: "#fff", marginTop: 25 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('../../assets/Left.png')}
                            style={{ height: 30, width: 30, borderWidth: 1, borderColor: "#808080", borderRadius: 50, }}
                        />
                    </TouchableOpacity>
                </View>
                
                <View style={{ marginTop: 25 }}>
                    <Text style={{ fontSize: 40, fontWeight: "bold", color: "#187498" }}>Verify Code </Text>
                    <Text style={{ color: "#97999B", marginLeft: 5 }}>We have sent an OTP At  {number}, </Text>
                    <Text style={{ color: "#97999B", marginLeft: 5 }}>Fill it here to Continue</Text>
                </View>
                <View style={{ flexDirection: "row", alignSelf: "center", margin: 10, justifyContent: "space-evenly", paddingVertical: 45 }}>
                    <TextInput
                        maxLength={4}
                        keyboardType='number-pad'
                        style={{
                            fontWeight: '600',
                            alignSelf: 'center',
                            padding: 10,
                            fontSize: 25,
                            height: 55,
                            width: "48%",
                            borderWidth: 1,
                            letterSpacing: 15,
                            borderBottomColor: "#E4E3E3",
                            margin: 10,
                            borderTopColor: "#fff",
                            borderRightColor: "#fff",
                            borderLeftColor: "#fff",
                        
                        }}
                        value={code}
                        onChangeText={(text) => setCode(text)}
                    />
                </View>
                <View style={styles.CODE}>
                    <Text style={{ color: '#999999' }}>
                        Didn't received a code?
                    </Text>
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

                <View style={{ paddingTop: 100, width: "100%" }}>
                    <Custombutton text="Continue" onPress={verCode} />
                </View>
            </View>
        </ScrollView>)
}
const styles = StyleSheet.create({
    root: {

        padding: 30,
        paddingHorizontal: 30,
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
        marginTop: 20
    },
    Code: {
        color: '#545F74',
        fontSize: 15,
        marginLeft: 5
    },
})
export default Verifycode