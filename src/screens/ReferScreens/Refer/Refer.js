import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function Refer({navigation}) {
    return (
        <ScrollView style={styles.mainConst}>
            <View style={styles.firstDiv}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/Back.png')} style={styles.imgCont} />
                </TouchableOpacity >
                <View style={styles.secDiv}>
                    <Text style={styles.fontConst}>Your earning</Text>
                </View>
            </View>
            <View style={styles.roundConst}>
                <View style={{ flexDirection: 'row', }}>
                    <View style={styles.circle}>
                        <Text style={styles.numConst}>
                            1
                        </Text>
                    </View>
                    <View style={styles.refConst}>
                        <TouchableOpacity>
                        <Text style={styles.fontColor}>
                            Refer Friends
                        </Text>
                        </TouchableOpacity>
                        <Text style={styles.innerFont}>Send referrals to your friends</Text>
                    </View>
                </View>
                <View style={{marginVertical:25}}>
                <View style={{ flexDirection: 'row', }}>
                    <View style={styles.circle}>
                        <Text style={styles.numConst}>
                            2
                        </Text>
                    </View>
                    <View style={styles.refConst}>
                        <TouchableOpacity>
                        <Text style={styles.fontColor}>
                        Follow along
                        </Text>
                        </TouchableOpacity>
                        <Text style={styles.innerFont}>Follow your friend’s progres and send encouraging messages along the way</Text>
                    </View>
                </View>
                </View>
                <View style={{top:-10}}>
                <View style={{ flexDirection: 'row', }}>
                    <View style={styles.circle}>
                        <Text style={styles.numConst}>
                            3
                        </Text>
                    </View>
                    <View style={styles.refConst}>
                        <TouchableOpacity>
                        <Text style={styles.fontColor}>
                        Get paid
                        </Text>
                        </TouchableOpacity>
                        <Text style={styles.innerFont}>When your friend starts hosting, you’ll get paid after their first guest checks out</Text>
                    </View>
                </View>
                </View>
             
            </View>
            
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainConst: {
        padding: 20,
        flex: 1,
        backgroundColor: '#fff'
    },
    firstDiv: {
        flexDirection: 'row',
        marginTop:10,
    },
    imgCont: {
        height: 32,
        width: 32
    },
    secDiv: {
        margin: 5
    },
    fontConst: {
        fontSize: 15,
        fontWeight: '600'
    },
    roundConst: {
        padding: 10,
        marginVertical: 20
    },
    circle: {
        borderWidth: 1,
        borderRadius: 999,
        height: 42,
        width: 42,
        borderColor: '#808080'
    },
    numConst: {
        textAlign: 'center',
        margin: 5,
        fontSize: 20,
        fontWeight: '600',
        color: '#000000'
    },
    refConst:{
        marginHorizontal:20
    },
    fontColor:{
        color:'#000',
        fontSize:18,
        fontWeight:'600'
    },
    innerFont:{
        fontSize:13,
        color:'#969696',
        fontWeight:'400'

    }

})