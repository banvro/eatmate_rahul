import { View, Text, StyleSheet, Image, Pressable, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'

import { CustomInput } from '../Components/CustomInput';

import Custombutton from '../Components/CustomButton/Custombutton';
import Customsmallbtn from '../Components/CustomSmallButton/Customsmallbtn';
import CustomHeading from '../Components/CustomHeading';
import Customlabel from '../Components/CustomLabel/Customlabel';

import ImagePicker from 'react-native-image-crop-picker';




const Checking = () => {

  const [username, setUsername] = useState('');
  const [image, setImage] = useState(null);
  const [showoption, setShowoption] = useState(false)
  const [radioShow , setRadioShow] =useState(true)

  const openOption = () => {
    setShowoption(true)

  }

  const openCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: false,

    }).then(image => {
      console.log(image);
      setShowoption(false)
      setImage(image.path)

    });

  }
  const openGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      console.log(image);
      setShowoption(false)
      setImage(image.path)
    });
  }

  return (
    <View style={{ padding: 20, backgroundColor: '#fff' }}>
      <CustomInput placeholder='username' value={username} setValue={setUsername} />
      <Custombutton text='Continue' />
      <Custombutton text='Forget_Password' type='TERTIARY' />
      <Customsmallbtn text='Next' />
      <Customsmallbtn text='Next' type='TERTIARY' />
      <CustomHeading text='Next NextNextNextNextNextNext' />
      <CustomHeading text='NextNextNextNextNextNextNext' type='TERTIARY' />
      <Customlabel text='Name' />
      <View style={styles.cont}>
        <Image source={{ uri: image }} style={styles.imgCont} />
        { image?  (<TouchableOpacity style={styles.delBtnCont} onPress={() => setImage('')}>
          <Image style={styles.delBtn} source={require('../screens/assets/cross.png')} />
        </TouchableOpacity>) : (<TouchableOpacity onPress={() => openOption()}>
          <Text style={styles.addbtn} >+</Text>
        </TouchableOpacity>)}
      </View>
      <View>

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
          <TouchableOpacity onPress={() => openCamera()}>
            <Text style={styles.textColor}> Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openGallery()} >
            <Text style={styles.textColor}> Gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setShowoption(false)} >
            <Text style={styles.textColor}> Cancel</Text>
          </TouchableOpacity>
        </View>
        </View>
      </Modal>
      <View style={{flexDirection:'row'}}>
      <TouchableOpacity onPress={() => setRadioShow(!radioShow)}>
      { radioShow ?  (
     
        <View style={{borderWidth:1, borderColor:'#808080', borderRadius:50, height:24, width:24}}/>
    
      

      ) : (
  
        <View style={{borderWidth:1, borderColor:'#808080', borderRadius:50, height:24, width:24, justifyContent:'center', alignItems:'center'}}>
        <View style={{backgroundColor:'#438eff',height:20, width:20,borderRadius:50,}}></View>
      
        </View>
        
  
      )

        }
      </TouchableOpacity><Text style={{marginLeft:4}}>Hello</Text>

      </View>
    </View>
   
  )
}
const styles = StyleSheet.create({
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
  optContView:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    
  },
  optCont:{
    width:230,
    height:160,
    borderRadius:25,
    backgroundColor:"#fff",
    alignItems:'center',
    elevation:1,
  },
  optContTitle:{
    backgroundColor:"#187498",
    width:'100%',
    padding:12,
    borderTopLeftRadius:25,
    borderTopRightRadius:25,
    alignItems:'center',
  },
  optContTitleText:{
    color:"#fff",
    fontWeight:'600'

  },
  textColor:{
    fontWeight:'600',
    color:"#187498",
    paddingTop:10,
    letterSpacing:0.75,
  },
  
})

export default Checking