import { View, Text,TextInput, StyleSheet, ScrollView, Image, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import CustomHeading from '../../../Components/CustomHeading'
import Custominput from '../../../Components/CustomInput/Custominput'
import CustomLabel from '../../../Components/CustomLabel'
// import CustomUpload from '../../../Components/CustomUpload'
import Custombutton from '../../../Components/CustomButton/Custombutton'
import CustomBackBtn from '../../../Components/CustomBackBtn'
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import RNBounceable from '@freakycoder/react-native-bounceable';
import ImagePicker from 'react-native-image-crop-picker';
import CustomRadioBtn from '../../../Components/CustomRadioBtn'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import SelectList from 'react-native-dropdown-select-list';
const Uploadid = ({ route, navigation, props }) => {
const { language, currency, firstname, lastname, usrId, mydate, houseno, street, city, state, zipcode, Country,
    value } = route.params

  console.log("hekkkashvbaj", route.params)


  // let bouncyCheckboxRef: BouncyCheckbox | null = null;
  const [checkboxState, setCheckboxState] = React.useState(false);

  const [imagefront, setImagefront] = useState(null);
  const [imageback, setImageback] = useState(null);
  // const [imagUri, setImagee] = useState({})
  const [showoption, setShowoption] = useState(false)
  const [showoptiontwo, setShowoptiontwo] = useState(false)

  const [isEditable, setisEditable] = useState(false)
  const updatestate=()=>{
    setisEditable(!isEditable)
  }

  // const [radioShow, setRadioShow] = useState(true)
  // const [radioShowOne, setRadioShowOne] = useState(true)
  // const [radioShowTwo, setRadioShowTwo] = useState(true)

  console.log("marxa", imagefront, imageback, showoption, showoptiontwo)

  const [radio, setRadio] = useState({
    radio1: false,
    radio2: false,
    radio3: false,
    name:"",
  });

  // const [record, setRecord] = useState('')
  // const [ drlicense, setDrlicense] = React.useState("");
  // console.log("gjzsgsjssywffs",record)

  const [selected, setSelected] = React.useState("");
  const data = [
    { key: 'India', value: 'India' },
    { key: 'USA', value: 'USA' },
    { key: 'CANADA', value: 'CANADA' },
    { key: 'DUBAI', value: 'DUBAI' },
  ];

  const [otherid, setOtherid] = useState('')

  const [idproof, setIdproof] = useState('')

  // const idtype1 = imagefront.mime;
  // const idtype2 = imageback.mime;

console.log("helllkjghwj",imagefront,imageback ,radio['name'],selected,idproof)
// console.log(typeof name)
console.log(radio.name)

var dpa=radio['name'];
console.log("rrrrttgsu",dpa)

  // const [selected, setselected] = React.useState("");
  // console.log("selected",typeof(language))
  //     const langdata = [
  //         { key: '1', value: 'Hindi' },
  //         { key: '2', value: 'English' },
  //         { key: '3', value: 'Punjabi' },
  //         { key: '4', value: 'Germany' },
  //         { key: '5', value: 'urdu' },
  //     ];


  // const bine= {data :imagUri.imagedata.data}



  const nextBtnPressed = () => {
    // if(radio = false ){
    //   alert('Select ID')
    //   return
    // }
    // if(showoption == false , showoptiontwo == false){
    //   alert('Please add Id Photo')
    //   return
    // }
    // if(!idproof){
    //   alert('Select Countary')
    //   return
    // }
    navigation.navigate('AddSelfie', {
      language, currency, firstname, lastname, usrId, mydate, houseno, street, city, state, zipcode, Country,imagefront,
      imageback,dpa,selected,value,
    })
  }
  const openOptionForFront = () => {
    setShowoption(true)

  }
  const openOptionForBack = () => {
    setShowoptiontwo(true)

  }

  const openCameraFront = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: false,

    }).then(imagefront => {
      console.log(imagefront);
      setShowoption(false)
      setImagefront(imagefront.path)

    });

  }

  const openCameraBack = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: false,

    }).then(imageback => {
      console.log(imageback);
      setShowoptiontwo(false)
      setImageback(imageback.path)

    });

  }
  const openGalleryFront = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(imagefront => {
      console.log(imagefront);
      setShowoption(false)
      setImagefront(imagefront.path)
    });
  }
  const openGalleryBack = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(imageback => {
      console.log(imageback);
      setShowoptiontwo(false)
      setImageback(imageback.path)
    });
  }
  return (
    <ScrollView style={styles.root}>
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
      <View style={styles.heading}>
        <CustomHeading text={'Select an ID'} />
        <CustomHeading text={'Type to add'} />
      </View>
      <View style={styles.field}>
        <CustomLabel text={'Issuing country / region'} />
        <SelectList
          placeholder="Select your Country"
          // onSelect={() => alert(selected)}
          setSelected={setSelected}
          data={data}
          search={false}
          boxStyles={{ borderRadius: 15, borderColor: '#fff', backgroundColor: '#F6F6F6' }}
        />
      </View>
      <View style={styles.field}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
          {/* <Pressable onPress={() => setRadio({ radio1: true, radio2: false, radio3:false })}  style={styles.raw} setRecord={'Drivinglicense'}> */}
          <Pressable onPress={() => setRadio({ radio1: true, radio2: false, radio3: false , name:"Driving License"})}  style={styles.raw} >

            <View style={styles.radioBox}>
              {radio.radio1 && <View style={styles.radioBtn}>
              </View>}
            </View>
            <Text style={{ marginLeft: 2, fontSize: 13 }} value="drrrr">Driving License</Text>
          </Pressable>
          {/* <Pressable onPress={() => setRadio()} style={styles.raw}> */}
          <Pressable onPress={() => setRadio({ radio1: false, radio2: true, radio3: false , name:"Passport"})} style={styles.raw}>

            <View style={styles.radioBox}>
              {radio.radio2 && <View style={styles.radioBtn}>
              </View>}
            </View>
            <Text style={{ marginLeft: 2, fontSize: 13 }}>Passport</Text>
          </Pressable>
          {/* <Pressable onPress={() => setRadio({ radio1: false, radio2: false, radio3: true })} style={styles.raw}> */}
          <Pressable onPress={() => setRadio({ radio1: false, radio2:false, radio3: true , name:"Anyother"})} style={styles.raw} >

            <View style={{ flexDirection: 'row' }}>
              <View style={styles.radioBox}>
                {radio.radio3 && <View style={styles.radioBtn}>
                </View>}
              </View>
              <Text style={{ marginLeft: 2, fontSize: 13 }} onPress={updatestate}>Anyother</Text>
            </View>
          </Pressable>
        </View>
        <View>
        {/* <TextInput 
        value={value}
        onChangeText={setOtherid}
        // secureTextEntry={secureTextEntry}
        // keyboardType={keyboardType}
        placeholderTextColor={'#000'}
       /> */}
      
        < Custominput placeholder={isEditable ?'Name of ID Proof (If any other)':"Input Disabled"} editable={true}/>
        </View>
      </View>
      <View style={styles.fieldTwo}>
        <CustomLabel text={'Upload Document (Front)'} />
        {/* <CustomUpload onPress={() => addfrontPhoto()}/> */}
        <View style={styles.cont}>
          <Image source={{ uri: imagefront }} style={styles.imgCont} />
          {imagefront ? (<TouchableOpacity style={styles.delBtnCont} onPress={() => setImagefront(null)}>
            <Image style={styles.delBtn} source={require('../../../screens/assets/cross.png')} />
          </TouchableOpacity>) : (<TouchableOpacity onPress={() => openOptionForFront()}>
            <Text style={styles.addbtn} >+</Text>
          </TouchableOpacity>)}
        </View>
      </View>
      <View style={styles.fieldTwo}>
        <CustomLabel text={'Upload Document (Back)'} />
        {/* <CustomUpload onPress={() => addBackPhoto()}/> */}
        <View style={styles.cont}>
          <Image source={{ uri: imageback }} style={styles.imgCont} />
          {imageback ? (<TouchableOpacity style={styles.delBtnCont} onPress={() => setImageback(null)}>
            <Image style={styles.delBtn} source={require('../../../screens/assets/cross.png')} />
          </TouchableOpacity>) : (<TouchableOpacity onPress={() => openOptionForBack()}>
            <Text style={styles.addbtn} >+</Text>
          </TouchableOpacity>)}
        </View>
      </View>
      <View style={styles.bottom}>
        <CustomHeading text={"This info won’t be shared with other Eatmates users"} type='SECONDARY' />
        <Custombutton text={'Next'} onPress={() => nextBtnPressed()} />
      </View>
      <Modal
        visible={showoption}
        onRequestClose={
          () => setShowoption(false)
        }
        transparent
      >
        <View style={styles.optContView}>
          <View style={styles.optCont}>
            <View style={styles.optContTitle}>
              <Text style={styles.optContTitleText} >Select Option</Text>
            </View>

            <TouchableOpacity onPress={() => openCameraFront()}>
              <Text style={styles.textColor}> Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openGalleryFront()} >
              <Text style={styles.textColor}> Gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setShowoption(false)} >
              <Text style={styles.textColor}> Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        visible={showoptiontwo}
        onRequestClose={
          () => setShowoptiontwo(false)
        }
        transparent
      >
        <View style={styles.optContView}>
          <View style={styles.optCont}>
            <View style={styles.optContTitle}>
              <Text style={styles.optContTitleText} >Select Option</Text>
            </View>
            <TouchableOpacity onPress={() => openCameraBack()}>
              <Text style={styles.textColor}> Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openGalleryBack()} >
              <Text style={styles.textColor}> Gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setShowoptiontwo(false)} >
              <Text style={styles.textColor}> Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 25
  },
  heading: {
    marginVertical: 32
  },
  field: {
    marginVertical: 5,
    flex: 0.7
  },
  fieldTwo: {
    marginVertical: 5,
    flex: 1

  },
  bottom: {
    marginTop: 65,
    paddingBottom: 50
  },
  cont: {
    backgroundColor: '#f6f6f6',
    borderRadius: 10,
    elevation: 0.5,
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 200
  },
  delBtnCont: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 50,
    left: 140,
    top: 70
  },
  delBtn: {
    fontSize: 20,
    position: 'absolute',
    color: "#187498",
    height: 22,
    width: 22,
    margin: 3.5
  },
  addbtn: {
    fontWeight: '700',
    color: '#828282',
    fontSize: 33,
    position: 'absolute',
    bottom: -20
  },
  imgCont: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    borderRadius: 10
  },
  optContView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  optCont: {
    width: 230,
    height: 160,
    borderRadius: 25,
    backgroundColor: "#fff",
    alignItems: 'center',
    elevation: 1,
  },
  optContTitle: {
    backgroundColor: "#187498",
    width: '100%',
    padding: 12,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: 'center',
  },
  optContTitleText: {
    color: "#fff",
    fontWeight: '600'

  },
  textColor: {
    fontWeight: '600',
    color: "#187498",
    paddingTop: 10,
    letterSpacing: 0.75,
  },
  raw: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  radioBox: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#187498",
    borderRadius: 999,
    width: 18,
    height: 18
  },
  radioBtn: {
    margin: 2,
    height: 16,
    width: 16,
    backgroundColor: "#187498",
    borderWidth: 1,
    borderColor: "#187498",
    borderRadius: 999,
    overflow: "hidden"
  }
})

export default Uploadid