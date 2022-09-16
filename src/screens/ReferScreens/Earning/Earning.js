import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

const Earning = ({navigation}) => {
    return (
        <ScrollView style={styles.mainConst}>
            <View style={styles.firstDiv}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/Back.png')} style={styles.imgCont} />
                </TouchableOpacity>
                <View style={styles.secDiv}>
                    <Text style={styles.fontConst}>Your earning</Text>
                </View>
            </View>
            <View style={styles.roundConst}> 
                    <View style={styles.refConst}>
                        <TouchableOpacity>
                            <Text style={styles.fontColor}>
                            $0
                            </Text>
                        </TouchableOpacity>
                        <Text style={styles.innerFont}>Paidout</Text>
                    </View>
            </View>
            <View style={{borderBottomWidth:1, width:330, justifyContent:'center'}}>
            </View>
            <View style={styles.roundConst}> 
                    <View style={styles.refConst}>
                        <TouchableOpacity>
                            <Text style={styles.fontColor}>
                            $76
                            </Text>
                        </TouchableOpacity>
                        <Text style={styles.innerFont}>Potential Earnings</Text>
                    </View>
            </View>




        </ScrollView>
    )
}

export default Earning

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
        marginVertical: 20
    },
    refConst: {
        marginHorizontal: 5
    },
    fontColor: {
        color: '#000',
        fontSize: 22,
        fontWeight: '700'
    },
    innerFont: {
        fontSize: 13,
        color: '#969696',
        fontWeight: '400'

    }
})