import React, { useState,useEffect } from "react"
import { View, Text, Image, StyleSheet, Dimensions, useWindowDimensions,Animated, FlatList, ScrollView ,TouchableOpacity} from "react-native"
import Custominput from "../../../Components/CustomInput/Custominput"
import Custombutton from "../../../Components/CustomButton/Custombutton"
import CustomHeading from "../../../Components/CustomHeading"
import { useNavigation } from "@react-navigation/native"


const ForgotPassword = () =>
{
    const video =React.useRef(null);
    const [status,setStatus]=React.useState({});
    const navigation = useNavigation();
    const [code, setCode] = useState("");
    const sendOtp = () =>
    {
        console.log("confirm button pressed");
        navigation.navigate("Newpass");
    }
    const onSignInPress = () => {
        console.log("Sign In Pressed");
        navigation.navigate("SignIn");
    }
    const skipPressed = () => {
        console.log("Skip is Pressed");
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}
        style={{backgroundColor:"#fff"}}
        >
            <View style={[styles.root, ]}>
                <View style={styles.topCont}>
                <View>
                <CustomHeading text={'Forgot'} />
                <CustomHeading text={'Password'} />
                </View>
                <View>
                <TouchableOpacity onPress={() => skipPressed() }>
                <Text style={{fontWeight:"600", fontSize:18 ,color:"#808080"}}>Skip</Text>
                </TouchableOpacity>
                </View>
                </View>
                <View style={{padding:4}} />
                <View>
                <CustomHeading text={'You can always reset your password, So'} type='TERTIARY' />
                <CustomHeading text={"don't be stressed about it."} type='TERTIARY' />
                <View style={{ paddingVertical:50,}}>
                <Custominput style={{backgroundColor:'#F7F7F7',}} placeholder="Enter Code" value={code} setValue={setCode} />
                </View>
                </View>
                <View style={{  paddingTop:200,}}>
                <Custombutton style={{ fontWeight:100,}} text="Continue" onPress={sendOtp} />
                </View>
                </View>
            
        </ScrollView>)
}
const styles = StyleSheet.create({
    root: {
        padding: 25,
        flex:1,
        paddingTop:80,
    },
    title:{
        color:"#187498",
        fontSize:36,
        fontWeight:"600",
        backgroundColor:"#fff"
    },
    topCont:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    }
})
export default ForgotPassword