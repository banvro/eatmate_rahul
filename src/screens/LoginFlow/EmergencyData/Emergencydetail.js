import { View, Text, StyleSheet, SafeAreaView, ScrollView,TouchableOpacity,Image } from 'react-native'
import React, { useState } from 'react'
import CustomHeading from '../../../Components/CustomHeading'
import CustomLabel from '../../../Components/CustomLabel'
import Customsmallbtn from '../../../Components/CustomSmallButton'
import Custominput from '../../../Components/CustomInput/Custominput'
import axios from 'axios'
// import Navigation from '../../Navigation/Navigation'

const Emergencydetail = ({ route, navigation,props }) => {

  const {
    language, currency, firstname, lastname, usrId, mydate, houseno, street, city, state, zipcode, Country, bine, type, value,
    imagefront, imageback,dpa,selected,
  } = route.params
  // console.log("emergency screen", uniId, value)
  console.log("value one", usrId)



  // const [_firstname, set_firstname] = useState(number);
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
  const[_type,set_type]=useState(dpa)
  const [_zipcode, set_zipcode] = useState(zipcode);
  const [_selfi_mime, set_mime] = useState(type);
  const [val, setval] = useState(value);
  // const [name, setName] = useState();
  const [_emname, set_emname] = useState('');
  const [_emrelationship, set_emrelationship] = useState('');
  const [_ememail, set_ememail] = useState('');
  const [_emnumber, set_emnumber] = useState('');
  const [_emlanguage, set_emlanguage] = useState('');
  const [_selfi, set_selfie] = useState(bine);

  const [_idpic1, set_idpic1]=useState(imagefront);
    const [_idpic2, set_idpic2]=useState(imageback);
    const [issu_country, setissu_country]=useState(selected);
  /*
      const [_lan, set_lang] = useState(language);
      const [_currency, set_currency] = useState(currency);
      const [_firstname, set_firstname] = useState(firstname);
      const [_lastname, set_lastname] = useState(lastname);
      const [usrid, setnumberId] = useState(usrId);
      const [Date_of_Birth, setdob] = useState(date);
      const [_houseno, set_houseno] = useState(houseno);
      const [_street, set_street] = useState(street);
      const [_city, set_city] = useState(city);
      const [ad_state, set_state] = useState(state);
      const [_country, set_country] = useState(Country);
      const [_zipcode, set_zipcode] = useState(zipcode);
      const [_selfi_mime, set_mime] = useState(type);
      const [val, setval] = useState(value);
      const [_selfi, set_selfie] = useState(bine);
   */

  // console.log("sets check", _lang, _currency, _firstname, _lastname, numberid, dob, _houseno, _street, _city, _state, _country, _zipcode ,val)
  console.warn("value check", val)
  // console.warn("value check", numberid)



  const updateBtnPress = async () => {



    if (!_emname || !_emrelationship || !_ememail || !_emnumber || !_emlanguage) {
      alert('Please add all fields')
      return
    }

    let url = val === "facebook" ? "https://eatmatekiapi.herokuapp.com/api/Add_new_user_facebook/" :

      val === "google" ? "https://eatmatekiapi.herokuapp.com/api/Add_new_user_email/" :
        val === "user" ? "https://eatmatekiapi.herokuapp.com/api/Add_new_user_nu/" : "no valid urls";


    console.warn("checking link", url)
    const data = {
      _lan, _currency, _firstname, _lastname, usrid, _houseno, _street, _city, ad_state, _country, _zipcode, _selfi, _selfi_mime, 
      _idpic1,_idpic2,issu_country,_type,Date_of_Birth,_ememail, _emlanguage, _emname, _emnumber, _emrelationship
    }

    axios.post(url, data)
      .then(response => console.log(response.data))
      .catch((err) => {
        console.log(err)
      })
    navigation.navigate('Beforebegin')
  };



  return (

    <ScrollView style={styles.cont}>

          <View style={{ backgroundColor: "#fff", marginTop: 25 }}>
                    <TouchableOpacity onPress={() => navigation.goBack(null)}>
                        <Image source={require('../../assets/Left.png')}
                            style={{ height: 40, width: 40, borderWidth: 1, borderColor: "#808080", borderRadius: 50, }}
                        />
                    </TouchableOpacity>
                </View>
      {/* {Platform.OS === 'ios' ? (
        <CustomBackBtn />
      ) : null} */}
      <View style={styles.heading}>
        <CustomHeading text={'Fill the info'} />
      </View>
      <View style={styles.field}>
        <CustomLabel text={'Name'} />
        <Custominput placeholder={'Legal name is preffered (required)'} value={_emname} setValue={set_emname} />
      </View>
      <View style={styles.field}>
        <CustomLabel text={'Relationship'} />
        <Custominput placeholder={'Ex: Mom, Spouse, Friend'} value={_emrelationship} setValue={set_emrelationship} />
      </View>
      <View style={styles.field}>
        <CustomLabel text={'Email'} />
        <Custominput placeholder={'Enter email address (Optional)'} value={_ememail} setValue={set_ememail} />
      </View>
      <View style={styles.field}>
        <CustomLabel text={'Phone number'} />
        <Custominput placeholder={'Enter phone number (Optional)'} value={_emnumber} setValue={set_emnumber} keyboardType={'numeric'} />
      </View>
      <View style={styles.field}>
        <CustomLabel text={'Preffered Language'} />
        <Custominput placeholder={'Select your language '} value={_emlanguage} setValue={set_emlanguage} />
      </View>
      <View style={styles.bottomBTn}>
        <Customsmallbtn text={'Back'} type='TERTIARY' onPress={() => navigation.goBack()} />
        <Customsmallbtn text={'Update'} onPress={() => updateBtnPress()} />
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  cont: {
    padding: 30,
    backgroundColor: '#fff'
  },
  heading: {
    marginVertical: 32
  },
  field: {
    marginVertical: 16
  },
  bottomBTn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40
  }

})
export default Emergencydetail