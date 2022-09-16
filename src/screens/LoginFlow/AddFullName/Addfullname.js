import { View, Text, ScrollView, StyleSheet, Dimensions, TextInput,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import Custominput from '../../../Components/CustomInput/Custominput'
import Custombutton from '../../../Components/CustomButton/Custombutton'
import CustomHeading from '../../../Components/CustomHeading'
import { SafeAreaView } from 'react-native-safe-area-context'
import axios from 'axios'
import { useState } from 'react'

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
// const navigation = useNavigation();

const Addfullname = ({ route, navigation }) => {
  const { language, currency, usrId, value } = route.params;
  console.log(` ${language} ${value} ${firstname} ${usrId}`)
  console.log(` ${language} ${currency}`)
  const [firstname, setFname] = useState("");
  const [lastname, setLname] = useState("");
  const data = {
    firstname,
    lastname
  }

  const btnPress = () => {
    if (!firstname || !lastname) {
      alert('Enter all fields')
      return
    }

    navigation.navigate('Setdob', {
      language, currency, firstname, lastname, usrId, value
    })
    console.log(` ${language} ${currency} ${firstname} ${usrId}`)
  }



  return (
    <View style={styles.mainCont}>
           <View style={{ backgroundColor: "#fff", marginTop: -10 }}>
                    <TouchableOpacity onPress={() => navigation.goBack(null)}>
                        <Image source={require('../../assets/Left.png')}
                            style={{ height: 25, width: 25, borderWidth: 1, borderColor: "#808080", borderRadius: 50, }}
                        />
                    </TouchableOpacity>
                </View>
           
      <View>
        <CustomHeading text={"Let's add your"} />
        <CustomHeading text={"Full Name"} />
      </View>
      <View style={styles.topCont1}>
        <Custominput placeholder={'First Name'} value={firstname} setValue={(text) => setFname(text)} />
        {/* <TextInput placeholder={'First Name'} value={firstname} onChangeText ={(text)=>setFname(text)}/> */}

        <View style={{ paddingVertical: 10, }} />
        <Custominput placeholder={'Last Name'} value={lastname} setValue={(text) => setLname(text)} />
        {/* <TextInput placeholder={'Last Name'} value={lastname} onChangeText ={(text)=>setLname(text)}/> */}
      </View>
      <View style={styles.topCont}>
        <Custombutton text={"Next"} onPress={() => btnPress()} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({


  mainCont: {
    padding: 25,
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    // alignItems:'flex-end'
  },


})
export default Addfullname