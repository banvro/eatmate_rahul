import { View, Text, StyleSheet, Image, ScrollView, Alert, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import CustomHeading from '../../../Components/CustomHeading'
import Customsmallbtn from '../../../Components/CustomSmallButton/Customsmallbtn'
// import CustomUpload from '../../../Components/CustomUpload'
import ImagePicker from 'react-native-image-crop-picker';
import CustomBackBtn from '../../../Components/CustomBackBtn';

const Addselfie = ({ route, navigation }) => {

  const {
    language, currency, firstname, lastname, usrId, mydate, houseno, street, city, state, zipcode, Country,
    imagefront, imageback,dpa,selected, value, 
  } = route.params
  console.log("selfie",dpa)


  const [image, setImage] = useState(null)
  const [showoption, setShowoption] = useState(false)
  const [imagUri, setImagee] = useState({})


  const laterBtnPress = () => {
    navigation.navigate('EmergenCont', {
      language, currency, firstname, lastname, usrId, mydate, houseno, street, city, state, zipcode, Country, imagefront, imageback,dpa,selected,
      value, 
    })
  }
  const nextBtnPress = () => {
    if (image == null) {
      alert('Upload Selfie')
      return
    }



    // const path = imagUri.imagedata.path;
    const type = imagUri.imagedata.mime;
    // const bine= {data :imagUri.imagedata.data}
    const bine = imagUri.imagedata.data

    console.warn("from next buton", imagUri.imagedata.mime)



    //   axios.post('http://192.168.29.115:7878/selfie',bine, {
    //     headers: {
    //         Accept : 'application/json',

    //     }
    // })
    //   .then((response)=>{
    //     console.log(response)
    //   }).catch(e=>{
    //     console.log(e)
    //   })

    navigation.navigate('EmergenCont'
      , {
        language, currency, firstname, lastname, usrId, mydate, houseno, street, city, state, zipcode, Country, bine, type, imagefront,
        imageback,dpa,selected,value,
      }
    )
  }



  const openOption = () => {
    setShowoption(true)

  }

  const openCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 400,
      cropping: false,
      includeBase64: true
    }).then(imagedata => {
      // console.log("HE:LLO",imagedata);
      setShowoption(false)
      setImage(imagedata.path)
      setImagee({ imagedata })
      // console.log("Hi babes",image)

    });

  }
  const openGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 400,
      cropping: true,
      includeBase64: true
    }).then(imagedata => {
      // console.log("HE:LLO",imagedata);
      setShowoption(false)
      setImage(imagedata.path)
      setImagee({ imagedata })
      // console.log("Hi babes",image)

    }).catch((e) => {
      console.log(e);
    })
  }

  // console.log("Hi  object",imagUri.imagedata)

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
        <CustomHeading text={'Let’s add your'} />
        <CustomHeading text={'Selfie'} />
      </View>
      <View style={{ marginVertical: 55 }}>
        <View style={styles.imgView}>
          <Image source={require('../../../screens/assets/selfie.png')} style={styles.imgCont} />
        </View>
        <View style={styles.selfieView}>
          <View style={styles.cont}>
            <Image source={{ uri: image }} style={styles.imgCont} />
            {image ? (<TouchableOpacity style={styles.delBtnCont} onPress={() => setImage(null)}>
              <Image style={styles.delBtn} source={require('../../../screens/assets/cross.png')} />
            </TouchableOpacity>) : (<TouchableOpacity onPress={() => openOption()}>
              <Text style={styles.addbtn} >+</Text>
            </TouchableOpacity>)}
          </View>
        </View>
      </View>
      <View>
        <View style={styles.headingLower}>
          <CustomHeading text={"This info won’t be shared with other Eatmates users"} type='SECONDARY' />
        </View>
        <View style={styles.bottomBTn}>
          <Customsmallbtn text={'Later'} type='SECONDARY' onPress={() => laterBtnPress()} />
          <Customsmallbtn text={'Next'} onPress={() => nextBtnPress()} />
        </View>
      </View>
      <Modal
        visible={showoption}
        onRequestClose={() => setShowoption(false)}
        transparent
      >
        <View style={styles.optContView}>
          <View style={styles.optCont}>
            <View style={styles.optContTitle}>
              <Text style={styles.optContTitleText} >Select Option</Text>
            </View>
            <TouchableOpacity onPress={() => openCamera()}>
              <Text style={styles.textColor}> Camera</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={() => openGallery()} >
              <Text style={styles.textColor}> Gallery</Text>
            </TouchableOpacity> */}
            <TouchableOpacity onPress={() => setShowoption(false)} >
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
    backgroundColor: '#fff',
    padding: 30
  },
  heading: {
    marginVertical: 32,

  },
  imgView: {
    width: 175,
    height: 175,
    alignSelf: 'center',
    // marginVertical:10
  },
  imgCont: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bottomBTn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 50
  },
  headingLower: {
    paddingVertical: 15
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
    color: '#828282',
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

})

export default Addselfie