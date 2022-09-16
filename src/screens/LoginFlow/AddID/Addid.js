import { View, SafeAreaView, StyleSheet, Image, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import CustomHeading from '../../../Components/CustomHeading'
import Customsmallbtn from '../../../Components/CustomSmallButton/Customsmallbtn'

const Addid = ({ route, navigation }) => {
    const {
        language, currency, firstname, lastname, usrId, mydate, houseno, street, city, state, zipcode, Country, value
    } = route.params
    console.warn(value)



    return (
        <SafeAreaView style={styles.root}>
            <View style={{ backgroundColor: "#fff", marginTop: 25 }}>
                    <TouchableOpacity onPress={() => navigation.goBack(null)}>
                        <Image source={require('../../assets/Left.png')}
                            style={{ height: 25, width: 25, borderWidth: 1,marginLeft:15, borderColor: "#808080", borderRadius: 50, }}
                        />
                    </TouchableOpacity>
                </View>
            <View style={styles.topCont}>
                <Text style={styles.topContText}>How does this works?</Text>
            </View>
            <View style={styles.heading}>
                <CustomHeading text={"Let’s add your ID"} />
            </View>
            <View>
                <CustomHeading text={"This helps us check that you are really you. Identity verification is one of the ways we keep Eatmates secure for you."} type='TERTIARY' />
            </View>
            <View style={styles.imgView}>
                <Image style={styles.imgCont} source={require('../../assets/addid.png')} />
            </View>
            <View style={styles.bottomCont}>
                <View style={styles.heading}>
                    <CustomHeading text={"This info won’t be shared with other Eatmates users"} type='SECONDARY' />
                </View>
                <View style={styles.bottomBTn}>
                    <Customsmallbtn text={'Later'} type='SECONDARY' onPress={() => navigation.navigate('AddSelfie', {
                        language, currency, firstname, lastname, usrId, mydate, houseno, street, city, state, zipcode, Country, value
                    })} />
                    <Customsmallbtn text={'Next'} onPress={() => navigation.navigate('UploadID', {
                        language, currency, firstname, lastname, usrId, mydate, houseno, street, city, state, zipcode, Country, value
                    })} />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 30
    },
    topCont: {
        alignItems: 'flex-end',
        marginTop: 10
    },
    topContText: {
        fontWeight: '600',
        color: '#fff',
        paddingHorizontal: 15,
        paddingVertical: 7,
        backgroundColor: '#187498',
        borderRadius: 25,
        textAlign: 'right',
        maxWidth: 186
    },
    heading: {
        marginTop: 25,
        marginBottom: 25
    },
    imgView: {
        marginTop: 35,
        backgroundColor: '#f7f7f7',
        justifyContent: 'center',
        height: 220,
        alignItems: 'center',
        borderRadius: 10,
        elevation: 0.5,
    },
    imgCont: {
        width: 180,
        height: 180,
    },
    bottomBTn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    bottomCont: {
        justifyContent: 'space-between',
        // alignItems:'center',
        flex: 1
    }

}
)


export default Addid