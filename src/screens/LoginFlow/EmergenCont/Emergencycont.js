import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native'
import { useState } from 'react'
import React from 'react'
import CustomHeading from '../../../Components/CustomHeading'
import Customsmallbtn from '../../../Components/CustomSmallButton/Customsmallbtn'
import axios from 'axios'



const Emergencycont = ({ route, navigation }) => {



    const
        {
            language, currency, firstname, lastname, usrId, mydate, houseno, street, city, state, zipcode, Country, bine, type, value,imagefront,
            imageback,dpa,selected,
        } = route.params


    console.log(mydate, `${firstname}${usrId}${houseno}${value}${bine}`)


    const [_lan, set_lang] = useState(language);
    const [_currency, set_currency] = useState(currency);
    const [_firstname, set_firstname] = useState(firstname);
    const [_lastname, set_lastname] = useState(lastname);
    const [usrid, setnumberId] = useState(usrId);
    const [Date_of_Birth, setDate_of_Birth] = useState(mydate);
    const [_houseno, set_houseno] = useState(houseno);
    const [_street, set_street] = useState(street);
    const [_city, set_city] = useState(city);
    const [ad_state, set_state] = useState(state);
    const [_country, set_country] = useState(Country);
    const [_zipcode, set_zipcode] = useState(zipcode);
    const [_selfi_mime, set_mime] = useState(type);
    const [val, setval] = useState(value);
    const [_selfi, set_selfie] = useState(bine);
    const [_idpic1, set_idpic1]=useState(imagefront);
    const [_idpic2, set_idpic2]=useState(imageback);
    const [issu_country, setissu_country]=useState(selected);
    const[_type,set_type]=useState(dpa)

    console.log("dpa button",dpa)
    // const[_idpic1_mime, set_idpic1_mime] = useState(idtype1);
    // const[_idpic2_mime, set_idpic2_mime] = useState(idtype2);

    // const laterBtnPress = () => {
    //     navigation.navigate('Beforebegin')
    // }
    const nextBtnPress = () => {

        navigation.navigate('EmergencyData', {
            language, currency, firstname, lastname, usrId, mydate, houseno, street, city, state, zipcode, Country, bine, type, value,
            imagefront, imageback,dpa,selected,
        })
    }


    const laterBtnPress = async () => {


        console.log(_selfi_mime, "hello world", _selfi)

         //for facebook login
        let url = val === "facebook" ? "https://eatmatekiapi.herokuapp.com/api/Add_new_user_facebook/" :
               
        //for google login
            val === "google" ? "https://eatmatekiapi.herokuapp.com/api/Add_new_user_email/" :

            //for mobile login
                val === "user" ? "https://eatmatekiapi.herokuapp.com/api/Add_new_user_nu/" : "no URLS";
                // for apple login
                val === "apple" ? "https://eatmatekiapi.herokuapp.com/api/Add-new-user-appleid" : "no URLS";

               
        console.warn("checking link", url)
        console.warn("caKHSV   DATAT", mydate)
        console.warn("checking link", Date_of_Birth)
        console.warn("checking link", language)
        console.log("hello hgghdehdjsdgy",typeof mydate)
        console.log(typeof language)
        const data = {
            _lan, _currency, _firstname, _lastname, usrid, Date_of_Birth, _houseno, _street, _city, ad_state, _country, _zipcode, _selfi, _selfi_mime,
            _idpic1,_idpic2,issu_country,_type
        }
        axios.post(url, data)
            .then(response => console.log(response))
            .catch((err) => {
                console.log(err)
            })
        navigation.navigate('Zapping')
    };


    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.heading}>
                <CustomHeading text={'Add an'} />
                <CustomHeading text={'Emergency contact'} />
            </View>
            <View>
                <CustomHeading text={"An emergency contact gives us another possible way to help out if you're ever in an urgent situation. We suggest adding at least one contact before you start an event"} type='TERTIARY' />
            </View>
            <View style={styles.imgView}>
                <Image style={styles.imgCont} source={require('../../assets/emergencycall.png')} />
            </View>
            <View style={styles.heading}>
                <CustomHeading text={"This info won’t be shared with other Eatmates users"} type='SECONDARY' />
            </View>
            <View style={styles.bottomBTn}>
                <Customsmallbtn text={'Later'} type='SECONDARY' onPress={() => laterBtnPress()} />
                <Customsmallbtn text={'Next'} onPress={() => nextBtnPress()} />
            </View>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 30
    },
    heading: {
        marginVertical: 32
    },
    imgView: {
        flex: 1,
        justifyContent: 'center'
    },
    imgCont: {
        width: 310,
        height: 310,
    },
    bottomBTn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})
export default Emergencycont