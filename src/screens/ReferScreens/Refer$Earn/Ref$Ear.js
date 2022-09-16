import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const RefEar = ({navigation}) => {
    return (
        <ScrollView style={styles.mainConst}>
            <View style={styles.firstDiv}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/Back.png')} style={styles.imgCont} />
                </TouchableOpacity>
                <View style={styles.secDiv}>
                    <Text style={styles.fontConst}>Refer & Earn</Text>
                </View>
            </View>
            <View>
                <Image source={require('../assets/Refund-pana.png')} style={styles.imgCont2} />
            </View>
            <View>
                <Text style={styles.heading}>
                    Earn for every new Host you refer
                </Text>
                <Text style={styles.parConst}>
                    Invite someone that can host their food and earn when they list their food and complete their first hosting event. Help grow Eatmates community of social eating.
                </Text>
            </View>


            <View style={styles.roundConst}>
                <View style={styles.refConst}>
                <Text style={styles.innerFont}>Your earnings</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Earning')}>
                    <Image source={require('../assets/Left.png')} style={styles.imgCont} />
                </TouchableOpacity>
                </View>
            </View>
            <View style={{ borderBottomWidth: 1, width: 360, alignItems:'center'}}>
            </View>
            <View style={styles.roundConst}>
                <View style={styles.refConst}>
                <Text style={styles.innerFont}>How referrals work</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Refer')}>
                    <Image source={require('../assets/Left.png')} style={styles.imgCont} />
                </TouchableOpacity>
                </View>
            </View>
            <View style={styles.lastConst}>

                <View>
                    <TouchableOpacity>
                    <Text style={styles.linkStyle}>
                    Copy your link
                    </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                <View style={styles.borConst}>
                   
                    <Text style={styles.linkStyle2}>
                    Share
                    </Text>
                
                </View>
                </TouchableOpacity>

            </View>
          


        </ScrollView>
    )
}

export default RefEar

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
    imgCont2: {
        height: 400,
        width: 350
    },
    secDiv: {
        margin: 5
    },
    fontConst: {
        fontSize: 15,
        fontWeight: '600',
        color: '#000'
    },
    imgCont2: {
        height: 350,
        width: 350,
    },
    heading: {
        color: '#000',
        fontSize: 23,
        fontWeight: '600',
        textAlign: 'center'
    },
    parConst: {
        textAlign: 'justify',
        fontSize: 14,
        padding: 15
    },
    refConst:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    innerFont:{
        color:'#000',
        fontWeight:'400',
        fontSize:18
    },
    roundConst:{
        padding:5
    },
    linkStyle:{
        color:'#187498',
        fontWeight:'500',
        margin:5
    },
    lastConst:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
        marginVertical:90,
    },
    linkStyle2:{
        color:'#fff',
        fontWeight:'500',
        margin:10,
        textAlign:'center'
    },
    borConst:{
        backgroundColor:'#187498',
        height:40,
        width:90,
        borderRadius:12
    }
})

