import { View, Text, SafeAreaView, Image, StyleSheet,Dimensions } from 'react-native'
import React from 'react'
import Custombutton from '../../../Components/CustomButton/Custombutton'

const Gettingstarted = ({navigation}) => {


    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.imgView}>
            <Image style={styles.imgCont} source={require('./images/eat.png')} />
            </View>
            <View style={styles.btn}>
            <Custombutton text={'Getting Started'} onPress={() => 
            navigation.navigate('LoginScreen')
            } />
           
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor:'#fff',
        padding:30,
        height: Dimensions.get('screen').width * 0.5,
     
    },
    imgView: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
     

    },
    imgCont: {
        width: 310,
        height: 310,
    },
    btn: {
        flex: 0.8
    }
})
export default Gettingstarted