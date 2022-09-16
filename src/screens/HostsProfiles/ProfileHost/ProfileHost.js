import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const ProfileHost = ({navigation}) => {
  return (
    <ScrollView style={styles.mainConst}>
    <View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('../assets/Back.png')} style={styles.image} />
        </TouchableOpacity>
        <Text style={styles.txtConst}>Let's describe you as HOST</Text>
    </View>
    <View>
        <Image source={require('../assets/Prabh2.png')} style={styles.imageConst} />
    </View>

<View style={styles.borConst}>
<Text>
  Future host would love to know more about you! What kind of eating preferences you have? how do you like to socialize with people over dinning? Tell us everything!
</Text>
</View>

<View style={styles.finalConst}>
<TouchableOpacity>
    <Text style={{ fontSize: 15, fontWeight: '400', marginTop: 8 }}>
        Back
    </Text>
</TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate('HostList')}>
    <View style={styles.bnConst}>
        <Text style={{ color: '#fff', fontSize: 15 }}>
            Next
        </Text>
    </View>
</TouchableOpacity>
</View>

</ScrollView>
  )
}

export default ProfileHost

const styles = StyleSheet.create({
    mainConst: {
        flex: 1,
        padding: 20,
        backgroundColor:'#fff'
    },
    txtConst: {
        color: '#187498',
        fontSize: 40,
        fontWeight: '700',
        margin:10
    },
    image: {
        height: 35,
        width: 35,
        marginTop:8,
    },
    imageConst: {
        width: 350,
        height: 350,
        borderRadius:20
    },
    finalConst:{
        padding:10,
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:40
      },
      bnConst:{
        backgroundColor:'#187498',
        width:80,
        height:40,
        borderRadius:10,
        positionposition: 'absolute', 
        justifyContent: 'center', 
        alignItems: 'center'
        
      },
      borConst:{
        backgroundColor:'#ECECEC',
        borderRadius:15,
        marginVertical:20,
        height:200,
        padding:10,
        color:'#999999',
        fontSize:18,
        fontWeight:'600'
      },
})