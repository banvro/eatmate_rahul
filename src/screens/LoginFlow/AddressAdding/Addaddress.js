import { View, Text, ScrollView, StyleSheet ,TouchableOpacity,Image} from 'react-native'
import React, { useState } from 'react'
import CustomHeading from '../../../Components/CustomHeading'
import Custominput from '../../../Components/CustomInput/Custominput'
import Custombutton from '../../../Components/CustomButton/Custombutton'
import CustomBackBtn from '../../../Components/CustomBackBtn'

const Addaddress = ({ route, navigation, props }) => {

    const { language, currency, firstname, lastname, usrId, mydate, value } = route.params;
    console.log("marxa", route.params)
    console.log("im hgere", mydate)
    console.log("typeof of dob", typeof mydate)

    const [houseno, setHouseno] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [Country, setCountry] = useState('');
    const adrBtn = () => {
        if (!houseno || !street || !city || !state || !zipcode || !Country) {
            alert('Please add all fields')
            return
        }

        navigation.navigate('Addid', {
            language, currency, firstname, lastname, usrId, mydate, houseno, street, city, state, zipcode, Country,
            value
        })
    }

    return (
        <ScrollView style={styles.root}>
            <View>
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
                <View style={styles.topCont}>
                    <CustomHeading text={"Let’s add your"} />
                    <CustomHeading text={'Address'} />
                    <CustomHeading text={"Adding your address will help us to share the word when you host an event. Other people at Eatmates won't see your address until the reservation of the event is confirmed by you."} type='TERTIARY' />
                </View>
                <View style={styles.centerCont}>
                    <Custominput value={houseno} setValue={setHouseno} placeholder={'House no'} />
                    <Custominput value={street} setValue={setStreet} placeholder={'Street'} />
                    <Custominput value={city} setValue={setCity} placeholder={'City'} />
                    <Custominput value={state} setValue={setState} placeholder={'State'} />
                    <Custominput value={zipcode} setValue={setZipcode} placeholder={'Zip code'} />
                    <Custominput value={Country} setValue={setCountry} placeholder={'Country'} />
                </View>
                <View style={styles.bottomCont}>
                    <Custombutton text={'Next'} onPress={() => adrBtn()} />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 25,
        // justifyContent:'space-between'
    },
    rootCont: {
        marginTop: 25
    },
    topCont: {
        marginVertical: 25,
    },
    bottomCont: {
        height: 150,
        justifyContent: 'flex-end',
        paddingBottom: 50
    },
    centerCont: {
        height: 410,
        justifyContent: 'space-between',
    }
}
)

export default Addaddress
