import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Modal, Button} from 'react-native'
import React, {useState} from 'react'
// import Navigation from '../../Navigation2/Navigation2'
// import Navigation2 from '../../Navigation2/Navigation2'
// import CustomCardlist from '../../../Components/CustomCardList/CustomCardList/CustomCardlist'
import CustomCardlist from '../../../Components/CustomCardList/CustomCardlist'




const SettingProfile = ({navigation}) => {
    const [show, setShow] = useState(false);
    return (
        <ScrollView style={styles.mainCont}>
            <View style={{ alignItems: 'center' }}>
                <Image source={require('../assets/Ellipse10.png')} />
            </View>
            <View style={{alignItems:'center'}}>
                 <Text style={styles.textCont}> 
                    Kalyan,37
                </Text>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity  onPress={() => navigation.navigate('Profile')}>
                        <Text style={styles.textCont1}>
                            Show Profile
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View  style={{paddingVertical:25}}>
                <Text style={styles.textCont}>Account Setting</Text>
                <View style={styles.screenCont}>
                    <CustomCardlist source={require('../assets/MaleUser.png')} text={'Personal information'} type='TERTIARY' onPress={() => navigation.navigate('ShowProfile')} />
                    <CustomCardlist source={require('../assets/Stratching.png')} text={'Lifestyle'} onPress={() => navigation.navigate('Notification')} type='TERTIARY' />
                    <CustomCardlist source={require('../assets/MoneyBagRupee.png')} text={'Payment and payouts'} onPress={() => navigation.navigate('PaymentPayout')}type='TERTIARY' />
                    <CustomCardlist source={require('../assets/Translation.png')} text={'Language and currency'} type='TERTIARY' />
                    <CustomCardlist source={require('../assets/Doorbell.png')} text={'Notifications'} type='TERTIARY' onPress={() => navigation.navigate('Notification')}  />
                    <CustomCardlist source={require('../assets/Private.png')} text={'Privacy and sharing'} onPress={() => navigation.navigate('PrivacyScreen')} />
                </View>
            </View>
            <View >
                <Text style={styles.textCont}>Host Setting</Text>
                <View style={styles.screenCont}>
                    <CustomCardlist source={require('../assets/Cook.png')} text={'Manage Host Profile'} onPress={() => navigation.navigate('HostProfile')} type='TERTIARY' />
                    <CustomCardlist source={require('../assets/WindshieldDefroster.png')} text={'Manage Hosting Experiences'}  onPress={() => navigation.navigate('ManageyourExperience')}type='TERTIARY' />
                    <CustomCardlist source={require('../assets/Dinner.png')} text={'List your Food'} onPress={() => navigation.navigate('YourFoodListing')} type='TERTIARY' />
                    <CustomCardlist source={require('../assets/Cook.png')} text={'Recieve hosting Requests'} onPress={() => navigation.navigate('Recievehosting')} type='TERTIARY' />
                    <View>
                    <CustomCardlist source={require('../assets/TakeAwayFood.png')} text={'Order takeaway boxes'} type='TERTIARY' onPress={() => setShow(!show)}/>
                    <Modal 
                      transparent={true}
                      visible={show}
                      >
                             <View style={{flex:1,backgroundColor:'#000000aa'}}>
                      <View style={{backgroundColor:'#ffff',margin:30,flex:0.4,borderRadius:20,padding:30, }}>
                          <Text style={{fontSize:18, fontWeight:'600', color:'#000', textAlign:'center'}}>Order takeaway food boxes @ Amazon</Text>
                          <Text>By clicking on the link, you would be directed to amazon marketplace, you can order your takeaway boxes directly on Amazon website. For any questions, please directly contact Amazon. Eatmates takes no responsibility for the items ordered at Amazon.</Text>
                         <View style={styles.orConst}>
                         <TouchableOpacity onPress={ () =>setShow(!show) } >
                            <Text style={styles.crText}>
                            Order your takeway box
                            </Text>
                         </TouchableOpacity>
                         </View>
                      </View>
                  </View>
                    </Modal>
                    </View>     
                    <CustomCardlist source={require('../assets/SleepyEyes.png')} text={'Preview your host profile'} onPress={() => navigation.navigate('ProfileHost')} />
                </View>
            </View>

            <View >
                <Text style={styles.textCont}>Guest Setting</Text>
                <View style={styles.screenCont}>
                    <CustomCardlist source={require('../assets/Verifiedaccount.png')} text={'Manage Guest Profile'}  onPress={() => navigation.navigate('GuestProfile')} type='TERTIARY' />
                    <CustomCardlist source={require('../assets/MoneyBagRupee.png')} text={'Manage eating Experiences'} type='TERTIARY'/>
                    <CustomCardlist source={require('../assets/FoodBar.png')} text={'Received eating requests'} onPress={() => navigation.navigate('EatingRequest')} type='TERTIARY' />
                    <CustomCardlist source={require('../assets/SleepyEyes.png')} text={'Preview your guest profile'} onPress={() => navigation.navigate('GProfile')}/>
                </View>
            </View>

            <View >
                <Text style={styles.textCont}>Referrals & Credits</Text>
                <View style={styles.screenCont}>
                    <CustomCardlist source={require('../assets/GiftCard.png')} text={'Gift Cards'} onPress={() => navigation.navigate('AddAddressGift')} type='TERTIARY' />
                    <CustomCardlist source={require('../assets/CashinHand.png')} text={'Refer and Earn'} onPress={() => navigation.navigate('RefEar')}/>
                </View>
            </View>
            <View >
                <Text style={styles.textCont}>Support</Text>
                <View style={styles.screenCont}>
                    <CustomCardlist source={require('../assets/MaleUser.png')} text={'How Eatmates works'} onPress={() => console.log('pressed')} type='TERTIARY' />
                    <CustomCardlist source={require('../assets/WhyQuest.png')} text={'Get Help'} type='TERTIARY'  onPress={() => navigation.navigate('GetHelp')}/>
                    <CustomCardlist source={require('../assets/Comments.png')} text={'Give us Feedback'}  onPress={() => navigation.navigate('GiveusfeedBack')}/>
                </View>
            </View>

            <View >
                <Text style={styles.textCont}>Legal</Text>
                <View style={styles.screenCont}>
                    <CustomCardlist source={require('../assets/TermsandConditions.png')} text={'Terms of Service'} onPress={() => console.log('pressed')} type='TERTIARY' />
                    <CustomCardlist source={require('../assets/Privacy.png')} text={'Privacy policy'} onPress={() => navigation.navigate('PrivacyScreen')} />
                </View>
            </View>

            <View style={{paddingBottom:150}}>
                <View style={styles.screenCont}>
                    <CustomCardlist  text={'Logout'} onPress={() => navigation.navigate('LoginScreen')} type='TERTIARY' />
                    <Text style={{padding:20, marginHorizontal:50}}>version 22.17 (203046)</Text>
                </View>
            </View>

        </ScrollView>
    )
}


const styles = StyleSheet.create({


    mainCont: {
        padding: 25,
        flex: 1,
        backgroundColor: '#fff',
        // alignItems:'flex-end'
        borderRadius: 20,
        

    },
    textCont: {
        fontSize: 26,
        color: '#000',
        fontWeight: '400',
    },
    textCont1: {
        color: '#000',
        // textAlign:'center',
        borderBottomColor: "#000",
        borderBottomWidth: 1,
        width: 80,
        fontWeight: '400',

    },
    screenCont:{
        borderRadius: 25,
        backgroundColor:'#f6f6f6', 
        paddingVertical: 15, 
        elevation: 0.25, 
        marginVertical: 8,
    },
    orConst:{
        backgroundColor:'#187498',
        height:50,
        width:'80%',
        alignSelf:'center',
        borderRadius:20, 
        marginVertical:20
    },
    crText:{
        color:'#fff',
        textAlign:'center',
        padding:15,

    }
  



})

export default SettingProfile