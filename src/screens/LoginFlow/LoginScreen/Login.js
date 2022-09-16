
import React, { useEffect, useState } from "react"
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, TouchableOpacity, Alert } from "react-native"
import Custombutton from '../../../Components/CustomButton/Custombutton'
import PhoneInput from "react-native-phone-number-input"
import { useNavigation } from "@react-navigation/native"
import CustomBackBtn from "../../../Components/CustomBackBtn"
import axios from "axios"
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import * as Animatable from 'react-native-animatable';
import { AppleButton,appleAuth } from '@invertase/react-native-apple-authentication';

const SignInScreen = ({  props }) => {
    const [number, setNumber] = useState("");
    const { height } = useWindowDimensions();
    const [token, setToken] = useState()
    const navigation = useNavigation();
    const [userInfo, setUserInfo] = useState({})
    const [value, setValue] = useState("empty");
    const [isValidNo, setIsValidNo] = useState(true)

    // const handlerValidNumber = (text) => {
    //     const reg = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    //     if (reg.test(text) === true) {
    //         // if (text.length >= 11){
    //         setIsValidNo(true)
    //         // console.warn(isValidNo)
    //         return true
    //     } else {
    //         setIsValidNo(false)
    //         return false
    //     }
    // }
    const data = {
        number
    }

    console.log(`navigation props ${props}`)
    console.log(number.length)
    console.log(typeof (number))


    const onSignInPressed = () => {

        console.log(isValidNo, "onsign")
        if (!isValidNo) {
            alert("Enter valid number")
            // Alert(alert())
            return
        }

        const url = "https://eatmates.herokuapp.com/login" 


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

    useEffect(() => {
        GoogleSignin.configure({
            webClientId: '773130259136-6ium5oqursa05jf8uvridn7f17adj96a.apps.googleusercontent.com',
        });
    }, [])

    const googleSignIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();

            console.log("details", userInfo.user.id)
    console.log(userInfo,"userinfofofofo")
            setUserInfo({ userInfo });
            const usrid = userInfo.user.id

            const data = {
                usrid
            }
            const url = "https://eatmatekiapi.herokuapp.com/api/Check_email_validation/"



            axios.post(url, data)
                .then(function (response) {
                    //   const value = response.data.value;
                     console.log(value)
                    console.log("helloworld", response.status)
                    if (response.status == 200) {

                        console.log(response);
                        // const uniId = response.data.data._id
                        // console.log("201", response.data.data._id)
                        // navigation.navigate("Setlanguage", {

                        //     uniId,
                        //     value
                        // })
                        // const user = response.data.data[0]


                        // console.log("1", response.data.userdetail[0]["_lastname"]);
                        // console.log("1", response.data.userdetail[0]["_firstname"]);
                        // console.log("1", response.data.userdetail[0]["_selfi"]);
                        const last = response.data.userdetail[0]["_lastname"];
                        const first = response.data.userdetail[0]["_firstname"];
                        const selfie = response.data.userdetail[0]["_selfi"];
                        // console.log(last, first, selfie)
                        // const selfie = response.data.data[0]._selfi_mime;
                        navigation.navigate("WelcomeScreen"
                            ,
                            {
                                last, first, selfie
                            }
                        )

                    }
                    // else if (response.status == 200) {

                    //     console.log()

                })
                .catch(function (error) {
                    const value = error.response.data.data.value;
                    const status = error.response.status;
                    console.log("value", status)
                      console.log("error",value);
                    const usrId = usrid

                    if (status == 403) {

                        // console.log("hello");
                        // const uniId = response.data.data._id
                        // console.log( response.data.data._id)
                        navigation.navigate("Setlanguage", {

                            usrId,
                            value
                        })
                    }


                    //   console.log("error",error.response.data.value );
                });
            //axios catch end here

        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                console.log(error)
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                console.log(error)

                // operation (f.e. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                console.log(error)

                // play services not available or outdated
            } else {
                // some other error happened
                console.log(error)
            }
        }
    }


    const facebookSignIn = async () => {
        // Attempt login with permissions
        const result = await LoginManager.logInWithPermissions(['public_profile', 'email'],);

        if (result.isCancelled) {
            throw 'User cancelled the login process';
        }

        // Once signed in, get the users AccesToken
        const data = await AccessToken.getCurrentAccessToken();

        if (!data) {

            throw 'Something went wrong obtaining access token';

        }

        // Create a Firebase credential with the AccessToken
        const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
        console.log("is itthis", data.userID)

        const url = "https://eatmatekiapi.herokuapp.com/api/Check_facebook_validation/"

        const usrid = data.userID
        const body = {
            usrid
        }

        axios.post(url, body)
            .then(function (response) {
                //   const value = response.data.value;
                //  console.log(value)
                console.log("helloworld", response.status)
                if (response.status == 200) {

                    // console.log(response);
                    // const uniId = response.data.data._id
                    // console.log("201", response.data.data._id)
                    // navigation.navigate("Setlanguage", {

                    //     uniId,
                    //     value
                    // })
                    // const user = response.data.data[0]

                    console.log(response)
                    console.log("1", response.data.userdetail[0]["_lastname"]);
                    console.log("1", response.data.userdetail[0]["_firstname"]);
                    console.log("1", response.data.userdetail[0]["_selfi"]);
                    const last = response.data.userdetail[0]["_lastname"];
                    const first = response.data.userdetail[0]["_firstname"];
                    const selfie = response.data.userdetail[0]["_selfi"];
                    // console.log(last, first, selfie)
                    // const selfie = response.data.data[0]._selfi_mime;
                    navigation.navigate("WelcomeScreen"
                        ,
                        {
                            last, first, selfie
                        }
                    )

                }
                // else if (response.status == 200) {

                //     console.log()

            })
            .catch(function (error) {
                const value = error.response.data.data.value;
                const status = error.response.status;
                console.log("value", status)
                //   console.log("error",value);
                const usrId = usrid

                if (status == 403) {

                    // console.log("hello");
                    // const uniId = response.data.data._id
                    // console.log( response.data.data._id)
                    navigation.navigate("Setlanguage", {

                        usrId,
                        value
                    })
                }


                //   console.log("error",error.response.data.value );
            });
        /* 
                axios.post(url, body)
                    .then(function (response) {
        
                        // const value = response.data.value;
        
                        if (response.status == 200) {
                            console.log(response)
        
                            //   const uniId = response.data.data._id
        
                            //   navigation.navigate("Setlanguage", {
        
                            //       uniId,
                            //       value
                            //   })
                        }
        
                        //   else if (response.status == 200) {
                        //       console.log(response.data.userdetail);
                        //       const last = response.data.userdetail.lastname;
                        //       const first = response.data.userdetail.firstname;
                        //       const selfie = response.data.userdetail.selfie;
                        //       navigation.navigate("WelcomeScreen", {
                        //               last, first,selfie,value
                        //       })
                        //   }
        
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
        */
        // Sign-in the user with the credential
        return auth().signInWithCredential(facebookCredential);
    }



    // Apple login credential
    async function onAppleButtonPress() {
        try{
        // Start the sign-in request
        const appleAuthRequestResponse = await appleAuth.performRequest({
          requestedOperation: appleAuth.Operation.LOGIN,
          requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
        });
        var usrid =appleAuthRequestResponse.user
        
        console.log(appleAuthRequestResponse,"apple id")
        console.log(appleAuthRequestResponse.user,"useridddd")

        console.log("this is what the gensdj", usrid)

   
      
        // Ensure Apple returned a user identityToken
        if (!appleAuthRequestResponse.identityToken) {
          throw new Error('Apple Sign-In failed - no identify token returned');
        }
        
            
        
            const data = {
                usrid
            }
            const url = "https://eatmatekiapi.herokuapp.com/api/Check-AppleID-validation/"

      

            axios.post(url, data)
            .then(function (response) {
                //   const value = response.data.value;
                 console.log(value)
                console.log("helloworld", response.status)
                if (response.status == 200) {

                    console.log(response);
                    // const uniId = response.data.data._id
                    // console.log("201", response.data.data._id)
                    // navigation.navigate("Setlanguage", {

                    //     uniId,
                    //     value
                    // })
                    // const user = response.data.data[0]


                    // console.log("1", response.data.userdetail[0]["_lastname"]);
                    // console.log("1", response.data.userdetail[0]["_firstname"]);
                    // console.log("1", response.data.userdetail[0]["_selfi"]);
                    const last = response.data.userdetail[0]["_lastname"];
                    const first = response.data.userdetail[0]["_firstname"];
                    const selfie = response.data.userdetail[0]["_selfi"];
                    // console.log(last, first, selfie)
                    // const selfie = response.data.data[0]._selfi_mime;
                    navigation.navigate("WelcomeScreen"
                        ,
                        {
                            last, first, selfie
                        }
                    )

                }
                // else if (response.status == 200) {

                //     console.log()

            })
            .catch(function (error) {
                const value = error.response.data.data.value;
                const status = error.response.status;
                console.log("value", status)
                  console.log("error",value);
                const usrId = usrid

                if (status == 403) {

                    // console.log("hello");
                    // const uniId = response.data.data._id
                    // console.log( response.data.data._id)
                    navigation.navigate("Setlanguage", {

                        usrId,
                        value
                    })
                }


                //   console.log("error",error.response.data.value );
            });
        //axios catch end here

    } catch (error) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            console.log(error)
            // user cancelled the login flow
        } else if (error.code === statusCodes.IN_PROGRESS) {
            console.log(error)

            // operation (f.e. sign in) is in progress already
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            console.log(error)

            // play services not available or outdated
        } else {
            // some other error happened
            console.log(error)
        }
    }

        // Create a Firebase credential from the response
        const { identityToken, nonce } = appleAuthRequestResponse;
        const appleCredential = auth.AppleAuthProvider.credential(identityToken, nonce);




        // const usrId = ''
        // navigation.navigate("Setlanguage",{
        //     usrId: '',
        //     value:''
        // })
                     
    
        // Sign the user in with the credential
        return auth().signInWithCredential(appleCredential);
     
    }
    

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: '#fff' }}>
            <View style={styles.root}>

                {/* <View style={{ backgroundColor: "#fff", marginTop: 25 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Gettingstarted')}>
                        <Image source={require('../../assets/Left.png')}
                            style={{ height: 30, width: 30, borderWidth: 1, borderColor: "#808080", borderRadius: 50, }}
                        />
                    </TouchableOpacity>
                </View> */}
                {/* {Platform.OS === 'ios' ? (
                    <CustomBackBtn navigation={navigation}/>
                ) : null} */}
                <View style={styles.header}>
                    <View style={{ paddingBottom: 100 }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <View>
                                <Text style={{ fontSize: 40, fontWeight: "bold", color: "#187498" }}>Eatmates </Text>
                                <Text style={{ color: "#97999B", fontWeight: "600" }}>
                                    Welcome User Continue to
                                </Text>
                            </View>
                            <View>
                                {/* <TouchableOpacity onPress={() => mainSkipPressed()}>
                                    <Text style={{ fontWeight: "600", fontSize: 18, color: "#808080" }}>Skip</Text>
                                </TouchableOpacity> */}
                            </View>
                        </View>
                        <Text style={{ color: "#97999B", fontWeight: "600" }}>enjoy the food world</Text>
                    </View>
                </View>
                <PhoneInput
                    // isValidNo={true}
                    maxLength='11'
                    defaultValue={number}
                    defaultCode='IN'
                    containerStyle={{
                        height: 58,
                        borderRadius: 8,
                        borderColor: '#F7F7F7',
                        // marginVertical: 10,
                        elevation: 0.5,
                        
                    }}
                    textContainerStyle={{
                        borderColor: '#F7F7F7',
                        borderRadius: 8,
                        paddingTop: 0,
                        fontWeight: '600',
                        height: 58,
                        paddingBottom: -10
                    }}
                    onChangeFormattedText={(text) => setNumber(text)}
                // onChangeText={(text) => setNumber(text)}
                // onChangeFormattedText={(text) => {
                //     handlerValidNumber(text)
                // }}

                />
                {isValidNo ? null :
                    <Animatable.View animation="fadeInLeft" ><Text style={{ color: "#f50" }}>Number is not valid</Text></Animatable.View >
                }
                <View style={{ marginVertical: 10 }} />
                <Custombutton text="Continue" onPress={onSignInPressed} />

                <View style={{ paddingVertical: 40, }}><Text style={{ textAlign: 'center', fontWeight: "600", color: "#999999" }}>Or Continue with</Text></View>
                <View style={{ flexDirection: "row", justifyContent: "center" }}>
                    <View style={[styles.bottomBtn, { backgroundColor: "#DB4437" }]}>
                        <TouchableOpacity onPress={() => { googleSignIn(); setValue("2") }}>
                            <Image source={require('../../assets/google.png')} style={styles.bottomBtnImg} />
                        </TouchableOpacity>
                    </View>

                    <View style={[styles.bottomBtn, { backgroundColor: '#3B5998' }]}>
                        <TouchableOpacity onPress={() => facebookSignIn()}>
                            <Image source={require('../../assets/fb.png')} style={styles.bottomBtnImg} />
                        </TouchableOpacity>
                    </View>

                     <View>
                       <AppleButton
                          buttonStyle={AppleButton.Style.BLACK}
                          buttonType={AppleButton.Type.SIGN_IN}
                         style={{ width: 58, height: 58,marginHorizontal: 12,}}
                     onPress={() => onAppleButtonPress()}>
                       
                     </AppleButton>

                          {/* <TouchableOpacity onPress={() => onAppleButtonPress().then(() => 
                        navigation.navigate("Setlanguage")
                        // console.log('Apple sign-in complete!')
                        )}>
                            <Image source={require('../../assets/app.png')} style={styles.bottomBtnImg} />
                           </TouchableOpacity> */}


                    </View>

                </View>
            </View>
        </ScrollView>)
}
const styles = StyleSheet.create({
    logo: {
        width: "100%",
        height: "60%",
        maxWidth: 300,

    },
    header: {
        marginTop: 70,
    },
    root: {
        padding: 30,
        backgroundColor: "#fff",
    },
    bottomBtn: {
        padding: 4,
        paddingHorizontal: 7,
        borderRadius: 5,
        marginHorizontal: 13
    },
    bottomBtnApple: {
        padding: 2,
        // paddingHorizontal: 7,
        borderRadius: 5,
        marginHorizontal: 13,
        // borderWidth:1,
        // borderColor:"#000",
    },
    bottomBtnImg: {
        height: 49,
        width: 45,
    },
    // imgApple:{
    //     height: 50,
    //     width: 45,
    // },
    bottomapple:{
        height: 60,
        width: 65,
    },

})
export default SignInScreen