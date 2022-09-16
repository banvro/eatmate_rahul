import { StyleSheet, Text, View, ScrollView,TouchableOpacity,Image} from 'react-native'
import React, {useState} from 'react'
import CustomNotificationList from '../../Components/CustomNotificationList/CustomNotificationList'
import CustomButton from '../../Components/CustomSmallButton'

const Notification = ({navigation}) => {
  return (
    <ScrollView style={styles.mainCont}>
    <View style={{flexDirection:'row', alignContent:'center'}}>
    <View><TouchableOpacity onPress={() => navigation.goBack()}><Image source={require('../NotificationPage/assets/R.png')} style={{height:23,width:23,paddingVertical:15}}/></TouchableOpacity></View>
    <View><Text style={styles.textCont}>  Notifications</Text></View>
    </View>
    <View style={styles.touchConst}>
    
    <CustomButton text={'Offers & Updates'}/>
        <TouchableOpacity>
        <Text style={{color:'#000'}}>
            Account
        </Text>
        </TouchableOpacity>
    </View>
    <View>
    <Text style={styles.textCont0}>Hosting insights and rewards</Text>    
    </View>
    <View style={{marginVertical:-15, marginBottom:-30,}}>
        <Text>Learn about best hosting practices and get</Text>
        <Text>access to exclusive hosting perks</Text>
    </View>
    <View>
        <View style={styles.screenCont}>
            <View style={styles.cardsConst}>
            <View>
            <CustomNotificationList text={'Recognition and Achievement'}/>
            <Text>ON : Email, Push</Text>
            </View>
            <View>
             <TouchableOpacity onPress={() => navigation.navigate('Recognation')}>   
            <Image source={require('../NotificationPage/assets/Edit.png')}  style={styles.imgeConst}/>
            </TouchableOpacity>
            </View>
            </View>
            <View style={styles.cardsConst}>
            <View>
            <CustomNotificationList text={'Insights and Tips'}  onPress={() => console.log('pressed')}  />
            <Text>ON : Email, Push</Text>
            </View>
            <View>
            <Image source={require('../NotificationPage/assets/Edit.png')} style={styles.imgeConst}/>
            </View>
            </View>
            <View style={styles.cardsConst}>
            <View>
            <CustomNotificationList text={'Pricing Trends and Suggestion'}  onPress={() => console.log('pressed')}  />
            <Text>ON : Email, Push</Text>
            </View>
            <View>
            <Image source={require('../NotificationPage/assets/Edit.png')} style={styles.imgeConst}/>
            </View>
            </View>
            <View style={styles.cardsConst}>
            <View>
            <CustomNotificationList text={'Hosting perks'}  onPress={() => console.log('pressed')}  />
            <Text type='TERTIARY' >ON : Email, Push</Text>
            </View>
            <View>
            <Image source={require('../NotificationPage/assets/Edit.png')} style={styles.imgeConst}/>
            </View>
            </View>
            <CustomNotificationList text={''}  onPress={() => console.log('pressed')} type='TERTIARY' />
    </View> 
</View>
    <View>
    <Text style={styles.textCont0}>Hosting Updates</Text>    
    </View>
    <View >
        <Text>Get Updates about programmes. features,</Text>
        <Text>and regulations</Text>
    </View>
    <View>
    <View style={styles.cardsConst}>
            <View>
            <CustomNotificationList text={'News and Updates'}  onPress={() => console.log('pressed')} />
            <Text>ON : Email, Push</Text>
            </View>
            <View>
            <Image source={require('../NotificationPage/assets/Edit.png')} style={styles.imgeConst}/>
            </View>
            </View>
            <View style={styles.cardsConst}>
            <View>
            <CustomNotificationList text={'Local laws and Regulations'}  onPress={() => console.log('pressed')} />
            <Text>ON : Email, Push</Text>
            </View>
            <View>
            <Image source={require('../NotificationPage/assets/Edit.png')} style={styles.imgeConst}/>
            </View>
            </View>
            <CustomNotificationList text={''}  onPress={() => console.log('pressed')} type='TERTIARY' />
    </View>
    <View>
    <Text style={styles.textCont0}>Eating tips and Offers</Text>    
    </View>
    <View >
        <Text>Inspire your next eating experience with personalized</Text>
        <Text>recommendation and special Offers</Text>
    </View>
    <View>
    <View style={styles.cardsConst}>
            <View>
            <CustomNotificationList text={'Inspiration and Offers'}  onPress={() => console.log('pressed')} />
            <Text>ON : Email, Push</Text>
            </View>
            <View>
            <Image source={require('../NotificationPage/assets/Edit.png')} style={styles.imgeConst}/>
            </View>
            </View>
            <View style={styles.cardsConst}>
            <View>
            <CustomNotificationList text={'Trip planning'}  onPress={() => console.log('pressed')} />
            <Text>ON : Email, Push</Text>
            </View>
            <View>
            <Image source={require('../NotificationPage/assets/Edit.png')} style={styles.imgeConst}/>
            </View>
            </View>
            <CustomNotificationList text={''}  onPress={() => console.log('pressed')} type='TERTIARY' />
    </View>
    <View>
    <Text style={styles.textCont0}>EatMates updates</Text>    
    </View>
    <View >
        <Text>Stay upto date on the latest news from Eatmates,</Text>
        <Text>and let us know how we can improve</Text>
    </View>
    <View>
    <View style={styles.cardsConst}>
            <View>
            <CustomNotificationList text={'News and Programmes'}  onPress={() => console.log('pressed')} />
            <Text>ON : Email, Push</Text>
            </View>
            <View>
            <Image source={require('../NotificationPage/assets/Edit.png')} style={styles.imgeConst}/>
            </View>
            </View>
            <View style={styles.cardsConst}>
            <View>
            <CustomNotificationList text={'Feedback'}  onPress={() => console.log('pressed')} />
            <Text>ON : Email, Push</Text>
            </View>
            <View>
            <Image source={require('../NotificationPage/assets/Edit.png')} style={styles.imgeConst}/>
            </View>
            </View>
            <CustomNotificationList text={''}  onPress={() => console.log('pressed')} type='TERTIARY' />
    </View>
    <View>
    <Text style={styles.textCont0}>Unsubscribes from all Offers and updates</Text>    
    </View>
    <View >
        <Text>You will continue to get notification about</Text>
        <Text>your account activity</Text>
    </View>
    <View>
        <View style={{paddingBottom:50}}>
    <View style={styles.cardsConst}>
            <View>
            <CustomNotificationList text={'All offers and updates'}  onPress={() => console.log('pressed')} />
            <Text>ON : Email, Push</Text>
            </View>
            <View>
            <Image source={require('../NotificationPage/assets/Edit.png')} style={styles.imgeConst}/>
            </View>
            </View>
    </View>
    </View>
</ScrollView>
  )
}

export default Notification

const styles = StyleSheet.create({

    mainCont: {
        padding: 25,
        flex: 1,
        backgroundColor:'#fff',
        marginVertical:10
    },
    textCont: {
        fontSize: 20,
        color: '#000',
        fontWeight: '400',
    },
    touchConst: {
        flexDirection:'row', 
        justifyContent:'space-between', 
        alignItems:'center',
     paddingVertical:30,
       
    },
    textCont0: {
        fontSize: 25,
        color: '#000',
        fontWeight: '600',
        marginVertical:20,
    },
    imgeConst:{
        height:22,
        width:22,
    
    },
    cardsConst: {
        flexDirection:'row', 
        justifyContent:'space-between', 
        alignItems:'center',
        paddingVertical:10,
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
        paddingVertical:50, 
        marginVertical: 8,
     
    },
  
})