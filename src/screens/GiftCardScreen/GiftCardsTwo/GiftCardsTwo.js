import { StyleSheet, Text, View, ScrollView, Image, TextInput, TouchableOpacity, Pressable } from 'react-native'

import React, { useState } from 'react'

const GiftCardsTwo = ({navigation}) => {
    const [radio, setRadio] = useState({
        radio1: false,
        radio2: false,
        radio3: false,
        radio4: false,
        radio5: false,
        radio6: false
    });
    return (
        <ScrollView style={styles.mainConst}>
            <View style={styles.firstDiv}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/Back.png')} style={styles.imgCont} />
                </TouchableOpacity>
                <View style={styles.secDiv}>
                    <Text style={styles.fontConst}>GiftCards</Text>
                </View>
            </View>
            <View>
            <Image source={require('../assets/Group.png')} style={styles.imageConst} />
            </View>
            <View style={{marginVertical:20}}>
                <Text style={styles.cardsColr}>Eatmates Gift Cards</Text>
                <Text style={styles.textEasy}>Easy to give, Never expires</Text>
            </View>
            <View>
                <Text style={styles.fontDesign}>
                    Have a question?
                </Text>
                <Text style={styles.fontDesign}>
                    Read the FAQs
                </Text>
            </View>
            <View style={{marginVertical:20}}>
                <View style={styles.lastBor}>
                    <Text style={styles.cardsColr}>
                        Are gift cards physical or digital?
                    </Text>
                    <Text style={styles.digText}>
                        Gift cards bought on Eatmates are digital only. If anyone is selling you a physical card its fraud.
                    </Text>
                    <View style={styles.field}>
                        <View style={{ flexDirection: 'row' }}>
                            <Pressable onPress={() => setRadio({ radio1: true, radio2: false, radio3: false, radio4: false, radio5: false, radio6: false })} style={styles.raw}>
                                <View style={styles.radioBox}>
                                    {radio.radio1 && <View style={styles.radioBtn}>
                                    </View>}
                                </View>
                            </Pressable>
                            <Pressable onPress={() => setRadio({ radio1: false, radio2: true, radio3: false, radio4: false, radio5: false, radio6: false })} style={styles.raw}>
                                <View style={styles.radioBox}>
                                    {radio.radio2 && <View style={styles.radioBtn}>
                                    </View>}
                                </View>
                            </Pressable>
                            <Pressable onPress={() => setRadio({ radio1: false, radio2: false, radio3: true, radio4: false, radio5: false, radio6: false  })} style={styles.raw}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={styles.radioBox}>
                                        {radio.radio3 && <View style={styles.radioBtn}>
                                        </View>}
                                    </View>
                                </View>
                            </Pressable>
                            <Pressable onPress={() => setRadio({ radio1: false, radio2: false, radio3: false, radio4: true, radio5: false, radio6: false })} style={styles.raw}>
                                <View style={styles.radioBox}>
                                    {radio.radio4 && <View style={styles.radioBtn}>
                                    </View>}
                                </View>
                            </Pressable>
                            <Pressable onPress={() => setRadio({ radio1: false, radio2: false, radio3: false, radio4: false, radio5: true, radio6: false  })} style={styles.raw}>
                                <View style={styles.radioBox}>
                                    {radio.radio5 && <View style={styles.radioBtn}>
                                    </View>}
                                </View>
                            </Pressable>
                            <Pressable onPress={() => setRadio({ radio1: false, radio2: false, radio3: false, radio4: false, radio5: false, radio6: true })} style={styles.raw}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={styles.radioBox}>
                                        {radio.radio6 && <View style={styles.radioBtn}>
                                        </View>}
                                    </View>
                                </View>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.finalConst}>
                <TouchableOpacity>
                    <Text style={{ fontSize: 15, fontWeight: '600', marginTop: 8 , color:'#187498'}}>
                    Redeem
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('GiftCards')}>
                    <View style={styles.bnConst}>
                        <Text style={{ color: '#fff', fontSize: 15 }}>
                            Buy
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>

        </ScrollView>
    )
}

export default GiftCardsTwo

const styles = StyleSheet.create({
    mainConst: {
        padding: 20,
        flex: 1,
        backgroundColor: '#fff'
    },
    firstDiv: {
        flexDirection: 'row'
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
        fontWeight: '600',
        color: '#000'
    },
    imageConst: {
        height:300,
        width:300,
        alignItems:'center',
 

    },
    imageConst2: {
        width: 300,
        height: 250,
        top: -120,
    },
    cardsColr: {
        color: '#000',
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center',
    },
    textEasy: {
        textAlign: 'center',
        fontSize: 10,
        fontWeight: '500',
        color: '#969696'
    },
    fontDesign: {
        fontSize: 25,
        fontWeight: '600',
        color: '#187498'
    },
    digText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 14,
        fontWeight: '500',
        marginVertical:10
    },
    lastBor: {
        backgroundColor: '#F6F6F6',
        height: 160,
        padding: 20,
        borderRadius: 20
    },
    raw: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    radioBox: {
        justifyContent: 'space-evenly',
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#C4C4C4",
        borderRadius: 999,
        width: 12,
        height: 12
    },
    radioBtn: {
        margin: 2,
        height: 12,
        width: 12,
        backgroundColor: "#187498",
        borderWidth: 1,
        borderColor: "#C4C4C4",
        borderRadius: 999,
        overflow: "hidden"
    },
    field:{
        alignItems:'center',
        marginVertical:10
    },
    finalConst: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 50
    },
    bnConst: {
        backgroundColor: '#187498',
        width: 80,
        height: 35,
        borderRadius: 10,
        positionposition: 'absolute',
        justifyContent: 'center',
        alignItems: 'center'
    }



})