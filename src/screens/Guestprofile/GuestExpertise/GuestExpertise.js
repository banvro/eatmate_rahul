import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react'

const GuestExpertise = ({navigation}) => {
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
                <Text style={styles.txtConst}>Select your Passion</Text>
            </View>
            <View>
                <Image source={require('../assets/wine.png')} style={styles.imageConst} />
            </View>
            <View>
                <Text style={styles.text1}>
                    Select the passion that you'd like to share and let your host know more about yourself. Choose a minimum of 3
                </Text>
            </View>
            <View style={{ padding: 20 }}>
        <View style={styles.lastsConst}>
            <Text style={styles.vgConst}>German hip hop</Text>
            <Pressable onPress={() => setRado({ rado1: true, rado2: false, rado3: false, rado4: false, rado5: false, rado6: false })} style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.borderConst2}>
                    {rado.rado1 && <View style={styles.radoConst}>
                    </View>}
                </View>
            </Pressable>
        </View>
        <View style={styles.lastsConst}>
            <Text style={styles.vgConst}>90s kid</Text>
            <Pressable onPress={() => setRado({ rado1: false, rado2: true, rado3: false, rado4: false, rado5: false, rado6: false })} style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.borderConst2}>
                    {rado.rado2 && <View style={styles.radoConst}>
                    </View>}
                </View>
            </Pressable>
        </View>
        <View style={styles.lastsConst}>
            <Text style={styles.vgConst}>Self care</Text>
            <Pressable onPress={() => setRado({ rado1: false, rado2: false, rado3: true, rado4: false, rado5: false, rado6: false })} style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.borderConst2}>
                    {rado.rado3 && <View style={styles.radoConst}>
                    </View>}
                </View>
            </Pressable>
        </View>
        <View style={styles.lastsConst}>
            <Text style={styles.vgConst}>Hot Yoga</Text>
            <Pressable onPress={() => setRado({ rado1: false, rado2: false, rado3: false, rado4: true, rado5: false, rado6: false })} style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.borderConst2}>
                    {rado.rado4 && <View style={styles.radoConst}>
                    </View>}
                </View>
            </Pressable>
        </View>
        <View style={styles.lastsConst}>
            <Text style={styles.vgConst}>Writting</Text>
            <Pressable onPress={() => setRado({ rado1: false, rado2: false, rado3: false, rado4: false, rado5: true, rado6: false })} style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.borderConst2}>
                    {rado.rado5 && <View style={styles.radoConst}>
                    </View>}
                </View>
            </Pressable>
        </View>
        <View style={styles.lastsConst}>
            <Text style={styles.vgConst}>Medition</Text>
            <Pressable onPress={() => setRado({ rado1: false, rado2: false, rado3: false, rado4: false, rado5: false, rado6: true })} style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.borderConst2}>
                    {rado.rado6 && <View style={styles.radoConst}>
                    </View>}
                </View>
            </Pressable>
        </View>
    </View>
    <View style={styles.finalConst}>
        <TouchableOpacity>
            <Text style={{ fontSize: 15, fontWeight: '400', marginTop: 8 }}>
                Back
            </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ManageYourExpGuest')}>
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

export default GuestExpertise

const styles = StyleSheet.create({
    mainConst: {
        flex: 1,
        padding: 20,
        backgroundColor:'#FFF'
    },
    txtConst: {
        color: '#187498',
        fontSize: 40,
        fontWeight: '700',
        margin:10
    },
    image: {
        height: 35,
        width: 35
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
        
      }
        
})