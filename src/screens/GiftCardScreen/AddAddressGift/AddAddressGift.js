import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'

const AddAddressGift = ({navigation}) => {

    const [radio, setRadio] = useState({
        radio1: false,
        radio2: false,
        radio3: false,
        radio4: false
    });
    return (
        <ScrollView style={styles.mainConst}>
            <View style={styles.firstDiv}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/Back.png')} style={styles.imgCont} />
                </TouchableOpacity>
                <View style={styles.secDiv}>
                    <Text style={styles.fontConst}>Buy gift card</Text>
                </View>
            </View>
            <View style={{ padding: 10 }}>
                <Text style={styles.fontColor}>
                    Choose an amount
                </Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: 10 }}>
                <View style={styles.ticketConst}>
                    <Pressable onPress={() => setRadio({ radio1: true, radio2: false, radio3: false, radio4: false })} style={styles.boxSty}>
                        <View style={styles.RadioBox} >
                            <Text style={{ color: '#000' }}>1$</Text>
                            {radio.radio1 && <View style={styles.radioBtn}>
                                <View style={{}}><Text style={styles.textStyle}>1$</Text></View>
                            </View>}
                        </View>
                    </Pressable>
                </View>
                <Pressable onPress={() => setRadio({ radio1: false, radio2: true, radio3: false, radio4: false })} style={styles.boxSty}>
                    <View style={styles.RadioBox}>
                        <Text style={{ color: '#000' }}>5$</Text>
                        {radio.radio2 && <View style={styles.radioBtn}>
                            <View style={{}}><Text style={styles.textStyle}>5$</Text></View>
                        </View>}
                    </View>
                </Pressable>
                <Pressable onPress={() => setRadio({ radio1: false, radio2: false, radio3: true, radio4: false })} style={styles.boxSty}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.RadioBox}>
                            <Text style={{ color: '#000' }}>50$</Text>
                            {radio.radio3 && <View style={styles.radioBtn}>
                                <View style={{}}><Text style={styles.textStyle}>50$</Text></View>
                            </View>}
                        </View>
                    </View>
                </Pressable>
                <Pressable onPress={() => setRadio({ radio1: false, radio2: false, radio3: false, radio4: true })} style={styles.boxSty}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.RadioBox}>
                            <Text style={{ color: '#000' }}>100$</Text>
                            {radio.radio4 && <View style={styles.radioBtn}>
                                <View style={{}}><Text style={styles.textStyle}>100$</Text></View>
                            </View>}
                        </View>
                    </View>
                </Pressable>
            </View>
            <View style={{ padding: 10 }}>
                <Text style={styles.fontColor}>
                    Who’s it for?
                </Text>
            </View>
            <View style={styles.borConst}>
                <TextInput
                    style={styles.input}
                    placeholder="Recipient name"
                    placeholderTextColor="#969696"
                />
            </View>
            <View style={styles.borConst}>
                <TextInput
                    style={styles.input}
                    placeholder="Recipient email"
                    placeholderTextColor="#969696"
                />
            </View>
            <View style={{ padding: 10 }}>
                <Text style={styles.fontColor}>
                    Add a custom message
                </Text>
            </View>
            <View style={styles.borConst2}>
                <TextInput
                    style={styles.input}
                    placeholder="Gift message"
                    placeholderTextColor="#969696"
                />
            </View>
            <View style={styles.dot}>
                <View style={styles.fontBack}>
                    <Text style={styles.font12}>
                        150
                    </Text>
                </View>
            </View>
            <View style={{ padding: 10 }}>
                <Text style={styles.fontColor}>
                    Who’s it from?
                </Text>
            </View>
            <View style={styles.borConst}>
                <TextInput
                    style={styles.input}
                    placeholder="Sender name"
                    placeholderTextColor="#969696"
                />
            </View>
            <View style={{ padding: 10 }}>
                <Text style={styles.fontColor}>
                    When should we send it?
                </Text>
            </View>
            <View style={styles.borConst}>
                <View>
                    <Text style={{ marginHorizontal: 8, marginTop: 5 }}>Send time</Text>
                    <TextInput
                        style={styles.input2}
                        placeholder="Now"
                        placeholderTextColor="#000"
                        fontWeight='700'
                    />
                </View>
            </View>
            <View >
                <Text style={styles.pgInput}>
                    Eatmates gift card are currently available only in India. Please keep in mind that gift cards must be bought and spent in the same currency. <Text style={{ color: '#187498' }}>Gift Card Terms</Text>
                </Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('GiftCardsTwo')}>
                <View style={styles.touchBorder}>
                    <Text style={styles.touchTxt}>
                        Next
                    </Text>
                </View>
            </TouchableOpacity>
            <View style={{ marginVertical: 50 }}>

            </View>
        </ScrollView>
    )
}

export default AddAddressGift

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
        fontWeight: '600',
        color: '#000'
    },
    fontColor: {
        color: '#000',
        fontSize: 15,
        fontWeight: '600'
    },
    RadioBox: {
        padding: 2,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#000",
        borderRadius: 999,
        width: 75,
        height: 35,
    },
    radioBtn: {
        height: 35,
        width: 75,
        backgroundColor: "#187498",
        borderWidth: 1,
        borderColor: "#187498",
        borderRadius: 999,
        overflow: "hidden",
        position: 'absolute'
    },
    boxSty: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textStyle: {
        color: '#fff',
        fontWeight: '500',
        margin: 6,
        textAlign: 'center'
    },
    borConst: {
        backgroundColor: '#F6F6F6',
        borderRadius: 15,
        marginVertical: 10,

    },
    input: {
        fontSize: 14,
        fontWeight: '600',
        padding: 10,
        marginLeft: 5,

    },
    borConst2: {
        backgroundColor: '#F6F6F6',
        borderRadius: 15,
        marginVertical: 10,
        height: 200
    },
    fontBack: {
        backgroundColor: '#187498',
        width: 20,
        height: 20,
        borderRadius: 999
    },
    font12: {
        color: '#fff',
        fontSize: 8,
        fontWeight: '600',
        textAlign: 'center',
        marginVertical: 3
    },
    dot: {
        alignItems: 'flex-end',
        top: -40,
        marginRight: 10
    },
    input2: {
        fontSize: 14,
        fontWeight: '600',
        marginHorizontal: 8,
        fontSize: 15,
        top: -10,

    },
    pgInput: {
        padding: 20,
        fontSize: 13,
        fontWeight: '600'
    },
    touchBorder: {
        backgroundColor: '#187498',
        height: 50,
        borderRadius: 12,

    },
    touchTxt: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: '500',
        fontSize: 18,
        padding: 10
    },




})