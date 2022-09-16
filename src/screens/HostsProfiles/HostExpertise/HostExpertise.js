import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Pressable} from 'react-native'
import React, {useState} from 'react'

const HostExpertise = ({navigation}) => {
    const [rado, setRado] = useState({
        rado1: false,
        rado2: false,
        rado3: false,
        rado4: false,
        rado5: false,
        rado6: false
    });
  return (
    <ScrollView style={styles.mainConst}>
    <View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('../assets/Back.png')} style={styles.image} />
        </TouchableOpacity>
        <Text style={styles.txtConst}>Select your Cooking Style</Text>
    </View>
    <View>
        <Image source={require('../assets/prabh.png')} style={styles.imageConst} />
    </View>
    <View>
        <Text style={styles.text1}>
            Select style of cooking that you'd like to share and let your guest know more about yourself. Choose a minimum of 3
        </Text>
    </View>
    <View style={{ padding: 20, }}>
<View style={styles.lastsConst}>
    <Text style={styles.vgConst}>Baking</Text>
    <Pressable onPress={() => setRado({ rado1: true, rado2: false, rado3: false, rado4: false, rado5: false, rado6: false })} style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={styles.borderConst2}>
            {rado.rado1 && <View style={styles.radoConst}>
            </View>}
        </View>
    </Pressable>
</View>
<View style={styles.lastsConst}>
    <Text style={styles.vgConst}>Frying</Text>
    <Pressable onPress={() => setRado({ rado1: false, rado2: true, rado3: false, rado4: false, rado5: false, rado6: false })} style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={styles.borderConst2}>
            {rado.rado2 && <View style={styles.radoConst}>
            </View>}
        </View>
    </Pressable>
</View>
<View style={styles.lastsConst}>
    <Text style={styles.vgConst}>Roasting</Text>
    <Pressable onPress={() => setRado({ rado1: false, rado2: false, rado3: true, rado4: false, rado5: false, rado6: false })} style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={styles.borderConst2}>
            {rado.rado3 && <View style={styles.radoConst}>
            </View>}
        </View>
    </Pressable>
</View>
<View style={styles.lastsConst}>
    <Text style={styles.vgConst}>Steaming</Text>
    <Pressable onPress={() => setRado({ rado1: false, rado2: false, rado3: false, rado4: true, rado5: false, rado6: false })} style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={styles.borderConst2}>
            {rado.rado4 && <View style={styles.radoConst}>
            </View>}
        </View>
    </Pressable>
</View>
<View style={styles.lastsConst}>
    <Text style={styles.vgConst}>Grilling</Text>
    <Pressable onPress={() => setRado({ rado1: false, rado2: false, rado3: false, rado4: false, rado5: true, rado6: false })} style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={styles.borderConst2}>
            {rado.rado5 && <View style={styles.radoConst}>
            </View>}
        </View>
    </Pressable>
</View>
<View style={styles.lastsConst}>
    <Text style={styles.vgConst}>Poaching</Text>
    <Pressable onPress={() => setRado({ rado1: false, rado2: false, rado3: false, rado4: false, rado5: false, rado6: true })} style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={styles.borderConst2}>
            {rado.rado6 && <View style={styles.radoConst}>
            </View>}
        </View>
    </Pressable>
</View>
<View style={{marginVertical:10}}>
<TouchableOpacity><Text style={styles.under}>
        Show more
    </Text>
    </TouchableOpacity>
    </View>
</View>

<View style={styles.finalConst}>
<TouchableOpacity>
    <Text style={{ fontSize: 15, fontWeight: '400', marginTop: 8 }}>
        Back
    </Text>
</TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate('ManageyourExperience')}>
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

export default HostExpertise

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
        marginTop:5,
    },
    imageConst: {
        width: 350,
        height: 350,
        borderRadius:20
    },
    text1:{
        textAlign:'center',
        color:'#969696',
        fontSize:16,
        fontWeight:'600',
        marginVertical:15
        
    },
    borderConst2: {
        padding: 2,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#000",
        width: 40,
        height: 30,
    },
    lastsConst: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5
    },
    vgConst: {
        color: '#000',
        fontSize: 20,
        fontWeight: '400'
    },
    radoConst: {
        margin: 2,
        height: 30,
        width: 40,
        backgroundColor: "#187498",
        borderWidth: 1,
        borderColor: "#187498",
        overflow: "hidden"
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
      under:{
        color:'#000',
        fontWeight:'500',
        fontSize:18,
        textDecorationLine:'underline'
     
      }
})