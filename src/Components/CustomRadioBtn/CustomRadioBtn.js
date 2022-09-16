import { View, Text , TouchableOpacity} from 'react-native'
import React,{useState} from 'react'

const CustomRadioBtn = ({text}) => {

  const [radioShow , setRadioShow] =useState(true)

  return (
<View style={{flexDirection:'row'}}>
      <TouchableOpacity onPress={() => setRadioShow(!radioShow)}>
      { radioShow ?  (
        <View style={{borderWidth:1, borderColor:'#808080', borderRadius:50, height:22, width:22}}/>
      ) : (
        <View style={{borderWidth:1, borderColor:'#808080', borderRadius:50, height:22, width:22, justifyContent:'center', alignItems:'center'}}>
        <View style={{backgroundColor:'#438eff',height:18, width:18,borderRadius:50,}}></View>    
        </View>
      )
        }
      </TouchableOpacity><Text style={{marginLeft:4}}>{text}</Text>
      </View>
  )
}

export default CustomRadioBtn