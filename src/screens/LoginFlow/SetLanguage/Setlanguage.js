import { View, Text, ScrollView,TouchableOpacity,Image } from 'react-native'
// import { useNavigation } from '@react-navigation/native'
import Custombutton from '../../../Components/CustomButton/Custombutton'
import CustomHeading from '../../../Components/CustomHeading'
import React, { useState } from 'react'
import CustomBackBtn from '../../../Components/CustomBackBtn'
import SelectList from "react-native-dropdown-select-list"
import Custominput from '../../../Components/CustomInput/Custominput'
import Verifycode from '../VerifyCode/Verifycode'

const Setlanguage = ({ route, navigation,props }) => {

    const { usrId, value } = route.params;
    

    // console.log(`languagescreennumbner ${usrId} ${value}`)


    const [language, setLanguage] = React.useState("")
    const [currency, setCurrency] = React.useState('')

    const langBtn = () => {
        // if(!language || !currency){
        //     alert('Enter all fields')
        //     return
        // }

        navigation.navigate('Addfullname', {
            language, currency, usrId, value
        })
    };
    console.log("data",usrId)

    // back btn
    


    // const [selected, setselected] = React.useState("");
    // console.log("selected",typeof(language))
    //     const langdata = [
    //         { key: '1', value: 'Hindi' },
    //         { key: '2', value: 'English' },
    //         { key: '3', value: 'Punjabi' },
    //         { key: '4', value: 'Germany' },
    //         { key: '5', value: 'urdu' },
    //     ];
    // console.log(langdata)
    //     const curdata = [
    //         { key: '1', value: 'Dollar' },
    //         { key: '2', value: 'Pond' },
    //         { key: '3', value: 'Inr' },
    //         { key: '4', value: 'Euro' },
    //         { key: '5', value: 'Dinar' },
    //     ];

    // console.log(curdata)

    // const navigation = useNavigation();

    return (
        <ScrollView style={{ backgroundColor: '#fff', padding: 25, flex: 1 }}>
                            <View style={{ backgroundColor: "#fff", marginTop: 25 }}>
                    <TouchableOpacity onPress={() => navigation.goBack(null)}>
                        <Image source={require('../../assets/Left.png')}
                            style={{ height: 25, width: 25, borderWidth: 1, borderColor: "#808080", borderRadius: 50, }}
                        />
                    </TouchableOpacity>
                </View>

            {/* {Platform.OS === 'ios' ? (
                <CustomBackBtn />
            ) : null} */}
            <View style={{ marginTop: 70, flex: 1 }}>
                <CustomHeading text={'Select your Language'} />
                <CustomHeading text={'and currency'} />
                <View style={{ paddingVertical: 3 }} />
                <CustomHeading text={'Select your preferred language of Eatmates app and'} type='TERTIARY' />
                <CustomHeading text={'currency in which your would like to have transactions.'} type='TERTIARY' />

            </View>
            <View style={{ padding: 20, }}>
            </View>
            <View style={{ paddingVertical: 15 }} />
            <Custominput placeholder={'Select Language'} value={language} setValue={setLanguage} />
            <View style={{ paddingVertical: 5 }} />
            <Custominput placeholder={'Select Currency'} value={currency} setValue={setCurrency} />
            <View style={{ paddingTop: 270, paddingBottom: 50, flex: 0.5 }}>
                <Custombutton style={{ fontWeight: 100, padding: 40, }} text="Next" onPress={() => langBtn()}></Custombutton>
            </View>
        </ScrollView>
    )
}
export default Setlanguage