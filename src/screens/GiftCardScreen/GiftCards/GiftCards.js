import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'

const GiftCards = ({navigation}) => {
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
            <View style={styles.thirdDiv}>
                <Text style={styles.fontDesign}>
                    Let's redeem your Gift card
                </Text>
            </View>
            <View style={styles.backBorder}>
                <TouchableOpacity>
                    <Image source={require('../assets/Eatmateslogo.png')} style={styles.logoImage} />
                </TouchableOpacity>
            </View>
            <View style={styles.borConst}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Giftcard code"
                    placeholderTextColor="#969696"
                />
            </View>
            <View style={styles.buttPad}>
                <View style={styles.txtEnd}>
                    <Text style={{ color: '#969696' }}>
                        By redeeming you agrre to the
                    </Text>
                    <Text style={styles.txtColor}>
                        Eatmates Gift card terms
                    </Text>
                </View>
                <View style={styles.touchBorder}>
                    <TouchableOpacity>
                        <Text style={styles.touchTxt}>
                            Redeem
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

<View style={{marginVertical:50}}>

</View>


        </ScrollView>
    )
}

export default GiftCards

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
        fontWeight: '600'
    },
    thirdDiv: {
        marginVertical: 10,
        padding:10
    },
    fontDesign: {
        fontSize: 40,
        fontWeight: '600',
        color: '#187498'
    },
    logoImage: {
        height: 150,
        width: 150,
        marginVertical: 40

    },
    backBorder: {
        alignItems: 'center',
        backgroundColor: '#F6F6F6',
        height: 250,
        borderRadius: 20
    },
    borConst: {
        backgroundColor: '#F6F6F6',
        borderRadius: 15,
        marginVertical: 20,

    },
    input: {
        fontSize: 14,
        fontWeight: '600',
        padding: 10,
        marginLeft: 5,

    },
    txtEnd: {
        flexDirection: 'row',
        padding: 10,


    },
    txtColor: {
        color: '#969696',
        fontWeight: '600',
        marginHorizontal: 4
    },
    touchTxt: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: '500',
        fontSize: 18,
        padding: 10
    },
    touchBorder: {
        backgroundColor: '#187498',
        height: 40,
        borderRadius: 12,

    },
    buttPad: {

        marginVertical:50

    }

})