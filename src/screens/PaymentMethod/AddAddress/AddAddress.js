import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, Pressable, TextInput, CustomHeading, SectionList } from 'react-native'
import  SelectList from 'react-native-dropdown-select-list';
import React, { useState} from 'react'
import Custombutton from '../../../Components/CustomButton/Custombutton'
const AddAddress = ({navigation}) => {
  const [radio, setRadio] = useState({
    radio1: false,
    radio2: false,
  });
  const [selected, setSelected] = React.useState("");
  
  const data = [
    {key:'1',value:'India'},
    {key:'2',value:'USA'},
    {key:'3',value:'CANADA'},
    {key:'4',value:'DUBAI'},
  ];


  return (
    <ScrollView style={styles.mainConst}>
      <View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../AddAddress/assets/Back.png')} style={{ height: 35, width: 35 }} />
        </TouchableOpacity>
      </View>
      <Text style={styles.txtConst}>Bank Transfer Setup</Text>
      <View style={[{ marginVertical: 15 }]}>
        <Text style={{ color: '#97999B' }}>Please provide your bank details.This will let you</Text>
        <Text style={{ color: '#97999B' }}>recieve funds to your bank account</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 8 }}>
        <Pressable onPress={() => setRadio({ radio1: true, radio2: false, radio3: false })} style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ justifyContent: "center", alignItems: "center", borderWidth: 1, borderColor: "#000", borderRadius: 999, width: 18, height: 18 }}>
            {radio.radio1 && <View style={{ margin: 1, height: 16, width: 16, backgroundColor: "#187498", borderWidth: 1, borderColor: "#187498", borderRadius: 999, overflow: "hidden" }}>
            </View>}
          </View>
          <Text style={{ marginLeft: 15, fontSize: 13, color: '#000', }}>Personal account</Text>
        </Pressable>
        <Pressable onPress={() => setRadio({ radio1: false, radio2: true, radio3: false })} style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ padding: 2, justifyContent: "center", alignItems: "center", borderWidth: 1, borderColor: "#000", borderRadius: 999, width: 18, height: 18 }}>
            {radio.radio2 && <View style={{ margin: 1, height: 16, width: 16, backgroundColor: "#187498", borderWidth: 1, borderColor: "#187498", borderRadius: 999, overflow: "hidden" }}>
            </View>}
          </View>
          <Text style={{ marginLeft: 15, fontSize: 13, color: '#000' }}>Company account</Text>
        </Pressable>
      </View>
      <SelectList 
     placeholder="Bank Country"
      onSelect={() => alert(selected)}
      setSelected={setSelected} 
      data={data}  
      search={false} 
      boxStyles={{borderRadius:15,borderColor:'#fff', backgroundColor:'#F6F6F6'}}
    />
    <View style={{marginVertical:5,}}>
    <SelectList 
     placeholder="Currency"
      onSelect={() => alert(selected)}
      setSelected={setSelected} 
      data={data}  
      search={false} 
      boxStyles={{borderRadius:15,borderColor:'#fff', backgroundColor:'#F6F6F6'}}
    />
    </View>
    <View style={{marginVertical:5,}}>
    <SelectList 
     placeholder="Bank Name"
      onSelect={() => alert(selected)}
      setSelected={setSelected} 
      data={data}  
      search={false} 
      boxStyles={{borderRadius:15,borderColor:'#fff', backgroundColor:'#F6F6F6'}}
    />
    </View>
    <View style={styles.borConst}>
    <TextInput
    style={styles.input}
    placeholder="Account Holder Name"
    placeholderTextColor="#969696"
  /> 
   </View>
   <View style={styles.borConst}>
    <TextInput
    style={styles.input}
    placeholder="Account Number"
    placeholderTextColor="#969696"
  /> 
   </View>
   <View style={styles.borConst}>
    <TextInput
    style={styles.input}
    placeholder="IFSC Code"
    placeholderTextColor="#969696"
  /> 
   </View>
   <View style={styles.borConst}>
    <TextInput
    style={styles.input}
    placeholder="PAN"
    placeholderTextColor="#969696"
  /> 
   </View>
   <SelectList 
     placeholder="Account Type"
      onSelect={() => alert(selected)}
      setSelected={setSelected} 
      data={data}  
      search={false} 
      boxStyles={{borderRadius:15,borderColor:'#fff', backgroundColor:'#F6F6F6'}}
    />
            <View style={{  paddingBottom:50, flex:0.5}}>
                <Custombutton style={{ fontWeight: 100, padding: 40,fontSize:40 }} 
                text="Submit">
                </Custombutton>
            </View>

    </ScrollView>
  )
}

export default AddAddress

const styles = StyleSheet.create({
  mainConst: {
    flex: 1,
    padding: 20,
    backgroundColor:'#fff'
  },
  txtConst: {
    color: '#187498',
    fontSize: 40,
    fontWeight: '700'
  },
  borConst:{
    backgroundColor:'#F6F6F6',
    borderRadius:15,
    marginVertical:5,
  },
  input:{
  marginLeft:15,
  fontSize:14
  }
  
})