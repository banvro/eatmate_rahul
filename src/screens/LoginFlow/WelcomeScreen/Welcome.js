import React, { useState } from "react"
import { View, Text, Image, StyleSheet, useWindowDimensions, SafeAreaView, TouchableOpacity } from "react-native"
import Custombutton from "../../../Components/CustomButton/Custombutton"
import { Dimensions } from "react-native"
import CustomHeading from "../../../Components/CustomHeading"

const Welcome = ({ route, navigation,props}) => {

    const { first, last, selfie } = route.params;
    //    let imageType=selfie.contentType;

    const selfiechk = selfie == undefined ? null : `data:image/jpeg;base64,${selfie}`;
    console.log(selfie)

    // function imagevalid() {

    //     let imageData = selfie.data.data;
    //     arrayBufferToBase64 = buffer => {

    //         let binary = '';
    //         let bytes = new Uint8Array(buffer);
    //         let len = bytes.byteLength;
    //         for (let i = 0; i < len; i++) {
    //             binary += String.fromCharCode(bytes[i]);
    //         }


    //         return binary;

    //     };
    //     const base64image = arrayBufferToBase64(imageData);

    //     return base64image
    // }

    //  const base64image = "data:image/png;base64,"+arrayBufferToBase64(imageData);

    //  console.log("base64",base64image)
    const onConfirmPressed = () => {

        navigation.navigate("LoginScreen", {
            // number
        });
    }

    return (
        <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
            <View style={styles.root}>
                <View style={{ paddingVertical: 25, backgroundColor: "#fff", justifyContent: 'center', alignItems: 'center' }}>

                    <Image source={require('../../assets/eatmates.png')} style={{ height: 150, width: 150 }} />

                    <CustomHeading text={'Welcome back user,Please Continue with'} type='TERTIARY' />
                    <CustomHeading text={'one of the options'} type='TERTIARY' />
                </View>
                <TouchableOpacity style={styles.centerCardCont} onPress={() => navigation.navigate('PrabhNavigation')}>
                    <View style={{ alignItems: 'center' }}>
                        {selfie == undefined ?

                            <Image source={require('../../assets/Ellipse.png')} style={{
                                height: 80, width: 80, borderRadius: 50, marginBottom: 10
                            }} sizeMode='contain' /> :


                            <Image source={{
                                uri:
                                    selfiechk
                                // +arrayBufferToBase64(imageData), //data.data in your case
                            }} style={{
                                height: 80, width: 80, borderRadius: 50, marginBottom: 10
                            }} sizeMode='contain' />
                        }
                        {/* <Image   source={{
                  uri:
                 selfiechk
                    // +arrayBufferToBase64(imageData), //data.data in your case
                }} style={{ height: 80, width: 80, borderRadius:50, marginBottom:10
                }} sizeMode='contain'/> */}

                        <Text>Continue as</Text>
                        <Text style={{ fontSize: 21, fontWeight: '400' }}>{first}{last}</Text>
                    </View>
                </TouchableOpacity>
                <View style={{ paddingTop: 30, flex: 0.6 }}>
                    <Custombutton text="Use another account" onPress={onConfirmPressed} />
                </View>
                <View style={{ padding: 5, flex: 2, justifyContent: 'flex-end' }}>
                    <Text style={styles.endCont} >By tapping Use another account,I agree to Eatmates Terms of Service,Payments Terms of Services,and Nondiscriminatior Policy.</Text>
                    <Text style={styles.endCont}>I also agree to the processing and use of my data according to Eatmates Privacy Policy. </Text>
                </View>
            </View>
        </SafeAreaView>)
}
const styles = StyleSheet.create({
    root: {
        padding: 25,
        flex: 1

    },
    title: {
        color: "#051C60",
        padding: 10,
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 50,
        marginTop: 50,
        backgroundColor: "#fff"
    },
    link: {
        color: "#FDB075",
    },
    centerCardCont: {
        flex: 1.7,
        height: 190,
        backgroundColor: '#f7f7f7',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        elevation: 0.5
    },
    endCont: {
        color: '#97999B',
        fontSize: 10,
        fontWeight: '400',
    }
})
export default Welcome







