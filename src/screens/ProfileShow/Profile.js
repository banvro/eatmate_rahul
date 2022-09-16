import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import CustomProfileList from '../../Components/CustomProfileList';



const Profile = () => {
    return (

        <ScrollView >
            
            <Image source={require('../ProfileShow/assets/Rectangle.png')} resizeMode='cover' style={{ width: '100%', height: 250 }} />
            <View style={styles.mainCont}>
                <View>
                    <Text style={styles.textConts}>
                        Kalyan,37
                    </Text>
                    <Text style={styles.textContss}>
                        Joined in 2015
                    </Text>  
                </View>
                <View style={{marginTop:-40}}>
                <CustomProfileList type='TERTIARY' />
                </View>
                <View style={{margin:10}}>
                <View style={{ backgroundColor: '#ECECEC', padding: 10, borderRadius: 15, paddingHorizontal:10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ width: 220 }}>
                        <Text style={styles.textsConts}>
                            Identity verification
                        </Text>
                        <Text>Show others you're really you with </Text>
                        <Text>the identity verification badge</Text>
                    </View>
                    <View>
                        <Image source={require('../ProfileShow/assets/BrakeWarning.png')} style={{ height: 40, width: 40 }} />
                    </View>
                </View>
                </View>
                <View style={{marginTop:-50}}>
                <CustomProfileList type='TERTIARY' />
                </View>
                <View style={{ paddingVertical: 20 }}>
                    <Text style={styles.textCont}>Kalyan confirmed</Text>
                    <View style={styles.screenCont}>
                        <CustomProfileList source={require('../ProfileShow/assets/Verified.png')} text={'Email Address'} onPress={() => console.log('pressed')} />
                        <CustomProfileList source={require('../ProfileShow/assets/Verified.png')} text={'Phone Number'} />
                        <CustomProfileList source={require('../ProfileShow/assets/Add.png')} text={'Address'} />
                        <CustomProfileList source={require('../ProfileShow/assets/Add.png')} text={'Identity Verification'} />
                        <CustomProfileList source={require('../ProfileShow/assets/Add.png')} text={'Emergency Contact'} />
                        <CustomProfileList source={require('../ProfileShow/assets/Add.png')} text={'Payments and Payouts'} type='TERTIARY' />
                    </View>
                </View>
                <View style={{ paddingVertical: 10 }}>
                    <Text style={styles.textCont}>As Host</Text>
                    <View style={styles.screenCont}>
                        <CustomProfileList source={require('../ProfileShow/assets/Add.png')} text={'Manage your profile as host '} />
                        <CustomProfileList source={require('../ProfileShow/assets/Add.png')} text={'Manage your experience as host '} />
                        <CustomProfileList source={require('../ProfileShow/assets/Add.png')} text={'List your food'} type='TERTIARY' />
                    </View>
                </View>
                <View style={{ paddingVertical: 10 }}>
                    <Text style={styles.textCont}>As Guest</Text>
                    <View style={styles.screenCont}>
                        <CustomProfileList source={require('../ProfileShow/assets/Add.png')} text={'Manage your profile as guest '} />
                        <CustomProfileList source={require('../ProfileShow/assets/Add.png')} text={'Manage experience as guest'} type='TERTIARY' />
                    </View>
                </View>
                <View style={{ paddingVertical: 10 }}>
                    <Text style={styles.textCont}>History</Text>
                    <View style={styles.numConst}>
                        <View>
                      <Text style={{color:'#000',fontWeight:'500',fontSize:30,marginHorizontal:35}}>5</Text>
                     <TouchableOpacity><Text style={{color:'#000'}}>Parties Hosted</Text></TouchableOpacity>
                      </View>
                      <View>
                      <Text style={{color:'#000',fontWeight:'500',fontSize:30,marginHorizontal:35}}>3</Text>
                      <TouchableOpacity><Text style={{color:'#000'}}>Visit as Guest</Text></TouchableOpacity>
                        <View>
                    </View>    
                        </View>
                    </View>
                    <CustomProfileList type='TERTIARY' />
                </View>
                <View style={{ paddingVertical: 20 }}>
                    <View>
                        <Text style={styles.reviewCont}>3 Reviews</Text>
                    </View>
                    <View style={{backgroundColor:'#fff', borderRadius:15, elevation:5, padding:5,}}>
                    <View style={styles.elvConst}>
                        <View>
                            <Image source={require('../ProfileShow/assets/Ellipse12.png')} style={{ height: 60, width: 60 }} />
                        </View>
                        <View style={{ width: 220 , flexDirection:'row', justifyContent:'space-between'}}>
                            <View>
                            <Text style={styles.textsConts}>
                            Sonja
                            </Text>
                            <Text>July 2019 </Text>
                            </View>
                            <TouchableOpacity>
                                <Text style={styles.rvConst}>
                                    Guest
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <Text style={{ color:'#000', fontWeight:'500',fontSize:12}}>
                            They are very nice and friendly guests.we had a good time and look forward for more parties like this.
                        </Text>
                       
                        
                      
                    </View>
                </View>
                </View>
                <View >
                    <View style={{backgroundColor:'#fff', borderRadius:15, elevation:5, padding:5,}}>
                    <View style={styles.elvConst}>
                        <View>
                            <Image source={require('../ProfileShow/assets/Ellipse13.png')} style={{ height: 60, width: 60 }} />
                        </View>
                        <View style={{ width: 220 , flexDirection:'row', justifyContent:'space-between'}}>
                            <View>
                            <Text style={styles.textsConts}>
                                Nony
                            </Text>
                            <Text>July 2019 </Text>
                            </View>
                            <TouchableOpacity>
                                <Text style={styles.rvConst}>
                                    Guest
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                    <Text style={{ color:'#000', fontWeight:'500',fontSize:12}}>
                            They are very nice and friendly guests.we had a good time and look forward for more parties like this.
                        </Text>
                    </View>
                </View>
                </View>





            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({


    mainCont: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems:'flex-end'
        padding: 25,


    },
    textCont: {
        fontSize: 26,
        color: '#000',
        fontWeight: '400',
        textDecorationLine: 'underline',
    },
    textConts: {
        fontSize: 40,
        color: '#000',
        fontWeight: '400',

    },
    textContss: {
        fontSize: 20,
        color: '#797979',
        fontWeight: '400',
    },
    textsConts: {
        fontSize: 20,
        color: '#000',
        fontWeight: '500',
    },
    textCont1: {
        color: '#000',
        // textAlign:'center',
        borderBottomColor: "#000",
        borderBottomWidth: 1,
        width: 80,
        fontWeight: '400',
        

    },
    screenCont: {
        paddingVertical: 15,

    },
    numConst: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingVertical: 10,

    },
    reviewCont: {
        fontSize: 26,
        color: '#000',
        fontWeight: '500',
    },
    elvConst: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius:15,
        paddingHorizontal:-52,
        flexDirection: 'row',
        justifyContent: 'space-between',
        //alignItems: 'center',
    },
    rvConst: {
        backgroundColor: '#187498',
        borderRadius: 8,
        width: 50,
        padding: 5,
        color: 'white',
    },




})

export default Profile

