import { View, Text, SafeAreaView, Button, StyleSheet, Image, TouchableOpacity } from 'react-native'
// import { useNavigation } from '@react-navigation/native'
import Custominput from '../../../Components/CustomInput/Custominput'
import CustomHeading from '../../../Components/CustomHeading'
import Custombutton from '../../../Components/CustomButton/Custombutton'
import React, { useState } from 'react'
// import CustomBackBtn from '../../../Components/CustomBackBtn'
import CustomBackBtn from '../../../Components/CustomBackBtn/CustomBackBtn'
import DatePicker from 'react-native-date-picker'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'


const Setdob = ({ route, navigation,props }) => {

  const { language, currency, firstname, lastname, usrId, value } = route.params;
  console.log(` ${language} ${value} ${firstname} ${usrId} `)

  const [date, setDate] = useState(new Date())

  const [open, setOpen] = useState(false)
  const [dolabel, setDolabel] = useState('Select Date of Birth')

  // console.log("my date of birth",date)
  var mydate= date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear();
console.log("modifydateof birth",mydate)
  // console.log(mydate)
  // console.log("hejkkeejj",typeof mydate)
  // var x = mydate
  // console.log("jacline",x)
  // var modifydate = (date);
  // console.log("katrna kaff",modifydate)
  // console.log(typeof modifydate)

  const dobBtn = () => {
    console.log("it is in =site rge date")

    if (dolabel == 'Select Date of Birth') {
      alert('Select Date of Birth')
      return
    }
    navigation.navigate('Addaddress', {
      language, currency, firstname, lastname, usrId, mydate, value
    })
  }

  return (
    <SafeAreaView style={style.container}>
           <View style={{ backgroundColor: "#fff", marginTop: 25 }}>
                    <TouchableOpacity onPress={() => navigation.goBack(null)}>
                        <Image source={require('../../assets/Left.png')}
                            style={{ height: 25, width: 25, borderWidth: 1,marginLeft:15, borderColor: "#808080", borderRadius: 50, }}
                        />
                    </TouchableOpacity>
                </View>
      {/* {Platform.OS === 'ios' ? (
        <CustomBackBtn />
      ) : null} */}
      <View >
        <View style={{ marginTop: 70 }}>
          <CustomHeading text={'When is your'} />
          <CustomHeading text={'Birthday'} />
          <View style={{ padding: 5 }} />
          <CustomHeading text={'You need to be atleast 18 year. Other peoples at'} type='TERTIARY' />
          <CustomHeading text={"Eatmates won't see your birthday."} type='TERTIARY' />
        </View>
      </View>
      <View style={{ flex: 6, justifyContent: 'center' }}>
        {/* <Custombutton text={dolabel} onPress={() => setOpen(true)}/> */}
        <Pressable onPress={() => setOpen(true)} >
          <View style={style.containerDOB} >
            <Image source={require('../../assets/calender.png')} />
            {/* <Custominput placeholder={'Select DOB'} onChang/> */}
            <Text style={{ fontWeight: '600', paddingLeft: 5 }}>{dolabel}</Text>
          </View>
        </Pressable>
        <DatePicker
          modal
          mode='date'
          open={open}
          
          date={date}

          
          // maximumDate={new Date("2002-12-31")} 
          // minimumDate={new Date("2002-12-31")}-- this can be set for 18 years old
          onConfirm={(date) => {
            setOpen(false)
            // var date= date.getDate+"/"+date.getMonth+"/"+date.getFullYear;
            setDate(date)
            
            setDolabel(date.toDateString())
            // setDolabel(JSON.stringify(date));
            // console.log("hello",typeof date)
          

            // console.log(date)
            // console.log("date of birth", typeof date)
            // console.log( typeof(date.getDate +" "))
            // console.log(typeof(date.getMonth =""))
            // console.log(typeof(date.getFullYear+""))
            // console.log(typeof date)
            // var dob = toString(date)
            // console.log(typeof date)
            var mydate= date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear();
            console.log(mydate)
            // value={mydate}
            //setDate(mydate)
            // console.log(typeof mydate)
            
          }}
          onCancel={() => {
            setOpen(false)
          }}
        />
        
      </View>
      
      
      <View style={{ flex: 1 }}>
        <Custombutton style={{ fontWeight: 100, padding: 10, }} text="Next" onPress={() => dobBtn()} />
      </View>
    </SafeAreaView>

  )
}
const style = StyleSheet.create({
  container: {
    padding: 25,
    flex: 1,

    backgroundColor: '#fff'
  },
  containerDOB: {
    backgroundColor: '#F7F7F7',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#187498',
    paddingHorizontal: 10,
    marginVertical: 5,
    elevation: 0.5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 4,
  },
});
export default Setdob